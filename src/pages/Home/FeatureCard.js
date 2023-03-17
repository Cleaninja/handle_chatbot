import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import ChatBotImg from "../../assets/imgs/HomePage/Communication bot.svg";
import DataBotImg from "../../assets/imgs/HomePage/Data bot.svg";
import RelationBotImg from "../../assets/imgs/HomePage/Relations bot.svg";
export default function FeatureCard({ title = "", mod = "", explain = "" }) {
  return (
    <div
      style={{ backgroundColor: "#f6f9fd" }}
      className="p-8 text-center rounded-lg shadow-md h-full min-h-max relative break-all"
      bordered={false}
    >
      <img
        className="m-auto"
        src={
          mod === "chat"
            ? ChatBotImg
            : mod === "data"
            ? DataBotImg
            : RelationBotImg
        }
        alt="Bot"
      />
      <h2 className="text-main leading-10 pt-6">{title}</h2>
      <p className="capture pt-4">{explain}</p>
      <Link className="flex justify-center items-center mt-8">
      {/* <Link className="flex justify-center items-center left-1/2 transform -translate-x-1/2 text-main absolute bottom-8"> */}
        <p className="capture pr-5">More details</p>
        <RightOutlined className="pt-1" />
      </Link>
    </div>
  );
}
