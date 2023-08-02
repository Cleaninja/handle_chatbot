import React, { useState } from "react";
import Footer from "./Footer";
import FullMenu from "./FullMenu";
import Header from "./Header";
import "./layout.css";
export default function Layout({ children = <></>}) {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="relative">
      <FullMenu isTrue={isTrue} onIsTrue={setIsTrue} />
      <Header onFullMenu={setIsTrue} />
      {children}
      <Footer />
    </div>
  );
}
