/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import devFood from "../assets/devfood.png";
import sharpCut from "../assets/sharpcut.png";
import periWare from "../assets/periwarestore.png";
import chatNow from "../assets/chatnow.png";
import uploadAi from "../assets/uploadai.jpeg";
import expertNotes from "../assets/expertnotes.png";
import dashBlue from "../assets/dashblue.png";
import natuFlora from "../assets/natuflora.png";
import weeklyPlanner from "../assets/weeklyplanner.png";
import { FaRegWindowClose, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import uploadAiVideo from "../assets/uploadaivideo.mp4";
import chatNowVideo from "../assets/chatNowVideo.mp4";
import expertNotesVideo from "../assets/expertnotesvideo.mp4";
import dashBlueVideo from "../assets/dashbluevideo.mp4";
import weeklyVideo from "../assets/weeklyplannervideo.mp4";
import natuFloraVideo from "../assets/natufloravideo.mp4";
import sharpcutVideo from "../assets/sharpcutvideo.mp4";
import devfoodVideo from "../assets/devfoodvideo.mp4";
import periwareVideo from "../assets/periwarevideo.mp4";

import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import TechnologyCard from "./tech-tag";

const projectsData = [
  {
    id: 1,
    title: "Dev Food",
    image: devFood,
    video: devfoodVideo,
    subdescription: {
      pt: (
        <>
         Plataforma de delivery de comida, onde o
          usuario loga com o Google, faz pedidos, favorita restaurantes,
          consulta seus pedidos e pode pesquisar por restaurantes.
        </>
      ),
      en: (
        <>
          Food delivery platform, where the user logs
          in with Google, places orders, favorites restaurants, check your
          orders and search for restaurants.
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
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_next-react-food-activity-7193210446579908608-yjws?utm_source=share&utm_medium=member_desktop",
      subtech: [
        "Next.js",
        "TypeScript",
        "Figma",
        "Prisma",
      ],
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
    subdescription: {
      pt: (
        <>
          Aplicação feita para ter diversas
          barbearias, onde o usuário pode logar com o Google e agendar um
          serviço da barbearia desejada.
        </>
      ),
      en: (
        <>
          Application made for multiple barbershops,
          where the user can log in with Google and schedule a service from the
          desired barbershop.
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
      subtech: [
        "Next.js",
        "TypeScript",
        "Figma",
        "Prisma",
      ],
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
    subdescription: {
      pt: (
        <>
        Loja fictícia de periféricos, onde é
         vendido teclados, mouses, monitores, fones e etc.
        </>
      ),
      en: (
        <>
          Peripherals store, where
          keyboards, mice, monitors, headphones, etc. are sold.
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
      subtech: [
        "Next.js",
        "TypeScript",
        "Figma",
        "Prisma",
      ],
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
    title: "Chat Now",
    image: chatNow,
    video: chatNowVideo,
    subdescription: {
      pt: (
        <>
         Aplicativo de chat onde você pode enviar pedidos de
          amizade, criar grupos, conversar, remover e sair dos grupos e
          conversar em tempo real.
        </>
      ),
      en: (
        <>
           Chat application where you can send friend requests,
          create groups, chat, remove and leave groups, and chat in real time.
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
          Funcionalidades:
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
          Features:
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
      subtech: [
        "Next.js",
        "TypeScript",
        "Convex",
        "Clerk",
      ],
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
    id: 5,
    title: "Upload.ai",
    video: uploadAiVideo,
    image: uploadAi,
    subdescription: {
      pt: (
        <>
        Integrações de vídeos com inteligência artificial para
         melhorar conteúdo e ajudar usuários.
        </>
      ),
      en: (
        <>
          Integrations with artificial intelligence to improve
          content and help users
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
    site: "https://uploadsai.vercel.app/",
    github: "https://github.com/lucascmpos/NLW-IA",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_realtimechat-frontend-nextjs-activity-7211719833627856896-sxYY?utm_source=share&utm_medium=member_desktop",
      subtech: [
        "React.js",
        "TypeScript",
        "AI API",
        "Node.js",
      ],
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
  {
    id: 6,
    title: "Expert Notes",
    video: expertNotesVideo,
    image: expertNotes,
    subdescription: {
      pt: (
        <>
        Notas, onde o o usuário pode
         adicionar novas notas falando por microfone, ou digitando.
        </>
      ),
      en: (
        <>
          Notes website, where the user can add
          new notes by speaking into the microphone, or writing.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Essa aplicação consiste em um site de notas, onde o o usuário pode
          adicionar novas notas falando por microfone, ou digitando. Ele também
          pode pesquisar, editar e deletar novas notas. Todas suas notas ficam
          salvas no seu navegador. Design limpo e responsivo.
          <br />
          <br />
          Funcionalidades:
          <br />
          - Integração com a Speech Recognition API
          <br />
          - Responsividade
          <br />- Transcrição de audio em texto
        </>
      ),
      en: (
        <>
          This application consists of a notes website, where the user can add
          new notes by speaking into the microphone, or writing. He too you can
          search, edit and delete new notes. All your notes stay saved in your
          browser. Clean and responsive design.
          <br />
          <br />
          Features:
          <br />
          - Integration with Speech Recognition API
          <br />
          - Responsiveness
          <br />- Audio transcription to text
        </>
      ),
    },
    site: "https://expert-dev-notes.vercel.app/",
    github: "https://github.com/lucascmpos/expert-notes",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_react-typescript-radixui-activity-7200820537319641088-VDBa?utm_source=share&utm_medium=member_desktop",
      subtech: [
        "React.js",
        "TypeScript",
        "Speech API",
        "Figma",
      ],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Tailwindcss",
      "Speech Recognition API",
      "RadixUI",
      "Figma",
    ],
  },

  {
    id: 7,
    title: "Dashboard Blue",
    video: dashBlueVideo,
    image: dashBlue,
    subdescription: {
      pt: (
        <>
        Dashboard para um teste técnico para a
          Blue Company. Consiste em vários tipos de gráficos, funcionalidades e
          responsividade.
        </>
      ),
      en: (
        <>
          Dashboard for a technician test for Blue
          Company. Consist in various types of charts, functionalities and
          responsivity.
        </>
      ),
    },
    description: {
      pt: (
        <>
          Este projeto consiste em um dashboard para um teste técnico para a
          Blue Company. Consiste em vários tipos de gráficos, funcionalidades e
          responsividade.
          <br />
          <br />
          Funcionalidades:
          <br />
          - Responsivo
          <br />
          - Gráficos com Recharts
          <br />- Testes unitários
        </>
      ),
      en: (
        <>
          This project consists of a dashboard for a technician test for Blue
          Company. Consist in various types of charts, functionalities and
          responsivity.
          <br />
          <br />
          Features:
          <br />
          - Responsiveness
          <br />
          - Charts with Recharts
          <br />- Unity tests
        </>
      ),
    },
    site: "https://dashboard-blue-company.vercel.app/",
    github: "https://github.com/lucascmpos/desafio-front-end",
    linkedin:
      "https://www.linkedin.com/posts/lucas-campos81_dashboard-case-frontend-activity-7210005597247700992-fDCW?utm_source=share&utm_medium=member_desktop",
    subtech: [
        "React.js",
        "TypeScript",
        "Jest",
        "Recharts",
      ],
    tech: [
      "HTML",
      "CSS",
      "TypeScript",
      "React.js",
      "Jest",
      "Tailwindcss",
      "MaterialUI",
      "Recharts",
      "Figma",
    ],
  },

  {
    id: 8,
    title: "Natu Flora",
    video: natuFloraVideo,
    image: natuFlora,
    subdescription: {
      pt: (
        <>
         Esta landing page estilo vitrine representa uma loja fictícia que
         também pode ser expandida para um e-commerce caso a loja deseje.
        </>
      ),
      en: (
        <>
          This storefront-style landing page represents a fictional store that
          It can also be expanded to e-commerce if the store wishes.
        </>
      ),
    },
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
    subtech: ["React.js", "Tailwindcss", "Figma"],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwindcss", "Figma"],
  },

  {
    id: 9,
    title: "Weekly Planner",
    image: weeklyPlanner,
    video: weeklyVideo,
    subdescription: {
      pt: (
        <>
         To-Do-List apresentando funcionalidades de cadastro CRUD, integradas a
         uma autenticação de usuário validada.
        </>
      ),
      en: (
        <>
          To-Do-List featuring CRUD registration functionalities, integrated
          with validated user authentication.
        </>
      ),
    },
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
    subtech: [
        "React.js",
        "Figma",
        "SwaggerAPI",
      ],
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
];

const Projects = ({ language, theme }) => {

  const ProjectCard = ({ project, onClick }) => {
    return (
      <div
      key={project.id}
      className={`group relative border  rounded-md cursor-pointer ${theme === "light" ? "border-gray-300/70 bg-white " : "border-[#040424] bg-[#01020a]  hover:text-white "}`}
      onClick={() => onClick(project)}
      >
      <div>
        <img
          src={project.image}
          className="w-full h-52 object-cover rounded-t-md"
          alt={project.title[language]}
        />
      </div>

      <div className={`px-4  pt-px  border-black/20 rounded-b-md ${theme === "light" ? "group-hover:bg-gray-100/70" : "group-hover:bg-[#040424]/30"}`}>
        <div className="flex flex-row flex-wrap gap-1 mt-2">
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
            fontWeight: "500",
            border: theme === "light" ? "1px solid #d1d5db" : "1px solid #1a0a38",
            }}
          />
          ))}
        </div>

        <div className=" flex py-3   flex-col">
        <h1 className={`font-semibold text-xl mb-2 ${theme === "light" ? "text-black" : "text-gray-300"}`}>{project.title}</h1>
        <p className={`text-sm font-medium h-16 md:h-24 ${theme === "light" ? "text-black" : "text-gray-300/70"}`}>{project.subdescription[language]} </p>
        </div>
      </div>
      </div>
    );
  };
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
      className={`py-24 md:p-44 md:py-52 ${
        theme === "light" ? "bg-[#fdfbff] " : "bg-[#020211]"
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
              maxWidth: isLargeScreen ? "none" : "100%",
              height: isLargeScreen ? "85%" : "100%",
              backgroundColor: theme === "light" ? "#fdfbff" : "#01020a",
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
                    className="my-4 h-[200px]  rounded-md object-contain"
                  />
                )}
                <p
                  className={` font-semibold ${
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
                  {selectedProject.tech &&
                    selectedProject.tech.map((technology, index) => (
                      <TechnologyCard key={index} technology={technology} style={{backgroundColor: "#6810a3"}} />
                    ))}
                </div>
              </div>
              <div className="my-4  flex flex-col items-center justify-center gap-3 md:flex-row ">
                {selectedProject.site && (
                  <button
                    className={`group flex cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black transition-all duration-300 ${
                      theme === "light"
                        ? "bg-black text-gray-200 hover:bg-purple-700 "
                        : "bg-white text-black hover:bg-zinc-950  hover:text-gray-200"
                    }`}
                    onClick={() => window.open(selectedProject.site, "_blank")}
                  >
                    {language === "pt" ? "Acessar" : "Access"}
                    <FaExternalLinkAlt
                      className="transition-all group-hover:scale-125"
                      size={15}
                    />
                  </button>
                )}
                <button
                  className={`group flex cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black transition-all duration-300 ${
                    theme === "light"
                      ? "bg-black text-gray-200 hover:bg-purple-700 "
                      : "bg-white text-black hover:bg-zinc-950  hover:text-gray-200"
                  }`}
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
                    className={`group flex cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black transition-all duration-300 ${
                      theme === "light"
                        ? "bg-black text-gray-200 hover:bg-purple-700 "
                        : "bg-white text-black hover:bg-zinc-950  hover:text-gray-200"
                    }`}
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
                className={`absolute right-0 top-0 cursor-pointer p-4 text-purple-900 ${theme === "light" ? "hover:text-black" : "hover:text-gray-200 "}`}
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
