import React, { useState } from "react";
import Footer from "./Footer";
import FullMenu from "./FullMenu";
import Header from "./Header";
import "./layout.css";
export default function Layout({ children = <></>, on = true }) {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="relative">
      <FullMenu isTrue={isTrue} onIsTrue={setIsTrue} />
      <Header onFullMenu={setIsTrue} />
      <div className={on ? "pt-44" : ""}>{children}</div>
      <Footer />
    </div>
  );
}
