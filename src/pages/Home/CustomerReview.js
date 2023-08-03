import React from "react";

export default function CustomerReview({
  name = "",
  review = "",
  role = "",
  type = "",
  avatar = "",
}) {
  return (
    <>
      <div
        style={{ backgroundImage: "url('./assets/imgs/cta-1.png')" }}
        className="p-8 bg-[#5648f6] text-white rounded-2xl text-left"
      >
        <p>{review}</p>
        <div className="flex items-start mt-8">
          <img
            className="rounded-full w-12 h-12"
            src={`./assets/imgs/${avatar}`}
            alt="avatar"
          />
          <div className="w-full border-t border-white text-left ml-4">
            <p className="py-2 text-lg font-medium">{name}</p>
            <p className="text-sm"><span>{role}</span>-<span>{type}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
