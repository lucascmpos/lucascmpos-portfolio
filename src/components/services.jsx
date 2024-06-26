/* eslint-disable react/prop-types */
import {
  Smartphone,
  CircleGauge,
  Wallpaper,
  Code,
  Workflow,
  Database,
  ChevronsRight,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const Services = ({ language, theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const servicesData = [
    {
      id: 1,
      title: {
        pt: "Desenvolvimento de Interfaces ",
        en: "Development of  Interfaces",
      },
      img: <Smartphone size={64} />,
      description: {
        pt: (
          <>
            Crio sites que sejam otimizados para dispositivos móveis e desktops,
            garantindo uma experiência do usuário consistente em todas as
            plataformas.
          </>
        ),
        en: (
          <>
            I create websites that are optimized for mobile devices and
            desktops, ensuring a consistent user experience across all
            platforms.
          </>
        ),
      },
    },
    {
      id: 2,
      title: {
        pt: "Otimização de Desempenho",
        en: "Performance Optimization",
      },
      img: <CircleGauge size={64} />,
      description: {
        pt: (
          <>
            Aprimoro o desempenho de sites e aplicações web, melhorando a
            velocidade de carregamento, a eficiência do código e a experiência
            do usuário.
          </>
        ),
        en: (
          <>
            I improve the performance of websites and web applications,
            improving loading speed, code efficiency and experience of user.
          </>
        ),
      },
    },
    {
      id: 3,
      title: {
        pt: "Design de Interfaces de Usuário (UI)",
        en: "User Interface (UI) Design",
      },
      img: <Wallpaper size={64} />,
      description: {
        pt: (
          <>
            Desenvolvo interfaces de usuário visualmente atraentes e intuitivas,
            seguindo os princípios de design e as melhores práticas de UI/UX.
          </>
        ),
        en: (
          <>
            Create visually appealing and intuitive user interfaces, following
            design principles and UI/UX best practices.
          </>
        ),
      },
    },
    {
      id: 4,
      title: {
        pt: "Integração de APIs",
        en: "Integration of APIs",
      },
      img: <Code size={64} />,
      description: {
        pt: (
          <>
            Integro APIs minhas, de terceiros para adicionar funcionalidades
            adicionais aos sites e aplicações web, como pagamentos online,
            autenticação social, entre outros.
          </>
        ),
        en: (
          <>
            Integrate third-party APIs to add additional functionalities to
            websites and web applications, such as online payments, social
            authentication, among others.
          </>
        ),
      },
    },
    {
      id: 5,
      title: {
        pt: "Testes Automatizados",
        en: "Automated Tests",
      },
      img: <Workflow size={64} />,
      description: {
        pt: (
          <>
            Implemento testes automatizados para garantir a qualidade do código
            e a estabilidade das aplicações, utilizando ferramentas como Jest e
            Vitest.
          </>
        ),
        en: (
          <>
            Implement automated tests to ensure code quality and stability of
            applications, using tools such as Jest and Vitest.
          </>
        ),
      },
    },
    {
      id: 6,
      title: {
        pt: "Desenvolvimento de CRUDs",
        en: "CRUD development",
      },
      img: <Database size={64} />,
      description: {
        pt: (
          <>
            Criação de sistemas CRUD - Create, Read, Update e Delete para
            inserção e manipulação de dados.
          </>
        ),
        en: (
          <>
            Creation of CRUD systems - Create, Read, Update and Delete for data
            insertion and manipulation.
          </>
        ),
      },
    },
  ];

  return (
    <div
      className={`flex flex-col items-center   py-32 md:pb-20 lg:pt-72  ${
        theme === "light" ? "bg-primary-light" : "bg-primary-dark"
      }`}
    >
      <div className="flex items-start">
        <h1
          className={`text-4xl font-bold  ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Serviços" : "Services"}
        </h1>
      </div>
      <div
        className={`${theme === "light" ? "text-black/50" : "text-gray-300/50"}   text-md mt-10 flex w-full items-center justify-between gap-2 px-5 py-1 text-center font-semibold md:mt-0 lg:hidden lg:px-2 `}
      >
        {language === "pt" ? "Arraste para ver mais" : "Swipe to see more"}

        <ChevronsRight className="text-purple-700" size={40} />
      </div>
      <div
        ref={ref}
        className={`mt-10 flex max-w-full flex-row gap-10 overflow-x-auto px-2 py-10 transition-all duration-300 md:mt-20 lg:mt-0 lg:grid lg:grid-cols-3 lg:px-10 [&::-webkit-scrollbar]:hidden ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`group pointer-events-auto flex  flex-col justify-center  gap-2 rounded-xl border-2 border-opacity-20 px-8 py-8 transition-all duration-200  hover:border-opacity-100 lg:h-auto lg:items-start  xl:items-center ${theme === "light" ? "bg-secondary-light" : " bg-secondary-dark"} ${theme === "light" ? "border-purple-700" : "border-purple-700"} ${theme === "light" ? "border-opacity-50" : "border-opacity-40"}`}
          >
            <div
              className={`mb-10 transition-all duration-200 group-hover:scale-105 lg:mb-auto  ${theme === "light" ? "text-black" : "text-white"}`}
            >
              {service.img}
            </div>
            <h2
              className={`pointer-events-none text-nowrap text-lg font-bold lg:text-wrap ${theme === "light" ? "text-black" : "text-white"}`}
            >
              {service.title[language]}
            </h2>
            <p
              className={`pointer-events-none w-[50vw] font-semibold md:w-[35vw] lg:w-[20vw] ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
            >
              {service.description[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
