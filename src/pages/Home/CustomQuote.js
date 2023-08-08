import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "swiper/css";
import "./home.css";

export default function CustomQuote() {
  return (
    <div>
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold">
          Get a custom quote / Free expert consultation
        </h2>
        <p className="pt-12 text-lg">
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
          Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
          scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies
          purus iaculis.
        </p>
        <Button
          type="primary"
          className="bg-[#5648f6] mt-8"
          size="large"
          href="#calculation"
        >
          <div className="flex items-center">
            <p className="pr-3">Book a Consultation</p> <ArrowRightOutlined />
          </div>
        </Button>
      </div>
    </div>
  );
}
