import { Checkbox, Form, Select, Slider, Space } from "antd";
import React, { useMemo, useState } from "react";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import "swiper/css";
import countries from "./countries.json";

export default function BookApplication() {
  const [bookData, setBookData] = useState({
    count: 64,
    recruited: ["WorldWide"],
  });

  const stripePromise = loadStripe(
    "pk_test_51NbwmkBaeZH592dBokkB1ksfAs2vQvTDL6c3R1BSKCCAsQFRcJ2I820mJmej6CYjWHTpv62aAF4CvhWaSG3HZ6dU00CQp94L1V"
  );

  // Price depend on the count
  // 20 - 60 48€
  // 61 - 150 38€
  // 151 - 300 28€
  const perPriceOnCount = useMemo(() => {
    return (
      (bookData?.count < 61 ? 48 : bookData?.count < 151 ? 38 : 28) +
      (bookData?.language ? 10 : 0) +
      (bookData?.premiumPerApplication ? 10 : 0) +
      (bookData?.premiumSeniorDesigner ? 10 : 0)
    );
  }, [
    bookData?.count,
    bookData?.language,
    bookData?.premiumPerApplication,
    bookData?.premiumSeniorDesigner,
  ]);

  // Discount percent depend on the Count
  // 20 - 60 100%
  // 61 - 150 80% ( 20% discount )
  // 151 - 300 60% ( 40% discount )
  const discountPercentOnCount = useMemo(() => {
    return 60 < bookData?.count && bookData?.count < 151
      ? 0.8
      : bookData?.count > 150
      ? 0.6
      : 1;
  }, [bookData?.count]);

  // Price without the discount amount, origin price
  const priceWithoutDiscount = useMemo(() => {
    return bookData?.count * perPriceOnCount;
  }, [perPriceOnCount]);

  // Price that considered the discount amount
  const priceWithDiscount = useMemo(() => {
    return Math.round(priceWithoutDiscount * discountPercentOnCount);
  }, [priceWithoutDiscount]);

  const handleBuy = async () => {
    const stripe = await stripePromise;
    var session = "";
    try {
      const response = await axios.post(
        "http://localhost:4242/create-checkout-session"
      , { totalPrice: priceWithDiscount, currency: "eur" });
      // Handle the response data as needed
      session = response?.data;
    } catch (error) {
      console.error(error);
    }
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error(error);
    }
  };

  const questionInputs = [
    {
      question: "What kind of talent?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      options: [
        { label: "Entertainer ", value: "Entertainer " },
        { label: "Waiter / Bar", value: "Waiter / Bar" },
        { label: "Cook ", value: "Cook " },
      ],
      value: bookData?.talentType ?? "",
      onChange: (e) =>
        setBookData((pre) => ({
          ...pre,
          talentType: e,
        })),
    },

    {
      question: "Where is the work location?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      mode: "multiple",
      options: countries.map((item) => ({
        label: item?.name,
        value: item?.name,
      })),
      value: bookData?.location ?? [],
      onChange: (e) =>
        setBookData((pre) => ({
          ...pre,
          location: e,
        })),
    },

    {
      question: "Where are people being recruited?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      mode: "multiple",
      options: countries.map((item) => ({
        label: item?.name,
        value: item?.name,
      })),
      value: bookData?.recruited ?? [],
      onChange: (e) =>
        setBookData((pre) => ({
          ...pre,
          recruited: e,
        })),
    },
    {
      question: "What benefits does the company / job offer?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare quisque ullamcorper a eleifend fringilla turpis.",
      mode: "multiple",
      options: [
        {
          label: "provided meals",
          value: "provided meals",
        },
        {
          label: "provided accommodation",
          value: "provided accommodation",
        },
        {
          label: "paid transportation",
          value: "paid transportation",
        },
      ],
      value: bookData?.benefits ?? [],
      onChange: (e) =>
        setBookData((pre) => ({
          ...pre,
          benefits: e,
        })),
    },

    {
      question: "What additional language should the applicant know?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam ",
      options: [
        {
          label: "German (DE)",
          value: "DE",
        },
        { label: "French (FR) ", value: "FR" },
        { label: "Spanish (ES) ", value: "ES" },
        { label: "Portuguese (PT) ", value: "PT" },
        { label: "Italian (IT) ", value: "IT" },
        { label: "Russian (RUS) ", value: "RUS" },
        { label: "Ukrainian (UKR)", value: "UKR" },
      ],
      value: bookData?.language ?? "",
      required: false,
      onChange: (e) =>
        setBookData((pre) => ({
          ...pre,
          language: e,
        })),
    },
  ];

  const QuestionInput = ({
    question = "",
    note = "",
    options = [],
    mode = "single",
    value,
    required = true,
    onChange = () => {},
  }) => {
    return (
      <>
        {question && (
          <Space direction="vertical" size="small">
            <Space.Compact>
              <p className="text-sm font-bold text-[0F1115]">{question}</p>
            </Space.Compact>
            <Space.Compact className="w-full">
              <Form.Item
                className="w-full"
                name={question}
                rules={[
                  {
                    required: required,
                    message: "Please select the field.",
                  },
                ]}
              >
                <Select
                  aria-required
                  className="w-full"
                  mode={mode}
                  options={options}
                  value={value}
                  onChange={onChange}
                />
              </Form.Item>
            </Space.Compact>
            <Space.Compact className="w-full">
              <p className="text-[11px] w-full">{note}</p>
            </Space.Compact>
          </Space>
        )}
      </>
    );
  };

  return (
    <>
      {/* Book Applicants Online */}
      <div
        id="calculation"
        className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20"
      >
        <Elements stripe={stripePromise}>
          <Form onFinish={handleBuy}>
            <div className="md:grid grid-cols-10 gap-14 relative md:h-[500px] overflow-auto">
              <div className="col-span-6 pb-[34px]">
                <h1
                  style={{ fontFamily: "Ubuntu-bold" }}
                  className="leading-normal font-extrabold text-left text-5xl md:text-6xl md:text-[64px]"
                >
                  Book Applicants Online
                </h1>
                <p
                  style={{ fontFamily: "Ubuntu-bold" }}
                  className="pt-3 text-xl font-normal leading-[30px]"
                >
                  Select the right package and enter the requirements for the
                  applicants.
                </p>

                <div className=" text-center">
                  <p className="pt-8 pb-2 text-2xl font-normal">
                    Drag the slider 👇 to build your own bundle of
                  </p>
                  <div className="px-8">
                    <Slider
                      onChange={(e) =>
                        setBookData((pre) => ({ ...pre, count: e }))
                      }
                      defaultValue={30}
                      max={300}
                    />
                  </div>
                  <p className="pt-4 text-2xl font-normal">
                    {discountPercentOnCount < 1 && (
                      <span className="line-through">
                        € {priceWithoutDiscount} for {bookData?.count}
                      </span>
                    )}{" "}
                    {priceWithDiscount} for {bookData?.count}={" "}
                    {discountPercentOnCount < 1 && (
                      <span className="line-through">€ {perPriceOnCount}</span>
                    )}{" "}
                    € {Math.round(priceWithDiscount / bookData?.count)} per post
                  </p>
                  {discountPercentOnCount < 1 && (
                    <p className="pt-2 text-2xl font-normal">
                      You save € {priceWithoutDiscount - priceWithDiscount} (
                      {100 - discountPercentOnCount * 100}% discount)
                    </p>
                  )}
                </div>
                <Space size="large" direction="vertical" className="w-full">
                  {questionInputs.map((item, index) => (
                    <Space.Compact key={index}>
                      <QuestionInput
                        question={item.question}
                        note={item.note}
                        options={item?.options ?? []}
                        mode={item?.mode ?? ""}
                        value={item?.value}
                        onChange={item?.onChange}
                        required={item?.required}
                      />
                    </Space.Compact>
                  ))}
                </Space>
                <div className="mt-20">
                  <div className="grid grid-cols-12 gap-3">
                    <Checkbox
                      checked={bookData?.premiumPerApplication ?? false}
                      onChange={(e) =>
                        setBookData((pre) => ({
                          ...pre,
                          premiumPerApplication: e?.target?.checked,
                        }))
                      }
                      className="col-span-8"
                    >
                      Get premium support and help with your job post
                      +€10/applicant
                    </Checkbox>
                    <div className="col-span-4 flex items-center justify-between">
                      <p className="text-sm font-normal">Cell Text</p>
                      <div>
                        <p className="text-xs rounded-[10px] bg-[#f2f4f8] px-[10px]">
                          Badge
                        </p>
                      </div>
                    </div>
                    <Checkbox
                      onChange={(e) =>
                        setBookData((pre) => ({
                          ...pre,
                          premiumSeniorDesigner: e?.target?.checked,
                        }))
                      }
                      checked={bookData?.premiumSeniorDesigner ?? false}
                      className="col-span-8"
                    >
                      Get premium support and help with your job post +$99
                      Senior Designer
                    </Checkbox>
                    <div className="col-span-4 flex items-center justify-between">
                      <p className="text-sm font-normal">Cell Text</p>
                      <div>
                        <p className="text-xs rounded-[10px] bg-[#f2f4f8] px-[10px]">
                          Badge
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <button
                  type="submit"
                  className="sticky top-44 rounded-lg border-2 border-solid border-[#524CF6] bg-[#524CF6] py-4 w-full"
                >
                  <p className="px-4 text-xl font-medium text-white leading-5">
                    Buy for € {priceWithDiscount}
                  </p>
                </button>
              </div>
            </div>
          </Form>
        </Elements>
      </div>
    </>
  );
}
