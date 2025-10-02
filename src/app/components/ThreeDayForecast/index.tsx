"use client";

import WeatherConditionIcon from "../WeatherConditionIcon";
import { IoWater } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { useAtom } from "jotai";
import { isMetricAtom } from "@/app/atoms/isMetricAtom";

const ForecastDayCard = ({ data }: { data: any }) => {
  const [isMetric] = useAtom(isMetricAtom);
  const date = new Date(data.date);
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    date
  );
  return (
    <div className="flex flex-row text-center items-center justify-end m-1 py-1 gap-1">
      <span className="text-md text-left flex-1">{weekday}</span>
      <span className="flex flex-row text-sm justify-center items-center">
        {data.dailyChanceOfSnow ? (
          <FaRegSnowflake className="w-4 h-4" />
        ) : (
          <IoWater className="w-4 h-4" />
        )}
        <span>{` ${data.dailyChanceOfSnow ? data.dailyChanceOfSnow : data.dailyChanceOfRain}%`}</span>
      </span>
      <WeatherConditionIcon
        className="w-7 h-7"
        isDay
        conditionCode={data.condition.code}
      />
      <WeatherConditionIcon
        className="w-7 h-7"
        conditionCode={data.condition.code}
      />
      <span className="text-lg font-medium min-w-[120px]">
        {`\u2191${Math.round(isMetric ? data.maxTempC : data.maxTempF)}\u00B0 / \u2193${Math.round(isMetric ? data.minTempC : data.minTempF)}\u00B0`}
      </span>
    </div>
  );
};

const ThreeDayForecast = ({ data: threeDayForecastData }: { data: any }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <span className="text-left font-bold mb-2">3 Day Forecast</span>
      {threeDayForecastData.map((data: any) => (
        <ForecastDayCard key={data.date} data={data} />
      ))}
    </div>
  );
};

export default ThreeDayForecast;
