import { useState } from "react";
import GradientButton from "../components/GradientButton";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className=" bg-headerBg border-b border-solid border-gray wrapper fixed top-0 left-0 z-[50]">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 block lg:hidden left-0 w-full h-full z-[89] bg-black opacity-60"
        ></div>
      )}
      <div className="contain h-[93px]  justify-between items-center">
        <div className="flex justify-start items-center gap-6">
          <img src="/logo.png" className="w-[148px] object-contain" alt="" />
          <input
            type="text"
            placeholder="Search Collections, NFT, Users... "
            className="text-white text-[13px] xl:block hidden font-light w-[240px] mid:w-[300px] h-[47px] bg-jungleGreen rounded-full border-none outline-none pl-5"
          />
        </div>
        <nav
          className={`flex justify-start items-center sm:items-start lg:items-center gap-8 overflow-y-auto lg:overflow-visible lg:gap-5 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } fixed lg:static top-0 lg:flex-row flex-col w-full lg:w-auto max-w-[450px] lg:max-w-none pt-[6rem] px-[3rem] pb-5 lg:p-0 bg-jungleGreen border-l border-solid border-gray lg:border-none lg:bg-transparent h-full lg:h-auto  z-[90] transition-all duration-1000`}
        >
          <a href="#" className="text-white text-base">
            Collections
          </a>
          <a href="#" className="text-white text-base">
            Sell
          </a>
          <a href="#" className="text-white text-base">
            Explore
          </a>
          <button className="bg-transparent relative min-w-[42px] aspect-square rounded-full isolate">
            <div className="rounded-full w-full h-full relative z-20 bg-jungleGreen grid place-items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <div className="absolute rounded-full bg-goldGr -inset-[1px] -z-10"></div>
          </button>
          <GradientButton
            text="Buy $OSEA"
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            classes="w-[191px] h-[53px] min-h-[53px]"
            textSmall
          />

          <GradientButton
            ico={
              <img
                src="/wallet-ico.png"
                className="w-5 object-contain"
                alt=""
              />
            }
            classes="w-[191px] h-[53px] min-h-[53px]"
            text="Connect Wallet"
            inverse
            textSmall
          />
        </nav>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 relative z-[91] lg:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 relative z-[91] lg:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
