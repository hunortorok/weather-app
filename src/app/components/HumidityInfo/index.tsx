const HumidityInfo = ({ data: humidityValue }: { data: number }) => {
  return (
    <div className="flex flex-col w-full h-full py-2 px-1">
      <span className="text-left font-bold mb-2">Humidity</span>
      <span className="text-left font-medium">{`${humidityValue}% right now`}</span>
      <span className="flex-1" />
      <span className="text-left text-2xl font-medium mt-2">
        {`${humidityValue}%`}
      </span>
      <span className="flex flex-row justify-start rounded-xl h-4 w-full bg-gray-300 items-center">
        <span
          className="h-full bg-linear-[90deg,#afe5ff_0%,#2dbcff_100%] rounded-xl"
          style={{ width: humidityValue + "%" }}
        />
      </span>
    </div>
  );
};

export default HumidityInfo;
