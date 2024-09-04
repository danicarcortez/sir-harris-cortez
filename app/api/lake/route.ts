import { NextResponse } from "next/server";

export interface LakeTravisWaterLevel {
  elevation: number;
  date_time: string;
}

type ApiBody = {
  currentLakeLevels: {
    lake_dam: "Travis (Mansfield)" | string;
    date_time: string;
    head_Elevation: number;
    site_name: "Travis" | string;
    site_number: number;
    monthElev: number;
    wkElev: number;
    sortOrd: number;
  }[];
};

export async function GET() {
  let body: ApiBody;

  try {
    const response = await fetch(
      "https://hydromet.lcra.org/api/RiverReport/GetRiverReportData/"
    );
    body = await response.json();
  } catch (e) {
    return NextResponse.json(
      { error: "Unable to retrieve data from API" },
      { status: 500 }
    );
  }

  if (!body) {
    return NextResponse.json(
      { error: "Unable to retrieve data from API" },
      { status: 500 }
    );
  }

  const lakeTravis = body.currentLakeLevels.find(
    (f) => f.site_name === "Travis"
  );

  if (!lakeTravis) {
    return NextResponse.json(
      { error: "Lake Travis not found in API" },
      { status: 404 }
    );
  }

  return NextResponse.json<LakeTravisWaterLevel>({
    elevation: lakeTravis.head_Elevation,
    date_time: lakeTravis.date_time,
  });
}
