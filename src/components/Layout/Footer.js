import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="max-w-[1600px] mx-auto py-12 px-4 md:px-8 lg:px-10 xl:px-20 flex items-center justify-between h-74 w-full bg-[#CCD3E1] z-20">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img
              src="./assets/imgs/logo.png"
              className="w-60 md:w-[314px]"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="md:flex items-center">
        <p className="text-sm font-normal leading-[140%]">GetCandidates @ 2023. All rights reserved.</p>
      </div>
    </div>
  );
}
