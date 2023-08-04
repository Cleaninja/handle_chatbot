import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
export default function Header({ onFullMenu = () => {} }) {
  return (
    <div className="max-w-[1600px] mx-auto left-1/2 transform -translate-x-1/2 px-4 md:px-8 lg:px-10 xl:px-20 flex items-center justify-between h-74 w-full bg-[#CCD3E1] header-shadow fixed z-20">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img src="./assets/imgs/logo.png" className="w-60 md:w-[314px] pb-1" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="md:flex items-center  hidden">
        <a href="#calculation" className="rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] ml-4  px-4 py-[7px]"><p className="px-4 text-xl font-medium text-white leading-5">Start Hiring</p></a>
      </div>
      <MenuOutlined
        onClick={() => onFullMenu(true)}
        className="text-2xl md:hidden hover:text-main cursor-pointer"
      />
    </div>
  );
}
