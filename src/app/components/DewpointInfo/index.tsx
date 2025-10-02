"use client";

import { isMetricAtom } from "@/app/atoms/isMetricAtom";
import { useAtom } from "jotai";

type dewpointDataObject = {
  dewpointF: number;
  dewpointC: number;
};

const getDewpointDescription = (dewpoint: number) => {
  if (dewpoint <= 50) return "dry";
  if (dewpoint <= 55) return "pleasant";
  if (dewpoint <= 60) return "comfortable";
  if (dewpoint <= 65) return "sticky";
  if (dewpoint <= 70) return "humid";
  if (dewpoint <= 75) return "very humid";
  return "oppressive";
};
const DewpointInfo = ({ data: dewpointData }: { data: dewpointDataObject }) => {
  const [isMetric] = useAtom(isMetricAtom);

  return (
    <div className="flex flex-col w-full h-full py-2 px-1">
      <span className="text-left font-bold mb-2">Dewpoint</span>
      <span className="text-left font-medium">{`The air is ${getDewpointDescription(dewpointData?.dewpointF)} right now`}</span>
      <span className="flex-1" />
      <span className="text-left text-2xl font-medium mt-2">
        {`${isMetric ? dewpointData?.dewpointC : dewpointData?.dewpointF} \u00B0 `}
      </span>
    </div>
  );
};

export default DewpointInfo;
