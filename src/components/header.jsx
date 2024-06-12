/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuInfo } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { Moon, Sun, Languages, AlignJustify, X } from "lucide-react";

const Header = ({ onChangeLanguage, onChangeTheme, theme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
    onChangeTheme(newTheme);
  };

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
  }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            transition={{ duration: 0.3 }}
            className={`header fixed right-0 top-0 z-20  h-full w-full text-gray-300 ${
              theme === "light" ? "bg-gray-100" : "bg-[#020211]"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className={`mr-2  text-3xl transition-all hover:text-purple-700 focus:outline-none ${
                  theme === "light" ? "text-black" : "text-gray-300"
                }`}
              >
                <X size={30} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-16 pt-10 text-2xl">
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
                  onClick={() => toggleMenu(false)}
                >
                  <h2
                    className={`flex cursor-pointer flex-row items-center justify-center gap-5 ${
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
                className={`flex flex-row items-center justify-center gap-3 font-bold transition-all duration-300 hover:scale-105 hover:text-purple-800 ${
                  theme === "light" ? "text-black" : "text-gray-200"
                }`}
                onClick={toggleLanguage}
              >
                {language === "pt" ? "EN" : "PTBR"}
                <Languages size={23} />
              </button>
            </div>
            <div className="absolute bottom-10 right-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <motion.header
        className={`fixed z-10 flex w-full flex-row items-center justify-between  border-b p-5 text-lg font-semibold transition-opacity duration-300 md:justify-around ${
          theme === "light"
            ? "border-gray-200/50 bg-white text-black"
            : "border-purple-950/30 bg-[#020211] text-gray-300"
        } ${visible ? "" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
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

        <div className="hidden flex-row gap-10 text-lg md:flex">
          {menuItems.map((item) => (
            <Link key={item.id} to={item.id} smooth={true} duration={500}>
              <h2 className="group flex cursor-pointer flex-row items-center justify-center gap-2">
                <div className="transition-all duration-200 group-hover:-translate-y-1 group-hover:text-purple-800">
                  {item.icon}
                </div>
                {language === "pt" ? item.text_pt : item.text_en}
              </h2>
            </Link>
          ))}
        </div>

        <div className="flex gap-10">
          <button
            className="flex flex-row items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:text-purple-800"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <>
                <Moon size={23} />
              </>
            ) : (
              <>
                <Sun size={23} />
              </>
            )}
          </button>

          <button
            onClick={toggleMenu}
            className={`text-2xl transition-all hover:text-purple-700 focus:outline-none  md:hidden ${
              theme === "light" ? "text-black" : "text-gray-300"
            }`}
          >
            <AlignJustify size={30} />
          </button>

          {!isMobile && (
            <button
              className="flex flex-row items-center justify-center gap-3 font-bold transition-all duration-300 hover:scale-105 hover:text-purple-800"
              onClick={toggleLanguage}
            >
              {language === "pt" ? "EN" : "PTBR"}
              <Languages size={23} />
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
      </motion.header>
      {/* Aqui você pode renderizar o resto do seu conteúdo */}
    </>
  );
};

export default Header;
