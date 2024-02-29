import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center py-44 bg-[#020211]"
    >
      <div
        ref={ref}
        className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-gray-200 text-4xl mb-24 font-bold">Contatos</h1>
        <div className="flex flex-row gap-32">
          <a href="mailto:lucasoliveiracampos81@gmail.com" target="_blank">
            <div className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:scale-125 transition-all duration-500">
              <MdOutlineEmail
                size={70}
                className="text-purple-800 bg-zinc-800 rounded-xl p-3"
              />
              <h2 className="text-xl font-semibold text-gray-200 mt-2">
                Email
              </h2>
              <p className="text-gray-400">lucasoliveiracampos81@gmail.com</p>
            </div>
          </a>
          <a href="https://wa.me/5514998718530" target="_blank">
            <div className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:scale-125 transition-all duration-500">
              <BsTelephone
                size={70}
                className="text-purple-800 bg-zinc-800 rounded-xl p-3"
              />
              <h2 className="text-xl font-semibold text-gray-200 mt-2">
                Telefone
              </h2>
              <p className="text-gray-400">(14) 99871-8530</p>
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
              <p className="text-gray-400">@lucascampos81</p>
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
              <p className="text-gray-400">@lucascmpos</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
