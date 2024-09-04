import { NextResponse } from "next/server";

export interface LakeTravisWaterLevel {
  elevation: number;
  date_time: string;
  percent_full: string;
}

type ApiBody = {
  currentStorage: {
    reservoir_name: "Travis" | string;
    date_time: string;
    data_valid: number;
    average: number;
    difffromAvg: number;
    capacity: number;
    currentVol: number;
    percentFull: number;
    differencefromfull: number;
  }[];
};

/**
 * Cache in seconds
 */
export const revalidate = false;

export async function GET() {
  let body: ApiBody;

  try {
    const response = await fetch(
      "https://hydromet.lcra.org/api/RiverReport/GetRiverReportData",
      { cache: "no-cache" }
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

  const lakeTravis = body.currentStorage.find(
    (f) => f.reservoir_name === "Travis"
  );

  if (!lakeTravis) {
    return NextResponse.json(
      { error: "Lake Travis not found in API" },
      { status: 404 }
    );
  }

  const { data_valid, date_time, percentFull } = lakeTravis;

  const percent_full =
    typeof percentFull === "number" ? (percentFull * 100).toFixed(2) : "";

  return NextResponse.json<LakeTravisWaterLevel>({
    elevation: data_valid,
    date_time,
    percent_full,
  });
}
