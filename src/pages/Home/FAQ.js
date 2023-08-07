import { Input, Space } from "antd";
import React, { useMemo, useState } from "react";
import "./home.css";
import Question from "../../components/Question";

const { Search } = Input;

const faqs = [
  {
    title: "Who should use the app?",
    child: "",
  },
  {
    title: "What is included with my subscription?",
    child: "",
  },
  {
    title: "How do I get paid?",
    child: "",
  },
  {
    title: "Is my personal information safe?",
    child: "",
  },
  {
    title: "How can we get in touch?",
    child: "",
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
          style={{ fontFamily: "Ubuntu-bold" }}
          className="text-white text-[42px] font-bold"
        >
          Frequently asked questions by our customers
        </h2>
        <Space className="w-full mt-16" direction="vertical" size={"small"}>
          <Search size="large" onChange={(e) => setSearch(e?.target?.value)} />
          {displayFAQs.map((item, index) => {
            return (
              <Space.Compact className="w-full" key={index}>
                <Question title={item?.title} />
              </Space.Compact>
            );
          })}
        </Space>
      </div>
    </div>
  );
}
