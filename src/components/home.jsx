/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { MdOutlineSimCardDownload } from "react-icons/md";
import { Github } from "lucide-react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { TbBrandWhatsapp } from "react-icons/tb";

import curriculo from "../assets/curriculo.pdf";
import resume from "../assets/resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = ({ language, theme }) => {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "Fullstack Developer", "Web Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const socialNetworks = [
    {
      name: "linkedin",
      icon: (
        <PiLinkedinLogoBold
          size={40}
          className=" transition-all duration-300 hover:text-purple-800"
        />
      ),
      href: "https://www.linkedin.com/in/lucas-campos81/",
    },
    {
      name: "github",
      icon: (
        <Github
          size={40}
          className=" transition-all duration-300 hover:text-purple-800"
        />
      ),
      href: "https://github.com/lucascmpos",
    },
    {
      name: "whatsapp",
      icon: (
        <TbBrandWhatsapp
          size={40}
          className=" transition-all duration-300 hover:text-purple-800"
        />
      ),
      href: "https://wa.me/5514998718530",
    },
  ];

  return (
    <main
      id="home"
      className={`flex flex-col items-center justify-center gap-20 border-b ${
        theme === "light"
          ? "border-secondary-light bg-secondary-light"
          : "border-secondary-dark bg-secondary-dark"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-16 pt-72 md:pt-96 ">
        <div className="flex w-auto flex-col items-center justify-center gap-1 lg:w-auto ">
          <h1
            className={`text-3xl font-extrabold md:text-4xl lg:text-5xl     ${
              theme === "light" ? "text-gray-950" : "text-gray-200"
            }`}
          >
            Lucas Campos
            <span
              className={`text-3xl font-extrabold md:text-4xl lg:text-5xl  ${
                theme === "light" ? "text-purple-600" : "text-purple-900"
              }`}
            >
              .
            </span>
          </h1>
          <span
            className={`w-auto text-center text-3xl font-extrabold md:w-auto md:text-4xl lg:text-5xl   ${
              theme === "light" ? "text-purple-600" : "text-purple-900"
            }`}
          >
            {typeEffect}
            <Cursor />
          </span>
        </div>
        <a
          className={`group flex cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black transition-all duration-300 ${
            theme === "light"
              ? "bg-black text-gray-200 hover:bg-purple-700 "
              : "bg-white text-black hover:bg-zinc-950  hover:text-gray-200"
          }`}
          href={language === "pt" ? curriculo : resume}
          target="_blank"
        >
          {language === "pt" ? "Download do currículo" : "Download resume"}
          <MdOutlineSimCardDownload
            className={`transition-all  duration-300 group-hover:scale-125 ${
              theme === "light" ? "" : "group-hover:text-gray-200"
            }`}
            size={25}
          />
        </a>
      </div>
      <section className="flex flex-row gap-10 pb-80">
        {socialNetworks.map((network) => (
          <a
            href={network.href}
            target="_blank"
            className={`all cursor-pointer transition duration-500 hover:-translate-y-1 ${
              theme === "light" ? "text-black" : "text-gray-200 "
            }`}
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
