/* eslint-disable react/prop-types */
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import gitIcon from "../assets/icons/git.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import nextIcon from "../assets/icons/next.svg";
import reduxIcon from "../assets/icons/redux.svg";
import sassIcon from "../assets/icons/sass.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import figmaIcon from "../assets/icons/figma.svg";
import storybookIcon from "../assets/icons/storybook.svg";
import nodeIcon from "../assets/icons/node.svg";
import expressIcon from "../assets/icons/express.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import prismaIcon from "../assets/icons/prisma.svg";
import dockerIcon from "../assets/icons/docker.svg";
import { useInView } from "react-intersection-observer";

const Tech = ({ language, theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const icons = [
    { icon: htmlIcon, name: "HTML5" },
    { icon: cssIcon, name: "CSS3" },
    { icon: javascriptIcon, name: "JavaScript" },
    { icon: typescriptIcon, name: "TypeScript" },
    { icon: reactIcon, name: "React.js" },
    { icon: nextIcon, name: "Next.js" },
    { icon: reduxIcon, name: "Redux" },
    { icon: gitIcon, name: "Git" },
    { icon: sassIcon, name: "Sass" },
    { icon: tailwindIcon, name: "Tailwind" },
    { icon: figmaIcon, name: "Figma" },
    { icon: storybookIcon, name: "Storybook" },
    { icon: nodeIcon, name: "Node.js" },
    { icon: expressIcon, name: "Express" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: postgresqlIcon, name: "PostgreSQL" },
    { icon: prismaIcon, name: "Prisma" },
    { icon: dockerIcon, name: "Docker" },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 px-5 py-10 md:py-28 lg:px-0 ${theme === "light" ? "bg-gray-200" : "bg-[#01020a]"
        }`}
    >
      <h1
        className={`text-4xl font-bold ${theme === "light" ? "text-black" : "text-gray-200"
          }`}
      >
        {language === "pt" ? "Tecnologias" : "Technologies"}
      </h1>
      <span
        className={`px-2 text-center text-lg font-semibold ${theme === "light" ? "text-black" : "text-gray-200"
          }`}
      >
        {language === "pt"
          ? "Essas são minhas principais tecnologias! Passe o cursor ou clique em cima do ícone para saber mais..."
          : "These are my main technologies! Hover the cursor or click on the icon..."}
      </span>
      <div
        ref={ref}
        className={`mt-2 grid grid-cols-3 gap-8 rounded-lg border-4 border-purple-900 border-opacity-20 p-10 md:w-1/2 md:grid-cols-4 lg:w-1/2 lg:grid-cols-6 ${theme === "light" ? "bg-gray-300" : "bg-[#020211]"
          } ${inView ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out`}
      >
        {icons.map((item, index) => (
          <div
            key={index}
            className="group relative transition-all hover:scale-110"
          >
            <img
              src={item.icon}
              alt={`icon-${index}`}
              className="h-full w-full cursor-pointer rounded-xl"
            />
            <div
              className={`pointer-events-none absolute -top-9 left-1/2 mb-2 -translate-x-1/2 transform rounded-md border-none px-2 py-1 text-center font-bold   opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${theme === "light" ? "bg-black text-white " : "bg-white text-black"}`}
            >
              <span className="relative ">
                {item.name}
                <p
                  className={`absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 translate-y-4 border-4   border-x-transparent border-b-transparent  ${theme === "light" ? "border-black" : "border-white"}`}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
