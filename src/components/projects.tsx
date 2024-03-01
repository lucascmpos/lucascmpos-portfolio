import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import sharpCut from "../assets/sharpcut.png";
import periWare from "../assets/periwarestore.png";
import uploadAi from "../assets/uploadai.jpeg";
import pairBank from "../assets/pairbank.png";
import weeklyPlanner from "../assets/weeklyplanner.png";
import monFi from "../assets/monfi.jpeg";
import { useSpring, animated } from "react-spring";
import { FaRegWindowClose, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import uploadAiVideo from "../assets/uploadaivideo.mp4";
import weeklyVideo from "../assets/weeklyplannervideo.mp4";
import pairBankVideo from "../assets/pairbankvideo.mp4";
import sharpcutVideo from "../assets/sharpcutvideo.mp4";
import periwareVideo from "../assets/periwarevideo.mp4";
import monfiVideo from "../assets/monfivideo.mp4";

import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const projectsData = [
  {
    id: 1,
    title: "SharpCut Barbers",
    image: sharpCut,
    video: sharpcutVideo,
    description: (
      <>
        Este projeto consiste em uma aplicação feita para ter diversas
        barbearias, onde o usuário pode logar com o Google e agendar um serviço
        da barbearia desejada, assim como cancelar um serviço e também ver seus
        serviços agendados futuros e anteriores.
        <br />
        <br />
        Funcionalidades:
        <br />
        - Login com o Google
        <br />
        - Responsividade
        <br />- Integração com banco de dados SQL.
      </>
    ),
    site: "https://sharpcut-barbers.vercel.app/",
    github: "https://github.com/lucascmpos/SharpCut-Barbers",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos-b26a3b204_boa-tarde-rede-estou-aqui-hoje-para-divulgar-activity-7159584098699653120-WbGi?utm_source=share&utm_medium=member_desktop",
    tech: [
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
    title: "PeriWare Store",
    video: periwareVideo,
    image: periWare,
    description: (
      <>
        Este projeto consiste em uma loja fictícia de periféricos, onde é
        vendido teclados, mouses, monitores, fones e etc. O usuário pode
        adicionar e retirar produtos do carrinho, filtrar por categorias e
        descontos
        <br />
        <br />
        Funcionalidades:
        <br />
        - Login com o Google
        <br />
        - Responsividade
        <br />- Integração com banco de dados SQL.
        <br />- Pagamentos com Stripe
      </>
    ),
    site: "https://periware-store.vercel.app/",
    github: "https://github.com/lucascmpos/PeriWare-Store",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos-b26a3b204_boa-tarde-rede-estou-aqui-hoje-para-activity-7126616417642176512-cmq6?utm_source=share&utm_medium=member_desktop",
    tech: [
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
    title: "Upload.ai",
    video: uploadAiVideo,
    image: uploadAi,
    description: (
      <>
        Projeto de integrações de vídeos com inteligência artificial para
        melhorar conteúdo e ajudar usuários. O usuário sobe um vídeo para a
        plataforma, e pode mudar a temperatura (criatividade da inteligência
        artificial), e escreve em um prompt o que ele deseja que a IA faça com o
        aúdio do vídeo, podendo gerar diversos resultados.
        <br />
        <br />
        Funcionalidades:
        <br />
        - Integração com ChatGPT 3.5
        <br />
        - Responsividade
        <br />- Transcrição de audio em texto
      </>
    ),
    site: "https://uploadai.netlify.app/",
    github: "https://github.com/lucascmpos/NLW-IA",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos-b26a3b204_nextlevelweek-nlwia-rocketseat-activity-7108112147938746368-ZSO1?utm_source=share&utm_medium=member_desktop",
    tech: [
      "React.js",
      "Tailwindcss",
      "ShadcnUI",
      "Figma",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "PairBank",
    video: pairBankVideo,
    image: pairBank,
    description: (
      <>
        Esta landing page representa um banco fictício, servindo como uma
        plataforma de teste para avaliar a qualidade do meu design e
        responsividade.
      </>
    ),
    site: "https://pair-bank.vercel.app/",
    github: "https://github.com/lucascmpos/pair_bank",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos-b26a3b204_eai-pessoal-estou-aqui-hoje-para-divulgar-activity-7168397456626454528-hCe1?utm_source=share&utm_medium=member_desktop",
    tech: ["React.js", "Tailwindcss", "Figma"],
  },
  {
    id: 5,
    title: "Weekly Planner",
    image: weeklyPlanner,
    video: weeklyVideo,
    description: (
      <>
        To-Do-List apresentando funcionalidades de cadastro CRUD, integradas a
        uma autenticação de usuário validada. Além disso, incorpora a WeatherAPI
        para fornecer informações climáticas da cidade correspondente. É
        relevante mencionar que o projeto foi originalmente construído com o
        suporte de um banco de dados Compass UOL durante meu estágio, o qual foi
        excluído posteriormente. No entanto, para oferecer uma visão do
        funcionamento, disponibilizei um deploy com validação local.
      </>
    ),
    site: "https://weekly-planner-uol.vercel.app",
    github: "https://github.com/lucascmpos/Projeto-Compass-VIII",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos-b26a3b204_react-javascript-html-activity-7024386144108699648-jiCs?utm_source=share&utm_medium=member_desktop",
    tech: ["React.js", "CSS", "Figma", "WeatherAPI", "SwaggerAPI"],
  },
  {
    id: 6,
    title: "Monfi",
    video: monfiVideo,
    image: monFi,
    description: (
      <>
        Consiste em um site onde o usuário pode consultar qualquer filme que
        quiser, podendo ver sua nota, orçamento, receita, duração e descrição do
        filme selecionado.
        <br />
        Funcionalidades:
        <br />
        - Integração com The Movie Database (TMDB)
        <br />
        - Pesquisas
        <br />- Responsividade
      </>
    ),
    site: "https://monfi.netlify.app/",
    github: "https://github.com/lucascmpos/MonFi",
    linkedin: "",
    tech: ["React.js", "SASS", "The Movie Database API"],
  },
];

const ProjectCard = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const titleSpring = useSpring({
    opacity: hovered ? 0 : 1,
    config: { tension: 500, friction: 30 },
  });

  const overlaySpring = useSpring({
    opacity: hovered ? 0 : 0.6,
  });

  return (
    <div
      key={project.id}
      className="relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
    >
      <div
        className={`border-b-4 border-purple-800 relative ${
          isLargeScreen ? " " : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover rounded-sm transition-transform transform group-hover:scale-105 transition-all duration-300 ${
            isLargeScreen ? "h-56" : "h-60"
          }`}
        />
        <animated.div
          style={{
            ...overlaySpring,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            textAlign: "center",
            padding: "8px",
          }}
          className="w-full h-full absolute top-0 left-0 bg-black rounded-sm"
        ></animated.div>
        <animated.div
          style={{
            ...titleSpring,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            textAlign: "center",
            padding: "8px",
          }}
          className={`text-gray-200 font-bold text-xl ${
            isLargeScreen ? "bottom-1" : "bottom-4"
          }`}
        >
          {project.title}
        </animated.div>
        <animated.div
          style={{
            opacity: titleSpring.opacity.interpolate((opacity) => 1 - opacity),
          }}
          className={`absolute flex justify-center items-center text-xl font-semibold right-[50%]  ${
            isLargeScreen ? "bottom-1" : "bottom-4"
          } left-0 w-full bg-purple-900 text-gray-300 p-2 text-center rounded-md cursor-pointer hover:bg-purple-950 transition-all duration-300`}
        >
          Ver mais
        </animated.div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const isLargeScreen = useMediaQuery({ minWidth: 1350 });

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const TechnologyCard = ({ technology }) => (
    <div className="bg-purple-900 font-bold  text-white p-2 m-1 rounded-2xl text-sm hover:scale-105 transition-all">
      {technology}
    </div>
  );

  return (
    <div id="projects" className="md:p-44 md:py-52  bg-[#01020a]">
      <div className="flex flex-col md:items-start items-center pb-20 justify-center">
        <h1 className="text-gray-200 text-4xl font-bold">Projetos</h1>
      </div>
      <div
        ref={ref}
        className={`transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`grid ${
            isLargeScreen ? "grid-cols-3" : "flex-col"
          }  gap-10 p-3 flex justify-center items-center`}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
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
              transform: "translate(-50%, -50%)",
              width: isLargeScreen ? "70%" : "100%",
              maxWidth: isLargeScreen ? "none" : "100%",
              height: isLargeScreen ? "70%" : "100%",
              backgroundColor: "#01020a",
              border: "none",
              borderRadius: isLargeScreen ? "20px" : "0px",
              display: "flex",
            },
          }}
          overlayClassName={{
            base: "fixed inset-0 overflow-y-auto",
            afterOpen:
              "bg-[rgba(0,0,0,0.4)] backdrop-filter backdrop-blur-md z-20",
            beforeClose: "",
          }}
        >
          {selectedProject && (
            <div className="flex flex-col h-full">
              <div className="flex-grow flex justify-start p-4">
                {isLargeScreen && (
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    src={selectedProject.video}
                    alt={selectedProject.title}
                    type="video/mp4"
                    className="w-1/2 object-cover rounded-md"
                  />
                )}
                <div className="flex-grow pl-4">
                  <h2 className="text-2xl font-bold text-gray-200">
                    {selectedProject.title}
                  </h2>
                  <p
                    className={`text-gray-300 ${
                      isLargeScreen ? "" : "text-sm"
                    } mt-2`}
                  >
                    {selectedProject.description}
                  </p>
                  <div
                    className={`mt-4 flex gap-2 flex-wrap ${
                      isLargeScreen ? "" : "text-sm"
                    }`}
                  >
                    {selectedProject.tech &&
                      selectedProject.tech.map((technology, index) => (
                        <TechnologyCard key={index} technology={technology} />
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-start ml-4 mb-4">
                <button
                  className="bg-gray-200 font-semibold mb-2 w-24 items-center justify-center gap-2 group flex flex-row text-black px-4 py-2 rounded-md mr-2"
                  onClick={() => window.open(selectedProject.site, "_blank")}
                >
                  Site
                  <FaExternalLinkAlt
                    className="group-hover:scale-125 transition-all"
                    size={15}
                  />
                </button>
                <button
                  className="bg-gray-200 font-semibold group mb-2  w-32 items-center justify-center gap-2 flex flex-row text-black px-4 py-2 rounded-md mr-2"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  GitHub
                  <FaGithub
                    className="group-hover:scale-125 transition-all"
                    size={20}
                  />
                </button>
                {selectedProject.linkedin && (
                  <button
                    className="bg-gray-200 font-semibold group mb-2  w-52 items-center justify-center gap-2 flex flex-row text-black px-4 py-2 rounded-md mr-2"
                    onClick={() =>
                      window.open(selectedProject.linkedin, "_blank")
                    }
                  >
                    Publicação do{" "}
                    <FaLinkedinIn
                      className="group-hover:scale-125 transition-all"
                      size={18}
                    />
                  </button>
                )}
              </div>
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-4 cursor-pointer text-purple-900 hover:text-gray-200 "
              >
                <FaRegWindowClose size={25} />
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
