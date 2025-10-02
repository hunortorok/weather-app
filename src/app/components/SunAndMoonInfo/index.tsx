import { LuMoon } from "react-icons/lu";
import {
  WiSunrise,
  WiSunset,
  WiMoonrise,
  WiMoonset,
  WiMoonAltNew,
  WiMoonAltWaxingCrescent3,
  WiMoonAltFirstQuarter,
  WiMoonAltWaningGibbous3,
  WiMoonAltFull,
  WiMoonAltWaxingGibbous3,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent3,
} from "react-icons/wi";

type astronomyDataObject = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
  moonIllumination: number;
};

const getIconForMoonPhase = (phase: string) => {
  switch (phase.toLowerCase()) {
    case "new moon":
      return <WiMoonAltNew className="w-20 h-20" />;
    case "waxing crescent":
      return <WiMoonAltWaxingCrescent3 className="w-20 h-20" />;
    case "first quarter":
      return <WiMoonAltFirstQuarter className="w-20 h-20" />;
    case "waxing gibbous":
      return <WiMoonAltWaxingGibbous3 className="w-20 h-20" />;
    case "full moon":
      return <WiMoonAltFull className="w-20 h-20" />;
    case "waning gibbous":
      return <WiMoonAltWaningGibbous3 className="w-20 h-20" />;
    case "last quarter":
      return <WiMoonAltThirdQuarter className="w-20 h-20" />;
    case "waning crescent":
      return <WiMoonAltWaningCrescent3 className="w-20 h-20" />;
    default:
      return <LuMoon className="w-20 h-20" />; // Default moon icon
  }
};

const SunAndMoonInfo = ({
  type = "sun",
  data: astronomyData,
}: {
  type: "sun" | "moon";
  data: astronomyDataObject;
}) => {
  return (
    <div className="flex flex-row w-full h-full py-2 px-1">
      {type === "sun" ? (
        <>
          <div className="flex flex-row justify-evenly w-full h-full ">
            <div className="flex flex-col items-center">
              <WiSunrise className="w-10 h-10 mx-auto mb-1" />
              <span className="text-center font-bold mb-2">Sunrise</span>
              <span className="text-center font-medium">
                {astronomyData.sunrise}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <WiSunset className="w-10 h-10 mx-auto mb-1" />
              <span className="text-center font-bold mb-2">Sunset</span>
              <span className="text-center font-medium">
                {astronomyData.sunset}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row w-full h-full justify-evenly">
            <div className="flex flex-col items-center">
              {getIconForMoonPhase(astronomyData.moonPhase)}
              <span className="text-center font-medium">
                {astronomyData.moonPhase}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <WiMoonrise className="w-10 h-10 mx-auto mb-1" />
              <span className="text-center font-bold mb-2">Moonrise</span>
              <span className="text-center font-medium">
                {astronomyData.moonrise}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <WiMoonset className="w-10 h-10 mx-auto mb-1" />
              <span className="text-center font-bold mb-2">Moonset</span>
              <span className="text-center font-medium">
                {astronomyData.moonset}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SunAndMoonInfo;
