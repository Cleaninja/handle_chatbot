import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HandleLogo from "../../assets/imgs/handle_logo.png";
export default function FullMenu({ isTrue = false, onIsTrue = () => {} }) {
  return (
    <>
      {isTrue ? (
        <div className="h-full w-full fixed z-30 bg-back p-4">
          <div className="flex justify-between items-center">
            <img src={HandleLogo} alt="logo" />
            <CloseOutlined
              onClick={() => onIsTrue(false)}
              className="text-2xl"
            />
          </div>
          <div className="text-center">
            <p className="capture pt-4 pb-4 ml-6 hover:text-gray-500 cursor-pointer">
              Features
            </p>
            <Link to="/pricing">
              <p className="capture pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer">
                Pricing
              </p>
            </Link>
            <Link to="/casestudy">
              <p className="capture pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer">
                Case Study
              </p>
            </Link>
            <Link to="/about">
              <p className="capture pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer">
                About us
              </p>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
