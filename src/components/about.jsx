import React, { useState, useRef, useEffect } from "react";
import { Img } from "react-image";
import Photo from "../assets/me.jpg";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: -0,
  });

  const isXLScreen = useMediaQuery({ minWidth: 1280 });
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (!isXLScreen) {
      if (showMore) {
        window.scrollTo({
          top:
            secondTextRef.current.offsetTop + firstTextRef.current.offsetHeight,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: firstTextRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [showMore, isXLScreen]);

  return (
    <div
      id="about"
      className="flex flex-col xl:flex-row bg-[#01020a] md:py-20 py-10 justify-center md:gap-32 gap-10 md:px-20 items-center"
    >
      <div
        className={`flex items-center w-64 md:w-4/12 lg:w-6/12 relative overflow-hidden md:order-first transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#01020a] via-transparent to-transparent rounded-lg"></div>
        <Img src={Photo} alt="Foto de Lucas Campos" className="rounded-lg" />
      </div>
      <div ref={firstTextRef}></div>
      <div
        className={`flex flex-col w-full md:w-6/12 lg:w-10/12  text-start gap-5 justify-center items-center transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        ref={ref}
      >
        <h1 className="text-gray-200 text-4xl font-bold">Sobre</h1>
        <p
          className={`text-gray-200 md:text-lg   md:p-0 p-2 text-left md:text-start text-md md:w-auto w-80 transition-opacity ease-in-out duration-500 ${
            showMore ? "" : ""
          }`}
          style={{
            maxHeight: showMore ? "" : "500px",
            overflow: "hidden",
          }}
          ref={secondTextRef}
        >
          Oi! sou o Lucas. Desenvolvedor Frontend e graduado em Segurança da
          Informação. Minha paixão é desenvolvimento web e experiência do
          usuário, juntando as duas coisas, consigo formar ótimas experiências
          em forma de aplicações. <br />
          Me considero uma pessoa que aprende rapidamente, capaz de apreender
          novos conceitos com facilidade e excelente capacidade de demonstrá-los
          na prática. <br />
          De forma resumida, essas são as tecnologias que uso diariamente:
          JavaScript, TypeScript, React.js, Next.js, Tailwindcss, Node.js e
          PostgreSQL.
        </p>

        {!showMore && (
          <button
            className="text-black font-bold md:mt-0 mt-10 p-3 rounded-lg bg-gray-200 w-60 cursor-pointer hover:bg-purple-950 hover:text-gray-200 transition-all duration-500"
            onClick={handleToggleShowMore}
          >
            Saiba mais...
          </button>
        )}

        <p
          className={`text-gray-200  md:text-lg text-left md:text-start md:p-0 p-2 text-md md:w-auto w-80 transition-opacity ease-in-out duration-500 ${
            showMore ? "opacity-100" : "opacity-0"
          }`}
          style={{
            maxHeight: showMore ? "none" : "0px",
            overflow: "hidden",
          }}
        >
          Meu primeiro contato com a programação foi em 2018, com o C++, porém
          atualmente estou imerso no ecossistema JavaScript e TypeScript,
          utilizando tecnologias como React.js/Next.js para criar experiências
          envolventes no Front-End e explorando as possibilidades do Node.js
          para fortalecer o Back-End. <br />
          Minha bagagem com minha recente graduação inclui experiência prática
          em tecnologias como AWS Cloud, bancos de dados SQL e Docker,
          proporcionando uma base sólida para enfrentar os desafios
          contemporâneos.
          <br /> Sempre busco ir além das expectativas, garantindo que as
          soluções que entrego sejam não apenas funcionais, mas também
          eficientes e seguras. O que mais me motiva é a busca por oferecer aos
          usuários aplicações que se destacam pela sua limpeza, responsividade e
          qualidade excepcional.
          <br /> Estou animado com as possibilidades que a programação oferece e
          ansioso para continuar explorando novos horizontes neste universo.
        </p>

        {showMore && (
          <button
            className="text-black font-bold md:mt-0 mt-5 p-3 rounded-lg bg-gray-200 w-60 cursor-pointer hover:bg-purple-950 hover:text-gray-200 transition-all duration-500"
            onClick={handleToggleShowMore}
          >
            Esconde esse texto!
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
