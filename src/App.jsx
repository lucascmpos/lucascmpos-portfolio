import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/exp";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [language, setLanguage] = useState("pt");

  const switchToEnglish = () => {
    setLanguage("en");
  };

  const switchToPortuguese = () => {
    setLanguage("pt");
  };

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="overflow-x-hidden">
      <Header
        onSwitchToEnglish={switchToEnglish}
        onSwitchToPortuguese={switchToPortuguese}
        onChangeLanguage={handleChangeLanguage}
      />
      <Home language={language} />
      <About language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
