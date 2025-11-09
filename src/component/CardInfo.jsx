import React from "react";

function CardInfo({ name, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-indigo-500">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default CardInfo;
