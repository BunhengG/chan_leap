import React from "react";

const LGElevatedButton = ({ onClick, text = "", className = "" }) => {
  return (
    <button
      className={`mt-10 px-6 py-3 font-semibold bg-white text-purple-500 rounded-full hover:bg-purple-500 hover:text-white  ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LGElevatedButton;
