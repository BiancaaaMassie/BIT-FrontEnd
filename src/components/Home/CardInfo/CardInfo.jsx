import React from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

function CardInfo({ name, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center hover:shadow-2xl transition">
      <h2 className="text-2xl font-semibold text-indigo-600">{name}</h2>
      <p className="text-gray-600 mt-2 mb-4">{description}</p>

      <div className="space-y-3">
        <Evolution text="Evolution Info from Props" />
        <TypeEffect type="Electric" />
        <Logo text="Pokémon Logo" />
      </div>
    </div>
  );
}

export default CardInfo;
