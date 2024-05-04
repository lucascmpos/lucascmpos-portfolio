import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import devFood from "../assets/devfood.png";
import sharpCut from "../assets/sharpcut.png";
import periWare from "../assets/periwarestore.png";
import uploadAi from "../assets/uploadai.jpeg";
import natuFlora from "../assets/natuflora.png";
import pairBank from "../assets/pairbank.png";
import weeklyPlanner from "../assets/weeklyplanner.png";
import monFi from "../assets/monfi.jpeg";
import interroga from "../assets/interroga.jpg";
import { useSpring, animated } from "react-spring";
import { FaRegWindowClose, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import uploadAiVideo from "../assets/uploadaivideo.mp4";
import weeklyVideo from "../assets/weeklyplannervideo.mp4";
import natuFloraVideo from "../assets/natufloravideo.mp4";
import pairBankVideo from "../assets/pairbankvideo.mp4";
import sharpcutVideo from "../assets/sharpcutvideo.mp4";
import devfoodVideo from "../assets/devfoodvideo.mp4";
import periwareVideo from "../assets/periwarevideo.mp4";
import monfiVideo from "../assets/monfivideo.mp4";

import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import TechnologyCard from "./tech-tag";

const projectsData = [
  {
    id: 1,
    title: "Dev Food",
    image: devFood,
    video: devfoodVideo,
    description: {
      pt: (
        <>
          Este projeto consiste em uma plataforma de delivery de comida, onde o
          usuario loga com o Google, faz pedidos, favorita restaurantes,
          consulta seus pedidos e pode pesquisar por restaurantes.
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
      en: (
        <>
          This project consists of a food delivery platform, where the user logs
          in with Google, places orders, favorites restaurants, check your
          orders and search for restaurants.
          <br />
          <br />
          Features:
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
    title: "SharpCut Barbers",
    image: sharpCut,
    video: sharpcutVideo,
    description: {
      pt: (
        <>
          Este projeto consiste em uma aplicação feita para ter diversas
          barbearias, onde o usuário pode logar com o Google e agendar um
          serviço da barbearia desejada, assim como cancelar um serviço e também
          ver seus serviços agendados futuros e anteriores.
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
      en: (
        <>
          This project consists of an application made for multiple barbershops,
          where the user can log in with Google and schedule a service from the
          desired barbershop, as well as cancel a service and also view their
          scheduled services in the future and past.
          <br />
          <br />
          Features:
          <br />
          - Google login
          <br />
          - Responsiveness
          <br />- Integration with SQL database.
        </>
      ),
    },
    site: "https://sharpcut-barbers.vercel.app/",
    github: "https://github.com/lucascmpos/SharpCut-Barbers",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_boa-tarde-rede-estou-aqui-hoje-para-divulgar-activity-7159584098699653120-AsNe?utm_source=share&utm_medium=member_desktop",
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
    title: "Periware Store",
    video: periwareVideo,
    image: periWare,
    description: {
      pt: (
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
          Features:
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
    site: "https://periware-store.vercel.app/",
    github: "https://github.com/lucascmpos/PeriWare-Store",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_boa-tarde-rede-estou-aqui-hoje-para-activity-7126616417642176512-naC_?utm_source=share&utm_medium=member_desktop",
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
    id: 4,
    title: "Upload.ai",
    video: uploadAiVideo,
    image: uploadAi,
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
          Funcionalidades:
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
          Features:
          <br />
          - Integration with ChatGPT 3.5
          <br />
          - Responsiveness
          <br />- Audio transcription to text
        </>
      ),
    },
    site: "https://uploadai.netlify.app/",
    github: "https://github.com/lucascmpos/NLW-IA",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_nextlevelweek-nlwia-rocketseat-activity-7108112147938746368-ttOM?utm_source=share&utm_medium=member_desktop",
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
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
    id: 5,
    title: "Natu Flora",
    video: natuFloraVideo,
    image: natuFlora,
    description: {
      pt: (
        <>
          Esta landing page estilo vitrine representa uma loja fictícia que
          também pode ser expandida para um e-commerce caso a loja deseje.
          <br />
          <br />
          Funcionalidades: <br />
          -Design limpo e responsivo
          <br />
          -Animações
          <br />
          -Menu lateral para dispositivos mobile
        </>
      ),
      en: (
        <>
          This storefront-style landing page represents a fictional store that
          It can also be expanded to e-commerce if the store wishes.
          <br />
          <br />
          Features: <br />
          -Clean and responsive design
          <br />
          -Animations
          <br />
          -Side menu for mobile devices
        </>
      ),
    },
    site: "https://natuflora.vercel.app/",
    github: "https://github.com/lucascmpos/natuflora",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_react-landingpage-tailwind-activity-7180590037623848960-WLB7?utm_source=share&utm_medium=member_desktop",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwindcss", "Figma"],
  },
  {
    id: 6,
    title: "Pairbank",
    video: pairBankVideo,
    image: pairBank,
    description: {
      pt: (
        <>
          Esta landing page representa um banco fictício, servindo como uma
          plataforma de teste para avaliar a qualidade do meu design e
          responsividade.
        </>
      ),
      en: (
        <>
          This landing page represents a fictional bank, serving as a test
          platform to assess the quality of my design and responsiveness.
        </>
      ),
    },
    site: "https://pair-bank.vercel.app/",
    github: "https://github.com/lucascmpos/pair_bank",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_eai-pessoal-estou-aqui-hoje-para-divulgar-activity-7168397456626454528-668H?utm_source=share&utm_medium=member_desktop",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwindcss", "Figma"],
  },
  {
    id: 7,
    title: "Weekly Planner",
    image: weeklyPlanner,
    video: weeklyVideo,
    description: {
      pt: (
        <>
          To-Do-List apresentando funcionalidades de cadastro CRUD, integradas a
          uma autenticação de usuário validada. Além disso, incorpora a
          WeatherAPI para fornecer informações climáticas da cidade
          correspondente. É relevante mencionar que o projeto foi originalmente
          construído com o suporte de um banco de dados Compass UOL durante meu
          estágio, o qual foi excluído posteriormente. No entanto, para oferecer
          uma visão do funcionamento, disponibilizei um deploy com validação
          local.
        </>
      ),
      en: (
        <>
          To-Do-List featuring CRUD registration functionalities, integrated
          with validated user authentication. Additionally, it incorporates the
          WeatherAPI to provide weather information for the corresponding city.
          It is worth mentioning that the project was originally built with the
          support of a Compass UOL database during my internship, which was
          later deleted. However, to provide an insight into the operation, I
          deployed it with local validation.
        </>
      ),
    },
    site: "https://weekly-planner-uol.vercel.app",
    github: "https://github.com/lucascmpos/Projeto-Compass-VIII",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_react-javascript-html-activity-7024386144108699648-yl2F?utm_source=share&utm_medium=member_desktop",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Figma",
      "WeatherAPI",
      "SwaggerAPI",
    ],
  },
  {
    id: 8,
    title: "MonFi",
    video: monfiVideo,
    image: monFi,
    description: {
      pt: (
        <>
          Consiste em um site onde o usuário pode consultar qualquer filme que
          quiser, podendo ver sua nota, orçamento, receita, duração e descrição
          do filme selecionado.
          <br />
          Funcionalidades:
          <br />
          - Integração com The Movie Database (TMDB)
          <br />
          - Pesquisas
          <br />- Responsividade
        </>
      ),
      en: (
        <>
          It consists of a website where the user can look up any movie they
          want, being able to see its rating, budget, revenue, duration, and
          description of the selected movie.
          <br />
          Features:
          <br />
          - Integration with The Movie Database (TMDB)
          <br />
          - Searches
          <br />- Responsiveness
        </>
      ),
    },
    site: "https://monfi.netlify.app/",
    github: "https://github.com/lucascmpos/MonFi",
    linkedin: "",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "SASS",
      "The Movie Database API",
    ],
  },
  {
    id: 8,
    title: "More soon...",
    image: interroga,
    description: {
      pt: (
        <>
          Estou em constante estudo e evolução, portanto te garanto que terei
          mais projetos de sucesso aqui no portfólio!
          <br />
          Você pode acompanhar os projetos em andamento no meu GitHub, onde
          todos meus projetos tem o repositório público, para todos verem.
        </>
      ),
      en: (
        <>
          I am constantly studying and evolving, so I guarantee you that I will
          have more successful projects here in the portfolio!
          <br />
          You can follow ongoing projects on my GitHub, where all my projects
          have a public repository, for everyone to see.
        </>
      ),
    },
    site: "https://github.com/lucascmpos",
    github: "https://github.com/lucascmpos",
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
    config: { tension: 400, friction: 30, duration: 0 },
  });

  const overlaySpring = useSpring({
    opacity: hovered ? 0 : 0.7,
  });

  return (
    <div
      key={project.id}
      className="group relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
    >
      <div
        className={`relative border-b-4 border-purple-800 ${
          isLargeScreen ? " " : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`w-full transform rounded-sm object-cover duration-100  group-hover:scale-105 ${
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
          }}
          className="absolute left-0  top-0 h-full w-full transform rounded-sm bg-[#01020a] duration-100 group-hover:scale-110"
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
          className={`text-xl font-bold text-gray-300 ${
            isLargeScreen ? "bottom-1" : "bottom-4"
          }`}
        >
          {project.title}
        </animated.div>
        <animated.div
          style={{
            opacity: titleSpring.opacity.to((opacity) => 1 - opacity),
          }}
          className={`absolute right-[50%] flex items-center justify-center text-xl font-semibold  ${
            isLargeScreen ? "bottom-[-5px]" : "bottom-[-5.7px]"
          } group left-0 w-full transform cursor-pointer  rounded-sm bg-purple-900 p-2 text-center text-gray-300 transition-all duration-100 hover:bg-purple-950 group-hover:scale-105`}
        >
          <MdOutlineArrowCircleUp
            className=" transition-all group-hover:scale-110"
            size={30}
          />
        </animated.div>
      </div>
    </div>
  );
};

