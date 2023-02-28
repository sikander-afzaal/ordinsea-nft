import Title from "../../components/Title";
import ComingSoonOverlay from "../../components/ComingSoonOverlay";

const Featured = () => {
  return (
    <div className="wrapper bg-whyBg bg-right-top bg-contain mt-[80px] sm:mt-[100px] relative">
      <img
        src="/featured-line.png"
        className="absolute top-[5%] xl:top-[25%] md:block hidden right-0"
        alt=""
      />
      <Title text="Featured collection" />
      <div className="wrapper relative mt-10">
        <ComingSoonOverlay />
        <div className="grid place-items-center grid-cols-1 xl:grid-cols-3 gap-8 auto-rows-fr w-[90%] max-w-[1440px]">
          <FeaturedCollectionBox
            img="/featured.png"
            title="SolSnatchers"
            volume="47.64k"
            items="10,000"
          />
          <FeaturedCollectionBox
            img="/featured.png"
            title="SolSnatchers"
            volume="47.64k"
            items="10,000"
          />
          <FeaturedCollectionBox
            img="/featured.png"
            title="SolSnatchers"
            volume="47.64k"
            items="10,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;

const FeaturedCollectionBox = ({ img, title, items, volume }) => {
  return (
    <div className="flex max-w-[450px] justify-start items-center w-full flex-col gap-4">
      <img src={img} className="w-full object-contain aspect-[2/1]" alt="" />
      <svg
        className="w-full h-[2px]"
        viewBox="0 0 299 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L298.5 1"
          stroke="url(#paint0_linear_43_157)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_43_157"
            x1="1"
            y1="0.5"
            x2="298.5"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.520833" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex justify-between items-center gap-2 w-full">
        <p className="text-white text-[22px] font-medium ">{title}</p>
        <p className="text-white  font-medium ">{items} Items</p>
      </div>
      <div className="flex justify-between items-center gap-2 w-full">
        <p className="text-white text-[22px] font-medium ">Total Volume</p>
        <p className="text-white  font-medium ">{volume}</p>
      </div>
    </div>
  );
};
