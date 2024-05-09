import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
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
        titulo: "Freelancer",
        subtitulo: "Desenvolvedor Front End",
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
        subtitulo: "Desenvolvedor Front End",
        descricao: (
          <span>
            Atuei ativamente na implementação do desenvolvimento e de testes
            integrados de componentes do Storybook do cliente, e também
            participando de práticas ágeis, com Scrum e Kanban. Essa experiência
            ampliou minhas habilidades e consolidou meu comprometimento com a
            excelência no desenvolvimento de software. <br />
            Participei de mais de 20 cursos intensivos que cobriram
            desenvolvimento de software, metodologias ágeis e AWS Cloud.
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
        titulo: "Freelancer",
        subtitulo: "Front End Developer",
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
        subtitulo: "Front End Developer",
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

  const formacoes = {
    pt: [
      {
        id: 1,
        titulo: "FATEC Ourinhos",
        subtitulo: "Técnologo em Segurança da Informação",
        descricao: (
          <span>
            Segurança de redes, Criptografia, Gestão de riscos, Forense digital,
            Segurança de aplicações.
            <br /> Programação Orientada a Objetos (Java, Python), Banco de
            dados (Docker e MySQL), Linux e Debian. Habilidades para proteger
            sistemas, dados e redes contra ameaças cibernéticas, aplicando
            práticas de segurança, gerenciamento de riscos e conformidade com
            regulamentações.
          </span>
        ),
        data: "02/2021 - 12/2023 ",
        link: "https://www.fatecourinhos.edu.br/",
      },
      {
        id: 2,
        titulo: "ETEC Jacinto Ferreira de Sá ",
        subtitulo: "Técnico em Informática para a Internet",
        descricao: (
          <span>
            Linguagens de Programação (C++, Java, Python, PHP) Programação
            Orientada a Objetos (Java, PHP) Linguagens Web (HTML5, CSS3,
            Javascript), Banco de dados (MySQL), Fundamentos de Hardware e de
            Redes, Inglês Técnico.
          </span>
        ),
        data: "02/2018 - 12/2020 ",
        link: "https://eteourinhos.com.br/",
      },
    ],
    en: [
      {
        id: 1,
        titulo: "FATEC Ourinhos",
        subtitulo: "Information Security Technologist",
        descricao: (
          <span>
            Network Security, Cryptography, Risk Management, Digital Forensics,
            Application Security.
            <br /> Object-Oriented Programming (Java, Python), Database (Docker
            and MySQL), Linux and Debian. Skills to protect systems, data, and
            networks against cyber threats, applying security practices, risk
            management, and compliance with regulations.
          </span>
        ),
        data: "02/2021 - 12/2023 ",
        link: "https://www.fatecourinhos.edu.br/",
      },
      {
        id: 2,
        titulo: "ETEC Jacinto Ferreira de Sá ",
        subtitulo: "Internet Computing Technician",
        descricao: (
          <span>
            Programming Languages (C++, Java, Python, PHP) Object-Oriented
            Programming (Java, PHP) Web Languages (HTML5, CSS3, Javascript),
            Database (MySQL), Fundamentals of Hardware and Networks, Technical
            English.
          </span>
        ),
        data: "02/2018 - 12/2020 ",
        link: "https://eteourinhos.com.br/",
      },
    ],
  };

  const currentExperiences = experiences[language];

  return (
    <div
      id="exp"
      className={` flex flex-col items-center justify-center px-3 pb-28 pt-20 md:pt-28 ${
        theme === "light" ? "bg-gray-300" : "bg-[#020211]"
      }`}
    >
      <div className="mb-10 flex w-full flex-col items-center justify-center  text-center">
        <h1
          className={`text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt"
            ? "Experiências profissionais"
            : "Professional experiences"}
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
            className={`group  flex w-full flex-col items-center justify-center gap-4 rounded-lg border-4 border-purple-700  border-opacity-10  py-8 transition-all  hover:border-opacity-50  md:w-[600px] md:px-16 lg:w-[900px] ${theme === "light" ? "bg-gray-200" : "bg-[#01020a]"}`}
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
              <span className=" text-center font-semibold text-gray-400">
                {language === "pt"
                  ? "Tecnologias usadas:"
                  : "Used technologies:"}
              </span>

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

        <div className="flex w-full flex-col items-center ">
          <h2
            className={`text-center text-4xl font-bold ${
              theme === "light" ? "text-black" : "text-gray-200"
            }`}
          >
            {language === "pt" ? "Formação acadêmica" : "Academic formation"}
          </h2>
        </div>
        {formacoes[language].map((formacao) => (
          <div
            className={`group relative flex w-full flex-col items-center justify-center gap-4 rounded-lg border-4  border-purple-700 border-opacity-10 py-8 transition-all  hover:border-opacity-50  md:w-[600px] md:px-16 lg:w-[900px] ${theme === "light" ? "bg-gray-200" : "bg-[#01020a]"}`}
            key={formacao.id}
          >
            <div className="flex flex-col items-center justify-center">
              <h2
                className={`w-26 relative flex flex-col items-center justify-center  gap-2 text-xl font-bold md:w-auto md:text-3xl xl:w-auto ${
                  theme === "light" ? "text-gray-800" : "text-gray-300"
                } `}
              >
                <IoSchoolOutline className="h-12 w-12 text-purple-700 transition-all   group-hover:scale-125" />

                {formacao.titulo}
              </h2>

              <h3 className="font-semibold text-gray-500">{formacao.data}</h3>
            </div>
            <div className="flex w-full flex-col  justify-start ">
              <div className="flex flex-col  justify-center px-5 pb-2 md:w-auto  ">
                <h3
                  className={`text-wrap text-left text-lg font-bold text-purple-700 transition-all md:text-2xl`}
                >
                  {formacao.subtitulo}
                </h3>
              </div>
              <p
                className={`w-full px-5  text-start text-sm font-semibold   md:text-lg lg:w-10/12   2xl:w-full ${
                  theme === "light" ? "text-black" : "text-gray-400"
                }`}
              >
                {formacao.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
