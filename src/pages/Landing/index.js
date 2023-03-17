import { Col, Row, Space } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import "./home.css";
import UseCaseContainer from "./UseCaseContainer";

export default function Landing() {
  return (
    <Layout>
      {/* home header */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify={"space-between"} align="middle">
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

      {/* home media player */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-container bg-white mt-8">
        <Row
          gutter={[8, 8]}
          justify={"space-between"}
          align={"middle"}
          className="py-10"
        >
          <Col xs={8} sm={8} md={8} lg={4}>
            <img
              className="media-player-img"
              src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/logos/bs-insider.png"
              alt="bs-insider"
            />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <img
              className="media-player-img"
              src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/logos/inmann.png"
              alt="bs-insider"
            />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <img
              className="media-player-img"
              src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/logos/realtorbiz.png"
              alt="bs-insider"
            />
          </Col>
          <div className="hidden md:contents">
            <Col xs={8} sm={8} md={8} lg={4}>
              <img
                className="media-player-img"
                src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/logos/times.png"
                alt="bs-insider"
              />
            </Col>
            <Col xs={8} sm={8} md={8} lg={4}>
              <img
                className="media-player-img"
                src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/logos/re-tech-news.png"
                alt="bs-insider"
              />
            </Col>
            <Col xs={8} sm={8} md={8} lg={4}>
              <img
                className="media-player-img"
                src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/logos/realtormag.png"
                alt="bs-insider"
              />
            </Col>
          </div>
        </Row>
      </div>

      {/* usecase block */}
      <div className="use_case px-4 md:px-8 lg:px-12 xl:px-container text-center">
        <Space size={"large"} direction="vertical" className="pb-14">
          <div className="pt14">
            <img
              className="m-auto pb-3"
              src="https://d1q5pl8fl5kihk.cloudfront.net/app/pages/home/images/bot.png"
              alt="bot"
            />
          </div>
          <h2 className="text-main">
            Fully customizable. No programming. Ready-to-go.
          </h2>
          <p className="text">
            With Handle, you can take your customer interactions to the next
            level and elevate your business to new heights.
          </p>
        </Space>
        <Row>
          <Col span={8}>
            <UseCaseContainer
              amount={"1.8"}
              unit={"million"}
              explain={"users served"}
            />
          </Col>
          <Col span={8}>
            <UseCaseContainer
              amount={"11"}
              unit={"million"}
              explain={"tasks completed"}
            />
          </Col>
          <Col span={8}>
            <UseCaseContainer
              amount={"36"}
              unit={"million"}
              explain={"messages exchanged"}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
