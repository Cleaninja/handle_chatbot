import { Button } from "antd";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerReview from "./CustomerReview";

export default function CustomerTestimonials() {
  const reviews = [
    {
      name: "Beth L.",
      review:
        "We have been working with you for years and are always extremely satisfied with the applications. We are understood and it is always quick and uncomplicated.",
      role: "HR manager",
      type: "Cruise",
      avatar: "avatar1.jpg",
    },
    {
      name: "Jack W.",
      review:
        "We have been working with you for years and are always extremely satisfied with the applications. We are understood and it is always quick and uncomplicated.",
      role: "HR Director",
      type: "Cruise",
      avatar: "avatar2.jpg",
    },
    {
      name: "Mike S.",
      review:
        "We have been working with you for years and are always extremely satisfied with the applications. We are understood and it is always quick and uncomplicated.",
      role: "Human Resources",
      type: "Cruise",
      avatar: "avatar3.jpg",
    },
    {
      name: "Lara K.",
      review:
        "We have been working with you for years and are always extremely satisfied with the applications. We are understood and it is always quick and uncomplicated.",
      role: "HR manager",
      type: "Tourist Job",
      avatar: "avatar4.jpg",
    },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20 mt-4 text-center">
        <Button
          type="primary"
          className="!bg-[#5648f6] !text-white"
          size="large"
          disabled
        >
          Customer Testimonials
        </Button>
        <h3 className="text-3xl text-[#5648f6] font-bold py-4">
          What Our Customers Say About Us
        </h3>
        <Swiper
          effect={"fade"}
          speed={500}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <CustomerReview
                name={item?.name}
                review={item?.review}
                role={item?.role}
                type={item?.type}
                avatar={item?.avatar}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
