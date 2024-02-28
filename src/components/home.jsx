import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import curriculo from "../assets/curriculod.pdf";

const Home = () => {
  const socialNetworks = [
    {
      name: "linkedin",
      icon: (
        <FaLinkedinIn
          size={40}
          className=" hover:text-blue-800 transition-all duration-300"
        />
      ),
      href: "https://www.linkedin.com/in/lucas-campos-b26a3b204/",
    },
    {
      name: "github",
      icon: (
        <FaGithub
          size={40}
          className=" hover:text-gray-500 transition-all duration-300"
        />
      ),
      href: "https://github.com/lucascmpos",
    },
    {
      name: "whatsapp",
      icon: (
        <FaWhatsapp
          size={40}
          className=" hover:text-green-500 transition-all duration-300"
        />
      ),
      href: "https://wa.me/5514998718530",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center gap-20 bg-[#020211]">
      <div className="flex flex-col justify-center items-center gap-16 pt-96">
        <h1 className="font-extrabold text-7xl text-gray-200">
          Lucas Campos.{" "}
          <span className="text-purple-800">Front-End Developer</span>
        </h1>
        <h4
          className="font-semibold cursor-pointer text-gray-300 hover:bg-purple-950 transition all duration-300 rounded-lg p-2"
          onClick={() => window.open(curriculo, "_blank")}
        >
          Visualize meu currículo
        </h4>
      </div>
      <section className="flex flex-row gap-10 pb-80">
        {socialNetworks.map((network) => (
          <a
            href={network.href}
            target="_blank"
            className="text-gray-200 cursor-pointer hover:-translate-y-1 transition all duration-500"
            id={network.name}
            key={network.name}
          >
            {network.icon}
          </a>
        ))}
      </section>
    </main>
  );
};

export default Home;
