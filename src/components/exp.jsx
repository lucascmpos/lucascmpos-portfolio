import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

import { useInView } from "react-intersection-observer";

const Experience = ({ language, onChangeLanguage }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const experiences = {
    pt: [
      {
        id: 1,
        titulo: "Desenvolvedor Front End",
        subtitulo: "Freelancer",
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
            <strong className="text-gray-400">
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
        titulo: "Desenvolvedor Front End",
        subtitulo: "Compass.UOL",
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
            <strong className="text-gray-400">
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
        titulo: "Front End Developer",
        subtitulo: "Freelancer",
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
            <strong className="text-gray-400">
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
        titulo: "Front End Developer",
        subtitulo: "Compass.UOL",
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
            <strong className="text-gray-400">
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
      className="bg-[#020211] flex flex-col md:p-48 py-28 justify-center gap-20 items-center"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-gray-200 text-4xl font-bold">
          {language === "pt" ? "Experiência" : "Experience"}
        </h1>
      </div>
      <div
        ref={ref}
        className={`flex gap-16 flex-col transition-opacity justify-center items-center ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-gray-400 md:text-3xl text-2xl font-bold">
            {language === "pt"
              ? "Experiência profissional"
              : "Professional Experience"}
          </h2>
        </div>
        {currentExperiences.map((experiencia) => (
          <div
            key={experiencia.id}
            className={`flex 2xl:flex-row flex-col group  transition-all duration-300 gap-5  pb-3 mr-auto rounded-3xl items-start`}
          >
            <div className="flex flex-col   items-center justify-start w-full">
              <h2 className="font-bold  md:text-3xl text-xl text-gray-300 ">
                {experiencia.titulo}
              </h2>
              <h3 className="font-semibold md:text-xl text-lg text-purple-900">
                {experiencia.data}
              </h3>
            </div>
            <div className="flex flex-col 2xl:items-start items-center justify-start w-full">
              <div className="flex flex-col w-4/6 md:w-auto items-start ">
                <h3 className="font-semibold md:text-xl text-lg  text-gray-400  transition-all">
                  {experiencia.subtitulo}
                </h3>
              </div>
              <p className="lg:w-10/12 w-8/12 text-gray-300 md:text-lg text-sm md:text-justify text-left 2xl:w-full">
                {experiencia.descricao}
              </p>
            </div>
            <div className="line-vertical absolute bg-gray-200 lg:w-0.5 w-0  gap-20 2xl:mt-0 mt-2 mx-9 2xl:h-1/6 h-2/6  2xl:right-1/2 left-2/2 ">
              <MdOutlineWorkOutline
                size={45}
                className="text-purple-800  bg-gray-200 rounded-xl p-2  "
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </div>
        ))}
        <hr className="my-8 border-t border-gray-00 w-3/4" />
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-gray-400 md:text-3xl text-2xl font-bold">
            {language === "pt" ? "Educação" : "Education"}
          </h2>
        </div>
        {formacoes[language].map((formacao) => (
          <div
            key={formacao.id}
            className={`flex 2xl:flex-row flex-col group  transition-all duration-300 gap-5  pb-3 mr-auto rounded-3xl items-start`}
          >
            <div className="flex flex-col   items-center justify-start w-full">
              <h2 className="font-bold md:w-48 w-36 xl:w-auto md:text-3xl text-xl text-gray-300 ">
                {formacao.titulo}
              </h2>
              <h3 className="font-semibold md:text-xl text-lg text-purple-900">
                {formacao.data}
              </h3>
            </div>
            <div className="flex flex-col 2xl:items-start md:mx-2 items-center justify-start w-full">
              <div className="flex flex-col w-4/6 lg:w-auto items-start">
                <h3 className="font-semibold md:text-xl text-lg  text-gray-400  transition-all">
                  {formacao.subtitulo}
                </h3>
              </div>
              <p className="lg:w-10/12 w-8/12 text-gray-300 md:text-lg text-sm md:text-justify text-left 2xl:w-full">
                {formacao.descricao}
              </p>
            </div>
            <div className="line-vertical absolute bg-gray-200 lg:w-0.5 w-0  gap-20 2xl:mt-0 mt-2 mx-9 2xl:h-1/6 h-2/6  2xl:right-1/2 left-2/2 ">
              <IoSchoolOutline
                size={45}
                className="text-purple-800  bg-gray-200 rounded-xl p-2  "
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
