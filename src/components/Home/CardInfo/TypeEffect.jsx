import React from "react";

const TypeEffect = ({ type }) => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-full px-4 py-2 shadow-md">
      <p className="text-sm">{type}</p>
    </div>
  );
};

export default TypeEffect;
