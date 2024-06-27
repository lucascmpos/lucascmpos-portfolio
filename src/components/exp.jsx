/* eslint-disable react/prop-types */
import { MdWorkOutline } from "react-icons/md";
import { CalendarDays } from "lucide-react";
import compassLogo from '../assets/compass-logo.png';
import webbyLogo from '../assets/webby-logo.png';
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
        icon: <MdWorkOutline size={60} />,
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
          </span>
        ),
        data: "09/2023 - atualmente ",
        tech: [
          "React.js",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Tailwindcss",
          "Figma",
          "Sass",
        ],
        link: "",
      },
      {
        id: 2,
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
        id: 3,
        titulo: "Webby Internet",
        icon: webbyLogo,
        subtitulo: "Analista de Help Desk",
        descricao: (
          <span>
            Ofereci suporte personalizado aos clientes através de canais de texto e voz, monitorando perfis de clientes através de sistemas ERP. <br />
            Entendi as necessidades do público, propondo soluções em conformidade com as normas da empresa. <br />
            Gerenciei arquivos e documentos, aplicando senso analítico e interpessoal. <br />
            Configurei redes de internet e resolvi problemas de infraestrutura de hardware e rede, utilizando praticas das habilidades de comunicação, flexibilidade e trabalho em equipe.
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
        link: "https://compass.uol/pt/home/",
      },
    ],
    en: [
      {
        id: 1,
        titulo: "Self employed",
        icon: <MdWorkOutline size={60} />,
        subtitulo: "Fullstack Developer",
        descricao: (
          <span>
            Independently, I work with end-to-end software development, from
            requirements gathering with stakeholders, prototyping, coding on
            both client and server side, testing, documentation, implementation,
            to presentation to the final client, using strong market languages,
            always updated and at an international level of requirement, working
            with agile methodologies.
          </span>
        ),
        data: "09/2023 - currently ",
        tech: [
          "React.js",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Tailwindcss",
          "Figma",
          "Sass",
        ],
        link: "https://www.linkedin.com/in/lucas-campos81/",
      },
      {
        id: 2,
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
        id: 3,
        titulo: "Webby Internet",
        icon: webbyLogo,
        subtitulo: "Help Desk Analyst",
        descricao: (
          <span>
            Provided personalized support to clients through text and voice channels, monitoring customer profiles through ERP systems. <br />
            Understood the needs of the audience, proposing solutions in accordance with company standards. <br />
            Managed files and documents, applying analytical and interpersonal skills. <br />
            Configured internet networks and solved hardware and network infrastructure problems, using communication, flexibility, and teamwork skills.
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
        link: "https://compass.uol/pt/home/",
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
      className={` flex flex-col md:flex-row  items-center justify-center  border-b py-20  md:py-28 ${
        theme === "light" ? "bg-primary-light border-secondary-light" : "bg-primary-dark border-secondary-dark"
      }`}
    >
      <div className="flex flex-col px-4 items-center justify-center"> <h1
          className={` font-bold mb-3 text-center text-2xl lg:text-4xl ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Experiências & Tecnologias" : "Work history and stacks"}
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
      <div className={`  w-[80vw] md:w-[25vw] lg:w-[25vw] xl:w-[25vw] gap-2   grid grid-cols-6 md:grid-cols-4 xl:grid-cols-5     
        transition-opacity duration-1000 ease-in-out`}>
          
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
              <span className="relative ">
                {item.name}
                <p
                  className={`absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 translate-y-4 border-4   border-x-transparent border-b-transparent  ${theme === "light" ? "border-black" : "border-white"}`}
                />
              </span>
            </div>
          </div>
        ))}
        </div>
        </div>
      <div className="flex flex-col ">
      <div className="mb-10 flex w-full flex-col items-center justify-center   text-center">
        
      </div>
      <div
        ref={ref}
        className={`flex flex-col mt-4 items-center justify-center gap-6 px-2 transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        
        {currentExperiences.map((experiencia) => (
          <div key={experiencia.id} className="flex h-full px-2 w-[90vw] gap-3 md:w-[50vw] lg:w-[50vw] flex-row">

            <div className={`flex space-y-px flex-col justify-center items-center ${theme === "light" ? "text-black" : "text-gray-200"}`}>
              {typeof experiencia.icon === 'string' ? <img className="w-auto h-auto max-h-14 max-w-20 rounded-full" src={experiencia.icon} alt="Icon" /> : experiencia.icon}
              <div className={`h-full w-px px-px ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`} />
            </div>

            <div className="space-y-1">
              <div>
                <h1 className="font-black text-lg md:text-md text-purple-800">{experiencia.titulo}</h1>
                <h2 className={`font-bold text-xl  md:text-lg ${theme === "light" ? "text-black" : "text-gray-300"}`}>{experiencia.subtitulo}</h2>
              </div>

              <div className={`flex font-semibold gap-1 flex-row md:text-sm ${theme === "light" ? "text-black/90" : "text-gray-400"}`}>
                <CalendarDays  size={20} />
                <h3>{experiencia.data}</h3>
              </div>

              <div className="w-full ">
                <p className={` mb-3 font-medium text-sm ${theme === "light" ? "text-black/80" : "text-gray-400/85"}`}>{experiencia.descricao}</p>
              </div>

              <div className="w-full ">
                <div className="flex flex-row flex-wrap gap-2">
                {experiencia.tech &&
                experiencia.tech.map((technology, index) => (
                  <TechnologyCard
                    key={index}
                    technology={technology}
                    style={{ width: "auto", height: "25px", backgroundColor: "#6810a3" }}
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
