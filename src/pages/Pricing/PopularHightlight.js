import React from "react";

function PopularHightlight({
  isHeader = false,
  locate = "",
  children = <></>,
}) {
  return (
    <div className="relative">
      {isHeader && (
        <div style={{top: "-28px"}} className="absolute left-1/2 transform -translate-x-1/2 text-white w-10/12 rounded-t-3xl bg-main-active py-1 px-2 text-center m-auto ">
          ★ Most Popular
        </div>
      )}

      <div
        className={`border-2 md:border-y-0 md:border-x-2 border-main-active ${
          locate === "top" && "md:rounded-t-lg md:border-t-2"
        } ${locate === "bottom" && "md:rounded-b-lg md:border-b-2"} ${
          locate === "whole" && "md:rounded-t-lg md:border-y-2"
        } `}
      >
        {children}
      </div>
    </div>
  );
}

export default PopularHightlight;
