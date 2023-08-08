import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export default function Question({ title="", content="" }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-md mt-2 p-2 text-left w-full">
      <div className="font-bold text-base sm:text-xl md:text-2xl ml-3 py-2 cursor-pointer flex items-start justify-between" onClick={() => setOpen(!isOpen)}>
        <p className="pt-[1px]">{title}</p>
        <p>
        {isOpen ? (
          <MinusOutlined className="text-center text-lg float-right pr-4" />
        ) : (
          <PlusOutlined className="text-center text-lg float-right pr-4" />
        )}
        </p>
        
      </div>
      {isOpen && (
        <div className="text-sm sm:text-lg pl-3 break-words">{content}</div>
      )}
    </div>
  );
}
