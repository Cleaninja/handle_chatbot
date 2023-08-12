import React, { useEffect, useState } from "react";
import "swiper/css";
import Layout from "../../components/Layout";
import ApplicationBanner from "./ApplicationBanner";
import BookApplication from "./BookApplication";
import CustomQuote from "./CustomQuote";
import CustomerTestimonials from "./CustomerTestimonials";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Industry from "./Industry";
import "./home.css";
import CookieBanner from "./CookieBanner";
import axios from "axios";

export default function Home() {
  const [publicKey, setPublicKey] = useState("");
  useEffect(() => {
    getPublicKey();
  }, []);

  const getPublicKey = async () => {
    const res = await axios.post("http://16.170.231.2:8080/get-stripe-pk");
    setPublicKey(res?.data?.publicKey ?? "");
  };

  return (
    <Layout>
      <Hero />
      <ApplicationBanner />
      {publicKey && <BookApplication publicKey={publicKey} />}

      {/* Industry */}
      <Industry />
      <CustomerTestimonials />
      {/* FAQ */}
      <FAQ />
      {/* Get a custom quote / Free expert consultation */}
      <CustomQuote />
      <CookieBanner />
    </Layout>
  );
}
