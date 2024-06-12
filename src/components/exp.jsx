/* eslint-disable react/prop-types */
import { MdOutlineWorkOutline } from "react-icons/md";
import { ChevronsRight } from "lucide-react";

import { useInView } from "react-intersection-observer";
import TechnologyCard from "./tech-tag";

const Experience = ({ language, theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const experiences = {
    pt: [
      {
        id: 1,
        titulo: "Autônomo",
        subtitulo: "Desenvolvedor Fullstack",
        descricao: (
          <span>
            De forma independente, atuo com o desenvolvimento de software de
            ponta a ponta, desde o levantamento de requisitos com as partes
            envolvidas no projeto, prototipação, codificação no lado do cliente
            e servidor, testes, documentação, implementação, até a apresentação
            para o cliente final, utilizando linguagens fortes no mercado,
            sempre atualizado e a nível de exigência internacional, trabalhando
            com metodologias ágeis.
            <br />
            <br />
          </span>
        ),
        data: "09/2023 - Presente ",
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "React Native",
          "Next.js",
          "Node.js",
          "Express",
          "Tailwind",
          "Figma",
          "Sass",
        ],
        link: "",
      },
      {
        id: 2,
        titulo: "Compass.UOL",
        subtitulo: "Desenvolvedor Frontend",
        descricao: (
          <span>
            Atuei ativamente na implementação do desenvolvimento e testes de
            componentes e interfaces da aplicação do cliente Livelo web e
            mobile, e também participando de práticas ágeis, com Scrum e Kanban.{" "}
            <br />
            Participei de mais de 20 cursos intensivos que cobriram
            desenvolvimento de software, metodologias ágeis e AWS Cloud. <br />
            Essa experiência ampliou minhas habilidades e consolidou meu
            comprometimento com a excelência no desenvolvimento de software.
            <br />
            <br />
          </span>
        ),
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "React Native",
          "Sass",
          "Figma",
          "Storybook",
        ],
        data: "11/2022 - 09/2023 ",
        link: "https://compass.uol/pt/home/",
      },
    ],
    en: [
      {
        id: 1,
        titulo: "Self employed",
        subtitulo: "Fullstack Developer",
        descricao: (
          <span>
            Independently, I work with end-to-end software development, from
            requirements gathering with stakeholders, prototyping, coding on
            both client and server side, testing, documentation, implementation,
            to presentation to the final client, using strong market languages,
            always updated and at an international level of requirement, working
            with agile methodologies.
            <br />
            <br />
          </span>
        ),
        data: "09/2023 - Present ",
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "React Native",
          "Next.js",
          "Node.js",
          "Express",
          "Tailwind",
          "Figma",
          "Sass",
        ],
        link: "https://www.linkedin.com/in/lucas-campos81/",
      },
      {
        id: 2,
        titulo: "Compass.UOL",
        subtitulo: "Frontend Developer",
        descricao: (
          <span>
            I actively participated in courses that covered software
            development, agile methodologies, and AWS Cloud. <br />
            I actively participated in the implementation of development and
            integrated testing of components of the Livelo App Storybook, and
            also participating in agile practices, with Scrum and Kanban. This
            experience expanded my skills and consolidated my commitment to
            excellence in software development.
            <br />
            <br />
          </span>
        ),
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "React Native",
          "Sass",
          "Storybook",
        ],
        data: "11/2022 - 09/2023 ",
        link: "https://compass.uol/pt/home/",
      },
    ],
  };

  const currentExperiences = experiences[language];

  return (
    <div
      id="exp"
      className={` flex flex-col items-center justify-center px-3 pb-28 pt-20 md:pt-28 ${
        theme === "light" ? "bg-[#fdfbff]" : "bg-[#020211]"
      }`}
    >
      <div className="mb-10 flex w-full flex-col items-center justify-center  text-center">
        <h1
          className={`text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Experiências" : "Work history"}
        </h1>
      </div>
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center gap-16 px-2 transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentExperiences.map((experiencia) => (
          <div
            className={`group flex w-[80vw] flex-col items-center justify-center gap-4 rounded-lg border-4 border-purple-700  border-opacity-30  py-8 transition-all  hover:border-opacity-80  md:w-[600px] md:px-16 lg:w-[70vw]  xl:w-[55vw] ${theme === "light" ? "bg-white" : "bg-[#01020a]"}`}
            key={experiencia.id}
          >
            <div className="flex flex-col items-center justify-center">
              <h2
                className={`w-26  flex flex-col items-center justify-center  gap-2 text-xl font-bold md:w-auto md:text-2xl xl:w-auto ${
                  theme === "light" ? "text-gray-800" : "text-gray-300"
                } `}
              >
                <MdOutlineWorkOutline className=" h-12 w-12 text-purple-700 transition-all    group-hover:scale-125" />

                {experiencia.titulo}
              </h2>

              <h3 className="font-semibold text-gray-500">
                {experiencia.data}
              </h3>
            </div>
            <div className="flex w-full flex-col  justify-start ">
              <div className="flex flex-col px-5  pb-2 md:w-auto  ">
                <h3
                  className={`text-nowrap text-left text-lg   font-bold text-purple-700 transition-all md:text-3xl`}
                >
                  {experiencia.subtitulo}
                </h3>
              </div>
              <p
                className={`w-full px-5 text-start text-sm font-semibold  md:text-lg lg:w-10/12   2xl:w-full ${
                  theme === "light" ? "text-black" : "text-gray-400"
                }`}
              >
                {experiencia.descricao}
              </p>
            </div>
            <div className="flex w-full flex-row justify-between px-5">
              <div className="space-x-3">
                <span
                  className={`text-center font-semibold ${theme === "light" ? "text-gray-500" : "text-gray-400/80"}`}
                >
                  {language === "pt"
                    ? "Tecnologias usadas:"
                    : "Used technologies:"}
                </span>

                <span
                  className={`text-center text-xs font-semibold ${theme === "light" ? "text-gray-500/70" : "text-gray-400/50"} lg:hidden`}
                >
                  {language === "pt"
                    ? "Arraste para ver mais"
                    : "Swipe to see more"}
                </span>
              </div>

              <ChevronsRight className="text-purple-800 lg:hidden" />
            </div>

            <div className="flex w-[90vw] max-w-full flex-row gap-2 overflow-x-auto text-nowrap px-2 text-center   md:gap-4 lg:grid lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {experiencia.tech &&
                experiencia.tech.map((technology, index) => (
                  <TechnologyCard
                    key={index}
                    technology={technology}
                    style={{ width: "140px", height: "auto" }}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
