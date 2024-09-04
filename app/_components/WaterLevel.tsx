"use client";

import { useEffect, useState } from "react";
import { LakeTravisWaterLevel } from "../api/lake/route";
import { Spinner } from "flowbite-react";

const useGetLakeLevel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<LakeTravisWaterLevel>();

  async function getLakeLevel() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/lake", { cache: "no-cache" });
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
  const { data, isLoading } = useGetLakeLevel();

  if (isLoading) {
    return <Spinner size="md" />;
  }

  if (!data) {
    return null;
  }

  const { date_time, percent_full, elevation } = data;
  const date = new Date(date_time);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return (
    <section>
      <p className="text-xl tracking-tight text-gray-900 dark:text-white">
        {elevation} ft ({percent_full}% Full)
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm">
        Last updated: {dateString} {timeString}
      </p>
    </section>
  );
};
