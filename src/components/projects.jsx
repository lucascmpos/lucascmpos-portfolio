/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import devFood from "../assets/devfood.png";
import sharpCut from "../assets/sharpcut.png";
import trips from "../assets/tripco.png";
import periWare from "../assets/periwarestore.png";
import chatNow from "../assets/chatnow.png";
import uploadAi from "../assets/uploadai.jpeg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import uploadAiVideo from "../assets/uploadaivideo.mp4";
import chatNowVideo from "../assets/chatNowVideo.mp4";
import sharpcutVideo from "../assets/sharpcutvideo.mp4";
import devfoodVideo from "../assets/devfoodvideo.mp4";
import periwareVideo from "../assets/periwarevideo.mp4";
import tripcoVideo from "../assets/tripcovideo.mp4";

import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import TechnologyCard from "./tech-tag";
import { X } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "dev food",
    image: devFood,
    video: devfoodVideo,
    subdescription: {
      pt: (
        <>
          Plataforma de delivery de comida, onde o usuario loga com o Google,
          faz pedidos, favorita restaurantes, consulta seus pedidos e pode
          pesquisar por restaurantes.
        </>
      ),
      en: (
        <>
          Food delivery platform, where the user logs in with Google, places
          orders, favorites restaurants, check your orders and search for
          restaurants.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Este projeto consiste em uma plataforma de delivery de comida, onde o
          usuario loga com o Google, faz pedidos, favorita restaurantes,
          consulta seus pedidos e pode pesquisar por restaurantes.
          <br />
          <br />
          <span className="text-purple-700">Funcionalidades</span>:
          <br />
          - Login com o Google
          <br />
          - Responsividade
          <br />- Integração com banco de dados SQL.
        </>
      ),
      en: (
        <>
          This project consists of a food delivery platform, where the user logs
          in with Google, places orders, favorites restaurants, check your
          orders and search for restaurants.
          <br />
          <br />
          <span className="text-purple-700">Features</span>:
          <br />
          - Google login
          <br />
          - Responsiveness
          <br />- Integration with SQL database.
        </>
      ),
    },
    site: "https://devfoods.vercel.app/",
    github: "https://github.com/lucascmpos/dev-food/",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_next-react-food-activity-7193210446579908608-yjws?utm_source=share&utm_medium=member_desktop",
    subtech: ["Next.js", "TypeScript", "Figma", "Prisma"],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwindcss",
      "ShadcnUI",
      "Figma",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Sharpcutz",
    image: sharpCut,
    video: sharpcutVideo,
    subdescription: {
      pt: (
        <>
          Aplicação feita para ter diversas barbearias, onde o usuário pode
          logar com o Google e agendar um serviço da barbearia desejada.
        </>
      ),
      en: (
        <>
          Application made for multiple barbershops, where the user can log in
          with Google and schedule a service from the desired barbershop.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Este projeto consiste em uma aplicação feita para ter diversas
          barbearias, onde o usuário pode logar com o Google e agendar um
          serviço da barbearia desejada, assim como cancelar um serviço e também
          ver seus serviços agendados futuros e anteriores.
          <br />
          <br />
          <span className="text-purple-700">Funcionalidades</span>:
          <br />
          - Login com o Google
          <br />
          - Responsividade
          <br />- Integração com banco de dados SQL.
        </>
      ),
      en: (
        <>
          This project consists of an application made for multiple barbershops,
          where the user can log in with Google and schedule a service from the
          desired barbershop, as well as cancel a service and also view their
          scheduled services in the future and past.
          <br />
          <br />
          <span className="text-purple-700">Features</span>:
          <br />
          - Google login
          <br />
          - Responsiveness
          <br />- Integration with SQL database.
        </>
      ),
    },
    site: "https://sharpcutz.vercel.app/",
    github: "https://github.com/lucascmpos/Sharpcutz",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_boa-tarde-rede-estou-aqui-hoje-para-divulgar-activity-7159584098699653120-AsNe?utm_source=share&utm_medium=member_desktop",
    subtech: ["Next.js", "TypeScript", "Figma", "Prisma"],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwindcss",
      "ShadcnUI",
      "Figma",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    title: "Tekly Store",
    video: periwareVideo,
    image: periWare,
    subdescription: {
      pt: (
        <>
          Loja fictícia de periféricos, onde é vendido teclados, mouses,
          monitores, fones e etc.
        </>
      ),
      en: (
        <>
          Peripherals store, where keyboards, mice, monitors, headphones, etc.
          are sold.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Este projeto consiste em uma loja fictícia de periféricos, onde é
          vendido teclados, mouses, monitores, fones e etc. O usuário pode
          adicionar e retirar produtos do carrinho, filtrar por categorias e
          descontos
          <br />
          <br />
          <span className="text-purple-700">Funcionalidades</span>:
          <br />
          - Login com o Google
          <br />
          - Responsividade
          <br />
          - Integração com banco de dados SQL.
          <br />- Pagamentos com Stripe
        </>
      ),
      en: (
        <>
          This project consists of a fictional peripherals store, where
          keyboards, mice, monitors, headphones, etc. are sold. The user can add
          and remove products from the shopping cart, filter by categories and
          discounts.
          <br />
          <br />
          <span className="text-purple-700">Features</span>:
          <br />
          - Google login
          <br />
          - Responsiveness
          <br />
          - Integration with SQL database.
          <br />- Stripe payments
        </>
      ),
    },
    site: "https://tekly-store.vercel.app/",
    github: "https://github.com/lucascmpos/Tekly-Store",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_boa-tarde-rede-estou-aqui-hoje-para-activity-7126616417642176512-naC_?utm_source=share&utm_medium=member_desktop",
    subtech: ["Next.js", "TypeScript", "Figma", "Prisma"],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwindcss",
      "ShadcnUI",
      "Figma",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    title: "trips.co",
    video: tripcoVideo,
    image: trips,
    subdescription: {
      pt: (
        <>
          Consiste numa plataforma de reservas de viagens, onde o utilizador
          pode pesquisar viagens, reservar e cancelar viagens.
        </>
      ),
      en: (
        <>
          It consists of a travel booking platform, where the user can search
          for trips, book and cancel trips.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Consiste numa plataforma de reservas de viagens, onde o utilizador
          pode pesquisar viagens, reservar e cancelar viagens. O usuário efetua
          pagamentos de reservas através do Stripe.
          <br />
          <br />
          <span className="text-purple-700">Funcionalidades</span>:
          <br />
          - Login com o Google e GitHub
          <br />
          - Responsividade
          <br />
          - Tema claro e escuro
          <br />- Pagamentos com Stripe
        </>
      ),
      en: (
        <>
          It consists of a travel booking platform, where the user can search
          for trips, book and cancel trips. The user makes payments for
          reservations through Stripe.
          <br />
          <br />
          <span className="text-purple-700">Features</span>:
          <br />
          - Google and GitHub login
          <br />
          - Responsiveness
          <br />
          - Light and dark theme
          <br />- Stripe payments
        </>
      ),
    },
    site: "https://trips-co.vercel.app/",
    github: "https://github.com/lucascmpos/trips-co",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_boa-tarde-rede-estou-aqui-hoje-para-activity-7126616417642176512-naC_?utm_source=share&utm_medium=member_desktop",
    subtech: ["Next.js", "TypeScript", "Figma", "Prisma"],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwindcss",
      "ShadcnUI",
      "Figma",
      "Prisma",
      "Stripe",
      "PostgreSQL",
    ],
  },
  {
    id: 5,
    title: "Chat Now",
    image: chatNow,
    video: chatNowVideo,
    subdescription: {
      pt: (
        <>
          Aplicativo de chat onde você pode enviar pedidos de amizade, criar
          grupos, conversar, remover e sair dos grupos e conversar em tempo
          real.
        </>
      ),
      en: (
        <>
          Chat application where you can send friend requests, create groups,
          chat, remove and leave groups, and chat in real time.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Projeto de um aplicativo de chat onde você pode enviar pedidos de
          amizade, criar grupos, conversar, remover e sair dos grupos e
          conversar em tempo real. O usuário pode gerenciar suas conexões e
          interações de forma eficiente e intuitiva.
          <br />
          <br />
          <span className="text-purple-700">Funcionalidades</span>:
          <br />
          - Integração com Clerk e Convex para autenticação
          <br />
          - Responsividade
          <br />- Tema claro e escuro
        </>
      ),
      en: (
        <>
          Project of a chat application where you can send friend requests,
          create groups, chat, remove and leave groups, and chat in real time.
          Users can manage their connections and interactions efficiently and
          intuitively.
          <br />
          <br />
          <span className="text-purple-700">Features</span>:
          <br />
          - Integration with Clerk and Convex for authentication
          <br />
          - Responsiveness
          <br />- Light and dark theme
        </>
      ),
    },
    site: "https://chatsnow.vercel.app/",
    github: "https://github.com/lucascmpos/chat-now",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_nextlevelweek-nlwia-rocketseat-activity-7108112147938746368-ttOM?utm_source=share&utm_medium=member_desktop",
    subtech: ["Next.js", "TypeScript", "Convex", "Clerk"],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwindcss",
      "ShadcnUI",
      "Convex",
      "Clerk",
      "PostgreSQL",
    ],
  },
  {
    id: 6,
    title: "upload.ai",
    video: uploadAiVideo,
    image: uploadAi,
    subdescription: {
      pt: (
        <>
          Integrações de vídeos com inteligência artificial para melhorar
          conteúdo e ajudar usuários.
        </>
      ),
      en: (
        <>
          Integrations with artificial intelligence to improve content and help
          users
        </>
      ),
    },
    description: {
      pt: (
        <>
          Projeto de integrações de vídeos com inteligência artificial para
          melhorar conteúdo e ajudar usuários. O usuário sobe um vídeo para a
          plataforma, e pode mudar a temperatura (criatividade da inteligência
          artificial), e escreve em um prompt o que ele deseja que a IA faça com
          o aúdio do vídeo, podendo gerar diversos resultados.
          <br />
          <br />
          <span className="text-purple-700">Funcionalidades</span>:
          <br />
          - Integração com ChatGPT 3.5
          <br />
          - Responsividade
          <br />- Transcrição de audio em texto
        </>
      ),
      en: (
        <>
          Project of video integrations with artificial intelligence to improve
          content and help users. The user uploads a video to the platform, and
          can change the temperature (creativity of artificial intelligence),
          and writes in a prompt what he wants the AI to do with the video's
          audio, being able to generate various results.
          <br />
          <br />
          <span className="text-purple-700">Features</span>:
          <br />
          - Integration with ChatGPT 3.5
          <br />
          - Responsiveness
          <br />- Audio transcription to text
        </>
      ),
    },
    site: "https://uploadsai.vercel.app/",
    github: "https://github.com/lucascmpos/NLW-IA",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_realtimechat-frontend-nextjs-activity-7211719833627856896-sxYY?utm_source=share&utm_medium=member_desktop",
    subtech: ["React.js", "TypeScript", "AI API", "Node.js"],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Tailwindcss",
      "ShadcnUI",
      "Open AI API",
      "Figma",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
];

