import ToolTip from "./ToolTip";

const GradientButton = ({
  text,
  ico,
  classes,
  inverse,
  textSmall,
  tooltip,
  direction,
}) => {
  return (
    <button
      className={`bg-transparent relative  ${classes} group rounded-full isolate`}
    >
      {tooltip && <ToolTip direction={direction} />}
      <div
        className={`flex justify-center items-center w-full  transition-all duration-200  text-black dark:text-white gap-2 h-full rounded-full ${
          inverse
            ? "group-hover:bg-transparent bg-white dark:bg-jungleGreen"
            : "dark:group-hover:bg-jungleGreen group-hover:bg-white bg-transparent"
        }`}
      >
        {ico && ico}
        <p
          className={`${
            textSmall ? "text-base" : "text-sm sm:text-base xl:text-xl"
          }`}
        >
          {text}
        </p>
      </div>
      <div className="absolute rounded-full bg-goldGr -inset-[2px] transition-all duration-200 -z-10"></div>
    </button>
  );
};

export default GradientButton;
