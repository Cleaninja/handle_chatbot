import { Col, Rate, Row } from "antd";
import React from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image: "final-rezeption-01.jpg",
  },
  {
    image: "final-koch.jpg",
  },
  {
    image: "final-animateur.jpg",
  },
  {
    image: "final-service.jpg",
  },
];

export default function Hero() {
  return (
    <div className="mx-auto pt-24 md:pt-40 pb-20 px-4 md:px-8 lg:px-10 xl:px-20 bg-[#CCD3E1]">
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <h1
            style={{ fontFamily: "Ubuntu-bold" }}
            className="md:leading-none text-[#21272A] font-extrabold text-left text-5xl md:text-6xl md:text-[70px]"
          >
            Tourism Jobs-
            <br className="hidden md:block" />
            For Your Next
            <br className="hidden md:block" />
            Season.
            <br className="hidden md:block" />
          </h1>
          <div className="pt-8 md:pt-10 text-lg leading-[140%]">
            Animators, sports trainers, cooks and service staff. Simply book
            applications from top employees online. Fast and risk-free. Pay per
            applicant. On request also with a video application.
          </div>
          <div className="py-8 md:pt-10 flex justify-start items-center">
            <a
              href="#calculation"
              className="rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] p-4 cta-button"
            >
              <p className="px-4 text-xl font-medium text-white leading-3">
                Start Hiring
              </p>
            </a>
            <div className="pl-5">
              <Rate value={5} />
              <p className="text-base font-medium leading-6">5.0 Trustpilot</p>
            </div>
          </div>
        </Col>
        <Col className="text-center" xs={24} sm={24} md={24} lg={12}>
          <Swiper
            effect={"fade"}
            speed={1500}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 1800, // Set your desired autoplay delay in milliseconds
              disableOnInteraction: false,
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="rounded-lg w-full h-full"
                  src={`./assets/imgs/${item?.image}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
}
