import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-blue-400 text-white text-center py-4 shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">{subtitle}</p>
    </header>
  );
};

export default Header;
