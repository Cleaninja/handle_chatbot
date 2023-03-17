import { Space } from "antd";
import React from "react";
export default function UseCaseContainer({
  amount = "",
  unit = "",
  explain = "",
}) {
  return (
    <Space className="py-5 px-24" size={35} direction="vertical">
      <div className="text-7xl text-main font-semibold">{amount}</div>
      <h2 className="text-main">{unit}</h2>
      <div className="text">{explain}</div>
    </Space>
  );
}
