const Hero = () => {
  return (
    <div className="bg-heroBg bg-cover bg-left pb-[120px] pt-[170px] lg:pt-[220px] flex justify-center items-center w-full relative ">
      <img
        src="/hero-top.png"
        className="top-0 w-[300px] sm:w-[400px] object-contain right-0 sm:right-[27%] absolute"
        alt=""
      />
      <img
        src="/line.png"
        className="bottom-[2%] sm:bottom-0 -z-10 w-[800px] object-contain left-0 absolute"
        alt=""
      />
      <div className="contain lg:flex-row flex-col gap-16 lg:gap-0 justify-between items-center h-full">
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col max-w-[650px] gap-8 xl:gap-16">
          <h2 className="grText leading-[1.5] font-avenor text-[30px] sm:text-[45px] xl:text-[65px] font-normal">
            INSCRIBE, BUY & SELL ORDINALS
          </h2>
          <p className="text-base xl:text-xl font-normal text-white">
            Trustless & Secure Ordinal Marketplace Built on Bitcoin
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-5 w-full">
            <button className="bg-transparent relative w-full max-w-[200px] xl:max-w-[245px] h-[55px] xl:h-[72px] min-h-[53px] group rounded-full isolate">
              <div className="flex justify-center items-center w-full bg-transparent transition-all duration-200 group-hover:bg-jungleGreen text-white gap-1 h-full rounded-full">
                <p className="text-sm sm:text-base xl:text-xl">
                  Explore Collections
                </p>
              </div>
              <div className="absolute rounded-full bg-goldGr -inset-[2px] transition-all duration-200 -z-10"></div>
            </button>
            <button className="bg-transparent relative w-full max-w-[200px] xl:max-w-[245px] h-[55px] xl:h-[72px] min-h-[53px] group rounded-full isolate">
              <div className="flex justify-center items-center w-full bg-jungleGreen transition-all duration-200 group-hover:bg-transparent text-white gap-2 h-full rounded-full">
                <p className="text-sm sm:text-base xl:text-xl">Sell Ordinals</p>
              </div>
              <div className="absolute rounded-full bg-goldGr  -inset-[2px] transition-all duration-200 -z-10"></div>
            </button>
          </div>
        </div>
        <div className="relative isolate w-full max-w-[440px]">
          <div className="flex justify-start pb-5 heroBorder items-start w-full gap-4 flex-col bg-[#D9D9D91A] backdrop-blur-[30px]  rounded-[15px] p-4">
            <img
              src="/hero-card.png"
              className="w-full object-contain"
              alt=""
            />
            <div className="flex justify-between items-center w-full">
              <h4 className="text-white text-sm sm:text-xl font-normal">
                Otherdeed for Otherside
              </h4>
              <img
                src="/verified.png"
                className="w-4 sm:w-[18px] object-contain"
                alt=""
              />
              <p className="grText text-xs sm:text-sm">(Coming Soon)</p>
            </div>
          </div>

          <div className="w-full  absolute top-0 h-full left-0 -z-10 rotate-[4.36deg]">
            <div className="flex justify-start heroBorder h-full items-start w-full gap-4 flex-col bg-[#D9D9D91A] backdrop-blur-[30px]  rounded-[15px] p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