const Projects = ({ language, theme }) => {
  const ProjectCard = ({ project, onClick }) => {
    return (
      <div
        key={project.id}
        className={`group relative w-[90vw] cursor-pointer rounded-md border md:w-auto ${theme === "light" ? " border-secondary-light bg-primary-light " : " border-secondary-dark bg-primary-dark  hover:text-white "}`}
        onClick={() => onClick(project)}
      >
        <div>
          <img
            src={project.image}
            loading="lazy"
            className="z-10 h-auto w-full  rounded-t-md object-cover lg:h-56"
            alt={project.title[language]}
          />
        </div>

        <div
          className={`rounded-b-md  px-4   pt-px ${theme === "light" ? "group-hover:bg-[#ebebeb]/40" : "group-hover:bg-[#2e2e40]/30"}`}
        >
          <div className="mt-2 flex flex-row flex-wrap gap-1">
            {project.subtech &&
              project.subtech.map((technology, index) => (
                <TechnologyCard
                  key={index}
                  technology={technology}
                  style={{
                    width: "auto",
                    height: "20px",
                    fontSize: "12px",
                    color: theme === "dark" ? "#ffffff" : "#000000",
                    fontWeight: "600",
                    border:
                      theme === "light"
                        ? "1px solid #ebebeb"
                        : "1px solid #2e2e40",
                  }}
                />
              ))}
          </div>

          <div className=" flex flex-col   py-3">
            <h1
              className={`mb-2 text-xl font-semibold ${theme === "light" ? "text-black" : "text-gray-300"}`}
            >
              {project.title}
            </h1>
            <p
              className={`h-18 text-sm font-medium md:h-24 ${theme === "light" ? "text-black" : "text-gray-300/70"}`}
            >
              {project.subdescription[language]}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [modalIsOpen]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  const [modalAnimation, setModalAnimation] = useState({
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.8)",
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setModalAnimation({
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
    });

    setTimeout(() => {
      setModalIsOpen(true);
    }, 0);
  };

  const closeModal = () => {
    setModalAnimation({
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.8)",
    });

    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedProject(null);
    }, 200);
  };

  return (
    <div
      id="projects"
      className={`py-24 md:p-44 md:py-52   ${
        theme === "light" ? " bg-secondary-light " : " bg-secondary-dark"
      }  `}
    >
      <div className="flex flex-col items-center justify-center px-2 pb-20 md:items-start">
        <h1
          className={` text-center text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Projetos em destaque" : "Highlighted projects"}
        </h1>
      </div>
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`grid ${
            isLargeScreen ? "grid-cols-2 " : "flex-col"
          }  flex items-center justify-center gap-10 p-3`}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                ...project,
                description: project.description,
              }}
              onClick={openModal}
            />
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: modalAnimation.transform,
              opacity: modalAnimation.opacity,
              width: isLargeScreen ? "80%" : "100%",
              maxWidth: isLargeScreen ? "none" : "none",
              height: isLargeScreen ? "85%" : "100%",
              backgroundColor: theme === "light" ? "#ffffff" : "#020211",
              border:
                theme === "light" ? "2px solid #d4d4d4" : "1px solid #2e2e40",
              borderRadius: isLargeScreen ? "10px" : "10px",
              transition: "opacity 0.3s, transform 0.3s ",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          appElement={document.getElementById("root")}
          overlayClassName={{
            base: "fixed inset-0 overflow-y-auto z-20 ",
            afterOpen:
              "bg-[rgba(0,0,0,0.4)] backdrop-filter flex  items-center justify-center backdrop-blur-md  ",
            beforeClose: "",
          }}
        >
          {selectedProject && (
            <div className="flex flex-col items-center justify-center gap-5 overscroll-y-none ">
              <div className="flex flex-col items-center justify-center">
                <h2
                  className={`text-2xl font-bold  ${theme === "light" ? "text-black" : "text-gray-200"}`}
                >
                  {selectedProject.title}
                </h2>
                {isLargeScreen ? (
                  <video
                    controls
                    loop
                    muted
                    src={selectedProject.video}
                    alt={selectedProject.title}
                    type="video/mp4"
                    poster={selectedProject.image}
                    className="my-4 flex h-[300px] w-[700px]  rounded-md object-cover"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="z-10 my-4 h-[160px]  rounded-md object-contain"
                  />
                )}
                <p
                  className={` font-medium ${
                    isLargeScreen ? "" : "text-sm"
                  } ${theme === "light" ? "text-gray-700" : "text-gray-300"} mt-2`}
                >
                  {selectedProject.description[language]}
                </p>
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    isLargeScreen ? "" : "text-sm"
                  }`}
                >
                  <hr
                    className={`my-4 w-full border ${theme === "light" ? "border-secondary-light" : "border-secondary-dark"}`}
                  />
                  {selectedProject.tech &&
                    selectedProject.tech.map((technology, index) => (
                      <TechnologyCard
                        key={index}
                        technology={technology}
                        style={{
                          width: "auto",
                          height: "25px",
                          fontSize: "13px",
                          color: theme === "dark" ? "#ffffff" : "#000000",
                          fontWeight: "600",
                          border:
                            theme === "light"
                              ? "1px solid #d4d4d4"
                              : "1px solid #2e2e40",
                        }}
                      />
                    ))}
                </div>
              </div>

              <div className="l  my-4 flex items-center justify-center gap-3  ">
                {selectedProject.site && (
                  <button
                    className={`group flex h-12 w-12 cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black ${
                      theme === "light"
                        ? "bg-primary-dark text-gray-200 hover:bg-[#2e2e40]"
                        : "bg-primary-light text-black hover:bg-[#ebebeb]  "
                    }`}
                    onClick={() => window.open(selectedProject.site, "_blank")}
                  >
                    <FaExternalLinkAlt
                      className="transition-all group-hover:scale-110"
                      size={15}
                    />
                  </button>
                )}
                <button
                  className={`group flex h-12 w-12 cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black ${
                    theme === "light"
                      ? "bg-primary-dark text-gray-200 hover:bg-[#2e2e40]"
                      : "bg-primary-light text-black hover:bg-[#ebebeb]  "
                  }`}
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  <FaGithub
                    className="transition-all group-hover:scale-110"
                    size={20}
                  />
                </button>
                {selectedProject.linkedin && (
                  <button
                    className={`group flex h-12 w-12 cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black ${
                      theme === "light"
                        ? "bg-primary-dark text-gray-200 hover:bg-[#2e2e40]"
                        : "bg-primary-light text-black hover:bg-[#ebebeb]  "
                    }`}
                    onClick={() =>
                      window.open(selectedProject.linkedin, "_blank")
                    }
                  >
                    <FaLinkedinIn
                      className=" group-hover:scale-110"
                      size={18}
                    />
                  </button>
                )}
              </div>
              <button
                onClick={closeModal}
                className={`absolute right-0 top-0 mr-2 mt-2 cursor-pointer rounded-md border p-2 ${theme === "light" ? "border-secondary-light text-black hover:bg-gray-100 " : " border-secondary-dark/60 text-gray-300 hover:bg-[#080826] "}`}
              >
                <X size={25} />
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
