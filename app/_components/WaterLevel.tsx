"use client";

import { useEffect, useState } from "react";
import { LakeTravisWaterLevel } from "../api/lake/route";

const useGetLakeLevel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<LakeTravisWaterLevel>();

  async function getLakeLevel() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/lake");
      const data: LakeTravisWaterLevel = await response.json();
      setData(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error("Unable to retrieve lake levels."));
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getLakeLevel();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};

export const WaterLevel = () => {
  const { data } = useGetLakeLevel();

  if (!data) {
    return null;
  }
  return (
    <p className="mb-2 text-gray-500 dark:text-gray-400">
      {data.elevation} ft - Last updated:{" "}
      {new Date(data.date_time).toTimeString()}
    </p>
  );
};
