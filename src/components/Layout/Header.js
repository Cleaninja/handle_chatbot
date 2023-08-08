import React from "react";
import { Link } from "react-router-dom";
export default function Header({ onFullMenu = () => {} }) {
  return (
    <div className="bg-[#CCD3E1]">
      <div className="max-w-[1600px] mx-auto left-1/2 transform -translate-x-1/2 px-4 md:px-8 lg:px-10 xl:px-20 flex items-center justify-between h-74 w-full  fixed z-20">
        <div className="flex items-center">
          <div>
            <Link to="/">
              <img
                className="w-60 md:w-[314px] pb-1"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="#calculation"
            className="cta-button rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] ml-4  px-4 py-[7px] min-w-[148px]"
          >
            <p className="px-4 text-sm sm:text-base font-extrabold text-white leading-5">
              Start Hiring
            </p>
          </a>
        </div>
        {/* <MenuOutlined
        onClick={() => onFullMenu(true)}
        className="text-2xl md:hidden hover:text-main cursor-pointer"
      /> */}
      </div>
    </div>
  );
}
