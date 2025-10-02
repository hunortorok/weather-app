"use client";

import { IoLocationOutline } from "react-icons/io5";
import clsx from "clsx";
import { useAtom } from "jotai";
import { isMetricAtom } from "@/app/atoms/isMetricAtom";
import { useState } from "react";
import { useRouter } from "next/navigation";

const IsMetricToggle = () => {
  const [isChecked, setIsChecked] = useAtom(isMetricAtom);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <span className="group flex flex-row items-center space-x-1 text-sm cursor-pointer select-none">
      <span>{`\u00B0F`}</span>
      <span
        className="flex flex-row items-center justify-start h-4 w-8 bg-gray-300 rounded-xl "
        onClick={handleClick}
      >
        <span
          className={clsx(
            "h-4 w-4 bg-gray-600 rounded-xl group-hover:h-4.5 group-hover:w-4.5 transition duration-300 ease-in-out",
            { "translate-x-4": isChecked }
          )}
        />
      </span>
      <span>{`\u00B0C`}</span>
    </span>
  );
};

const LocationNameBanner = ({
  className = "",
  name = "Earth",
}: {
  className: string;
  name: string;
}) => {
  const [value, setValue] = useState(name);
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
      router.push(`/?q=${value}`);
    }
  };
  return (
    <div
      className={clsx(
        "flex flex-row w-full space-x-1 p-2 pt-14 items-center text-xl",
        className
      )}
    >
      <IoLocationOutline />
      <input
        className="bg-transparent w-1/2 overflow-visible border-b border-gray-400 focus:outline-none focus:border-black"
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleEnterKey}
      />
      <span className="flex-1" />
      <IsMetricToggle />
    </div>
  );
};

export default LocationNameBanner;
