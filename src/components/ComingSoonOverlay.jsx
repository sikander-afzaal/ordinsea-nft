const ComingSoonOverlay = () => {
  return (
    <div className="flex justify-center items-center  absolute h-[105%] -translate-y-1/2 top-1/2 left-0 inset-x-0 bg-[#FFFFFF1A] backdrop-blur-[7.5px] z-20">
      <p className="text-white uppercase bg-[#FFFFFF40] rounded-[15px] w-[90%] max-w-[500px] h-[110px] sm:h-[150px] sm:text-[45px] text-[35px] font-avenor grid place-items-center">
        Coming Soon
      </p>
    </div>
  );
};

export default ComingSoonOverlay;
