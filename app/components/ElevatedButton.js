import React from "react";

const ElevatedButton = ({ onClick, text = "Copy", className = "" }) => {
  return (
    <button
      className={`text-base text-red-500 font-medium bg-white rounded-full py-2 px-8 hover:bg-red-500 hover:text-white  ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ElevatedButton;
