/* eslint-disable react/prop-types */
import React from "react";

const Footer = ({ language, theme }) => {
  return (
    <footer
      className={`flex items-center  justify-center bg-[#020207] p-6 font-semibold text-gray-300 ${theme === "light" ? "bg-[#fdfbff]" : "bg-[#01020a]"}`}
    >
      <div
        className={`flex flex-col gap-2 md:flex-row ${theme === "light" ? "text-black" : "text-gray-300"}`}
      >
        <p className="text-semibold">
          <span className="font-extrabold">© 2024</span> Lucas Campos.
        </p>
        <p>
          {language === "pt"
            ? "Todos os direitos reservados."
            : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
