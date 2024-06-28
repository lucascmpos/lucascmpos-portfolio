/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuInfo } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { Moon, Sun, Languages, X, AlignRight } from "lucide-react";

const Header = ({ onChangeLanguage, onChangeTheme, theme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
            className={`mobile-menu fixed right-0 top-0  h-full w-[65vw] border-l text-gray-300 ${
              theme === "light"
                ? "border-secondary-light bg-secondary-light"
                : "border-secondary-dark bg-secondary-dark"
            }`}
            ref={menuRef}
          >
            <div className="flex items-center justify-between p-4 ">
              <img
                src="/src/assets/web-logo.svg"
                alt="campos.dev"
                className="h-8 w-8 cursor-pointer"
              />

              <button
                onClick={toggleMenu}
                className={` items-center justify-center gap-3 rounded-lg border p-2 text-sm font-bold transition-all duration-300  ${
                  theme === "light"
                    ? "border-secondary-light bg-secondary-light text-black hover:bg-primary-light"
                    : "border-secondary-dark/60 bg-[#040417] text-gray-300 hover:bg-[#080826]"
                } `}
              >
                <X size={30} />
              </button>
            </div>
            <div className="flex w-full  flex-col gap-10 px-10 pt-6 text-2xl">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
              />
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  onClick={() => toggleMenu(false)}
                >
                  <div
                    className={`flex   w-full justify-start  rounded-lg border-b ${
                      theme === "light"
                        ? "border-secondary-light bg-secondary-light"
                        : "border-secondary-dark/60 bg-[#040417]"
                    }  `}
                  >
                    <h2
                      className={`group flex w-full cursor-pointer flex-row items-center justify-start gap-5 rounded-md p-2  text-2xl font-semibold transition-all duration-300  ${
                        theme === "light"
                          ? "border-secondary-light  bg-secondary-light text-black hover:bg-primary-light"
                          : "border-secondary-dark/60 bg-[#040417] text-gray-300 hover:bg-[#080821]"
                      }`}
                    >
                      <div>{item.icon}</div>
                      {language === "pt" ? item.text_pt : item.text_en}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute bottom-10 flex  w-full justify-between px-4">
              <button
                className={`group flex flex-row items-center justify-center gap-3 rounded-lg border p-2 text-sm font-bold transition-all duration-300  ${
                  theme === "light"
                    ? "border-secondary-light bg-secondary-light text-black hover:bg-primary-light"
                    : "border-secondary-dark/60 bg-[#040417] text-gray-300 hover:bg-[#080821]"
                } `}
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="text-black" size={23} />
                  </>
                ) : (
                  <>
                    <Sun size={23} />
                  </>
                )}
              </button>
              <button
                className={`group flex flex-row items-center justify-center gap-3 rounded-lg border p-2 text-sm font-bold transition-all duration-300  ${
                  theme === "light"
                    ? "border-secondary-light bg-secondary-light text-black hover:bg-primary-light"
                    : "border-secondary-dark/60 bg-[#040417] text-gray-300 hover:bg-[#080821]"
                } `}
                onClick={toggleLanguage}
              >
                {language === "pt" ? "EN" : "PTBR"}
                <div className=" ">
                  <Languages size={23} />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  const BlurOverlay = ({ isOpen, toggleMenu }) => {
    const handleClick = () => {
      if (isOpen) {
        toggleMenu();
      }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="blur-overlay fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
          ></motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <BlurOverlay isOpen={isMenuOpen} />
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.header
            className={`fixed z-10 flex w-full flex-row items-center justify-between border-b p-5 text-lg font-semibold transition-opacity duration-300 md:justify-around ${
              theme === "light"
                ? "border-gray-200/50 bg-secondary-light text-black"
                : "border-primary-dark bg-secondary-dark text-gray-300"
            } ${visible ? "" : "hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="home" smooth={true} duration={500}>
              <div className="flex flex-row items-center gap-2">
                <img
                  src="/src/assets/web-logo.svg"
                  alt="campos.dev"
                  className="h-8 w-8 cursor-pointer"
                />
                <h2
                  className={`hidden cursor-pointer text-sm font-extrabold text-purple-700 lg:block `}
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
                className="flex flex-row items-center justify-center gap-3 rounded-md p-px transition-all duration-300 hover:scale-110"
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
                  className="group flex flex-row items-center justify-center gap-3 text-sm font-bold transition-all duration-300   "
                  onClick={toggleLanguage}
                >
                  {language === "pt" ? "EN" : "PTBR"}
                  <div className="group-hover:-translate-y-1 group-hover:text-purple-700">
                    <Languages size={23} />
                  </div>
                </button>
              )}
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <MobileMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        menuItems={menuItems}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </>
  );
};

export default Header;
