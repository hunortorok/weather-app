"use client";

import { isMetricAtom } from "@/app/atoms/isMetricAtom";
import { useAtom } from "jotai";

type visibilityDataObject = {
  visKm: number;
  visMi: number;
};

// Description based on visibility in miles
const getVisibilityDescription = (visibility: number) => {
  if (visibility < 3) return "Very poor";
  if (visibility < 5) return "Poor";
  if (visibility < 10) return "Moderate";
  if (visibility < 20) return "Good";
  return "Excellent";
};
const VisibilityInfo = ({
  data: visibilityData,
}: {
  data: visibilityDataObject;
}) => {
  const [isMetric] = useAtom(isMetricAtom);

  return (
    <div className="flex flex-col w-full h-full py-2 px-1">
      <span className="text-left font-bold mb-2">Visibility</span>
      <span className="text-left font-medium">{`${getVisibilityDescription(visibilityData?.visMi)} visibility`}</span>
      <span className="flex-1" />
      <span className="text-left text-2xl font-medium mt-2">
        {`${isMetric ? visibilityData?.visKm + " km" : visibilityData?.visMi + " mi"}`}
      </span>
    </div>
  );
};

export default VisibilityInfo;
