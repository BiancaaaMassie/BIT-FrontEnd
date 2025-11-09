import React from "react";

const Footer = ({ text }) => {
  return (
    <footer className="bg-pink-200 text-center text-gray-700 py-3 mt-4">
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
