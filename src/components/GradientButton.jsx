const GradientButton = ({ text, ico, classes, inverse, textSmall }) => {
  return (
    <button
      className={`bg-transparent relative  ${classes} group rounded-full isolate`}
    >
      <div
        className={`flex justify-center items-center w-full  transition-all duration-200  text-white gap-2 h-full rounded-full ${
          inverse
            ? "group-hover:bg-transparent bg-jungleGreen"
            : "group-hover:bg-jungleGreen bg-transparent"
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
