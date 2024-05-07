import { useEffect, useRef, useState } from "react";
import { Img } from "react-image";
import Photo from "../assets/me.jpg";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const About = ({ language, theme }) => {
  const [showMore, setShowMore] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: -0,
  });

  const isXLScreen = useMediaQuery({ minWidth: 1280 });
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    if (!isXLScreen && inView && buttonClicked) {
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
  }, [showMore, isXLScreen, inView, buttonClicked]);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
    setButtonClicked(true);
  };

  const getTextByLanguage = () => {
    if (language === "pt") {
      return {
        title: "Sobre",
        text1:
          "Oi! sou o Lucas. Desenvolvedor Front End e graduado em Segurança da Informação. Minha paixão por desenvolvimento começou quando consegui juntar programação e experiência do usuário, com isso, consigo formar ótimas experiências em forma de aplicações. De forma resumida, essas são as tecnologias que uso diariamente: JavaScript, TypeScript, React.js, Next.js, CSS, Node.js e PostgreSQL.",
        text2:
          "Meu primeiro contato com a programação foi em 2018, com o C++, porém atualmente estou imerso no ecossistema JavaScript e TypeScript, utilizando tecnologias como React.js/Next.js para criar experiências envolventes no Front-End e explorando as possibilidades do Node.js para fortalecer o Back-End. Minha bagagem com minha recente graduação inclui experiência prática em tecnologias como AWS Cloud, bancos de dados SQL e Docker, proporcionando uma base sólida para enfrentar os desafios contemporâneos. Sempre busco ir além das expectativas, garantindo que as soluções que entrego sejam não apenas funcionais, mas também eficientes e seguras. O que mais me motiva é a busca por oferecer aos usuários aplicações que se destacam pela sua limpeza, responsividade e qualidade excepcional. Estou animado com as possibilidades que a programação oferece e ansioso para continuar explorando novos horizontes neste universo.",
      };
    } else {
      return {
        title: "About",
        text1:
          "Hi! I'm Lucas. Front End Developer and graduated in Information Security. My passion for development began when I managed to combine programming and user experience, with that, I can create great experiences in the form of applications. In short, these are the technologies I use daily: JavaScript, TypeScript, React.js, Next.js, Tailwindcss, Node.js and PostgreSQL.",
        text2:
          "My first contact with programming was in 2018, with C++, but currently I'm immersed in the JavaScript and TypeScript ecosystem, using technologies like React.js/Next.js to create engaging experiences on the Front-End and exploring the possibilities of Node.js to strengthen the Back-End. My baggage with my recent graduation includes practical experience in technologies such as AWS Cloud, SQL databases and Docker, providing a solid foundation to face contemporary challenges. I always strive to go beyond expectations, ensuring that the solutions I deliver are not only functional, but also efficient and secure. What motivates me the most is the pursuit of offering users applications that stand out for their cleanliness, responsiveness and exceptional quality. I am excited about the possibilities that programming offers and eager to continue exploring new horizons in this universe.",
      };
    }
  };

  const { title, text1, text2 } = getTextByLanguage();

  return (
    <div
      id="about"
      className={`flex flex-col items-center  justify-center gap-10 py-10 md:gap-32 md:px-20 md:py-20 xl:flex-row ${
        theme === "light" ? "bg-gray-200" : "bg-[#01020a]"
      }`}
    >
      <div
        className={`relative flex w-64 items-center overflow-hidden transition-opacity duration-1000 ease-in-out md:order-first md:w-4/12 lg:w-6/12 ${
          inView ? "opacity-100" : "opacity-80"
        }`}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#01020a] via-transparent to-transparent"></div>
        <Img src={Photo} alt="Foto de Lucas Campos" className="rounded-lg" />
      </div>
      <div ref={firstTextRef}></div>
      <div
        className={`flex w-full flex-col items-start justify-center gap-5  px-5 transition-opacity duration-1000 ease-in-out md:items-center lg:w-10/12 lg:items-start ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        ref={ref}
      >
        <h1
          className={` flex  text-4xl font-bold ${
            theme === "light" ? "text-black" : "text-gray-200"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-md w-full text-left font-semibold transition-opacity duration-500 ease-in-out md:text-lg  lg:w-auto lg:p-0 lg:text-start ${
            showMore ? "" : ""
          } ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}
          style={{
            maxHeight: showMore ? "" : "500px",
            overflow: "hidden",
          }}
          ref={secondTextRef}
        >
          {text1}
        </p>

        {!showMore && (
          <button
            className={`group flex cursor-pointer flex-row   items-center justify-center gap-3 rounded-lg p-2 font-bold text-black transition-all duration-300 ${
              theme === "light"
                ? "bg-black text-gray-200 hover:bg-purple-500 hover:text-black"
                : "bg-white text-black hover:bg-zinc-950  hover:text-gray-200"
            }`}
            onClick={handleToggleShowMore}
          >
            {language === "pt" ? "Saiba mais..." : "See more..."}
          </button>
        )}

        <p
          className={`text-md w-full   text-left font-semibold text-gray-200 transition-opacity duration-500 ease-in-out md:text-lg   lg:p-0 lg:text-start ${
            showMore ? "opacity-100" : "opacity-0"
          } ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}
          style={{
            maxHeight: showMore ? "none" : "0px",
            overflow: "hidden",
          }}
        >
          {text2}
        </p>

        {showMore && (
          <button
            className={`mt-5 w-60 cursor-pointer rounded-lg p-3  font-bold transition-all duration-500 md:mt-0 ${
              theme === "light"
                ? "bg-black text-gray-200 hover:bg-purple-500 hover:text-black"
                : "bg-white text-black hover:bg-zinc-950  hover:text-gray-200"
            }`}
            onClick={handleToggleShowMore}
          >
            {language === "pt" ? "Esconder texto!" : "Hide this text!"}
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
