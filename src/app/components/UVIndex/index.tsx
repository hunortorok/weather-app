const getUvIndexDescription = (uvIndex: number) => {
  if (uvIndex <= 2) return "Low";
  if (uvIndex <= 5) return "Moderate";
  if (uvIndex <= 7) return "High";
  if (uvIndex <= 10) return "Very High";
  return "Extreme";
};
const UVIndex = ({ data: uvIndexValue }: { data: number }) => {
  const roundedUvIndex = Math.round(uvIndexValue);
  return (
    <div className="flex flex-col w-full h-full py-2 px-1">
      <span className="text-left font-bold mb-2">UV Index</span>
      <span className="text-left font-medium">{`${getUvIndexDescription(roundedUvIndex)} right now`}</span>
      <span className="flex-1" />
      <span className="text-left text-2xl font-medium mt-2">
        {getUvIndexDescription(roundedUvIndex)}
      </span>
      <span className="flex flex-row justify-start rounded-xl h-4 w-full bg-linear-[90deg,green_0%,yellow_25%,orange_50%,red_75%,purple_100%] text-xs/3.5 items-center">
        <span style={{ width: (roundedUvIndex / 11) * 100 + "%" }} />
        <span className="w-5 h-5 bg-transparent border-[3px] border-black rounded-2xl text-center text-black font-bold">
          {roundedUvIndex}
        </span>
      </span>
    </div>
  );
};

export default UVIndex;
