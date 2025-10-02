import clsx from "clsx";

const getAirQualityDescription = (index: number) => {
  switch (index) {
    case 1:
      return "Good";
    case 2:
      return "Moderate";
    case 3:
      return "Unhealthy for Sensitive Groups";
    case 4:
      return "Unhealthy";
    case 5:
      return "Very Unhealthy";
    case 6:
      return "Hazardous";
    default:
      return "Unknown";
  }
};

const AirQualityIndex = ({ data: airQuality }: { data: number }) => {
  const description = getAirQualityDescription(airQuality);
  return (
    <div className="flex flex-col w-full h-full items-start">
      <span className="text-left font-bold mb-2">AQI</span>
      <span className="text-left font-medium mb-2">{`${description} (${airQuality})`}</span>
      <span className="flex flex-row justify-start font-bold mb-2 w-full bg-gray-300 rounded-xl h-4">
        <span
          className={clsx("h-full rounded-xl", {
            "bg-green-400": airQuality === 1,
            "bg-yellow-400": airQuality === 2,
            "bg-orange-400": airQuality === 3,
            "bg-red-400": airQuality === 4,
            "bg-purple-600": airQuality === 5,
            "bg-amber-900": airQuality === 6,
          })}
          style={{
            width: (airQuality / 6) * 100 + "%",
          }}
        ></span>
      </span>
    </div>
  );
};

export default AirQualityIndex;
