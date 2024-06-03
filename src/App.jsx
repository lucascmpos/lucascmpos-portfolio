/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/exp";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Services from "./components/services";
import Tech from "./components/tech";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

import "./index.css"
function App() {
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState("light");
  const [showArrowUp, setShowArrowUp] = useState(false);


  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      setTheme("dark");
    }

    const handleScroll = () => {
      const homeSection = document.getElementById("about");
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setShowArrowUp(window.scrollY > homeBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const switchToEnglish = () => {
    setLanguage("en");
  };

  const switchToPortuguese = () => {
    setLanguage("pt");
  };

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const switchToDark = () => {
    setTheme("dark");
  };

  const switchToLight = () => {
    setTheme("light");
  };

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div
      className={`overflow-x-hidden relative ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <Header
        onSwitchToEnglish={switchToEnglish}
        onSwitchToPortuguese={switchToPortuguese}
        onChangeLanguage={handleChangeLanguage}
        onSwitchToDark={switchToDark}
        onSwitchToLight={switchToLight}
        onChangeTheme={handleChangeTheme}
        theme={theme}
      />

      <Home id="home" theme={theme} language={language} />
      <About theme={theme} language={language} />
      <Services theme={theme} language={language} />
      <Tech theme={theme} language={language} />
      <Experience theme={theme} language={language} />
      <Projects theme={theme} language={language} />
      <Contact theme={theme} language={language} />
      <Footer theme={theme} language={language} />

      <Link to="home" smooth={true} duration={500}>
        <ArrowUp
          className={`fixed cursor-pointer   md:right-20 bottom-10 right-5  rounded-full w-8 h-8 px-1 transform transition-transform duration-300 ${showArrowUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            } ${theme === "light" ? "bg-black text-gray-300 hover:bg-purple-700" : "bg-gray-300 text-black hover:bg-purple-700"}`}
        />
      </Link>
    </div>
  );
}

export default App;
