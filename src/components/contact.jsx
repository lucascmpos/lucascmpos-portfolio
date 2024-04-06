import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import { useInView } from "react-intersection-observer";

const Contact = ({ language, onChangeLanguage, theme }) => {
  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    onChangeLanguage(newLanguage);
  };
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  return (
    <div
      id="contact"
      className={`flex flex-col justify-center  items-center py-20 ${
        theme === "light" ? "bg-gray-200" : "bg-[#01020a]"
      }`}
    >
      <div
        ref={ref}
        className={`flex flex-col  justify-center mb-16 items-center transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-36 gap-5 flex flex-col justify-center items-center">
          <h1
            className={` text-4xl font-bold ${
              theme === "light" ? "text-black" : "text-gray-200"
            }`}
          >
            {" "}
            {language === "pt" ? "Contato" : "Contact"}
          </h1>
          <p className="text-gray-500 font-semibold md:text-md text-sm">
            {language === "pt"
              ? "Gostou do meu trabalho? entre em contato"
              : "Like my work? get in touch"}
          </p>
        </div>

        <div className="flex lg:flex-row flex-col  gap-32">
          <a href="mailto:lucasoliveiracampos81@gmail.com" target="_blank">
            <div className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:scale-125 transition-all duration-500">
              <MdOutlineEmail
                size={70}
                className="text-purple-800 bg-zinc-800 rounded-xl p-3"
              />
              <h2 className="text-xl font-semibold text-gray-200 mt-2">
                Email
              </h2>
              <p className="text-gray-500">lucasoliveiracampos81@gmail.com</p>
            </div>
          </a>
          <a href="https://wa.me/5514998718530" target="_blank">
            <div className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:scale-125 transition-all duration-500">
              <BsTelephone
                size={70}
                className="text-purple-800 bg-zinc-800 rounded-xl p-3"
              />
              <h2 className="text-xl font-semibold text-gray-200 mt-2">
                {language === "pt" ? "Telefone" : "Phone"}
              </h2>
              <p className="text-gray-500">
                {language === "pt" ? "(14) 99871-8530" : "+55 14 99871-8530"}
              </p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lucas-campos81/" target="_blank">
            <div className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:scale-125 transition-all duration-500">
              <CiLinkedin
                size={70}
                className="text-purple-800 bg-zinc-800 rounded-xl p-3"
              />
              <h2 className="text-xl font-semibold text-gray-200 mt-2">
                LinkedIn
              </h2>
              <p className="text-gray-500">in/lucas-campos81</p>
            </div>
          </a>
          <a href="https://github.com/lucascmpos" target="_blank">
            <div className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:scale-125 transition-all duration-500">
              <FiGithub
                size={70}
                className="text-purple-800 bg-zinc-800 rounded-xl p-3"
              />
              <h2 className="text-xl font-semibold text-gray-200 mt-2">
                GitHub
              </h2>
              <p className="text-gray-500">@lucascmpos</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
