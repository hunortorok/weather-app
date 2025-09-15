const InfoGrid = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-9 gap-4 my-4">
      <span className="rounded-xl bg-blue-300 col-span-full row-span-1 h-30">
        Hourly Forecast
      </span>
      <span className="rounded-xl bg-blue-300 col-span-full row-span-2 h-full">
        3-Day Forecast
      </span>
      <span className="rounded-xl bg-blue-300 col-span-full row-span-1 h-30">
        Air Quality index
      </span>
      <span className="rounded-xl bg-blue-300 col-span-1 row-span-1 h-30">
        UV Index
      </span>
      <span className="rounded-xl bg-blue-300 col-span-1 row-span-1 h-30">
        Humidity
      </span>
      <span className="rounded-xl bg-blue-300 col-span-1 row-span-1 h-30">
        Wind
      </span>
      <span className="rounded-xl bg-blue-300 col-span-1 row-span-1 h-30">
        Dew point
      </span>
      <span className="rounded-xl bg-blue-300 col-span-1 row-span-1 h-30">
        Pressure
      </span>
      <span className="rounded-xl bg-blue-300 col-span-1 row-span-1 h-30">
        Visibility
      </span>
      <span className="rounded-xl bg-blue-300 col-span-full row-span-1 h-30">
        Sun
      </span>
      <span className="rounded-xl bg-blue-300 col-span-full row-span-1 h-30">
        Moon
      </span>
    </div>
  );
};
export default InfoGrid;
