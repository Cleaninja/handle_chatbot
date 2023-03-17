import { Col, Divider, Row, Space } from "antd";
import LogoUrl from "../../assets/imgs/handle_logo.png";
import TwitterImg from "../../assets/imgs/HomePage/Twitter.svg";
import LinkedinImg from "../../assets/imgs/HomePage/LinkedIn.svg";
import FacebookImg from "../../assets/imgs/HomePage/Facebook.svg";
import React, { useState } from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons/lib/icons";
export default function Footer() {
  const [accordion, setAccordion] = useState({ about: true });
  const AboutUs = () => {
    return (
      <Space size={6} direction="vertical" className="mt-2">
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          About Handle
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Handle blog
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Terms of use
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Privacy policy
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          User tutorials
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Customer service
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Careers
        </p>
      </Space>
    );
  };
  const Features = () => {
    return (
      <Space size={6} direction="vertical" className="mt-2">
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Interactive automation
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Performance analytics
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Contact management
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Sales automation
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          API documents
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Request a demo
        </p>
      </Space>
    );
  };
  const ContactUs = () => {
    return (
      <Space size={6} direction="vertical" className="mt-2">
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          433 Broadway
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          New York, NY, US 10013
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          info@askhandle.com
        </p>
      </Space>
    );
  };
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-container mt-10">
      <Row gutter={[16, 16]} justify={"space-between"} align="top">
        <Col xs={24} sm={24} md={6} lg={6} className="text-center md:text-left">
          <Space size={6} direction="vertical">
            <img src={LogoUrl} alt="handle_logo" />
            <p className="text-gray-600 hidden md:block">
              © Forte AI Inc 2023 all rights reserved
            </p>
          </Space>
        </Col>
        <div className="hidden sm:contents">
          <Col xs={24} sm={8} md={6} lg={6}>
            <div>
              <h4 className="text-strok-divider pb-3">About</h4>
              <AboutUs />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6}>
            <div>
              <h4 className="text-strok-divider pb-3">Features</h4>
              <Features />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6}>
            <div>
              <h4 className="text-strok-divider pb-3">Contact Us</h4>
              <ContactUs />
            </div>
          </Col>
        </div>
        {/* Start Accordion */}
        <div className="contents sm:hidden">
          <Col xs={24} className="">
            <div
              onClick={() =>
                setAccordion((old) => ({
                  about: !(old?.about ?? false),
                }))
              }
              className="flex justify-between items-center"
            >
              <h4 className="text-strok-divider ">About</h4>
              {accordion?.about ? (
                <CaretUpOutlined className="text-strok-divider text-xl" />
              ) : (
                <CaretDownOutlined className="text-strok-divider text-xl" />
              )}
            </div>
            {accordion?.about && <AboutUs />}
          </Col>
          <Col xs={24}>
            <div
              onClick={() =>
                setAccordion((old) => ({
                  feature: !(old?.feature ?? false),
                }))
              }
              className="flex justify-between items-center"
            >
              <h4 className="text-strok-divider ">Features</h4>
              {accordion?.feature ? (
                <CaretUpOutlined className="text-strok-divider text-xl" />
              ) : (
                <CaretDownOutlined className="text-strok-divider text-xl" />
              )}
            </div>
            {accordion?.feature && <Features />}
          </Col>
          <Col xs={24}>
            <div
              onClick={() =>
                setAccordion((old) => ({
                  contactUs: !(old?.contactUs ?? false),
                }))
              }
              className="flex justify-between items-center"
            >
              <h4 className="text-strok-divider ">Contact Us</h4>
              {accordion?.contactUs ? (
                <CaretUpOutlined className="text-strok-divider text-xl" />
              ) : (
                <CaretDownOutlined className="text-strok-divider text-xl" />
              )}
            </div>
            {accordion?.contactUs && <ContactUs />}
          </Col>
        </div>
      </Row>
      <Divider plain />
      <Space direction="horizontal" size={48} className="pb-12">
        <img className="cursor-pointer" src={TwitterImg} alt="twitter" />
        <img className="cursor-pointer" src={LinkedinImg} alt="linkdin" />
        <img className="cursor-pointer" src={FacebookImg} alt="facebook" />
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Terms of use
        </p>
        <p className="text-gray-600 hover:text-gray-400 cursor-pointer">
          Privacy policy
        </p>
      </Space>
    </div>
  );
}
