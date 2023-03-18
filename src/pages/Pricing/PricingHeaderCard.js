import React from "react";
function PricingHeaderCard({
  title = "",
  content = "",
  unit = "",
  colorClass = "",
}) {
  return (
    <div className={`rounded-t-lg w-full h-full text-center ${colorClass}`}>
      <div className="h-24">
        <p className="md:text-lg text-xl pt-4">{title}</p>
        <p className="md:text-4xl text-2xl">{content}</p>
        <p className="capture pt-1">{unit}</p>
      </div>
      <button className="primary-btn p-2 ml-4 my-8">Get a Demo</button>
    </div>
  );
}

export default PricingHeaderCard;
