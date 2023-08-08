import React from "react";
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

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ApplicationBanner />
      <BookApplication />
      {/* Industry */}
      <Industry />
      <CustomerTestimonials />
      {/* FAQ */}
      <FAQ />
      {/* Get a custom quote / Free expert consultation */}
      <CustomQuote />
      <CookieBanner/>
    </Layout>
  );
}
