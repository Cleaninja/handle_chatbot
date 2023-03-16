import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";
export default function Layout({ children = <></> }) {
  return (
    <>
      <Header />
      <div className="pt-44 px-4 lg:px-12 xl:px-container">{children}</div>
      <Footer />
    </>
  );
}
