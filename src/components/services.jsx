import React from "react";
import {
  Smartphone,
  CircleGauge,
  Wallpaper,
  Code,
  Workflow,
  Database,
} from "lucide-react";

const Services = ({ language, theme }) => {
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
        pt: "Integração de APIs e Serviços Externos",
        en: "Integration of APIs and External Services",
      },
      img: <Code size={64} />,
      description: {
        pt: (
          <>
            Integro APIs minhas, de terceiros e serviços externos para adicionar
            funcionalidades adicionais aos sites e aplicações web, como
            pagamentos online, mapas interativos, autenticação social, entre
            outros.
          </>
        ),
        en: (
          <>
            Integrate third-party APIs and external services to add additional
            functionalities to websites and web applications, such as online
            payments, interactive maps, social authentication, among others.
          </>
        ),
      },
    },
    {
      id: 4,
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
      id: 5,
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
      id="services"
      className={`flex flex-col items-center  py-10 ${
        theme === "light" ? "bg-gray-200" : "bg-[#01020a]"
      }`}
    >
      <div className="flex items-start">
        <h1
          className={`text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {language === "pt" ? "Serviços" : "Services"}
        </h1>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-10 px-10 py-10 md:mt-20 xl:grid xl:grid-cols-3">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group flex h-fit w-full flex-col items-center justify-center gap-2 rounded-xl border-4 border-purple-900 border-opacity-20 bg-[#020211] px-8 py-2 shadow  transition-all duration-200 hover:border-opacity-100 md:h-72"
          >
            <div className="text-white transition-all duration-200 group-hover:scale-110">
              {service.img}
            </div>
            <h2 className="text-center text-lg font-bold text-white">
              {service.title[language]}
            </h2>
            <p className="w-fit text-center font-semibold text-gray-400 lg:w-96">
              {service.description[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
