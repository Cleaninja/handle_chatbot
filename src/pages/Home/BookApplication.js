import { Checkbox, Input, Select, Slider, Space } from "antd";
import React from "react";
import countries from "./countries.json";
import "swiper/css";

export default function BookApplication() {
  const questionInputs = [
    {
      question: "What kind of talent?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      options: [
        { label: "Entertainer ", value: "Entertainer " },
        { label: "Waiter / Bar", value: "Waiter / Bar" },
        { label: "Cook ", value: "Cook " },
      ],
    },
    {
      question: "What additional language should the applicant know?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam ",
      options: [
        {
          label: "German (DE)",
          value: "DE",
        },
        { label: "French (FR) ", value: "FR" },
        { label: "Spanish (ES) ", value: "ES" },
        { label: "Portuguese (PT) ", value: "PT" },
        { label: "Italian (IT) ", value: "IT" },
        { label: "Russian (RUS) ", value: "RUS" },
        { label: "Ukrainian (UKR)", value: "UKR" },
      ],
    },
    {
      question: "Where is the work location?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      mode: "multiple",
      options: countries.map((item) => ({
        label: item?.name,
        value: item?.name,
      })),
    },
    {
      question: "Where are people being recruited?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      defaultVal: "WorldWide",
      mode: "multiple",
      options: countries.map((item) => ({
        label: item?.name,
        value: item?.name,
      })),
    },
    {
      question: "What benefits does the company / job offer?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      mode: "multiple",
      options: [
        {
          label: "provided meals",
          value: "provided meals",
        },
        {
          label: "provided accommodation",
          value: "provided accommodation",
        },
        {
          label: "paid transportation",
          value: "paid transportation",
        },
      ],
    },
  ];

  const QuestionInput = ({
    question = "",
    note = "",
    options = [],
    mode = "single",
    defaultVal = false,
  }) => {
    return (
      <>
        {question && (
          <Space direction="vertical" size="small">
            <Space.Compact>
              <p className="text-sm font-bold text-[0F1115]">{question}</p>
            </Space.Compact>
            <Space.Compact className="w-full">
              {defaultVal ? (
                <Select
                  defaultValue={defaultVal}
                  className="w-full"
                  mode={mode}
                  options={options}
                />
              ) : (
                <Select className="w-full" mode={mode} options={options} />
              )}
            </Space.Compact>
            <Space.Compact>
              <p className="text-[11px]">{note}</p>
            </Space.Compact>
          </Space>
        )}
      </>
    );
  };

  return (
    <>
      {/* Book Applicants Online */}
      <div
        id="calculation"
        className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20"
      >
        <div className="md:grid grid-cols-10 gap-14">
          <div className="col-span-6 pb-[34px]">
            <h1
              style={{ fontFamily: "Ubuntu-bold" }}
              className="leading-normal font-extrabold text-left text-5xl md:text-6xl md:text-[64px]"
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
                <Slider defaultValue={30} max={300} />
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
                  <QuestionInput
                    question={item.question}
                    note={item.note}
                    options={item?.options ?? []}
                    mode={item?.mode ?? ""}
                    defaultVal={item?.defaultVal ?? ""}
                  />
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
    </>
  );
}
