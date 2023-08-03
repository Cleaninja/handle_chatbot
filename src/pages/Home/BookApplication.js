import { RightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Slider, Space } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";


export default function BookApplication() {
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

  const slides = [
    {
      name: "Restaurants",
      image: "restaurant.jpg",
    },
    {
      name: "Hotels",
      image: "hotel.jpg",
    },
    {
      name: "Cruise Ships",
      image: "cruise-ship.jpg",
    },
    {
      name: "Leisure resorts",
      image: "leisure-resort.jpg",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: "url('./assets/imgs/cta-1.png')" }}
        className="w-100% max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20 bg-[#5648f6] text-white"
      >
        <div className="lg:grid grid-cols-2">
          <div>
            <h1 className="text-6xl lg:text-[80px] !font-bold pb-2">26K+</h1>
            <h3 className="text-2xl lg:text-3xl font-bold pb-4">
              Over 26,000 Mediated Applicants Per Season.
            </h3>
            <h4 className=" text-[20px] lg:text-2xl pb-2">
              Your Advantages Of Working With Us:
            </h4>
            <ul className="mb-5 list-disc pl-7">
              <li className="">
                <u>Quality Of Applicants</u> : 30% Applicants Become Employees
              </li>
              <li className="">
                <u>Cost savings – without risk</u> : You only pay per applicant
              </li>
              <li className="">
                <u>Time saving</u> : Fast deliveries (7-21 days)
              </li>
              <li className="">
                <u>Flexibility</u> : Respond quickly to spikes in demand
              </li>
              <li className="">
                <u>Targeted selection</u> : We only deliver the relevant
                applicants
              </li>
            </ul>
          </div>
          <div className="lg:-mr-32">
            <Swiper
              effect={"fade"}
              speed={300}
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 1000, // Set your desired autoplay delay in milliseconds
                disableOnInteraction: false,
              }}
              // onSwiper={(swiper) => setSwiper(swiper)}
            >
              {slides.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                  <img className="rounded-lg" src={`./assets/imgs/${item?.image}`} />
                  <p>{item?.name}</p>
                  </div>
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Button type="primary" className="border border-gray-400" size="large">
          Book Applications Online <RightOutlined />
        </Button>
      </div>

      {/* Book Applicants Online */}
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20">
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
    </>
  );
}
