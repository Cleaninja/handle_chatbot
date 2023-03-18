import { Col, Row, Space } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import "./home.css";
import FeatureCard from "./FeatureCard";
import CaseStudyCard from "../../components/CaseStudyCard";
import Testimonitial from "../../components/Testimonitial";
import CTA from "../../components/CTA";

export default function Home() {
  return (
    <Layout>
      {/* home header */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-container">
        <Row gutter={[12, 12]} justify={"space-between"} align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <h1 className="leading-normal text-main-active font-extrabold text-left">
              Smart Automation,
            </h1>
            <h1 className="leading-normal text-main-active font-extrabold text-left">
              Builds Satisfied
            </h1>
            <h1 className="leading-normal text-main-active font-extrabold text-left">
              Customer R elations
            </h1>
            <div className="capture leading-9">
              The most effective AI chatbot on the market. Clear call-to-action,
              fully customizable, designed to engage with your customers.
              Boosting sales, generating new leads with interactive
              client-focused automation. Handle does it all.
            </div>
            <button className="primary-btn p-3 mt-8">Schedule Demo</button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="hidden md:contents">
            <img
              src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/bot-worker.png"
              className="float-right"
              width="450px"
              alt="bot-worker"
            />
          </Col>
        </Row>
      </div>

      {/* feature */}
      <div className="feature px-4 md:px-8 lg:px-12 xl:px-container text-center bg-white">
        <Space size={"large"} direction="vertical" className="pb-14">
          <h2 className="text-main">
            Fully customizable. No programming. Ready-to-go.
          </h2>
          <p className="text">
            With Handle, you can take your customer interactions to the next
            level and elevate your business to new heights.
          </p>
        </Space>
        <Row gutter={[64, 12]}>
          <Col xs={24} sm={24} md={24} lg={8}>
            <FeatureCard
              title={"Communicate Effectively"}
              explain={
                "Handle makes it super easy to add and edit any information."
              }
              mod={"chat"}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <FeatureCard
              title={"Build Customer Relationships"}
              explain={
                "Engage 24/7 with Website Visitors and Schedule Appointments Easily."
              }
              mod={"data"}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <FeatureCard
              title={"Make data-driven decisions"}
              explain={
                "Data is the key to making well-informed decisions that lead to tangible results."
              }
              mod={"relation"}
            />
          </Col>
        </Row>
      </div>

      {/* case studies */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-container text-center py-20">
        <Space size={"large"} direction="vertical" className="pb-14">
          <h2 className="text-main">
            Handle automates customer communication for{" "}
          </h2>
          <h2 className="text-main">businesses all over the world</h2>
          <p className="text">
            See how enterprises have transformed their customer support with
            automation.
          </p>
        </Space>
        <Row gutter={[64, 12]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <CaseStudyCard
              title={"Coding Mind Case Study"}
              explain={"Brief description"}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <CaseStudyCard
              title={"Coding Mind Case Study"}
              explain={"Brief description"}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <CaseStudyCard
              title={"Coding Mind Case Study"}
              explain={"Brief description"}
            />
          </Col>
        </Row>
      </div>

      {/* Testimonitial */}
      <div className="px-4 pb-20 md:px-8 lg:px-12 xl:px-container">
        <Testimonitial />
      </div>
      {/* cta */}
      <CTA />
    </Layout>
  );
}
