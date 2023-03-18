import { Col, Row } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import CTA from "../../components/CTA";
import target from "../../assets/imgs/About/target-04.svg";
import rocket from "../../assets/imgs/About/rocket-02.svg";
import trophy from "../../assets/imgs/About/trophy-01.svg";
import qr from "../../assets/imgs/About/image.svg";

export default function About() {
  return (
    <Layout>
      <div className="text-center px-4 md:px-8 lg:px-12 xl:px-container">
        <h1 className="text-main-active leading-10 pt-0">About Us</h1>
        <p className="text mx-2 md:mx-10 lg:mx-28 mt-5 mb-16">
          Lorem ipsum dolor sit amet consectetur. Scelerisque ornare facilisis
          quis laoreet molestie imperdiet massa pellentesque tristique.
        </p>
      </div>
      <div className="bg-white flex px-4 md:px-8 lg:px-12 xl:px-container">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="py-16">
              <h2 className="text-main-active leading-10 ml-3">Our Mission</h2>
              <p className="text mt-5">
                Handle helps businesses simplify and streamline the interaction
                with their customers. Our user-friendly, AI chatbot works great
                with all management systems to deliver a frictionless
                environment without disruptions in current processes. Optimized
                for mobile devices, desktops, and offline experience, Handle
                always provides seamless customer interaction.
              </p>
            </div>
          </Col>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="mt-0 p-0 md:py-16 md:mt-5 flex justify-center float-right">
              <video
                style={{
                  minWidth: "500px",
                  height: "250px",
                }}
                src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
                autoPlay
                controls
              ></video>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-4 py-16 md:px-8 lg:px-12 xl:px-container">
        <div className="text-center">
          <h2 className="text-main-active leading-10">Our Values</h2>
          <p className="text py-5">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex pt-5">
          <Row justify="space-between">
            <Col sm={24} md={24} lg={7} xl={7}>
              <div className="text-center">
                <div>
                  <img src={target} className="mx-auto" alt="target" />
                </div>
                <h4 className="py-2">Placeholder</h4>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
              </div>
            </Col>
            <Col sm={24} md={24} lg={7} xl={7}>
              <div className="text-center">
                <div>
                  <img src={rocket} className="mx-auto" alt="rocket" />
                </div>
                <h4 className="py-2">Placeholder</h4>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
              </div>
            </Col>
            <Col sm={24} md={24} lg={7} xl={7}>
              <div className="text-center">
                <div>
                  <img src={trophy} className="mx-auto" alt="trophy" />
                </div>
                <h4 className="py-2">Placeholder</h4>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="px-4 py-4 md:px-8 lg:px-12 xl:px-container">
        <h2 className="text-main-active text-center leading-10">Who we are?</h2>
        <div className="flex pt-5 pb-16">
          <Row gutter={96} justify="space-between">
            <Col sm={24} md={24} lg={12} xl={12}>
              <div>
                <div>
                  <img src={qr} alt="target" />
                </div>
                <h4 className="pt-2 pb-1">Nick Kljaic</h4>
                <p className="capture">Co-founder & CEO</p>
                <p className="text pb-2">----------------------------</p>
                <p className="text">
                  Nick Kljaic is the CEO & co-founder of Handle. He leads the
                  strategy and overall business development at Handle. Frequent
                  keynote speaker, panelist and contributing author. Enjoys
                  running in Central Park and playing soccer.
                </p>
              </div>
            </Col>
            <Col sm={24} md={24} lg={12} xl={12}>
              <div>
                <div>
                  <img src={qr} alt="rocket" />
                </div>
                <h4 className="pt-2 pb-1">Junjie Shi</h4>
                <p className="capture">Co-founder & CTO</p>
                <p className="text pb-2">----------------------------</p>
                <p className="text">
                  Junjie Shi is the CTO & co-founder of Handle. He is in charge
                  of the technological vision and tech strategy at Handle. He
                  leads the entire Handle product roadmap. Loves making complex
                  simple. AI enthusiast.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <CTA />
    </Layout>
  );
}
