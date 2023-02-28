import Title from "../../components/Title";
import ComingSoonOverlay from "../../components/ComingSoonOverlay";

const Collection = () => {
  return (
    <div className="wrapper mt-[50px]  sm:mt-[100px]">
      <Title text="Trending collection" />
      <div className="wrapper relative mt-10">
        <ComingSoonOverlay />
        <div className="grid gap-y-10  gap-x-10 xl:gap-x-5 2xl:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr__auto__1fr__auto__1fr] auto-rows-fr w-[90%] max-w-[1440px]">
          <CollectionBox
            img="/nft.png"
            num={1}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <div className="xl:block hidden col-start-2 col-end-3 row-span-3 bg-borderWhite w-[2px]"></div>
          <CollectionBox
            img="/nft.png"
            num={2}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <div className="xl:block hidden col-start-4 col-end-5 row-span-3 bg-borderWhite w-[2px]"></div>
          <CollectionBox
            img="/nft.png"
            num={3}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <CollectionBox
            img="/nft.png"
            num={4}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <CollectionBox
            img="/nft.png"
            num={5}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <CollectionBox
            img="/nft.png"
            num={6}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <CollectionBox
            img="/nft.png"
            num={7}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <CollectionBox
            img="/nft.png"
            num={8}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
          <CollectionBox
            img="/nft.png"
            num={9}
            title="Mutant Ape Yacht Club"
            floor={14.7}
            price={"82,859"}
            volume={198.7}
            percent={"+204.52"}
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;

const CollectionBox = ({ num, img, title, floor, price, volume, percent }) => {
  return (
    <div className="flex justify-start items-center gap-2 2xl:gap-5 w-full">
      <div className="flex justify-start items-center gap-1">
        <h5 className="text-black dark:text-white text-[30px] font-avenor">
          {num}
        </h5>
        <img
          src={img}
          className="min-w-[93px] aspect-square object-contain"
          alt=""
        />
      </div>
      <div className="flex justify-start w-full items-start flex-col gap-2">
        <p className="text-black dark:text-white text-lg mb-1 font-medium">
          {title}
        </p>
        <div className="flex justify-between items-center gap-1 w-full">
          <p className="text-black dark:text-white font-light">
            Floor: <span className="text-[#189FFF] font-normal">{floor}</span>
          </p>
          <p className="text-black dark:text-white font-light">
            Price: <span className="text-[#189FFF] font-normal">{price}</span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-1 w-full">
          <p className="text-black dark:text-white font-light">
            Volume: <span className="text-[#189FFF] font-normal">{volume}</span>
          </p>
          <p className="text-[#28C51A] font-medium">{percent}%</p>
        </div>
      </div>
    </div>
  );
};
