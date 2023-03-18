import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/handle-purple.svg";
export default function Header({ onFullMenu = () => {} }) {
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-container flex items-center justify-between h-74 w-full bg-white header-shadow fixed z-20">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img src={Logo} className="w-28 pb-1" alt="logo" />
          </Link>
        </div>
        <div className="md:flex items-center hidden">
          <Link to="/features">
            <p className="pt-4 pb-4 ml-6 hover:text-gray-500 cursor-pointer text-lg">
              Features
            </p>
          </Link>
          <Link to="/pricing">
            <p className="pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer text-lg">
              Pricing
            </p>
          </Link>
          <Link to="/casestudy">
            <p className="pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer text-lg">
              Case Study
            </p>
          </Link>
          <Link to="/about">
            <p className="pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer text-lg">
              About us
            </p>
          </Link>
        </div>
      </div>
      <div className="md:flex items-center  hidden">
        <p className="pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer text-lg">
          Sign up
        </p>
        <p className="pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer text-lg">
          Sign In
        </p>
        <button className="primary-btn p-3 ml-4">Schedule demo</button>
      </div>
      <MenuOutlined
        onClick={() => onFullMenu(true)}
        className="text-2xl md:hidden hover:text-main cursor-pointer"
      />
    </div>
  );
}
