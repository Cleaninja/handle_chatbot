import React from "react";
import Logo from "../../assets/imgs/handle-purple.svg";
export default function Header() {
  return (
    <div className="px-4 lg:px-12 xl:px-container absolute top-1px flex items-center justify-between h-74 w-full bg-white header-shadow">
      <div className="flex items-center">
        <div>
          <img src={Logo} className="w-28 pb-1" />
        </div>
        <div className="md:flex items-center hidden">
          <p className="capture pt-4 pb-4 ml-6 hover:text-gray-600 cursor-pointer">
            Features ▾
          </p>
          <p className="capture pt-4 pb-4 ml-4 hover:text-gray-600 cursor-pointer">
            Pricing
          </p>
          <p className="capture pt-4 pb-4 ml-4 hover:text-gray-600 cursor-pointer">
            About us
          </p>
        </div>
      </div>
      <div className="md:flex items-center  hidden">
        <p className="capture pt-4 pb-4 ml-4 hover:text-gray-600 cursor-pointer">
          Sign up
        </p>
        <p className="capture pt-4 pb-4 ml-4 hover:text-gray-600 cursor-pointer">
          Sign In
        </p>
        <button className="primary-btn p-3 ml-4">Schedule demo</button>
      </div>
    </div>
  );
}
