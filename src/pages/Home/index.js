import { Col, Input, Rate, Row, Space } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import Question from "../../components/Question";
import BookApplication from "./BookApplication";
import "./home.css";
import Industry from "./Industry";
import CustomerTestimonials from "./CustomerTestimonials";
import ApplicationBanner from "./ApplicationBanner";

const faqs = [
  {
    title: "Who should use the app?",
    child: "",
  },
  {
    title: "What is included with my subscription?",
    child: "",
  },
  {
    title: "How do I get paid?",
    child: "",
  },
  {
    title: "Is my personal information safe?",
    child: "",
  },
  {
    title: "How can we get in touch?",
    child: "",
  },
];

const QuestionInput = ({ question = "", note = "" }) => {
  return (
    <>
      {question && (
        <Space direction="vertical" size="small">
          <Space.Compact>
            <p className="text-sm font-bold text-[0F1115]">{question}</p>
          </Space.Compact>
          <Space.Compact className="w-full">
            <Input style={{ background: "#ECECEC" }} />
          </Space.Compact>
          <Space.Compact>
            <p className="text-[11px]">{note}</p>
          </Space.Compact>
        </Space>
      )}
    </>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto pt-40 pb-20 px-4 md:px-8 lg:px-10 xl:px-20 bg-[#CCD3E1]">
        <Row gutter={[12, 12]} justify={"space-between"} align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <h1
              style={{ fontFamily: "Ubuntu-bold" }}
              className="leading-normal text-[#21272A] font-extrabold text-left text-5xl md:text-6xl md:text-[70px]"
            >
              Tourism Jobs-
              <br className="hidden md:block" />
              For Your Next
              <br className="hidden md:block" />
              Season.
              <br className="hidden md:block" />
            </h1>
            <div className="pt-12 text-lg leading-[140%]">
              Animators, sports trainers, cooks and service staff. Simply book
              applications from top employees online. Fast and risk-free. Pay
              per applicant. On request also with a video application.
            </div>
            <div className="pt-16 flex justify-start items-center">
              <a href="#calculation" className="rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] p-4">
                <p className="px-4 text-xl font-medium text-white leading-5">
                  Start Hiring
                </p>
              </a>
              <div className="pl-5">
                <Rate value={5} />
                <p className="text-base font-medium leading-6">
                  5.0 Trustpilot
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <img
              src="./assets/imgs/home.png"
              className="float-right w-full"
              alt="bot-worker"
            />
          </Col>
        </Row>
      </div>
      <ApplicationBanner />
      <BookApplication />

      {/* Industry */}

      <div className="bg-[#ccd3e1] p-2">
        <Industry />
        <CustomerTestimonials />
      </div>

      {/* FAQ */}
      <div id="faq" className="bg-[#4F48F0] w-full p-4 md:p-8 lg:p-10 xl:p-20 text-center">
        <h2
          style={{ fontFamily: "Ubuntu-bold" }}
          className="text-white text-[42px] font-bold"
        >
          Frequently asked questions by our customers
        </h2>
        <Space className="w-full mt-16" direction="vertical" size={"small"}>
          {faqs.map((item, index) => {
            return (
              <Space.Compact className="w-full" key={index}>
                <Question title={item?.title} />
              </Space.Compact>
            );
          })}
        </Space>
      </div>

      {/* Get a custom quote / Free expert consultation */}
      <div className="w-full p-4 md:p-8 lg:p-10 xl:p-20 text-center">
        <h2
          style={{ fontFamily: "Ubuntu-bold" }}
          className="text-[42px] font-bold"
        >
          Get a custom quote / Free expert consultation
        </h2>
        <p className="pt-12 text-lg">
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
          scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies
          purus iaculis.
        </p>
      </div>
    </Layout>
  );
}
