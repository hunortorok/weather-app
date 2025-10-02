import AirQualityIndex from "../AirQualityIndex";
import DewpointInfo from "../DewpointInfo";
import HourlyForecast from "../HourlyForecast";
import HumidityInfo from "../HumidityInfo";
import PressureInfo from "../PressureInfo";
import SunAndMoonInfo from "../SunAndMoonInfo";
import ThreeDayForecast from "../ThreeDayForecast";
import UVIndex from "../UVIndex";
import VisibilityInfo from "../VisibilityInfo";
import WindInfo from "../WindInfo";
import InfoGridItem from "./InfoGridItem";

const InfoGrid = ({
  weatherData,
  timeZone,
}: {
  weatherData: any;
  timeZone: string;
}) => {
  const hourlyForecastData = weatherData?.forecast?.forecastday[0]?.hour;
  const threeDayForecastData = weatherData?.forecast?.forecastday?.map(
    (data: any) => ({
      date: data.date,
      maxTempC: data.day.maxtemp_c,
      maxTempF: data.day.maxtemp_f,
      minTempC: data.day.mintemp_c,
      minTempF: data.day.mintemp_f,
      conditionCode: data.day.condition.code,
      conditionText: data.day.condition.text,
      dailyChanceOfRain: data.day.daily_chance_of_rain,
      dailyChanceOfSnow: data.day.daily_chance_of_snow,
      condition: data.day.condition,
    })
  );
  console.log("Air Quality:", weatherData?.current?.air_quality);
  const airQuality = weatherData?.current?.air_quality["us-epa-index"];
  const uvData = weatherData?.current?.uv;
  const humidityData = weatherData?.current?.humidity;

  const windData = {
    windKph: weatherData?.current?.wind_kph,
    windMph: weatherData?.current?.wind_mph,
    windDegree: weatherData?.current?.wind_degree,
    windDirection: weatherData?.current?.wind_dir,
  };

  const dewpointData = {
    dewpointF: weatherData?.current?.dewpoint_f,
    dewpointC: weatherData?.current?.dewpoint_c,
  };

  const pressureData = {
    pressMb: weatherData?.current?.pressure_mb,
    pressIn: weatherData?.current?.pressure_in,
  };

  const visibilityData = {
    visKm: weatherData?.current?.vis_km,
    visMi: weatherData?.current?.vis_miles,
  };

  const smallItems = [
    [UVIndex, uvData],
    [HumidityInfo, humidityData],
    [WindInfo, windData],
    [DewpointInfo, dewpointData],
    [PressureInfo, pressureData],
    [VisibilityInfo, visibilityData],
  ];

  const astronomyData = {
    sunrise: weatherData?.forecast?.forecastday[0]?.astro?.sunrise,
    sunset: weatherData?.forecast?.forecastday[0]?.astro?.sunset,
    moonrise: weatherData?.forecast?.forecastday[0]?.astro?.moonrise,
    moonset: weatherData?.forecast?.forecastday[0]?.astro?.moonset,
    moonPhase: weatherData?.forecast?.forecastday[0]?.astro?.moon_phase,
    moonIllumination:
      weatherData?.forecast?.forecastday[0]?.astro?.moon_illumination,
  };

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(0, 1fr)] gap-4 my-4 bg-transparent">
      <InfoGridItem size="large">
        <HourlyForecast data={hourlyForecastData} timeZone={timeZone} />
      </InfoGridItem>
      <InfoGridItem size="large">
        <ThreeDayForecast data={threeDayForecastData} />
      </InfoGridItem>
      <InfoGridItem size="large">
        <AirQualityIndex data={airQuality} />
      </InfoGridItem>
      {smallItems.map(([Item, data], index) => (
        <InfoGridItem size="small" key={index}>
          {typeof Item === "string" ? Item : <Item data={data} />}
        </InfoGridItem>
      ))}
      <InfoGridItem size="large">
        <SunAndMoonInfo data={astronomyData} type="sun" />
      </InfoGridItem>
      <InfoGridItem size="large">
        <SunAndMoonInfo data={astronomyData} type="moon" />
      </InfoGridItem>
    </div>
  );
};
export default InfoGrid;
