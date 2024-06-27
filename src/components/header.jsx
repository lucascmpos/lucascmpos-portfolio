import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuInfo } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { Moon, Sun, Languages, AlignJustify, X, AlignRight } from "lucide-react";

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
            className={`header fixed right-0 top-0 z-60 h-full w-[60vw] border-l text-gray-300 ${
              theme === "light"
                ? "bg-secondary-light border-secondary-light"
                : "bg-secondary-dark border-secondary-dark"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className={`mr-3 mt-1 text-3xl transition-all hover:text-purple-700 focus:outline-none ${
                  theme === "light" ? "text-black" : "text-gray-300"
                }`}
              >
                <X size={30} />
              </button>
            </div>
            <div className="flex flex-col justify-end w-[50vw]  gap-16 pt-6 text-2xl">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
              ></Link>
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  onClick={() => toggleMenu(false)}
                >
                  <h2
                    className={`flex group cursor-pointer text-3xl px-2 flex-row text-md items-center justify-end gap-5 ${
                      theme === "light" ? "text-black" : "text-gray-200"
                    }`}
                  >
                    
                    {language === "pt" ? item.text_pt : item.text_en}
                    <div className="group-hover:text-purple-700 group-hover:-translate-y-1 ">
                    {item.icon}
                    </div>

                  </h2>
                </Link>
              ))}
            </div>
            <div className="absolute bottom-10 right-10">
            <button
              className={`group flex flex-row items-center text-sm justify-center gap-3 font-bold transition-all duration-300  ${theme === "light" ? "text-black" : "text-gray-300"} `}
              onClick={toggleLanguage}
            >
              {language === "pt" ? "EN" : "PTBR"}
              <div className="group-hover:-translate-y-1 group-hover:text-purple-700"><Languages size={23} /></div>
            </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const BlurOverlay = ({ isOpen }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
        <BlurOverlay className="blur-overlay" isOpen={isMenuOpen} />

      <motion.header
        className={`fixed z-60 flex w-full flex-row items-center justify-between border-b p-5 text-lg font-semibold transition-opacity mobile-menu duration-300 md:justify-around ${
          theme === "light"
            ? "border-gray-200/50 bg-secondary-light text-black"
            : "border-primary-dark bg-secondary-dark text-gray-300"
        } ${visible ? "" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="home" smooth={true} duration={500}>
          <div>
            <h2
              className={`cursor-pointer font-extrabold text-sm ${
                theme === "light" ? "text-purple-600" : "text-purple-800"
              }`}
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

        <div className="hidden flex-row gap-10 text-sm md:flex">
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
            className="flex flex-row items-center justify-center gap-3 transition-all duration-300 hover:scale-110 p-px rounded-md"
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
            className={`text-sm transition-all hover:scale-105 focus:outline-none md:hidden ${
              theme === "light" ? "text-black" : "text-gray-300"
            }`}
          >
            <AlignRight size={25} />
          </button>

          {!isMobile && (
            <button
              className="group flex flex-row items-center text-sm justify-center gap-3 font-bold transition-all duration-300   "
              onClick={toggleLanguage}
            >
              {language === "pt" ? "EN" : "PTBR"}
              <div className="group-hover:-translate-y-1 group-hover:text-purple-700"><Languages size={23} /></div>
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
    </>
  );
};

export default Header;
