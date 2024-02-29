import React from "react";
import compassLogo from "../assets/compass.png";
import webbyLogo from "../assets/webby.png";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const experiencias = [
    {
      id: 1,
      logo: compassLogo,
      titulo: "Desenvolvedor Front-End ",
      subtitulo: "Compass.UOL",
      descricao:
        "Durante um período de cinco meses, imerso em um ambiente dinâmico e educacional, participei de uma série de cursos abrangentes que abordaram desenvolvimento de software, metodologias ágeis e AWS Cloud. O programa foi caracterizado pela integração prática, envolvendo projetos reais e avaliações rigorosas, proporcionando uma experiência enriquecedora e desafiadora. Após concluir o programa de bolsas, tive a oportunidade de ser efetivado na equipe da Compass, atuando em parceria com a renomada Livelo. Durante essa fase, mergulhei nas práticas ágeis, incorporando métodos como Scrum e Kanban no meu cotidiano profissional. Contribuí ativamente para o desenvolvimento e aprimoramento do Storybook do Livelo App, tanto para plataformas web quanto mobile, utilizando uma variedade de tecnologias avançadas, incluindo React.js, React Native, Styled Components, SASS, Storybook e Figma.",

      data: "28/11/2022 - 02/09/2023 ",
      link: "https://compass.uol/pt/home/",
    },
    {
      id: 2,
      logo: webbyLogo,
      titulo: "Auxiliar de Help Desk",
      subtitulo: "Webby Internet",
      descricao:
        "Como auxiliar em um provedor de internet, desempenhei um papel crucial ao atender as necessidades do público, fornecendo suporte tanto interno quanto externo por meio de um sistema ERP. Minhas responsabilidades incluíram a configuração detalhada de redes de internet, abrangendo aspectos como IPV4/IPV6, DNS e MTU, tanto em roteadores quanto em modens. Nesse contexto, destaquei-me ao oferecer soluções técnicas rápidas e eficazes para uma variedade de desafios relacionados à infraestrutura de hardware, rede e segurança. Além disso, aprimorei minhas habilidades ao lidar com questões práticas no ambiente de trabalho, desenvolvendo uma compreensão aprofundada das operações diárias e contribuindo para o sucesso contínuo da equipe.",
      data: "05/06/2021 - 05/12/2021 ",
      link: "https://www.webbyinternet.com.br/",
    },
  ];

  return (
    <div
      id="exp"
      className="bg-[#020211] flex flex-col p-48 pt-32 justify-center gap-20 items-center"
    >
      <div
        ref={ref}
        className={`flex gap-10 flex-col transition-opacity  justify-center items-center ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gray-200 text-4xl font-bold">Experiência</h1>
        </div>
        {experiencias.map((experiencia) => (
          <div
            key={experiencia.id}
            className="flex flex-col bg-[#01020a] hover:bg-[#030307]  md:w-auto w-72 transition-all duration-300 gap-10 md:py-20 md:px-32 p-3 mr-auto  rounded-3xl items-center justify-center"
          >
            <a href={experiencia.link} target="_blank">
              <div className="flex flex-row w-80 items-center justify-center gap-5 group ">
                <img
                  src={experiencia.logo}
                  className="size-24 max-w-full h-auto group-hover:scale-110 transition-all"
                  alt="Company Logo"
                />
                <h1 className="font-semibold flex text-xl text-gray-400 group-hover:text-gray-600 transition-all">
                  {experiencia.subtitulo}
                </h1>
              </div>
            </a>
            <div className="flex flex-col justify-between items-center gap-10 w-80 md:w-auto">
              <h2 className="font-bold md:text-4xl text-xl text-gray-300">
                {experiencia.titulo}
              </h2>
              <h2 className="font-semibold md:text-xl text-lg text-purple-900">
                {experiencia.data}
              </h2>
            </div>
            <p className="md:w-3/4 w-5/6 text-gray-300 md:text-lg text-sm text-justify">
              {experiencia.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
