import { IoLocationOutline } from "react-icons/io5";
import clsx from "clsx";

const LocationNameBanner = ({
  className = "",
  name = "Earth",
}: {
  className: string;
  name: string;
}) => (
  <div
    className={clsx(
      "flex flex-row w-full space-x-1 p-2 pt-14 items-center text-xl",
      className
    )}
  >
    <IoLocationOutline />
    <span>{name}</span>
  </div>
);

export default LocationNameBanner;
