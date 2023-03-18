import { RightOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
export default function AutomationCard({
  cardimg = "",
  title = "",
  explain = "",
}) {
  return (
    <div>
      <div className="left-0 top-0">
        <img src={cardimg} alt="cardimg" />
      </div>
      <p className="text-2xl font-extrabold leading-9 text-gray-900 py-3">
        {title}
      </p>
      <p className="text leading-8 pb-3 h-36 overflow-hidden">{explain}</p>
      <div className="flex items-center">
        <p className="text-xl font-medium leading-7 text-main pr-2">
          More details
        </p>
        <RightOutlined className="text-main" />
      </div>
      <div className="min-w-min w-11/12">
      <Divider />
      </div>
    </div>
  );
}
