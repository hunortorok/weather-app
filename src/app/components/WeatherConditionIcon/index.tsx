import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDayRain,
  WiDayRainMix,
  WiDayShowers,
  WiDaySleet,
  WiDaySleetStorm,
  WiDaySnow,
  WiDaySnowThunderstorm,
  WiDaySnowWind,
  WiDaySprinkle,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayThunderstorm,
  WiNightAltCloudy,
  WiNightAltPartlyCloudy,
  WiNightClear,
  WiNightFog,
  WiNightPartlyCloudy,
  WiNightRain,
  WiNightRainMix,
  WiNightShowers,
  WiNightSleet,
  WiNightSleetStorm,
  WiNightSnow,
  WiNightSnowThunderstorm,
  WiNightSnowWind,
  WiNightSprinkle,
  WiNightThunderstorm,
} from "react-icons/wi";

const WeatherConditionIcon = ({
  className = "",
  conditionCode,
  isDay = false,
}: {
  className?: string;
  conditionCode: number;
  isDay?: boolean;
}) => {
  switch (conditionCode) {
    // Sunny / Clear
    case 1000:
      return isDay ? (
        <WiDaySunny className={className} />
      ) : (
        <WiNightClear className={className} />
      );
    // Partly cloudy
    case 1003:
      return isDay ? (
        <WiNightPartlyCloudy className={className} />
      ) : (
        <WiNightAltPartlyCloudy className={className} />
      );
    // Cloudy
    case 1006:
      return isDay ? (
        <WiDayCloudy className={className} />
      ) : (
        <WiNightAltCloudy className={className} />
      );
    // Overcast
    case 1009:
      return isDay ? (
        <WiDaySunnyOvercast className={className} />
      ) : (
        <WiNightAltPartlyCloudy className={className} />
      );
    // Mist
    case 1030:
      return isDay ? (
        <WiDayFog className={className} />
      ) : (
        <WiNightFog className={className} />
      );
    // Patchy rain possible
    case 1063:
      return isDay ? (
        <WiDayShowers className={className} />
      ) : (
        <WiNightShowers className={className} />
      );
    // Patchy snow possible
    case 1066:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Patchy sleet possible
    case 1069:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Patchy freezing drizzle possible
    case 1072:
      return isDay ? (
        <WiDayRainMix className={className} />
      ) : (
        <WiNightRainMix className={className} />
      );
    // Thundery outbreaks possible
    case 1087:
      return isDay ? (
        <WiDayThunderstorm className={className} />
      ) : (
        <WiNightThunderstorm className={className} />
      );
    // Blowing snow
    case 1114:
      return isDay ? (
        <WiDaySnowWind className={className} />
      ) : (
        <WiNightSnowWind className={className} />
      );
    // Blizzard
    case 1117:
      return isDay ? (
        <WiDaySnowWind className={className} />
      ) : (
        <WiNightSnowWind className={className} />
      );
    // Fog
    case 1135:
      return isDay ? (
        <WiDayFog className={className} />
      ) : (
        <WiNightFog className={className} />
      );
    // Freezing fog
    case 1147:
      return isDay ? (
        <WiDayFog className={className} />
      ) : (
        <WiNightFog className={className} />
      );
    // Patchy light drizzle
    case 1150:
      return isDay ? (
        <WiDaySprinkle className={className} />
      ) : (
        <WiNightSprinkle className={className} />
      );
    // Light drizzle
    case 1153:
      return isDay ? (
        <WiDaySprinkle className={className} />
      ) : (
        <WiNightSprinkle className={className} />
      );
    // Freezing drizzle
    case 1168:
      return isDay ? (
        <WiDaySprinkle className={className} />
      ) : (
        <WiNightSprinkle className={className} />
      );
    // Heavy freezing drizzle
    case 1171:
      return isDay ? (
        <WiDaySprinkle className={className} />
      ) : (
        <WiNightSprinkle className={className} />
      );
    // Patchy light rain
    case 1180:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Light rain
    case 1183:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Moderate rain at times
    case 1186:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Moderate rain
    case 1189:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Heavy rain at times
    case 1192:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Heavy rain
    case 1195:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Light freezing rain
    case 1198:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Moderate or heavy freezing rain
    case 1201:
      return isDay ? (
        <WiDaySleetStorm className={className} />
      ) : (
        <WiNightSleetStorm className={className} />
      );
    // Light sleet
    case 1204:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Moderate or heavy sleet
    case 1207:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Patchy light snow
    case 1210:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Light snow
    case 1213:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Patchy moderate snow
    case 1216:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Moderate snow
    case 1219:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Patchy heavy snow
    case 1222:
      return isDay ? (
        <WiDaySnowWind className={className} />
      ) : (
        <WiNightSnowWind className={className} />
      );
    // Heavy snow
    case 1225:
      return isDay ? (
        <WiDaySnowWind className={className} />
      ) : (
        <WiNightSnowWind className={className} />
      );
    // Ice pellets
    case 1237:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Light rain shower
    case 1240:
      return isDay ? (
        <WiDaySprinkle className={className} />
      ) : (
        <WiNightSprinkle className={className} />
      );
    // Moderate or heavy rain shower
    case 1243:
      return isDay ? (
        <WiDayShowers className={className} />
      ) : (
        <WiNightShowers className={className} />
      );
    // Torrential rain shower
    case 1246:
      return isDay ? (
        <WiDayRain className={className} />
      ) : (
        <WiNightRain className={className} />
      );
    // Light sleet showers
    case 1249:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Moderate or heavy sleet showers
    case 1252:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Light snow showers
    case 1255:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Moderate or heavy snow showers
    case 1258:
      return isDay ? (
        <WiDaySnow className={className} />
      ) : (
        <WiNightSnow className={className} />
      );
    // Light showers of ice pellets
    case 1261:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Moderate or heavy showers of ice pellets
    case 1264:
      return isDay ? (
        <WiDaySleet className={className} />
      ) : (
        <WiNightSleet className={className} />
      );
    // Patchy light rain with thunder
    case 1273:
      return isDay ? (
        <WiDayThunderstorm className={className} />
      ) : (
        <WiNightThunderstorm className={className} />
      );
    // Moderate or heavy rain with thunder
    case 1276:
      return isDay ? (
        <WiDayThunderstorm className={className} />
      ) : (
        <WiNightThunderstorm className={className} />
      );
    // Patchy light snow with thunder
    case 1279:
      return isDay ? (
        <WiDaySnowThunderstorm className={className} />
      ) : (
        <WiNightSnowThunderstorm className={className} />
      );
    // Moderate or heavy snow with thunder
    case 1282:
      return isDay ? (
        <WiDaySnowThunderstorm className={className} />
      ) : (
        <WiNightSnowThunderstorm className={className} />
      );
    // Default: fallback to sunny/cloud

    default:
      return isDay ? (
        <WiDaySunny className={className} />
      ) : (
        <WiCloud className={className} />
      );
  }
};

export default WeatherConditionIcon;
