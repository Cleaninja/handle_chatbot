import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import IndustryCard from "./IndustryCard";

export default function Industry() {
  const cards = [
    {
      title: "Leisure Resorts",
      image: "icon-07-1-1.png",
      content: "Animators, Service Staff, Cooks, Reception",
    },
    {
      title: "Hotels",
      image: "icon-06-1-1.png",
      content: "Animators, Service Staff, Cooks, Reception",
    },
    {
      title: "Restaurants",
      image: "icon-08-1-1.png",
      content: "Service Staff, Cooks, Reception",
    },
    {
      title: "Job Agent",
      image: "icon-11-1.png",
      content: "Animators, Service Staff, Cooks, Reception",
    },
    {
      title: "Cruise",
      image: "icon-10-1.png",
      content: "Animators, Service Staff, Cooks, Reception",
    },
    {
      title: "And More",
      image: "icon-09-2.png",
      content: "Animators, Waiters, Cooks...",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: "url('./assets/imgs/cta-1.png')" }}
        className="w-100% max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20 bg-[#5648f6] text-white"
      >
        <div className="lg:grid grid-cols-11 lg:gap-16">
          <div className="col-span-6">
            <img
              className="rounded-xl xl:rounded-3xl"
              src="./assets/imgs/woman-02.jpg"
            />
          </div>
          <div className="col-span-5 pt-5 lg:pt-0 text-center lg:text-left">
            <Button
              type="primary"
              className="!bg-[#fff] !text-black"
              size="large"
              disabled
            >
              Industry Experiences
            </Button>
            <div className="mt-5">
              <img
                className="w-[10rem] rounded-lg mx-auto lg:m-0"
                src="./assets/imgs/100-prozent-final-02.jpg"
              />
            </div>
            <h2
              style={{ fontFamily: "Ubuntu-bold" }}
              className="pt-4 text-3xl font-bold"
            >
              Recruiting 100% Tourism-Jobs.
            </h2>
            <p className="py-4">
              For years we have focused on recruiting applicants for tourism
              companies. We know what is important and know how to get
              applicants quickly and reliably.
            </p>
            <Button
              type="primary"
              className="border border-gray-400"
              size="large"
            >
              <div className="flex items-center">
                <p className="pr-2">Do you have questions?</p>{" "}
                <ArrowRightOutlined />
              </div>
            </Button>
          </div>
        </div>
        <div className="lg:grid grid-cols-12 gap-16 pt-12 lg:pt-24 xl:pt-12">
          <div className="col-span-8">
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-6">
              {cards.map((item, index) => {
                return (
                  <IndustryCard
                    key={index}
                    title={item?.title}
                    content={item?.content}
                    image={item?.image}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-span-4 lg:-mt-[100px] lg:h-[calc(100% + 97px)] bg-white rounded-2xl xl:rounded-3xl mt-6 p-8 text-center lg:text-left">
            <h1 className="text-6xl lg:text-[80px] !font-bold pb-2 text-[#5648f6]">
              26K+
            </h1>
            <h3 className="text-2xl lg:text-3xl pb-4 text-gray-900 font-extrabold">
              Applicants per year
            </h3>
            <p className="text-gray-900 pb-4">
              Matching your requirements, such as language (EN, DE, FR, ES, PT,
              RUS, UKR), periods of time, users. The focus is on recruiting
              applicants in the tourism industry. This is our focus. We know how
              to get the best applications and what to look out for when making
              your selection.
            </p>
            <Button
              type="primary"
              className="bg-[#5648f6]"
              size="large"
            >
              <div className="flex items-center"><p className="pr-3">Book Applications Online</p> <ArrowRightOutlined /></div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
