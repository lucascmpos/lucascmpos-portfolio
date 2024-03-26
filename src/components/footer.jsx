import React from "react";

const Footer = ({ language, onChangeLanguage }) => {
  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    onChangeLanguage(newLanguage);
  };
  return (
    <footer className="bg-[#020207] flex  justify-center items-center font-semibold text-gray-400 p-6">
      <div className="flex gap-2 md:flex-row flex-col">
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
