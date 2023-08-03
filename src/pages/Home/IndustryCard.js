import React from "react";
export default function IndustryCard({ title = "", image = "", content = "" }) {
  return (
    <div className="p-4 rounded-2xl shadow-md h-full relative break-all bg-white">
      <div className="border-b border-gray-200 pb-3">
        <img
          className="w-[50px]"
          src={`./assets/imgs/${image}`}
          alt="icon-07-1-1"
        />
      </div>
      <h2 className="text-xl text-black pt-3">{title}</h2>
      <p className="text-[#212529bf] pt-3">
        {content}
      </p>
    </div>
  );
}
