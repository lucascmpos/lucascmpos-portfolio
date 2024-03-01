import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const experiencias = [
    {
      id: 1,
      titulo: "Developer",
      subtitulo: "Freelancer",
      descricao: (
        <span>
          De forma independente, atuo com o desenvolvimento de software de ponta
          a ponta, desde o levantamento de requisitos com as partes envolvidas
          no projeto, prototipação, codificação no lado do cliente e servidor,
          testes, documentação, implementação, até a apresentação para o cliente
          final, utilizando linguagens fortes no mercado, sempre atualizado e a
          nível de exigência internacional, trabalhando com metodologias ágeis.
          <br />
          <br />
          <strong className="text-gray-400">
            Stacks: React.js, Next.js, Node.js, Tailwind.css, CSS, SASS, Prisma,
            PostgreSQL, Styled Components, Figma.{" "}
          </strong>
        </span>
      ),
      data: "09/2023 - Presente ",
      link: "",
    },
    {
      id: 2,
      titulo: "Frontend Developer ",
      subtitulo: "Compass.UOL",
      descricao: (
        <span>
          Participei de cursos intensivos que cobriram desenvolvimento de
          software, metodologias ágeis e AWS Cloud. <br />
          Atuei ativamente na implementação do desenvolvimento e testes
          integrados de componentes do Storybook do Livelo App, e também
          participando de práticas ágeis, com Scrum e Kanban. Essa experiência
          ampliou minhas habilidades e consolidou meu comprometimento com a
          excelência no desenvolvimento de software.
          <br />
          <br />
          <strong className="text-gray-400">
            Stacks: React.js, SASS, Styled Components, Storybook, Figma, AWS
            Cloud, Scrum, Kanban.{" "}
          </strong>
        </span>
      ),
      data: "11/2022 - 09/2023 ",
      link: "https://compass.uol/pt/home/",
    },
  ];

  const formacoes = [
    {
      id: 1,
      titulo: "FATEC Ourinhos",
      subtitulo: "Técnologo em Segurança da Informação",
      descricao: (
        <span>
          Segurança de redes, Criptografia, Gestão de riscos, Forense digital,
          Segurança de aplicações.
          <br /> Programação Orientada a Objetos (Java, Python), Banco de dados
          (Docker e MySQL), Linux e Debian. Habilidades para proteger sistemas,
          dados e redes contra ameaças cibernéticas, aplicando práticas de
          segurança, gerenciamento de riscos e conformidade com regulamentações.
        </span>
      ),
      data: "02/2021 - 12/2023 ",
      link: "",
    },
    {
      id: 2,
      titulo: "ETEC Jacinto Ferreira de Sá ",
      subtitulo: "Técnico em Informática para a Internet",
      descricao: (
        <span>
          Linguagens de Programação (C++, Java, Python, PHP) Programação
          Orientada a Objetos (Java, PHP) Linguagens Web (HTML5, CSS3,
          Javascript), Banco de dados (MySQL), Fundamentos de Hardware e de
          Redes, Inglês Técnico.
        </span>
      ),
      data: "02/2018 - 12/2020 ",
      link: "https://compass.uol/pt/home/",
    },
  ];

  return (
    <div
      id="exp"
      className="bg-[#020211] flex flex-col md:p-48 py-28 justify-center gap-20 items-center"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-gray-200 text-4xl font-bold">Qualificações</h1>
      </div>
      <div
        ref={ref}
        className={`flex gap-16 flex-col transition-opacity justify-center items-center ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-gray-400 md:text-3xl text-2xl font-bold">
            Experiência profissional
          </h2>
        </div>
        {experiencias.map((experiencia) => (
          <div
            key={experiencia.id}
            className={`flex 2xl:flex-row flex-col group  transition-all duration-300 gap-5  pb-3 mr-auto rounded-3xl items-start`}
          >
            <div className="flex flex-col   items-center justify-start w-full">
              <h2 className="font-bold ml-10 md:text-3xl text-xl text-gray-300 ">
                {experiencia.titulo}
              </h2>
              <h3 className="font-semibold md:text-xl text-lg text-purple-900">
                {experiencia.data}
              </h3>
            </div>
            <div className="flex flex-col 2xl:items-start items-center justify-start w-full">
              <div className="flex flex-col w-4/6 md:w-auto items-start ">
                <h3 className="font-semibold md:text-xl text-lg  text-gray-400  transition-all">
                  {experiencia.subtitulo}
                </h3>
              </div>
              <p className="lg:w-10/12 w-8/12 text-gray-300 md:text-lg text-sm md:text-justify text-left 2xl:w-full">
                {experiencia.descricao}
              </p>
            </div>
            <div className="line-vertical absolute bg-gray-200 md:w-0.5 w-0  gap-20 2xl:mt-0 mt-2 mx-9 2xl:h-1/6 h-2/6  2xl:right-1/2 left-2/2 ">
              <MdOutlineWorkOutline
                size={45}
                className="text-purple-800  bg-gray-200 rounded-xl p-2  "
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </div>
        ))}
        <hr className="my-8 border-t border-gray-00 w-3/4" />
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-gray-400 md:text-3xl text-2xl font-bold">
            Educação
          </h2>
        </div>
        {formacoes.map((formacoes) => (
          <div
            key={formacoes.id}
            className={`flex 2xl:flex-row flex-col  group transition-all duration-300 gap-5  pb-3 mr-auto rounded-3xl items-start`}
          >
            <div className="flex flex-col   items-center justify-start w-full">
              <h2 className="font-bold mx-10 md:w-auto w-36 md:text-3xl text-xl text-gray-300">
                {formacoes.titulo}
              </h2>
              <h3 className="font-semibold md:text-xl text-lg text-purple-900">
                {formacoes.data}
              </h3>
            </div>
            <div className="flex flex-col 2xl:items-start items-center justify-start w-full">
              <div className="flex flex-col w-4/6 md:w-auto items-start">
                <h3 className="font-semibold md:text-xl text-lg lg:w-auto w-60 md:mb-0 mb-2 md:text-justify text-left text-gray-400  transition-all">
                  {formacoes.subtitulo}
                </h3>
              </div>
              <p className="lg:w-10/12 md:w-9/12  w-8/12 text-gray-300 md:text-lg text-sm md:text-justify text-left 2xl:w-full">
                {formacoes.descricao}
              </p>
            </div>

            <div className="line-vertical absolute bg-gray-200 md:w-0.5 w-0  gap-20 2xl:mt-0 mt-2 mx-9 2xl:h-1/6 h-2/6  2xl:right-1/2 left-2/2 ">
              <IoSchoolOutline
                size={45}
                className="text-purple-800 bg-gray-200 rounded-xl p-2 "
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
