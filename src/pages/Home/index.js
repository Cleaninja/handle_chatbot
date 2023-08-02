import { Checkbox, Col, Input, Rate, Row, Slider, Space } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import "./home.css";
import Question from "../../components/Question";

const questionInputs = [
  {
    question: "What kind of talent?",
    note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
  },
  {
    question: "What additional language should the applicant know?",
    note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam ",
  },
  {
    question: "WORK LOCATION",
    note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
  },
  {
    question: "Where are people being recruited?",
    note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
  },
  {
    question: "What benefits does the company / job offer?",
    note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
  },
];

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
              <button className="rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] p-4">
                <p className="px-4 text-xl font-medium text-white leading-5">
                  Start Hiring
                </p>
              </button>
              <div className="pl-5">
                <Rate value={5} />
                <p className="text-base font-medium leading-6">
                  5.0 Trustpilot
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="hidden md:contents">
            <img
              src="./assets/imgs/home.png"
              className="float-right"
              width="450px"
              alt="bot-worker"
            />
          </Col>
        </Row>
      </div>

      <div className="w-100% max-w-[1600px] mx-auto">
        <img src="./assets/imgs/image4.png" alt="banner" />
      </div>

      {/* Book Applicants Online */}
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20">
        <div className="md:grid grid-cols-10 gap-14">
          <div className="col-span-6 pb-[34px]">
            <h1
              style={{ fontFamily: "Ubuntu-bold" }}
              className="leading-normal font-extrabold text-left text-5xl md:text-6xl md:text-[70px]"
            >
              Book Applicants Online
            </h1>
            <p
              style={{ fontFamily: "Ubuntu-bold" }}
              className="pt-3 text-xl font-normal leading-[30px]"
            >
              Select the right package and enter the requirements for the
              applicants.
            </p>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-6">
            <div className=" text-center">
              <p className="pt-8 pb-2 text-2xl font-normal">
                Drag the slider 👇 to build your own bundle of
              </p>
              <div className="px-8">
                <Slider defaultValue={30} />
              </div>
              <p className="pt-4 text-2xl font-normal">
                $ 6,150 for 25 4,920 for = $ 246 197 per post
              </p>
              <p className="pt-2 text-2xl font-normal">
                You save $ 1,230 (20% discount)
              </p>
            </div>
          </div>
          <div className="col-span-4 flex items-center flex-row">
            <button className="rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] py-4 w-full">
              <p className="px-4 text-xl font-medium text-white leading-5">
                Buy for € 1’254.00
              </p>
            </button>
          </div>
          <div className="col-span-6">
            <Space size="large" direction="vertical">
              {questionInputs.map((item, index) => (
                <Space.Compact key={index}>
                  <QuestionInput question={item.question} note={item.note} />
                </Space.Compact>
              ))}
            </Space>

            <div className="mt-20">
              <div className="grid grid-cols-12 gap-3">
                <Checkbox className="col-span-8">
                  Get premium support and help with your job post +€10/applicant
                </Checkbox>
                <div className="col-span-4 flex items-center justify-between">
                  <p className="text-sm font-normal">Cell Text</p>
                  <div>
                    <p className="text-xs rounded-[10px] bg-[#f2f4f8] px-[10px]">
                      Badge
                    </p>
                  </div>
                </div>
                <Checkbox className="col-span-8">
                  Get premium support and help with your job post +$99 Senior
                  Designer
                </Checkbox>
                <div className="col-span-4 flex items-center justify-between">
                  <p className="text-sm font-normal">Cell Text</p>
                  <div>
                    <p className="text-xs rounded-[10px] bg-[#f2f4f8] px-[10px]">
                      Badge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ccd3e1] p-2">
        <img className="w-full" src="./assets/imgs/image3.png" alt="img" />
        <img className="w-full mt-3" src="./assets/imgs/image5.png" alt="img" />
      </div>

      {/* FAQ */}
      <div className="bg-[#4F48F0] w-full p-4 md:p-8 lg:p-10 xl:p-20 text-center">
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
