import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";
export default function Layout({ children = <></> }) {
  return (
    <div>
      <Header />
      <div
        className={`pt-44`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
