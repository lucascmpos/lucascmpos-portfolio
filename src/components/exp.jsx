/* eslint-disable react/prop-types */
import {
  CalendarDays,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
} from "lucide-react";
import compassLogo from "../assets/compass-logo.png";
import AlaresLogo from "../assets/alares-logo.jpg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import gitIcon from "../assets/icons/git.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import nextIcon from "../assets/icons/next.svg";
import reduxIcon from "../assets/icons/redux.svg";
import sassIcon from "../assets/icons/sass.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import figmaIcon from "../assets/icons/figma.svg";
import storybookIcon from "../assets/icons/storybook.svg";
import nodeIcon from "../assets/icons/node.svg";
import expressIcon from "../assets/icons/express.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import prismaIcon from "../assets/icons/prisma.svg";
import dockerIcon from "../assets/icons/docker.svg";
import myLogo from "../assets/web-logo.svg";
import weHelpLogo from "../assets/wehelp-logo.jpg";
import anaugerLogo from "../assets/anauger_logo.jpg";

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
        titulo: "WeHelp NPS",
        icon: weHelpLogo,
        subtitulo: "Desenvolvedor Frontend",
        descricao: (
          <span>
            Construção, implementação e manutenção de todo o novo sistema da
            empresa, WeHelp Software NPS usando Next.js, React, React Native,
            TypeScript e Tailwind CSS. Prototipação via Figma, codificação
            client-side e server-side, testes e documentação.Utilização de
            metodologias como Mobile First, SSR, UI/UX para construção do
            sistema e aplicação.- Integração de APIs RESTful de forma eficiente
            e segura ao Frontend, garantindo comunicação fluida em 70%entre as
            camadas da aplicação
          </span>
        ),
        data: "07/2024 - atualmente ",
        tech: ["React.js", "Next.js", "TypeScript", "Tailwindcss", "Figma"],
        link: "https://www.wehelpsoftware.com/pt-BR",
      },
      {
        id: 2,
        titulo: "Anauger",
        icon: anaugerLogo,
        subtitulo: "Desenvolvedor Frontend",
        descricao: (
          <span>
            Construção de um aplicativo para Android e iOS, conseguindo abrangir
            2 sistemas ao mesmo tempo através de protótipo do Figma utilizando
            tecnologias como React Native, CSS, Figma e Styled Components.
            Integração com Backend em Java via REST API para calculo de bombas
            d'agua, diminuindo em 20% o tempo de resposta para retorno dos
            dados. Implementação da aplicação via Play Store e Apple Store,
            aumentando em 40% a rapidez para o cliente baixar a aplicação.
          </span>
        ),
        data: "02/2024 - 04/2024 ",
        tech: [
          "React.js",
          "React Native",
          "TypeScript",
          "Figma",
          "Styled Components",
        ],
        link: "https://play.google.com/store/apps/details?id=com.anauger.br",
      },
      {
        id: 3,
        titulo: "Compass.UOL",
        icon: compassLogo,
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
          </span>
        ),
        tech: [
          "React.js",
          "React Native",
          "Sass",
          "TypeScript",
          "Figma",
          "Storybook",
        ],
        data: "11/2022 - 09/2023 ",
        link: "https://compass.uol/pt/home/",
      },
      {
        id: 4,
        titulo: "Alares Internet",
        icon: AlaresLogo,
        subtitulo: "Analista de Help Desk",
        descricao: (
          <span>
            Ofereci suporte personalizado aos clientes através de canais de
            texto e voz, monitorando perfis de clientes através de sistemas ERP.{" "}
            <br />
            Entendi as necessidades do público, propondo soluções em
            conformidade com as normas da empresa. <br />
            Gerenciei arquivos e documentos, aplicando senso analítico e
            interpessoal. <br />
            Configurei redes de internet e resolvi problemas de infraestrutura
            de hardware e rede, utilizando praticas das habilidades de
            comunicação, flexibilidade e trabalho em equipe.
          </span>
        ),
        tech: [
          "Microsoft Office/365",
          "AnyDesk",
          "Voz sobre IP",
          "Sistemas ERP",
          "Configuração de Modem/Router",
        ],
        data: "06/2021 - 01/2022 ",
        link: "https://www.alaresinternet.com.br/",
      },
    ],
    en: [
      {
        id: 1,
        titulo: "WeHelp NPS",
        icon: weHelpLogo,
        subtitulo: "Frontend Developer",
        descricao: (
          <span>
            Building, implementing and maintaining the company's new entire
            system, WeHelp Software NPS using Next.js, React, React Native,
            TypeScript and Tailwind CSS.Prototyping via Figma, client-side and
            server-side coding, testing, and documentation. Use of methodologies
            such as Mobile First, SSR, UI/UX to build the system and
            application.Integration of RESTful APIs efficiently and securely to
            the Frontend, ensuring fluid communication in 70% between the
            application layers.Organization with agile methodologies such as
            Scrum and Kanban, optimizing application construction time by 30%.
          </span>
        ),
        data: "07/2024 - currently ",
        tech: ["React.js", "Next.js", "TypeScript", "Tailwindcss", "Figma"],
        link: "https://www.wehelpsoftware.com/pt-BR",
      },
      {
        id: 2,
        titulo: "Anauger",
        icon: anaugerLogo,
        subtitulo: "Frontend Developer",
        descricao: (
          <span>
            Construction of an application for Android and iOS, managing to
            cover 2 systems at the same time through a Figma prototype using
            technologies such as React Native, CSS, Figma and Styled Components.
            Integration with Java Backend via REST API to calculate water pumps,
            reducing the response time for data return by 20%.Implementation of
            the application via Play Store and App Store, increasing the speed
            for customers to download the application by 40%.
          </span>
        ),
        data: "02/2024 - 04/2024 ",
        tech: [
          "React.js",
          "React Native",
          "TypeScript",
          "Figma",
          "Styled Components",
        ],
        link: "https://play.google.com/store/apps/details?id=com.anauger.br",
      },
      {
        id: 3,
        titulo: "Compass.UOL",
        icon: compassLogo,
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
          "React.js",
          "React Native",
          "TypeScript",
          "Sass",
          "Figma",
          "Storybook",
        ],
        data: "11/2022 - 09/2023 ",
        link: "https://compass.uol/pt/home/",
      },
      {
        id: 4,
        titulo: "Alares Internet",
        icon: AlaresLogo,
        subtitulo: "Help Desk Analyst",
        descricao: (
          <span>
            Provided personalized support to clients through text and voice
            channels, monitoring customer profiles through ERP systems. <br />
            Understood the needs of the audience, proposing solutions in
            accordance with company standards. <br />
            Managed files and documents, applying analytical and interpersonal
            skills. <br />
            Configured internet networks and solved hardware and network
            infrastructure problems, using communication, flexibility, and
            teamwork skills.
          </span>
        ),
        tech: [
          "Microsoft Office/365",
          "AnyDesk",
          "Voice over IP",
          "ERP Systems",
          "Modem/Router configuration",
        ],
        data: "11/2022 - 09/2023 ",
        link: "https://www.alaresinternet.com.br/",
      },
    ],
  };

  const icons = [
    { icon: htmlIcon, name: "HTML5" },
    { icon: cssIcon, name: "CSS3" },
    { icon: javascriptIcon, name: "JavaScript" },
    { icon: typescriptIcon, name: "TypeScript" },
    { icon: reactIcon, name: "React.js" },
    { icon: nextIcon, name: "Next.js" },
    { icon: reduxIcon, name: "Redux" },
    { icon: gitIcon, name: "Git" },
    { icon: sassIcon, name: "Sass" },
    { icon: tailwindIcon, name: "Tailwind" },
    { icon: figmaIcon, name: "Figma" },
    { icon: storybookIcon, name: "Storybook" },
    { icon: nodeIcon, name: "Node.js" },
    { icon: expressIcon, name: "Express" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: postgresqlIcon, name: "PostgreSQL" },
    { icon: prismaIcon, name: "Prisma" },
    { icon: dockerIcon, name: "Docker" },
  ];
  const currentExperiences = experiences[language];

  return (
    <div
      id="exp"
      className={`flex flex-col items-center  justify-center border-b  py-20 md:flex-row  md:py-36 ${
        theme === "light"
          ? "border-secondary-light bg-primary-light"
          : "border-secondary-dark bg-primary-dark"
      }`}
    >
      <div className="flex flex-col items-center justify-center px-4 xl:ml-52">
        {" "}
        <h1
          className={` mb-3 text-center text-2xl font-bold lg:text-4xl ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt"
            ? "Experiências & Tecnologias"
            : "Work history and stacks"}
        </h1>
        <div
          className={` font-medium ${theme === "light" ? "text-black/70" : "text-gray-200/70"}`}
        >
          <span className="hidden lg:inline">
            {language === "pt"
              ? "Passe o cursor para saber mais..."
              : "Hover the cursor to see more..."}
          </span>
          <span className="lg:hidden">
            {language === "pt"
              ? "Clique para saber mais..."
              : "Click to see more..."}
          </span>
        </div>
        <div
          className={`  grid w-[80vw] grid-cols-6 gap-2 transition-opacity   duration-1000 ease-in-out md:w-[25vw] md:grid-cols-4     
        lg:w-[25vw] xl:w-[25vw] xl:grid-cols-5`}
        >
          {icons.map((item, index) => (
            <div
              key={index}
              className="group relative mt-3 transition-all hover:scale-110"
            >
              <img
                src={item.icon}
                alt={`icon-${index}`}
                className="h-full w-full cursor-pointer rounded-xl"
              />

              <div
                className={`pointer-events-none absolute -top-9 left-1/2 mb-2 -translate-x-1/2 transform rounded-md border-none px-2 py-1 text-center font-bold   opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${theme === "light" ? "bg-black text-white " : "bg-white text-black"}`}
              >
                {item.name}
                <p
                  className={`absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 translate-y-4 border-4   border-x-transparent border-b-transparent  ${theme === "light" ? "border-black" : "border-white"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="mb-10 flex w-full flex-col items-center justify-center   text-center"></div>
        <div
          ref={ref}
          className={`mt-4 flex flex-col items-center justify-center gap-12 px-2 transition-opacity duration-1000 ease-in-out  md:gap-8 xl:ml-20 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentExperiences.map((experiencia) => (
            <div
              key={experiencia.id}
              className="flex h-full w-[90vw] flex-row gap-5 px-2 md:w-[50vw] lg:w-[40vw]"
            >
              <div
                className={`flex flex-col items-center justify-center space-y-px ${theme === "light" ? "text-black" : "text-gray-200"}`}
              >
                <img
                  className="h-auto max-h-14 w-auto max-w-20 rounded-full"
                  src={experiencia.icon}
                  alt="Icon"
                />
                <div
                  className={`h-full w-px px-px ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`}
                />
              </div>

              <div className="space-y-1">
                <div>
                  <a
                    href={experiencia.link}
                    className="md:text-md group relative text-lg font-black text-purple-700"
                  >
                    {experiencia.titulo}
                    <span className="absolute left-full top-1/2 ml-2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <SquareArrowOutUpRight size={20} />
                    </span>
                  </a>
                  <h2
                    className={`text-xl font-bold  md:text-lg ${theme === "light" ? "text-black" : "text-gray-300"}`}
                  >
                    {experiencia.subtitulo}
                  </h2>
                </div>

                <div
                  className={`flex flex-row gap-1 font-semibold md:text-sm ${theme === "light" ? "text-black/90" : "text-gray-400"}`}
                >
                  <CalendarDays size={20} />
                  <h3>{experiencia.data}</h3>
                </div>

                <div className="w-full ">
                  <p
                    className={` mb-3 text-sm font-medium ${theme === "light" ? "text-black/80" : "text-gray-400/85"}`}
                  >
                    {experiencia.descricao}
                  </p>
                </div>

                <div className="w-full ">
                  <div className="flex flex-row flex-wrap gap-2">
                    {experiencia.tech &&
                      experiencia.tech.map((technology, index) => (
                        <TechnologyCard
                          key={index}
                          technology={technology}
                          style={{
                            width: "auto",
                            height: "1.3rem",
                            fontSize: "0.75rem",
                            backgroundColor: "#6810a3",
                          }}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
