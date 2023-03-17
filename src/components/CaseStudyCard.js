import { Button } from "antd";
import React from "react";
import CaseCardImg from "../assets/imgs/HomePage/casecard.png";
export default function CaseStudyCard({ title = "", explain = "" }) {
  return (
    <div className="bg-white rounded-lg min-h-max h-full pb-8">
      <div className="bg-main h-24 rounded-t-lg relative">
        <img
          className="absolute bottom-3 left-3"
          src={CaseCardImg}
          alt="case"
        />
      </div>
      <p className="text-2xl font-medium float-left pt-1 ml-5">{title}</p>
      <p className="capture float-left pt-1 ml-5">{explain}</p>

      <Button
        size="large"
        className="flex justify-center items-center mt-20 ml-5"
        type="primary"
        ghost
      >
        View Case Study
      </Button>
    </div>
  );
}
