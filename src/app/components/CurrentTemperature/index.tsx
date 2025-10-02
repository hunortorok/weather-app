"use client";

import { useAtom } from "jotai";
import WeatherConditionIcon from "../WeatherConditionIcon";
import { isMetricAtom } from "@/app/atoms/isMetricAtom";

const CurrentTemperature = ({
  currentTempC,
  currentTempF,
  feelsLikeC,
  feelsLikeF,
  maxTempC,
  maxTempF,
  minTempC,
  minTempF,
  conditionCode,
  isDay,
}: {
  currentTempC: number;
  currentTempF: number;
  feelsLikeC: number;
  feelsLikeF: number;
  maxTempC: number;
  maxTempF: number;
  minTempC: number;
  minTempF: number;
  conditionCode: number;
  isDay: boolean;
}) => {
  const [isMetric] = useAtom(isMetricAtom);

  return (
    <div className="flex flex-row items-center justify-between md:justify-start w-full text-black px-6 bg-transparent">
      <span className="text-5xl">{`${isMetric ? currentTempC : currentTempF}\u00B0`}</span>
      <div className="flex flex-col text-xs mx-2">
        <span>{`\u2191${isMetric ? maxTempC : maxTempF}\u00B0 / \u2193${isMetric ? minTempC : minTempF}\u00B0`}</span>
        <span>{`Feels like ${isMetric ? feelsLikeC : feelsLikeF}\u00B0`}</span>
      </div>
      <WeatherConditionIcon
        className="w-16 h-16"
        isDay={isDay}
        conditionCode={conditionCode}
      />
    </div>
  );
};

export default CurrentTemperature;
