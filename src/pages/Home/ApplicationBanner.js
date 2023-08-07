import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function ApplicationBanner() {
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
        className="w-100% mx-auto p-4 md:p-8 lg:p-10 xl:p-20 bg-[#5648f6] text-white"
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

        <Button href="#calculation" type="primary" className="border border-gray-400 bg-transparent" size="large">
          Book Applications Online <RightOutlined />
        </Button>
      </div>
    </>
  );
}
