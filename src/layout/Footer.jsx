const Footer = () => {
  return (
    <footer className="wrapper mt-[120px] sm:mt-[150px] relative isolate ">
      <div className="absolute -top-[1px] left-0 w-full h-full bg-goldGr -z-10"></div>
      <div className="wrapper bg-[#1A1C1F]">
        {" "}
        <div className="contain sm:flex-row flex-col  justify-between items-center py-6 gap-4 sm:p-0 sm:gap-0 sm:h-[100px]">
          <p className="text-white sm:text-base text-center text-sm font-medium">
            Copyright @2023 Ordinsea. All Right Reserved
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://twitter.com/Ordinsea" target="blank">
              <img
                src="/twitter.png"
                className="w-[41px] aspect-square object-contain"
                alt=""
              />
            </a>
            <a href="https://t.me/ordinsea" target="blank">
              <img
                src="/telegram.png"
                className="w-[41px] aspect-square object-contain"
                alt=""
              />
            </a>
            <a href="#" target="blank">
              <img
                src="/medium.png"
                className="w-[41px] aspect-square object-contain"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
