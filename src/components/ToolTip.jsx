const ToolTip = ({ direction }) => {
  return (
    <div
      className={`absolute ${
        direction === "up"
          ? "-top-[50px] translate-y-6"
          : `-bottom-[50px] -translate-y-6`
      } group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500  opacity-0 left-1/2 w-max py-2 bg-[#333] rounded-md -translate-x-1/2 px-5`}
    >
      <p className="text-white text-sm font-medium">Coming Soon</p>

      <div
        className={`w-0 h-0 border-l-[10px] border-l-transparent ${
          direction === "up"
            ? "border-t-[10px] border-t-[#333] top-full"
            : "border-b-[10px] border-b-[#333] bottom-full"
        } border-r-[10px] border-r-transparent absolute  left-1/2 -translate-x-1/2`}
      ></div>
    </div>
  );
};

export default ToolTip;
