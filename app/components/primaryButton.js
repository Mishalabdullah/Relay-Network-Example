"use client";
import React from "react";
import Image from "next/image";

const PrimaryButton = ({ text, onClick, isDisabled }) => {
  return (
    // <button
    //   className="btn p-3 my-9 text-white hover:bg-[#0DAAAA] hover:shadow-xl transition duration-200 ease-in-out flex justify-center items-center"
    //   onClick={onClick}
    //   disabled={isDisabled}
    // >
    //   <div className="">{text}</div>
    // </button>
    <button
      className="bg-[#03194B] hover:bg-[#004cff] m-2 text-center p-4 text-white rounded-[8px] text-base md:text-lg"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
