import Title from "../../components/Title";

const Partners = () => {
  return (
    <div className="wrapper mt-[80px] sm:mt-[150px]">
      <Title text="Partners" />
      <div className=" w-full mt-8 sm:mt-16 relative isolate">
        <div className="bg-goldGr -inset-y-[1px] w-full absolute left-0 -z-10 "></div>
        <div className="w-full bg-[#212326] flex justify-center items-center py-6 sm:py-4 ">
          <div className="w-[90%] max-w-[1440px] xl:flex-nowrap xl:gap-0 gap-8 sm:gap-5 flex-wrap flex justify-around items-center ">
            {" "}
            <img
              src="/part1.png"
              className="object-contain max-h-[40px] sm:max-h-[60px] 2xl:max-h-[80px]"
              alt=""
            />
            <img
              src="/part2.png"
              className="object-contain max-h-[40px] sm:max-h-[60px] 2xl:max-h-[80px]"
              alt=""
            />
            <img
              src="/part3.png"
              className="object-contain max-h-[40px] sm:max-h-[60px] 2xl:max-h-[80px]"
              alt=""
            />
            <img
              src="/part4.png"
              className="object-contain max-h-[40px] sm:max-h-[60px] 2xl:max-h-[80px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
