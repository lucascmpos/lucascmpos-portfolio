import { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/exp";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Services from "./components/services";
import Tech from "./components/tech";

function App() {
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState("off");

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
    setLanguage("dark");
  };

  const switchToLight = () => {
    setLanguage("light");
  };

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="overflow-x-hidden">
      <Header
        onSwitchToEnglish={switchToEnglish}
        onSwitchToPortuguese={switchToPortuguese}
        onChangeLanguage={handleChangeLanguage}
        onSwitchToDark={switchToDark}
        onSwitchToLight={switchToLight}
        onChangeTheme={handleChangeTheme}
      />
      <Home theme={theme} language={language} />
      <About theme={theme} language={language} />
      <Services theme={theme} language={language} />
      <Tech theme={theme} language={language} />
      <Experience theme={theme} language={language} />
      <Projects theme={theme} language={language} />
      <Contact theme={theme} language={language} />
      <Footer theme={theme} language={language} />
    </div>
  );
}

export default App;
