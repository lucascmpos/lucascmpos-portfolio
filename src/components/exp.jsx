/* eslint-disable react/prop-types */
import { MdWorkOutline } from "react-icons/md";
import { CalendarDays } from "lucide-react";
import compassLogo from '../assets/compass-logo.png';
import webbyLogo from '../assets/webby-logo.png';

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

  const currentExperiences = experiences[language];

  return (
    <div
      id="exp"
      className={` flex flex-col items-center justify-center px-3 pb-28 pt-20 md:pt-28 ${
        theme === "light" ? "bg-[#fdfbff]" : "bg-[#020211]"
      }`}
    >
      <div className="mb-10 flex w-full flex-col items-center justify-center   text-center">
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
          <div key={experiencia.id} className="flex h-full px-2 w-[90vw] gap-3 lg:w-[70vw] flex-row">

            <div className={`flex space-y-px flex-col justify-center items-center ${theme === "light" ? "text-black" : "text-gray-200"}`}>
              {typeof experiencia.icon === 'string' ? <img className="w-auto h-auto max-h-14 max-w-20 rounded-full" src={experiencia.icon} alt="Icon" /> : experiencia.icon}
              <div className={`h-full w-px px-px ${theme === "light" ? "bg-gray-200" : "bg-white/10"}`} />
            </div>

            <div className="space-y-1">
              <div>
                <h1 className="font-black text-lg text-purple-800">{experiencia.titulo}</h1>
                <h2 className={`font-bold text-xl ${theme === "light" ? "text-black" : "text-gray-300"}`}>{experiencia.subtitulo}</h2>
              </div>

              <div className={`flex font-semibold gap-1 flex-row ${theme === "light" ? "text-black/90" : "text-gray-400"}`}>
                <CalendarDays  size={20} />
                <h3>{experiencia.data}</h3>
              </div>

              <div className="w-full ">
                <p className={` mb-3 ${theme === "light" ? "text-black/80" : "text-gray-400/85"}`}>{experiencia.descricao}</p>
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
  );
};

export default Experience;
