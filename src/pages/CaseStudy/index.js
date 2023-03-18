import { Col, Row } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import CaseStudyCard from "../../components/CaseStudyCard";
import CTA from "../../components/CTA";
import qr from "../../assets/imgs/Case study/QRPhoto.png";
import arrow from "../../assets/imgs/Case study/Arrow.svg";
import chart from "../../assets/imgs/Case study/Chart.png";
import man from "../../assets/imgs/Case study/Photo.png";
import image76 from "../../assets/imgs/Case study/image 76.png";

export default function CaseStudy() {
  return (
    <Layout>
      <div className="text-center px-4 md:px-8 lg:px-12 xl:px-container">
        <h1 className="text-main-active leading-10 pt-0">
          Coding Mind Case Study
        </h1>
        <p className="text mx-2 md:mx-10 lg:mx-28 mt-5 mb-16">
          Coding Mind is a leading coding school on a mission to help people
          build a successful career in computer programming.
        </p>
      </div>
      <div className="bg-white flex px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="py-16">
              <h2 className="leading-10">
                <span className="text-main-active">The Challenge:</span> Not
                keeping up with demand leads to missed opportunities
              </h2>
              <p className="text mt-5">
                Coding Mind has been successful in its marketing approach,
                resulting in significant growth for the company. As a result,
                there has been a surge in website traffic and prospect
                engagement, which is a positive development. However, the
                traditional form and email used by Coding Mind to handle this
                increased traffic presented real challenges.
              </p>
            </div>
          </Col>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="pt-16 float-right">
              <img src={qr} alt="QRcode" />
            </div>
          </Col>
          <Col lg={2} xl={2}>
            <div>
              <img
                className="ml-20 min-w-fit hidden lg:block"
                src={arrow}
                alt="Arrow"
              />
            </div>
          </Col>
          <Col sm={24} md={24} lg={18} xl={18}>
            <div className="py-16">
              <h2 className="leading-10">
                <span className="text-main-active">The Solution:</span>{" "}
                Transform to automated service
              </h2>
              <p className="text mt-5">
                Handle transformed Coding Mind's approach to customer
                communication. Instead of simply selling its services, the
                company became a trusted advisor to its customers, providing
                valuable information and guidance to help them make informed
                decisions. The Handle chatbot's machine-learning capabilities
                make it easy for Coding Mind to continuously improve the
                chatbot's responses and add new types of questions. Chatbot acts
                as a top-performing business development representative,
                providing prompt and accurate responses to questions a prospect
                might ask.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="flex px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="py-16">
              <h2 className="leading-10">
                <span className="text-main-active">The Results:</span> Happier
                prospective students and a shorter sales cycle
              </h2>
              <p className="text mt-5">
                The introduction of Handle chatbot has freed Coding Mind from
                the manual labor of lead qualification, allowing the team to
                focus on more profitable strategic work. Handle has elevated
                Coding Mind's customer experience, improved its operational
                efficiency, and helped the company continue to grow its
                business.
              </p>
            </div>
          </Col>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="mt-0 py-0 md:py-16 flex justify-center">
              <img
                style={{ minWidth: "500px", height: "300px" }}
                src={chart}
                alt="Chart"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-white flex px-4 md:px-8 lg:px-12 xl:px-container shadow-md">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={16} xl={16}>
            <div className="py-16">
              <h2 className="leading-10">Shane Morris</h2>
              <p className="text mt-5">
                “A one-size-fits-all solution like a traditional website that
                relies on forms doesn’t work when the nature of each customer’s
                path to purchase is so unique. You need to be immediately
                responsive with a more dynamic buying conversation that’s based
                on the individual buyer’s specific pain point, not what you’re
                trying to sell.
              </p>
              <p className="text-xl font-semibold mt-3">
                Director of Marketing at Coding Mind.
              </p>
            </div>
          </Col>
          <Col sm={24} md={24} lg={8} xl={8} className="w-full">
            <div className="flex justify-center">
              <img className="h-full" src={man} alt="man" />
              <div
                style={{ width: "304px", height: "78px" }}
                className="photo-man absolute bottom-0 bg-main flex justify-center"
              >
                <img src={image76} alt="image76" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="text-center px-4 md:px-8 lg:px-12 xl:px-container">
        <h2 className="text-main-active leading-10 pt-16">
          Related Case Studies
        </h2>
        <div className="py-10">
          <Row gutter={32} justify="space-between">
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <CaseStudyCard title="Case Study" explain="Brief description" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <CaseStudyCard title="Case Study" explain="Brief description" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <CaseStudyCard title="Case Study" explain="Brief description" />
            </Col>
          </Row>
        </div>
      </div>
      <CTA />
    </Layout>
  );
}
