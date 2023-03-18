import { Col, Input, Row } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import AutomationCard from "../../components/AutomationCard";
import CTA from "../../components/CTA";
import chatbot from "../../assets/imgs/Features/Chatbot Screen.png";
import clock from "../../assets/imgs/Features/clock.svg";
import lightning from "../../assets/imgs/Features/lightning-01.svg";
import graduation from "../../assets/imgs/Features/graduation-hat-01.svg";
import cpu from "../../assets/imgs/Features/cpu-chip-01.svg";
import chabot from "../../assets/imgs/Features/Chabot scren.png";
import database from "../../assets/imgs/Features/database-01.svg";
import barchartsquare from "../../assets/imgs/Features/bar-chart-square-02.svg";
import barchart from "../../assets/imgs/Features/bar-chart-10.svg";
import users from "../../assets/imgs/Features/users-03.svg";
import bot from "../../assets/imgs/Features/CTA bot.svg";
import folder from "../../assets/imgs/Features/folder-search.svg";
import face from "../../assets/imgs/Features/face-smile.svg";
import arrow from "../../assets/imgs/Features/arrow-circle-up-right.svg";
import message from "../../assets/imgs/Features/message-chat-circle.svg";
import scren from "../../assets/imgs/Features/Cbot scren.png";
import qrimg from "../../assets/imgs/Features/QR img.png";
import qrcode from "../../assets/imgs/Features/qr-code-02.svg";

export default function Features() {
  return (
    <Layout>
      <div className="text-center px-4 md:px-8 lg:px-12 xl:px-container">
        <h1 className="text-main-active leading-10 pt-0">
          Placeholder heading for Features
        </h1>
        <p className="text mx-2 md:mx-10 lg:mx-28 mt-5 mb-16">
          Lorem ipsum dolor sit amet consectetur. Scelerisque ornare facilisis
          quis laoreet molestie imperdiet massa pellentesque tristique.
        </p>
      </div>
      <div className="bg-white flex px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={14} xl={14}>
            <div className="py-16">
              <h2 className="text-main-active leading-10 ml-3 pb-10">
                Automation that works
              </h2>
              <Row gutter={16} justify="space-between" className="pb-10">
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={clock}
                    title="Available 24/7"
                    explain="Handle is always ready and available to answer your customer questions."
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={lightning}
                    title="Instant response"
                    explain="Handle chatbot provides an effective and instant resolution to customer inquiries."
                  />
                </Col>
              </Row>
              <Row gutter={16} justify="space-between">
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={graduation}
                    title="Multilingual"
                    explain="Customers can effortlessly start chatting in their own native language and Handle will respond back in the same language."
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={cpu}
                    title="Industry specific NLP"
                    explain="Handle’s powerful natural language processing technology recognizes and understands what your customers need."
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={24} md={24} lg={10} xl={10}>
            <div className="mt-0 p-0 md:py-16 md:mt-5 flex justify-center lg:float-right">
              <img src={chatbot} alt="Chatbot" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={10} xl={10}>
            <div className="mt-0 p-0 md:py-28 md:mt-5 flex justify-center lg:float-left">
              <img src={chabot} alt="Chabot" />
            </div>
          </Col>
          <Col sm={24} md={24} lg={14} xl={14}>
            <div className="py-16">
              <Row justify="end">
                <h2 className="text-main-active leading-10 pb-10 pr-0">
                  Make data-driven decisions
                </h2>
              </Row>
              <Row gutter={16} justify="space-between" className="pb-10">
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={database}
                    title="Chatbot analytics"
                    explain="Connect with your customers on a deeper level."
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={barchartsquare}
                    title="Customer analytics"
                    explain="With Handle, you will get a deep knowledge about your customers."
                  />
                </Col>
              </Row>
              <Row gutter={16} justify="space-between">
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={barchart}
                    title="Website analytics"
                    explain="Handle tracks and analyzes the data about your website visitors and their customer journeys."
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={users}
                    title="Multiple accounts"
                    explain="Link multiple Handle user accounts, manage every linked account separately or combined."
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-main px-4 py-4 md:px-8 lg:px-12 xl:px-container h-60">
        <Row gutter={16} justify="space-between">
          <Col sm={24} md={24} lg={12} xl={12}>
            <img className="pt-8 pb-1" src={bot} alt="bot" />
            <p className="text-4xl font-semibold leading-10 text-white">
              Automated interaction starts with Handle!
            </p>
          </Col>
          <Col
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="hidden lg:block pt-16"
          >
            <Input size="large" placeholder="Enter Your Email" className="h-20" />
            <p className="text-base font-medium leading-7 text-white">
              Get your 14 day FREE trial
            </p>
          </Col>
        </Row>
      </div>
      <div className="bg-white flex px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={14} xl={14}>
            <div className="py-16">
              <h2 className="text-main-active leading-10 ml-3 pb-10">
                Manage customers from one place
              </h2>
              <Row gutter={16} justify="space-between" className="pb-10">
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={folder}
                    title="Customer data at your fingertips"
                    explain="Handle automatically extracts all the important data points from the conversations."
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={face}
                    title="Capture customer feedback"
                    explain="The best way to keep improving your service is to get feedback from people that are using your service."
                  />
                </Col>
              </Row>
              <Row gutter={16} justify="space-between">
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={arrow}
                    title="Grow your customer relationships"
                    explain="With every chat, Handle captures customer information and stores it in the Contact Management system."
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <AutomationCard
                    cardimg={message}
                    title="Access customer conversations"
                    explain="If you have any agents online, you can turn off the artificial intelligence and jump into conversations with your customers."
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={24} md={24} lg={10} xl={10}>
            <div className="mt-0 p-0 md:py-28 md:mt-5 flex justify-center lg:float-right">
              <img src={scren} alt="Scren" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-container">
        <div className="text-center">
          <h2 className="text-main-active leading-10 pt-20">
            Trigger Handle chatbot by QR code
          </h2>
          <p className="text mx-2 md:mx-10 lg:mx-28 mt-5 mb-16">
            Each Handle chatbot comes with a unique QR code, so the chatbot can
            run independently outside your website.
          </p>
        </div>
        <Row justify="space-between">
          <Col sm={24} md={24} lg={12} xl={12}>
            <div>
              <div className="left-0 top-0">
                <img src={qrcode} alt="QRcode" />
              </div>
              <p className="text-2xl font-extrabold leading-9 text-gray-900 py-3">
                Scan the QR code and interact with Handle chatbot
              </p>
              <p className="text leading-8 pb-3">
                You can share the QR code with your existing and potential
                customers. Your customers can interact with Handle chatbot from
                anywhere not just directly from your website. They simply scan a
                unique QR code and access Handle instantly. Engage, update, or
                notify your customers anytime, anywhere.
              </p>
            </div>
          </Col>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="mt-0 p-0 md:pb-16 md:mt-5 flex justify-center lg:float-right">
              <img src={qrimg} alt="QR img" />
            </div>
          </Col>
        </Row>
      </div>
      <CTA />
    </Layout>
  );
}
