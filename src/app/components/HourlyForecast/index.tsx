"use client";

import WeatherConditionIcon from "../WeatherConditionIcon";
import { useAtom } from "jotai";
import { isMetricAtom } from "@/app/atoms/isMetricAtom";

const ForecastHourCard = ({
  data,
  timeZone,
}: {
  data: any;
  timeZone: string;
}) => {
  const [isMetric] = useAtom(isMetricAtom);
  const date = new Date(data.time_epoch * 1000);
  const hourAndMinutes = date.toLocaleTimeString([], {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="flex flex-col text-center items-center justify-center m-1 pt-2 pb-4">
      <span className="text-sm">{hourAndMinutes}</span>
      <WeatherConditionIcon
        className="w-16 h-16"
        isDay={data?.is_day === 1}
        conditionCode={data?.condition?.code}
      />
      <span className="text-lg font-medium">
        {`${Math.round(isMetric ? data?.temp_c : data?.temp_f)}\u00B0`}
      </span>
    </div>
  );
};

const HourlyForecast = ({
  data: hourlyForecastData,
  timeZone = "America/New_York",
}: {
  data: any;
  timeZone: string;
}) => {
  return (
    <div className="flex flex-col w-full h-full">
      <span className="text-left font-bold">Hourly Forecast</span>
      <div className="flex flex-row overflow-scroll overflow-y-hidden">
        {hourlyForecastData.map((hourData: any) => {
          return (
            <ForecastHourCard
              key={hourData.time_epoch}
              data={hourData}
              timeZone={timeZone}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