const Projects = ({ onChangeLanguage, language, theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalIsOpen);

    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalIsOpen]);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    onChangeLanguage(newLanguage);
  };

  const getText = (texts) => (language === "pt" ? texts.pt : texts.en);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const isLargeScreen = useMediaQuery({ minWidth: 1350 });

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
    }, 300);
  };

  return (
    <div
      id="projects"
      className={`py-24 md:p-44 md:py-52 ${
        theme === "light" ? "bg-gray-200" : "bg-[#01020a]"
      }  `}
    >
      <div className="flex flex-col items-center justify-center pb-20 md:items-start">
        <h1
          className={` text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Projetos" : "Projects"}
        </h1>
        <p
          className={` mt-5 text-center text-lg lg:mt-10 lg:text-start ${
            theme === "light" ? "text-black" : "text-gray-300"
          }`}
        >
          {language === "pt"
            ? "Meus maiores projetos! clique em qual desejar para saber mais..."
            : "My biggest projects! click on which one you want to find out more..."}
        </p>
      </div>
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`grid ${
            isLargeScreen ? "grid-cols-3" : "flex-col"
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
              maxWidth: isLargeScreen ? "none" : "100%",
              height: isLargeScreen ? "85%" : "100%",
              backgroundColor: "#01020a",
              border: "none",
              borderRadius: isLargeScreen ? "20px" : "0px",
              transition: "opacity 0.3s, transform 0.3s ",
            },
          }}
          appElement={document.getElementById("root")}
          overlayClassName={{
            base: "fixed inset-0 overflow-y-auto",
            afterOpen:
              "bg-[rgba(0,0,0,0.4)] backdrop-filter flex  items-center justify-center backdrop-blur-md z-20",
            beforeClose: "",
          }}
        >
          {selectedProject && (
            <div className="flex flex-col items-center justify-center gap-5 overscroll-y-none ">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-200">
                  {selectedProject.title}
                </h2>
                {isLargeScreen ? (
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    src={selectedProject.video}
                    alt={selectedProject.title}
                    type="video/mp4"
                    className="my-4 flex h-[300px] w-[700px]  rounded-md object-cover"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="my-4 h-[200px] w-full rounded-md object-contain"
                  />
                )}
                <p
                  className={`text-gray-300 ${
                    isLargeScreen ? "" : "text-sm"
                  } mt-2`}
                >
                  {selectedProject.description[language]}
                </p>
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    isLargeScreen ? "" : "text-sm"
                  }`}
                >
                  {selectedProject.tech &&
                    selectedProject.tech.map((technology, index) => (
                      <TechnologyCard key={index} technology={technology} />
                    ))}
                </div>
              </div>
              <div className="my-4  flex flex-col items-center justify-center gap-3 md:flex-row ">
                <button
                  className="group mb-2 mr-2 flex w-24 flex-row items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2 font-semibold text-black"
                  onClick={() => window.open(selectedProject.site, "_blank")}
                >
                  Site
                  <FaExternalLinkAlt
                    className="transition-all group-hover:scale-125"
                    size={15}
                  />
                </button>
                <button
                  className="group mb-2 mr-2 flex  w-32 flex-row items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2 font-semibold text-black"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  GitHub
                  <FaGithub
                    className="transition-all group-hover:scale-125"
                    size={20}
                  />
                </button>
                {selectedProject.linkedin && (
                  <button
                    className="group mb-2 mr-2 flex  w-52 flex-row items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2 font-semibold text-black"
                    onClick={() =>
                      window.open(selectedProject.linkedin, "_blank")
                    }
                  >
                    {language === "pt" ? "Publicação do" : "LinkedIn post"}
                    <FaLinkedinIn
                      className="transition-all group-hover:scale-125"
                      size={18}
                    />
                  </button>
                )}
              </div>
              <button
                onClick={closeModal}
                className="absolute right-0 top-0 cursor-pointer p-4 text-purple-900 hover:text-gray-200 "
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
