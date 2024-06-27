/* eslint-disable react/prop-types */
import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`flex items-center justify-center  border-t  p-6 font-semibold text-gray-300 ${theme === "light" ? "border-secondary-light bg-primary-light" : "border-secondary-dark bg-primary-dark"}`}
    >
      <div
        className={`flex flex-col gap-2 md:flex-row ${theme === "light" ? "text-black" : "text-gray-300"}`}
      >
        <p className="text-semibold">
          <span className="font-extrabold">© 2024</span> Lucas Campos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
