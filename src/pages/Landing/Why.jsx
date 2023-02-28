import Title from "../../components/Title";

const Why = () => {
  return (
    <div className="wrapper mt-[100px] bg-whyBg bg-contain bg-left-top relative isolate">
      <img
        src="/why-line.png"
        className="absolute top-0 md:block hidden left-0 w-full max-w-[977px] -z-10"
        alt=""
      />
      <div className="contain  flex-col items-center justify-center">
        <Title text="Why us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex justify-between items-start w-full mt-6 sm:mt-10 gap-x-7 gap-y-10  xl:gap-7">
          <WhyBox
            title="Easy to use"
            ico="/why1.png"
            desc="Nice user friendly interface making it easy to trade bitcoin ordinals."
          />
          <WhyBox
            title="Highly Secure"
            ico="/why2.png"
            desc="Ordinsea will use a very secure and trustless escrow system for ordinal trading."
          />
          <WhyBox
            title="Experienced Team"
            ico="/why3.png"
            desc="Our team of developers have years of experience working on the Bitcoin Blockchain."
          />
          <WhyBox
            title="Empowering Creators"
            ico="/why4.png"
            desc="Ordinsea will allow creators to deploy their work on the blockchain with just a few clicks."
          />
        </div>
      </div>
    </div>
  );
};

export default Why;

const WhyBox = ({ ico, title, desc }) => {
  return (
    <div className="flex justify-start text-center items-center flex-col gap-4 w-full">
      <div className="rounded-full aspect-square bg-goldGr w-[90px] grid place-items-center">
        <img src={ico} className="h-[36px] object-contain" alt="" />
      </div>
      <h4 className="text-white font-medium text-2xl 2xl:text-[27px]">
        {title}
      </h4>
      <p className="text-white">{desc}</p>
    </div>
  );
};
