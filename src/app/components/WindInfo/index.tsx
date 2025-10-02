"use client";

import { isMetricAtom } from "@/app/atoms/isMetricAtom";
import { useAtom } from "jotai";
import { FaArrowUp } from "react-icons/fa";

type windDataObject = {
  windKph: number;
  windMph: number;
  windDegree: number;
  windDirection: string;
};

const WindInfo = ({ data: windData }: { data: windDataObject }) => {
  const [isMetric] = useAtom(isMetricAtom);
  return (
    <div className="flex flex-col w-full h-full py-2 px-1">
      <span className="text-left font-bold mb-2">Wind</span>
      <div className="flex flex-col border-2 border-[#9fc1ec] rounded-xl">
        <span className="text-center text-lg font-medium mb-2">{`${isMetric ? windData?.windKph : windData?.windMph} ${isMetric ? "kph" : "mph"}`}</span>
        <span className="flex flex-row justify-center items-center w-full h-full mb-2">
          <FaArrowUp
            className="w-8 h-8"
            style={{ transform: `rotate(${windData?.windDegree}deg)` }}
          />
        </span>
        <span className="text-center font-medium">{` ${windData?.windDirection} (${windData?.windDegree}\u00B0)`}</span>
      </div>
    </div>
  );
};

export default WindInfo;
