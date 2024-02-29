import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#01020a] flex  justify-center items-center font-semibold text-gray-400 p-6">
      <div className="flex gap-2 md:flex-row flex-col">
        <p className="text-semibold">
          <span className="font-extrabold">© 2024</span> Lucas Campos.
        </p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
