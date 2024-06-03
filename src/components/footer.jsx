import React from "react";

const Footer = ({ language }) => {
  return (
    <footer className="flex items-center  justify-center bg-[#020207] p-6 font-semibold text-gray-400">
      <div className="flex flex-col gap-2 md:flex-row">
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
