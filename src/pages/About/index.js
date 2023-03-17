import { Col, Row } from "antd";
import React from "react";
import Layout from "../../components/Layout";
import target from "../../assets/imgs/About/target-04.svg";
import rocket from "../../assets/imgs/About/rocket-02.svg";
import trophy from "../../assets/imgs/About/trophy-01.svg";

export default function About() {
  return (
    <Layout on={ false }>
      <div className="text-center px-4 md:px-8 lg:px-12 xl:px-container">
        <h1 className="text-main-active leading-10 pt-0">About Us</h1>
        <p className="text mx-2 md:mx-10 lg:mx-28 mt-5 mb-16">
          Lorem ipsum dolor sit amet consectetur. Scelerisque ornare facilisis
          quis laoreet molestie imperdiet massa pellentesque tristique.
        </p>
      </div>
      <div className="bg-white flex">
        <Row>
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
            <div className="pt-16">
              <video
                className="mx-auto"
                src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
                width="500"
                height="400"
                autoPlay
                controls
              ></video>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-container">
        <div className="text-center">
          <h2 className="text-main-active leading-10">Our Values</h2>
          <p className="text">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="values-content">
          <div className="values-content-model">
            <div>
              <img
                src={target}
                className="values-content-model-img"
                alt="target"
              />
            </div>
            <div className="values-content-title">Placeholder</div>
            <div className="values-content-body">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </div>
          </div>
          <div className="values-content-model">
            <div>
              <img
                src={rocket}
                className="values-content-model-img"
                alt="rocket"
              />
            </div>
            <div className="values-content-title">Placeholder</div>
            <div className="values-content-body">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </div>
          </div>
          <div className="values-content-model">
            <div>
              <img
                src={trophy}
                className="values-content-model-img"
                alt="trophy"
              />
            </div>
            <div className="values-content-title">Placeholder</div>
            <div className="values-content-body">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
