import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

export default function Testimonitial() {
  const handleChange = () => {
    console.log("here");
  };
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={10} lg={10} xl={10}>
          <h2 className="text-main leading-10">
            How Handle helps companies grow their business
          </h2>
          <div className="flex items-center justify-start mt-10">
            <ArrowLeftOutlined
              onClick={handleChange}
              className="text-lg hover:text-main cursor-pointer"
            />
            <ArrowRightOutlined
              onClick={handleChange}
              className="text-lg ml-6 hover:text-main cursor-pointer"
            />
          </div>
        </Col>
        <Col sm={24} md={14} lg={14} xl={14} className="bg-white">
          <div className="p-6">
            <h4 className="text-main">BUSINESS INSIDER</h4>
            <p className="text pt-8">
              “As a busy marketing manager, I can see the value immediately.
              Handle has really helped us engage more customers, allowing us to
              focus on what we do - create marketing campaigns. I love it!”
            </p>
            <p className="capture pt-8">Sophia C.</p>
            <p className="capture pt-8">New York, NY</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
