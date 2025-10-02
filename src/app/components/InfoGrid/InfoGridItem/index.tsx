import clsx from "clsx";

const InfoGridItem = ({
  children,
  size = "small",
  className = "",
}: {
  children: any;
  size?: string;
  className?: string;
}) => {
  return (
    <span
      className={clsx(
        "rounded-xl border-2 border-[#9fc1ec] bg-transparent p-2",
        {
          "col-span-1 row-span-1 w-full aspect-7/8 md:aspect-auto md:h-full md:w-full":
            size === "small",
          "col-span-2 row-span-1": size === "large",
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default InfoGridItem;
