import weatherData from "@/data";
import LocationNameBanner from "./components/LocationNameBanner";
import CurrentTemperature from "./components/CurrentTemperature";
import InfoGrid from "./components/InfoGrid";

const currentWeatherData = {
  isDay: weatherData.current.is_day === 1,
  currentTempC: weatherData.current.temp_c,
  currentTempF: weatherData.current.temp_f,
  feelsLikeC: weatherData.current.feelslike_c,
  feelsLikeF: weatherData.current.feelslike_f,
  maxTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
  maxTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
  minTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
  minTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
  conditionCode: weatherData.current.condition.code,
};

export default function Home() {
  return (
    <>
      <LocationNameBanner
        className="sticky top-0 bg-amber-50 z-10 w-dvw px-5 md:px-40"
        name={weatherData.location.name}
      />
      <div className="flex flex-col items-center w-full px-5 md:px-40 overflow-hidden">
        <CurrentTemperature {...currentWeatherData} />
        <InfoGrid />
      </div>
    </>
  );
}
