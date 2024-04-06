import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuInfo } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { IoLanguage } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({ onChangeLanguage, onChangeTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState("dark");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    onChangeLanguage(newLanguage);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onChangeTheme(newTheme);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const menuItems = [
    {
      id: "about",
      text_pt: "Sobre",
      text_en: "About",
      icon: <FaRegCircleUser size={20} />,
    },
    {
      id: "exp",
      text_pt: "Experiência",
      text_en: "Experience",
      icon: <MdOutlineWorkOutline size={20} />,
    },
    {
      id: "projects",
      text_pt: "Projetos",
      text_en: "Projects",
      icon: <GoProjectRoadmap size={20} />,
    },
    {
      id: "contact",
      text_pt: "Contato",
      text_en: "Contact",
      icon: <LuInfo size={20} />,
    },
  ];

  const MobileMenu = ({
    isOpen,
    toggleMenu,
    menuItems,
    language,
    toggleLanguage,
    toggleTheme,
  }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full  text-gray-300 z-20 transition-transform duration-300 backdrop-filter backdrop-blur-3xl"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => toggleMenu(false)}
                className={`text-2xl  focus:outline-none ${
                  theme === "light" ? "text-black" : "text-gray-300"
                }`}
              >
                &#10006;
              </button>
            </div>
            <div className="flex flex-col text-2xl gap-16 items-center pt-10">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
              >
                <div>
                  <h2 className="cursor-pointer font-bold text-purple-800">
                    campos
                    <span
                      className={`${
                        theme === "light" ? "text-black" : "text-gray-200"
                      }`}
                    >
                      .
                    </span>
                    dev
                  </h2>
                </div>
              </Link>
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  onClick={() => toggleMenu(false)}
                >
                  <h2
                    className={`flex flex-row cursor-pointer gap-5 justify-center items-center ${
                      theme === "light" ? "text-black" : "text-gray-200"
                    }`}
                  >
                    <div className="hover:-translate-y-1 hover:text-purple-800">
                      {item.icon}
                    </div>
                    {language === "pt" ? item.text_pt : item.text_en}
                  </h2>
                </Link>
              ))}
            </div>
            <div className="absolute bottom-10 right-10">
              <button
                className={`hover:scale-105 flex flex-row items-center justify-center gap-3 hover:text-purple-800 transition-all duration-300 ${
                  theme == "light" ? "text-black" : "text-gray-200"
                }`}
                onClick={toggleLanguage}
              >
                {language === "pt" ? "EN" : "PT-BR"}
                <IoLanguage size={23} />
              </button>
            </div>
            <div className="absolute bottom-10 right-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <header
      className={`fixed flex flex-row text-lg md:justify-around justify-between items-center  font-semibold w-full p-5 z-10 shadow-md transition-opacity duration-300 ${
        !visible
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      } ${
        theme === "light"
          ? "bg-gray-300 text-black"
          : "bg-[#020211] text-gray-300"
      }`}
    >
      <Link to="home" smooth={true} duration={500}>
        <div>
          <h2
            className={`cursor-pointer font-bold ${
              theme === "light" ? "text-purple-600" : "text-purple-800"
            } `}
          >
            campos
            <span
              className={`${
                theme === "light" ? "text-black" : "text-gray-200"
              }`}
            >
              .
            </span>
            dev
          </h2>
        </div>
      </Link>

      <div className="md:flex hidden flex-row text-lg gap-10">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.id} smooth={true} duration={500}>
            <h2 className="group flex flex-row cursor-pointer gap-2 justify-center items-center">
              <div className="group-hover:-translate-y-1 group-hover:text-purple-800 transition-all duration-200">
                {item.icon}
              </div>
              {language === "pt" ? item.text_pt : item.text_en}
            </h2>
          </Link>
        ))}
      </div>

      <div className="flex gap-10">
        <button
          className="hover:scale-105 flex justify-center items-center flex-row gap-3 hover:text-purple-800 transition-all duration-300"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <>
              <FiMoon size={23} />
            </>
          ) : (
            <>
              <FiSun size={23} />
            </>
          )}
        </button>

        <button
          onClick={toggleMenu}
          className={`md:hidden text-2xl  focus:outline-none ${
            theme === "light" ? "text-black" : "text-gray-300"
          }`}
        >
          &#9776;
        </button>

        {!isMobile && (
          <button
            className="hover:scale-105 flex justify-center items-center flex-row gap-3 hover:text-purple-800 transition-all duration-300"
            onClick={toggleLanguage}
          >
            {language === "pt" ? "EN" : "PT-BR"}
            <IoLanguage size={23} />
          </button>
        )}
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleTheme={toggleTheme}
        menuItems={menuItems}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </header>
  );
};

export default Header;
