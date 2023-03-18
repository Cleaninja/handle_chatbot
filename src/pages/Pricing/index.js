import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import Question from "../../components/Question";
import PopularHightlight from "./PopularHightlight";
import PricingHeaderCard from "./PricingHeaderCard";
import pricingItems from "./pricingItems.json";

const pricingTypes = [
  { title: "Business", content: "$49", unit: "/mo" },
  { title: "Professional", content: "$99", unit: "/mo" },
  { title: "Premium", content: "Contact us" },
];

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Layout on={false}>
      <div className="pt-44 px-4 md:px-8 lg:px-12 xl:px-container bg-white">
        {/* Pricing header */}
        <h1 className="leading-normal text-main-active font-extrabold text-center">
          Enjoy the benefits of automated interaction
        </h1>
        <div className="capture leading-9 text-center pt-4">
          Perfect synergy between your team and AI chatbot
        </div>
        <div className="pt-4 text-center">
          <Button.Group size={"large"}>
            <Button
              type="default"
              onClick={() => setIsYearly(true)}
              className={isYearly ? "bg-white" : "bg-strok-divider"}
            >
              Bill yearly <span className="text-main-active">-10%</span>
            </Button>
            <Button
              type="default"
              onClick={() => setIsYearly(false)}
              className={!isYearly ? "bg-white" : "bg-strok-divider"}
            >
              Bill monthly
            </Button>
          </Button.Group>
        </div>
        {/* Pricing List */}
        <Row className="pt-20">
          <Col xs={24} sm={24} md={9}></Col>
          {pricingTypes?.map((item, index) => (
            <Col key={index} xs={8} sm={8} md={5}>
              {item?.title === "Professional" ? (
                <PopularHightlight isHeader={true} locate={"top"}>
                  <PricingHeaderCard
                    title={item?.title ?? ""}
                    content={item?.content ?? ""}
                    unit={item?.unit ?? ""}
                    colorClass={index % 2 === 0 ? "bg-back" : ""}
                  />
                </PopularHightlight>
              ) : (
                <PricingHeaderCard
                  title={item?.title ?? ""}
                  content={item?.content ?? ""}
                  unit={item?.unit ?? ""}
                  colorClass={index % 2 === 0 ? "bg-back" : ""}
                />
              )}
            </Col>
          ))}
        </Row>
        {pricingItems?.map((item, index) => (
          <Row
            justify={"space-between"}
            align="middle"
            className={index % 2 === 0 && "bg-back"}
            key={index}
          >
            <Col className="text-left" xs={24} sm={24} md={9}>
              <p className="capture p-4">{item?.title ?? ""}</p>
            </Col>
            <Col className="text-center" xs={8} sm={8} md={5}>
              <p className="p-4">
                {item?.business === true ? (
                  <CheckCircleOutlined className="text-main-active text-lg" />
                ) : (
                  item?.business ?? ""
                )}
              </p>
            </Col>

            <Col className="text-center" xs={8} sm={8} md={5}>
              <PopularHightlight
                locate={!!pricingItems?.[index + 1] ?? false ? "" : "bottom"}
              >
                <p className="p-8 w-full h-full">
                  {item?.professional === true ? (
                    <CheckCircleOutlined className="text-main-active text-lg" />
                  ) : (
                    item?.professional ?? ""
                  )}
                </p>
              </PopularHightlight>
            </Col>
            <Col className="text-center" xs={8} sm={8} md={5}>
              <p className="p-4">
                {item?.premium === true ? (
                  <CheckCircleOutlined className="text-main-active text-lg" />
                ) : (
                  item?.premium ?? ""
                )}
              </p>
            </Col>
          </Row>
        ))}
        {/* Pricing questions */}
      </div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-container py-12">
        <h2 className="leading-normal text-main-active font-extrabold text-center">
          Handle pricing questions
        </h2>
        <div className="capture leading-9 text-center pt-4">
          If you have any questions regarding pricing, please refer to the FAQs
          below or contact us directly at support@askhandle.com
        </div>
        <div className="pt-8">
          <Question
            title="Are there any upfront costs or additional fees?"
            children="Are there any upfront costs or additional fees?"
          />
          <Question
            title="Does Handle integrate with other applications and systems?"
            children="Does Handle integrate with other applications and systems?"
          />
          <Question title="Can I pay monthly?" children="Can I pay monthly?" />
          <Question
            title="How long are your subscriptions?"
            children="How long are your subscriptions?"
          />
          <Question
            title="Can I add more products or features at any time?"
            children="Can I add more products or features at any time?"
          />
        </div>
      </div>
      {/* cta */}
      <CTA />
    </Layout>
  );
}

export default Pricing;
