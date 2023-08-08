import { Input, Space } from "antd";
import React, { useMemo, useState } from "react";
import "./home.css";
import Question from "../../components/Question";
import { SearchOutlined } from "@ant-design/icons";

const faqs = [
  {
    title: "Who should use the app?",
    content: "The app is designed for anyone who wants to streamline their daily tasks and increase productivity.",
  },
  {
    title: "What is included with my subscription?",
    content: "Your subscription includes access to all premium features, priority customer support, and regular updates.",
  },
  {
    title: "How do I get paid?",
    content: "You will receive payment directly to your preferred bank account or through a supported payment gateway.",
  },
  {
    title: "Is my personal information safe?",
    content: "Yes, we take the security of your personal information very seriously. We have implemented robust security measures to ensure your data remains protected.",
  },
  {
    title: "How can we get in touch?",
    content: "You can reach out to us through our contact form on our website or by emailing us at support@example.com.",
  },
];


export default function FAQ() {
  const [search, setSearch] = useState("");

  const displayFAQs = useMemo(() => {
    return faqs.filter((item) => {
      const searchTerm = search.toLowerCase();
      const title = item?.title.toLowerCase();
      return title.includes(searchTerm);
    });
  }, [search]);

  return (
    <div
      id="faq"
      className="bg-[#4F48F0] w-full p-4 md:p-8 lg:p-10 xl:p-20 text-center"
    >
      <div className="max-w-[1600px] mx-auto">
        <h2
          className="text-white text-4xl md:text-[42px] font-bold mt-8"
        >
          Frequently asked questions by our customers
        </h2>
        <Space className="w-full mt-10 md:mt-16" direction="vertical" size={"small"}>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setSearch(e?.target?.value)}
              className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              placeholder="Search..."
            />
            <SearchOutlined
              size={32}
              className="absolute text-lg right-4 top-1/2 transform -translate-y-1/2"
            />
          </div>
          {displayFAQs.map((item, index) => {
            return (
              <Space.Compact className="w-full" key={index}>
                <Question title={item?.title} content={item?.content} />
              </Space.Compact>
            );
          })}
        </Space>
      </div>
    </div>
  );
}
