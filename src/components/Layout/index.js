import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";
export default function Layout({ children = <></>, on = false }) {
  return (
    <div>
      <Header />
      <div
        className={`pt-44 ${on ? "px-4 md:px-8 lg:px-12 xl:px-container" : ""}`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
