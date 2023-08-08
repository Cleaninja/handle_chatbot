import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
export default function Header({ onFullMenu = () => {} }) {
  return (
    <div className="bg-[#CCD3E1] z-10 fixed w-full left-1/2 transform -translate-x-1/2">
      <div className="max-w-[1600px] mx-auto  px-4 md:px-8 lg:px-10 xl:px-20 flex items-center justify-between h-74 w-full z-20">
        <div className="flex items-center">
          <div>
            <Link to="/">
              <img
                src="./assets/imgs/logo.png"
                className="w-60 md:w-[314px] pb-1"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            size="large"
            href="#calculation"
            className="rounded-lg border-2 bg-[#524CF6] min-w-[148px]"
          >
            <p className="px-4 text-sm sm:text-base font-semibold text-white leading-5">
              Start Hiring
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
