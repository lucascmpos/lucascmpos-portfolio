import React, { useState } from "react";
import { Img } from "react-image";
import Photo from "../assets/me.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      id="about"
      className="flex flex-row bg-[#01020a] py-32 justify-center gap-32 px-20 "
    >
      <div className="flex flex-col w-6/12 text-start gap-8">
        <h1 className="text-gray-200 text-4xl font-bold">Sobre</h1>
        <p className="text-gray-200 text-lg">
          Oi! sou o Lucas. Desenvolvedor Frontend e graduado em Segurança da
          Informação. Minha paixão é desenvolvimento web e experiência do
          usuário, juntando as duas coisas, consigo formar ótimas experiências
          em forma de aplicações. <br />
          Me considero uma pessoa que aprende rapidamente, capaz de apreender
          novos conceitos com facilidade e excelente capacidade de demonstrá-los
          na prática.
          <br /> De forma resumida, essas são as técnologias que uso
          diariamente: JavaScript, TypeScript, React.js, Next.js, Tailwindcss,
          Node.js e PostgreSQL.
        </p>
        <button
          className="text-gray-300 font-bold rounded-sm bg-purple-900 w-60 cursor-pointer hover:bg-purple-950"
          onClick={handleToggleShowMore}
        >
          {showMore ? "Esconda esse texto de volta!" : "Saiba mais sobre"}
        </button>
        <p
          className={`text-gray-200 text-start text-lg transition-opacity ease-in-out duration-500 ${
            showMore ? "opacity-100" : "opacity-0"
          }`}
        >
          Meu primeiro contato com a programação foi em 2018, com o C++, porém
          atualmente estou imerso no ecossistema JavaScript e TypeScript,
          utilizando tecnologias como React.js/Next.js para criar experiências
          envolventes no Front-End e explorando as possibilidades do Node.js
          para fortalecer o Back-End. Além dos meus estudos e práticas sobre
          desenvolvimento, me graduei em Segurança da Informação. Essa
          combinação de conhecimento prático e teórico me permite abordar os
          desafios de desenvolvimento de maneira abrangente. <br />
          Minha bagagem com essa graduação inclui experiência prática em
          tecnologias como AWS Cloud, bancos de dados SQL e Docker,
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

      <div className="flex items-center w-3/12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#010008] via-transparent to-transparent rounded-lg"></div>
        <Img src={Photo} alt="Foto de Lucas Campos" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
