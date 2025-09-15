import Image from "next/image";
import { WiDaySunny } from "react-icons/wi";
import WeatherConditionIcon from "../WeatherConditionIcon";

const IS_METRIC = true;
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
}) => {
  return (
    <div className="flex flex-row items-center justify-between md:justify-start w-full text-black px-6 pt-4">
      <span className="text-5xl">{`${IS_METRIC ? currentTempC : currentTempF}\u00B0`}</span>
      <div className="flex flex-col text-xs mx-2">
        <span>{`\u2191${IS_METRIC ? maxTempC : maxTempF}\u00B0 / \u2193${IS_METRIC ? minTempC : minTempF}\u00B0`}</span>
        <span>{`Feels like ${IS_METRIC ? feelsLikeC : feelsLikeF}\u00B0`}</span>
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
