import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdOutlineSimCardDownload } from "react-icons/md";
import curriculo from "../assets/curriculo.pdf";
import resume from "../assets/resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = ({ language, onChangeLanguage, theme, onChangeTheme }) => {
  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    onChangeLanguage(newLanguage);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    onChangeTheme(newTheme);
  };

  const [typeEffect] = useTypewriter({
    words: [
      language === "pt" ? "Desenvolvedor Front End" : "Front End Developer",
      language === "pt" ? "Desenvolvedor React" : "React Developer",
      language === "pt" ? "Desenvolvedor Web" : "Web Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const socialNetworks = [
    {
      name: "linkedin",
      icon: (
        <ImLinkedin
          size={39}
          className=" hover:text-purple-800 transition-all duration-300"
        />
      ),
      href: "https://www.linkedin.com/in/lucas-campos81/",
    },
    {
      name: "github",
      icon: (
        <FaGithub
          size={40}
          className=" hover:text-purple-800 transition-all duration-300"
        />
      ),
      href: "https://github.com/lucascmpos",
    },
    {
      name: "whatsapp",
      icon: (
        <IoLogoWhatsapp
          size={40}
          className=" hover:text-purple-800 transition-all duration-300"
        />
      ),
      href: "https://wa.me/5514998718530",
    },
  ];

  return (
    <main
      id="home"
      className={`flex flex-col justify-center items-center gap-20 ${
        theme === "light" ? "bg-gray-200" : "bg-[#020211]"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-16 md:pt-96 pt-72">
        <div className="flex md:flex-row lg:w-auto flex-col gap-1">
          <h1
            className={`font-extrabold lg:text-6xl xl:text-7xl text-3xl    ${
              theme === "light" ? "text-gray-950" : "text-gray-200"
            }`}
          >
            Lucas Campos
            <span className="font-extrabold lg:text-6xl xl:text-7xl text-3xl text-purple-900">
              .
            </span>
          </h1>
          <span
            className={`font-extrabold  lg:text-6xl xl:text-7xl text-3xl md:w-auto w-60  ${
              theme === "light" ? "text-purple-500" : "text-purple-900"
            }`}
          >
            {typeEffect}
            <Cursor />
          </span>
        </div>
        <a
          className={`flex flex-row gap-3 justify-center   items-center font-bold cursor-pointer text-black group transition-all duration-300 rounded-lg p-2 ${
            theme === "light"
              ? "bg-black hover:bg-purple-500 hover:text-black text-gray-200"
              : "bg-white hover:bg-zinc-950 hover:text-gray-200  text-black"
          }`}
          href={language === "pt" ? curriculo : resume}
          target="_blank"
        >
          {language === "pt" ? "Download do currículo" : "Download resume"}
          <MdOutlineSimCardDownload
            className={`group-hover:scale-125  transition-all duration-300 ${
              theme === "light"
                ? "group-hover:text-black"
                : "group-hover:text-gray-200"
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
            className={`cursor-pointer hover:-translate-y-1 transition all duration-500 ${
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
