import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

import { useInView } from "react-intersection-observer";

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
            <strong className="text-gray-500">
              Stacks: React.js, React Native, Next.js, Node.js, Tailwind.css,
              CSS, SASS, Prisma, PostgreSQL, Styled Components, Figma.{" "}
            </strong>
          </span>
        ),
        data: "09/2023 - Presente ",
        link: "",
      },
      {
        id: 2,
        titulo: "Compass.UOL",
        subtitulo: "Desenvolvedor Front End",
        descricao: (
          <span>
            Participei de cursos intensivos que cobriram desenvolvimento de
            software, metodologias ágeis e AWS Cloud. <br />
            Atuei ativamente na implementação do desenvolvimento e testes
            integrados de componentes do Storybook do Livelo App, e também
            participando de práticas ágeis, com Scrum e Kanban. Essa experiência
            ampliou minhas habilidades e consolidou meu comprometimento com a
            excelência no desenvolvimento de software.
            <br />
            <br />
            <strong className="text-gray-500">
              Stacks: React.js, React Native, SASS, Styled Components,
              Storybook, Figma, AWS Cloud, Scrum, Kanban.{" "}
            </strong>
          </span>
        ),
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
            <strong className="text-gray-500">
              Stacks: React.js, React Native, Next.js, Node.js, Tailwind.css,
              CSS, SASS, Prisma, PostgreSQL, Styled Components, Figma.{" "}
            </strong>
          </span>
        ),
        data: "09/2023 - Present ",
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
            <strong className="text-gray-500">
              Stacks: React.js, React Native, SASS, Styled Components,
              Storybook, Figma, AWS Cloud, Scrum, Kanban.{" "}
            </strong>
          </span>
        ),
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
      className={`flex flex-col items-center justify-center gap-20 pb-28 md:p-48 ${
        theme === "light" ? "bg-gray-300" : "bg-[#020211]"
      }`}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <h1
          className={`text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Experiência" : "Experience"}
        </h1>
      </div>
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center gap-16 transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex w-full flex-col items-center ">
          <h2
            className={` text-2xl font-bold md:text-3xl ${
              theme === "light" ? "text-gray-700" : "text-gray-200"
            }`}
          >
            {language === "pt"
              ? "Experiência profissional"
              : "Professional Experience"}
          </h2>
        </div>
        {currentExperiences.map((experiencia) => (
          <div
            key={experiencia.id}
            className={`group mr-auto flex flex-col  items-start gap-5 rounded-3xl  pb-3 transition-all duration-300 2xl:flex-row`}
          >
            <div className="flex w-full   flex-col items-center justify-start">
              <h2
                className={`w-26  text-xl font-bold md:w-auto md:text-3xl xl:w-auto ${
                  theme === "light" ? "text-gray-800" : "text-gray-300"
                } `}
              >
                {experiencia.titulo}
              </h2>
              <h3 className="text-lg font-semibold text-gray-500 md:text-xl">
                {experiencia.data}
              </h3>
            </div>
            <div className="flex w-full flex-col items-center justify-start 2xl:items-start">
              <div className="flex w-4/6 flex-col items-center pb-2 md:w-auto  ">
                <h3
                  className={`text-lg font-bold text-purple-700 transition-all md:text-xl`}
                >
                  {experiencia.subtitulo}
                </h3>
              </div>
              <p
                className={`w-10/12 text-left text-sm  md:text-lg lg:w-10/12   2xl:w-full ${
                  theme === "light" ? "text-black" : "text-gray-300"
                }`}
              >
                {experiencia.descricao}
              </p>
            </div>
            <div className="line-vertical left-2/2  group absolute mx-9 mt-2  h-2/6 w-0 gap-20 bg-gray-200 lg:w-0.5 2xl:right-1/2  2xl:mt-0 2xl:h-1/6 ">
              <MdOutlineWorkOutline
                size={40}
                className="rounded-xl bg-gray-200 p-2  text-purple-800 transition-all hover:scale-105  "
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </div>
        ))}
        <hr className="border-gray-00 my-8 w-3/4 border-t" />
        <div className="flex w-full flex-col items-center ">
          <h2
            className={`text-4xl font-bold ${
              theme === "light" ? "text-black" : "text-gray-200"
            }`}
          >
            {language === "pt" ? "Educação" : "Education"}
          </h2>
        </div>
        {formacoes[language].map((formacao) => (
          <div
            key={formacao.id}
            className={`group mr-auto flex flex-col  items-start gap-5 rounded-3xl  pb-3 transition-all duration-300 2xl:flex-row`}
          >
            <div className="flex w-full   flex-col items-center justify-center">
              <h2
                className={`w-36  text-xl font-bold md:w-auto md:text-3xl xl:w-auto ${
                  theme === "light" ? "text-gray-800" : "text-gray-300"
                } `}
              >
                {formacao.titulo}
              </h2>
              <h3 className="text-lg font-semibold text-gray-500 md:text-xl">
                {formacao.data}
              </h3>
            </div>
            <div className="flex w-full flex-col items-center justify-start md:mx-2 2xl:items-start">
              <div className="flex w-4/6 flex-col items-center pb-2 lg:w-auto">
                <h3
                  className={`text-center text-lg font-semibold text-purple-700   transition-all md:text-xl`}
                >
                  {formacao.subtitulo}
                </h3>
              </div>
              <p
                className={`w-10/12 text-left text-sm  md:text-lg lg:w-10/12   2xl:w-full ${
                  theme === "light" ? "text-black" : "text-gray-300"
                }`}
              >
                {formacao.descricao}
              </p>
            </div>
            <div className="line-vertical left-2/2 absolute mx-9 mt-2  h-2/6 w-0 gap-20 bg-gray-200 lg:w-0.5 2xl:right-1/2  2xl:mt-0 2xl:h-1/6 ">
              <IoSchoolOutline
                size={40}
                className="rounded-xl  bg-gray-200 p-2 text-purple-800  "
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
