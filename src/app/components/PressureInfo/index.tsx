"use client";

import { isMetricAtom } from "@/app/atoms/isMetricAtom";
import { useAtom } from "jotai";

type pressureDataObject = {
  pressMb: number;
  pressIn: number;
};
const PressureInfo = ({ data: pressureData }: { data: pressureDataObject }) => {
  const [isMetric] = useAtom(isMetricAtom);
  return (
    <div className="flex flex-col w-full h-full py-2 px-1">
      <span className="text-left font-bold mb-0.5">Pressure</span>
      <span className="flex-1" />
      <span className="text-left text-2xl font-medium mb-1">
        {`${isMetric ? pressureData?.pressMb + " mb" : pressureData?.pressIn + " in"}`}
      </span>
      <span className="flex flex-row justify-start rounded-xl h-4 w-full bg-gray-300 items-center">
        <span
          className="h-full bg-linear-[90deg,#B6B6B4_0%,#87CEEB_60%] rounded-xl"
          style={{
            width:
              (isMetric
                ? (pressureData?.pressMb / 1060) * 100
                : (pressureData?.pressIn / 31) * 100) + "%",
          }}
        />
      </span>
    </div>
  );
};

export default PressureInfo;
