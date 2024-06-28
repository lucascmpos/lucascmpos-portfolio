/* eslint-disable react/prop-types */
import { Img } from "react-image";
import Photo from "../assets/me.jpg";
import { useInView } from "react-intersection-observer";
import AboutTag from "./about-tag";
import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Network,
} from "lucide-react";

const About = ({ language, theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <div
      id="about"
      className={`flex flex-col items-center  justify-center gap-10 py-10 md:gap-32 md:px-20 md:py-20 xl:flex-row ${
        theme === "light" ? "bg-primary-light" : "bg-primary-dark"
      }`}
    >
      <div
        className={` flex  w-96  flex-col items-center gap-2 overflow-hidden rounded-md transition-opacity duration-1000 ease-in-out md:order-first md:-mb-36 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12 `}
      >
        <Img
          src={Photo}
          alt="Foto de Lucas Campos"
          loading="lazy"
          className="w-80 rounded-xl  md:w-auto md:px-0"
        />

        <div
          className={` flex w-full gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden ${
            theme === "light" ? "text-black" : "text-gray-300"
          } ${inView ? "opacity-100" : "opacity-80"}`}
        >
          <AboutTag
            icon={<Laptop />}
            text={` ${language === "pt" ? "2 anos como desenvolvedor" : "2 years as developer"}`}
          />
          <AboutTag
            icon={<GraduationCap />}
            text={`${language === "pt" ? "Graduado e técnico" : "Graduated and technician"}`}
          />
          <AboutTag
            icon={<Network />}
            text={`${language === "pt" ? "Freelancer ativo" : "Active freelancer"}`}
          />
          <AboutTag
            icon={<BriefcaseBusiness />}
            text={`${language === "pt" ? "Buscando oportunidades" : "Looking for opportunities"}`}
          />
        </div>
      </div>

      <div
        className={`flex w-full flex-col items-start justify-center gap-5  px-5 transition-opacity duration-1000 ease-in-out  lg:w-10/12  `}
        ref={ref}
      >
        <h1
          className={` mt-5 flex  text-4xl font-extrabold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Sobre" : "About"}
        </h1>
        <span
          className={` flex    font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Olá, meu nome é Lucas!" : "Hi, im Lucas!"}
        </span>
        <p
          className={`text-md w-full text-left font-medium transition-opacity duration-500 ease-in-out md:text-lg  lg:w-[70vw] lg:p-0  lg:text-start xl:w-[40vw] ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}
        >
          {language === "pt" ? (
            <span>
              <span style={{ color: "#7B1FA2", fontWeight: "600" }}>
                Desenvolvedor Frontend
              </span>
              , graduado em{" "}
              <span style={{ color: "#7B1FA2", fontWeight: "600" }}>
                Segurança da Informação
              </span>{" "}
              e técnico em{" "}
              <span style={{ color: "#7B1FA2", fontWeight: "600" }}>
                Informática para a Internet
              </span>
              . <br />
              Minha ambição por desenvolvimento começou quando consegui juntar
              programação e experiência do usuário, com isso, consigo formar
              ótimas experiências em forma de aplicações. De forma resumida,
              essas são as tecnologias que uso diariamente:
              <br /> JavaScript, TypeScript, CSS, React, Next, Node.js e SQL.
            </span>
          ) : (
            <span>
              <span style={{ color: "#7B1FA2", fontWeight: "600" }}>
                Frontend Developer
              </span>
              , graduate in{" "}
              <span style={{ color: "#7B1FA2", fontWeight: "600" }}>
                Information Security
              </span>{" "}
              and technician in{" "}
              <span style={{ color: "#7B1FA2", fontWeight: "600" }}>
                Computing for Internet
              </span>
              . <br /> My passion for development began when I managed to
              combine programming and user experience, with this, I was able to
              create great experiences in the form of applications. In short,
              these are the technologies I use daily:
              <br /> JavaScript, TypeScript, CSS, React, Next, Node.js and SQL.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default About;
