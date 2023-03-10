const Title = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-full dark:bg-title h-[133px] max-w-[600px]">
      <h2 className="uppercase text-black dark:text-white text-[30px] md:text-[40px] font-avenor font-normal">
        {text}
      </h2>
    </div>
  );
};

export default Title;
