import React from "react";

const AddButton = ({ onClick, label }) => {
    return (
      <button
        onClick={onClick}
        className="fixed bottom-5 left-1/2 bg-yellow hover:bg-yellow-600 text-black font-bold text-lg py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform -translate-x-1/2"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "20px",
        }}
      >
        {label || "Click Here to Add More Items"}
      </button>
    );
  };
  
  export default AddButton;
  