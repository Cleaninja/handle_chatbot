import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Checkbox, Form, Select, Slider, Space } from "antd";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

import Cookies from "js-cookie";
import countries from "./countries.json";

export default function BookApplication({ publicKey = "" }) {
  const [bookData, setBookData] = useState({
    count: 64,
    recruited: ["🌏 WorldWide"],
  });
  const [cookieData, setCookieData] = useState(!!Cookies.get("bookData"));

  const [form] = Form.useForm();

  const stripePromise = loadStripe(publicKey);

  // Get Cookies
  useEffect(() => {
    const savedData = Cookies.get("bookData");
    if (savedData) {
      setBookData(JSON.parse(savedData));
      form.setFieldsValue(JSON.parse(savedData));
    }
  }, []);

  // Remove Cookies
  const handleStartOver = () => {
    Cookies.remove("bookData");
    setBookData({
      count: 64,
      recruited: ["🌏 WorldWide"],
    });
    form.setFieldsValue({
      count: 64,
      recruited: ["🌏 WorldWide"],
    });
    setCookieData(false);
  };

  // Price depend on the count
  // 20 - 60 48€
  // 61 - 150 38€
  // 151 - 300 28€
  const perPriceOnCount = useMemo(() => {
    return (
      (bookData?.count < 61 ? 48 : bookData?.count < 151 ? 38 : 28) +
      (bookData?.premiumPerApplication ? 10 : 0) +
      (bookData?.premiumSeniorDesigner ? 10 : 0)
    );
  }, [
    bookData?.count,
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
  }, [perPriceOnCount, bookData?.count]);

  // Price that considered the discount amount
  const priceWithDiscount = useMemo(() => {
    return Math.round(priceWithoutDiscount * discountPercentOnCount);
  }, [priceWithoutDiscount]);

  const handleBuy = async () => {
    const stripe = await stripePromise;
    var session = "";
    try {
      const info =
        bookData?.count +
        " Candidates / " +
        bookData?.talentType +
        " / Worklocation: " +
        bookData?.location?.join(", ") +
        " / Recruited from: " +
        bookData?.recruited?.join(", ") +
        (bookData?.benefits?.length > 0
          ? " / Benefit: " + bookData?.benefits?.join(", ")
          : "") +
        (bookData?.language || bookData?.language !== "None"
          ? " / Additional Language: " + bookData?.language
          : "");
      const response = await axios.post(
        "/api/create-checkout-session",
        { totalPrice: priceWithDiscount, currency: "eur", info: info }
      );
      // Handle the response data as needed
      session = response?.data;
    } catch (error) {
      console.error(error);
    }

    // Save Cookies
    Cookies.set("bookData", JSON.stringify(bookData));
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error(error);
    }
  };

  const handleSchedule = () => {
    window.location.href = "https://calendly.com/getcandidates/consultation";
  };

  // For focus the invalid input field
  const handleFinishFailed = ({ errorFields }) => {
    const firstInvalidField = errorFields[0]; // Get the first field with an error
    const fieldInstance = form.getFieldInstance(firstInvalidField.name);

    if (fieldInstance && fieldInstance.focus) {
      fieldInstance.focus();
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
      value: bookData?.talentType,
      name: "talentType",
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
        label: item.code ? (
          <div className="flex items-center justify-start">
            <img
              className="pr-1"
              src={`https://flagsapi.com/${item.code}/flat/24.png`}
              alt={item.code}
            />
            {item.name}
          </div>
        ) : (
          item.code + item.name
        ),
        value: item?.name,
        disabled: item?.disabled,
      })),
      name: "location",
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
        label: item.code ? (
          <div className="flex items-center justify-start">
            <img
              className="pr-1"
              src={`https://flagsapi.com/${item.code}/flat/24.png`}
              alt={item.code}
            />
            {item.name}
          </div>
        ) : (
          item.code + item.name
        ),
        value: item?.name,
        disabled: item?.disabled,
      })),
      name: "recruited",
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
          label: "Provided meals",
          value: "Provided meals",
        },
        {
          label: "Provided accommodation",
          value: "Provided accommodation",
        },
        {
          label: "Paid transportation",
          value: "Paid transportation",
        },
      ],
      name: "benefits",
      value: bookData?.benefits,
      onChange: (e) => {
        if (bookData?.benefits?.includes(e)) {
          const index = bookData?.benefits.indexOf(e);
          setBookData((pre) => ({
            ...pre,
            benefits: pre?.benefits?.filter(function (element) {
              return element !== e;
            }),
          }));
        } else {
          console.log(e);
          setBookData((pre) => ({
            ...pre,
            benefits: [...(pre?.benefits ?? []), e],
          }));
        }
      },
    },

    {
      question: "What additional language should the applicant know?",
      note: "Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis",
      options: [
        { label: "None", value: "None" },
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
      required: false,
      name: "language",
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
    name = "",
    required = true,
    onChange = () => {},
  }) => {
    return (
      <div className="question-box w-full">
        <Space direction="vertical" size="small">
          <Space.Compact>
            <p className="text-sm sm:text- font-bold base md:text-lg text-[#0F1115]">
              {question}
            </p>
          </Space.Compact>
          <Space.Compact className="w-full">
            {name !== "benefits" ? (
              <Form.Item
                className="w-full"
                name={name}
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
            ) : (
              <div className="py-4 block">
                {options.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => onChange(item?.label)}
                      className={`border border-gray-600 inline-block rounded-xl p-2 m-1 hover:bg-[#504af4] hover:text-white cursor-pointer text-xs md:text-sm ${
                        value?.includes(item?.label) &&
                        "bg-[#504af4] text-white"
                      }`}
                    >
                      {item?.label}
                    </div>
                  );
                })}
              </div>
            )}
          </Space.Compact>
          <Space.Compact className="w-full">
            <p className="text-[11px] sm:text-sm md:text-base w-full">{note}</p>
          </Space.Compact>
        </Space>
      </div>
    );
  };

  return (
    <>
      {/* Book Applicants Online */}
      <div>
        <div
          id="calculation"
          className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 xl:p-20 relative"
        >
          <Elements stripe={stripePromise}>
            <Form
              form={form}
              initialValues={bookData}
              onFinish={handleBuy}
              onFinishFailed={handleFinishFailed}
            >
              <div className="relative overflow-auto scroll-none">
                <div className="pb-[34px]">
                  <h1 className="leading-normal font-extrabold text-4xl sm:text-5xl md:text-6xl md:text-[64px] text-center font-[Nunito]">
                    Book Applicants Online
                  </h1>
                  <div className="mx-auto max-w-[1200px]">
                    <div className="pb-10 question-box my-6">
                      <div className="text-sm sm:text-base md:text-lg pt-1 pb-2">
                        <p className="font-bold text-[#0F1115] ">
                          HOW MANY CANDIDATES DO YOU WANT?
                        </p>
                      </div>
                      <Slider
                        trackStyle={{
                          background: "#504af4",
                        }}
                        tooltip={{
                          open: true,
                          formatter: (e) => {
                            return e > 300 ? "+300" : e;
                          },
                        }}
                        onChange={(e) =>
                          setBookData((pre) => ({ ...pre, count: e }))
                        }
                        step={5}
                        name="count"
                        value={bookData?.count}
                        defaultValue={30}
                        max={301}
                        min={20}
                      />
                      {bookData?.count < 301 && (
                        <div className="block">
                          <p className="pt-4 text-3xl inline-block font-bold">
                            {/* {discountPercentOnCount < 1 && (
                              <span className="line-through">
                                € {priceWithoutDiscount} for {bookData?.count}
                              </span>
                            )}{" "} */}
                            {bookData?.count} candidates × €{" "}
                            {Math.round(priceWithDiscount / bookData?.count)}= €{" "}
                            {priceWithDiscount}
                            {/* {discountPercentOnCount < 1 && (
                              <span className="line-through">
                                € {perPriceOnCount}
                              </span>
                            )}{" "} */}
                          </p>
                          {discountPercentOnCount < 1 && (
                            <p className="pt-2 text-xl font-bold inline-block sm:pl-4">
                              <span className="text-[#2cc131]">
                                {`(${
                                  100 - discountPercentOnCount * 100
                                }% discount
                                € ${
                                  priceWithoutDiscount - priceWithDiscount
                                } in total saved)`}
                              </span>
                            </p>
                          )}
                        </div>
                      )}
                      <p className="text-[11px] sm:text-sm md:text-base w-full pt-4">
                        Nibh elit lacus mi elit, dui maecenas vestibulum cursus.
                        Aliquet quam cursus tortor eu a. Enim, integer
                        pellentesque sagittis lectus aliquam sed cursus tortor,
                        ac. Ornare quisque ullamcorper a eleifend fringilla
                        turpis.
                      </p>
                    </div>
                    {bookData?.count < 301 && (
                      <>
                        <Space
                          size="large"
                          direction="vertical"
                          className="w-full"
                        >
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
                                name={item?.name}
                              />
                            </Space.Compact>
                          ))}
                        </Space>
                        <Space
                          size="middle"
                          direction="vertical"
                          className="w-full question-box mt-8"
                        >
                          <p className="text-sm sm:text- font-bold base md:text-lg text-[#0F1115]">
                            Upsale
                          </p>
                          <Checkbox
                            checked={bookData?.premiumPerApplication ?? false}
                            onChange={(e) =>
                              setBookData((pre) => ({
                                ...pre,
                                premiumPerApplication: e?.target?.checked,
                              }))
                            }
                          >
                            Get premium support and help with your job post
                            +€10/applicant
                          </Checkbox>

                          <Checkbox
                            onChange={(e) =>
                              setBookData((pre) => ({
                                ...pre,
                                premiumSeniorDesigner: e?.target?.checked,
                              }))
                            }
                            checked={bookData?.premiumSeniorDesigner ?? false}
                          >
                            Get premium support and help with your job post +$99
                            Senior Designer
                          </Checkbox>
                        </Space>
                      </>
                    )}
                  </div>
                </div>
                <div className="max-w-[1200px] left-1/2 mx-auto bottom-2 z-10 md:static w-full">
                  {(bookData?.count ?? 0) < 301 ? (
                    <button
                      type="submit"
                      className="md:top-44 rounded-lg border-2 border-solid cta-button py-4 w-full mx-auto"
                    >
                      <p className="px-4 text-xl font-medium text-white leading-5">
                        Buy for € {priceWithDiscount}
                      </p>
                    </button>
                  ) : (
                    <div
                      onClick={handleSchedule}
                      className="md:top-44 rounded-lg border-2 border-solid cta-button py-4 w-full cursor-pointer text-center"
                    >
                      <p className="px-4 text-xl font-medium text-white leading-5">
                        Get an enterprize quote by scheduling a call with us
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Form>
          </Elements>
          {cookieData && (
            <div className="fixed bottom-0 bg-slate-700 h-16 w-full left-0 flex justify-center items-center z-10">
              <p className="pr-4 text-white">
                We've prefilled this page with some info that you entered
                before. if you don't like this
              </p>
              <Button onClick={handleStartOver} type="primary" danger>
                Start Over
              </Button>
              <Button
                className="ml-2 text-white"
                onClick={() => setCookieData(false)}
              >
                Okay
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
