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

  const { date_time, percent_full, elevation } = data;
  const date = new Date(date_time);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return (
    <p className="mb-2 text-gray-500 dark:text-gray-400">
      {elevation} ft ({percent_full}% Full) - Last updated: {dateString}{" "}
      {timeString}
    </p>
  );
};
