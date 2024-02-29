import React, { useState } from "react";
import { Img } from "react-image";
import Photo from "../assets/me.jpg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      id="about"
      className="flex flex-col md:flex-row bg-[#01020a] py-40 justify-center gap-32 px-20"
    >
      {/* Parte da imagem */}
      <div
        className={`flex items-center w-full md:w-4/12 relative overflow-hidden md:order-first transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#010008] via-transparent to-transparent rounded-lg"></div>
        <Img src={Photo} alt="Foto de Lucas Campos" className="rounded-lg" />
      </div>

      <div
        className={`flex flex-col w-full md:w-6/12 text-start gap-8 justify-center items-center transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        ref={ref}
      >
        <h1 className="text-gray-200 text-4xl font-bold">Sobre</h1>
        <p className="text-gray-200 md:text-lg md:p-0 p-2 text-justify md:text-start text-md md:w-auto w-80">
          Oi! sou o Lucas. Desenvolvedor Frontend e graduado em Segurança da
          Informação. Minha paixão é desenvolvimento web e experiência do
          usuário, juntando as duas coisas, consigo formar ótimas experiências
          em forma de aplicações. <br />
          Me considero uma pessoa que aprende rapidamente, capaz de apreender
          novos conceitos com facilidade e excelente capacidade de demonstrá-los
          na prática.
          <br /> De forma resumida, essas são as tecnologias que uso
          diariamente: JavaScript, TypeScript, React.js, Next.js, Tailwindcss,
          Node.js e PostgreSQL.
        </p>
        <button
          className="text-gray-300 font-bold rounded-sm bg-purple-900 w-60 cursor-pointer hover:bg-purple-950 transition-all duration-500"
          onClick={handleToggleShowMore}
        >
          {showMore ? "Esconda o texto abaixo!" : "Saiba mais..."}
        </button>
        <p
          className={`text-gray-200  md:text-lg text-justify md:text-start md:p-0 p-2 text-md md:w-auto w-80 transition-opacity ease-in-out duration-500 ${
            showMore ? "opacity-100" : "opacity-0"
          }`}
        >
          Meu primeiro contato com a programação foi em 2018, com o C++, porém
          atualmente estou imerso no ecossistema JavaScript e TypeScript,
          utilizando tecnologias como React.js/Next.js para criar experiências
          envolventes no Front-End e explorando as possibilidades do Node.js
          para fortalecer o Back-End. <br />
          Minha bagagem com minha recente graduação inclui experiência prática
          em tecnologias como AWS Cloud, bancos de dados SQL e Docker,
          proporcionando uma base sólida para enfrentar os desafios
          contemporâneos. Sempre busco ir além das expectativas, garantindo que
          as soluções que entrego sejam não apenas funcionais, mas também
          eficientes e seguras. O que mais me motiva é a busca por oferecer aos
          usuários aplicações que se destacam pela sua limpeza, responsividade e
          qualidade excepcional. Estou animado com as possibilidades que a
          programação oferece e ansioso para continuar explorando novos
          horizontes neste universo.
        </p>
      </div>
    </div>
  );
};

export default About;
