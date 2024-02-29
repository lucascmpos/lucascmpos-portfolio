import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

import curriculo from "../assets/curriculod.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "Web developer", "Software engineer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const socialNetworks = [
    {
      name: "linkedin",
      icon: (
        <FiLinkedin
          size={40}
          className=" hover:text-blue-800 transition-all duration-300"
        />
      ),
      href: "https://www.linkedin.com/in/lucas-campos-b26a3b204/",
    },
    {
      name: "github",
      icon: (
        <VscGithub
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
    <main
      id="home"
      className="flex flex-col justify-center items-center gap-20 bg-[#020211]"
    >
      <div className="flex flex-col justify-center items-center gap-16 md:pt-96 pt-72">
        <div className="flex md:flex-row lg:w-auto flex-col gap-1">
          <h1 className="font-extrabold lg:text-6xl text-3xl   text-gray-200">
            Lucas Campos
            <span className="font-extrabold lg:text-6xl  text-3xl text-purple-900">
              .
            </span>
          </h1>
          <span className="font-extrabold lg:text-6xl  text-3xl md:w-auto  text-purple-900">
            {typeEffect}
            <Cursor />
          </span>
        </div>
        <h4
          className="font-bold cursor-pointer text-gray-300 hover:bg-purple-950 transition all duration-300 rounded-lg p-2"
          onClick={() => window.open(curriculo, "_blank")}
        >
          Veja meu currículo
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
