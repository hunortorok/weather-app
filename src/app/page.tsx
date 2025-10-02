import LocationNameBanner from "./components/LocationNameBanner";
import CurrentTemperature from "./components/CurrentTemperature";
import InfoGrid from "./components/InfoGrid";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = (await searchParams?.q) || "Los Angeles";
  const data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${query}&days=3&aqi=yes&alerts=no`,
    { cache: "no-store" }
  );
  const weatherData = await data.json();
  console.log(weatherData);

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

  const timeZone = weatherData?.location?.tz_id;

  return (
    <div className="bg-linear-[180deg,#fffef0_0%,#fffef0_99%,#9fc1ec_99%,#9fc1ec_100%] bg-size-[100%_50px] bg-repeat-y bg-scroll">
      <LocationNameBanner
        className="sticky top-0 bg-[#fffef0] border-b-2 border-b-[#9fc1ec] z-10 w-dvw px-5 md:px-40"
        name={weatherData.location.name}
      />
      <div className="flex flex-col items-center w-full px-5 md:px-40 overflow-hidden bg-transparent h-full bg-scroll">
        <CurrentTemperature {...currentWeatherData} />
        <InfoGrid weatherData={weatherData} timeZone={timeZone} />
      </div>
    </div>
  );
}
