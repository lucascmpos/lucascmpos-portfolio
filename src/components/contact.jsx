import { Mail, Linkedin, Smartphone, Github } from "lucide-react";

import { useInView } from "react-intersection-observer";

const Contact = ({ language, theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  return (
    <div
      id="contact"
      className={`flex flex-col items-center  justify-center py-20 ${
        theme === "light" ? "bg-gray-200" : "bg-[#01020a]"
      }`}
    >
      <div
        ref={ref}
        className={`mb-16 flex  flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-36 flex flex-col items-center justify-center gap-5">
          <h1
            className={` text-4xl font-bold ${
              theme === "light" ? "text-black" : "text-purple-900"
            }`}
          >
            {" "}
            {language === "pt" ? "Contato" : "Contact"}
          </h1>
          <p className="md:text-md text-sm font-semibold text-gray-500 lg:text-lg">
            {language === "pt"
              ? "Gostou do meu trabalho? entre em contato"
              : "Like my work? get in touch"}
          </p>
        </div>

        <div className="flex flex-col gap-32  lg:flex-row">
          <a href="mailto:lucasoliveiracampos81@gmail.com" target="_blank">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-125">
              <Mail
                size={70}
                className={`rounded-xl  p-3 text-purple-900 ${
                  theme === "light" ? "bg-white" : "bg-gray-300"
                }`}
              />
              <h2 className="mt-2 text-xl font-semibold text-purple-900">
                Email
              </h2>
              <p className="font-semibold text-gray-500">
                lucasoliveiracampos81@gmail.com
              </p>
            </div>
          </a>
          <a href="https://wa.me/5514998718530" target="_blank">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-125">
              <Smartphone
                size={70}
                className={`rounded-xl  p-3 text-purple-900 ${
                  theme === "light" ? "bg-white" : "bg-gray-300"
                }`}
              />
              <h2 className="mt-2 text-xl font-semibold text-purple-900">
                {language === "pt" ? "Telefone" : "Phone"}
              </h2>
              <p className="font-semibold text-gray-500">
                {language === "pt" ? "(14) 99871-8530" : "+55 14 99871-8530"}
              </p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lucas-campos81/" target="_blank">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-125">
              <Linkedin
                size={70}
                className={`rounded-xl  p-3 text-purple-900 ${
                  theme === "light" ? "bg-white" : "bg-gray-300"
                }`}
              />
              <h2 className="mt-2 text-xl font-semibold text-purple-900">
                LinkedIn
              </h2>
              <p className="font-semibold text-gray-500">in/lucas-campos81</p>
            </div>
          </a>
          <a href="https://github.com/lucascmpos" target="_blank">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-125">
              <Github
                size={70}
                className={`rounded-xl  p-3 text-purple-900 ${
                  theme === "light" ? "bg-white" : "bg-gray-300"
                }`}
              />
              <h2 className="mt-2 text-xl font-semibold text-purple-900">
                GitHub
              </h2>
              <p className="font-semibold text-gray-500">@lucascmpos</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
