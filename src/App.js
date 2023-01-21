import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./components/Sass/App.scss";
import Home from "./components/Pages/Home";
import About from "./components/Pages/about";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import "./components/translations/i18n";
import i18n from "i18next";

function App() {
  const [lang, setLang] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  const detectLang = () => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
      changeLayout(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
      setLang("en");
      changeLayout("en");
    }
    i18n.changeLanguage(lang);
  };

  const handleOnclick = (lang) => {
    const __lang = lang === "ar" ? "ar" : "en";
    i18n.changeLanguage(__lang);
    localStorage.setItem("lang", __lang);
    changeLayout(__lang);
    setLang(__lang);
  };

  const changeLayout = (lang) => {
    if (lang == "ar") {
      document.querySelectorAll(".en").forEach((el) => {
        el.classList.add("ar");
        el.classList.remove("en");
      });
    } else {
      document.querySelectorAll(".ar").forEach((el) => {
        el.classList.add("en");
        el.classList.remove("ar");
      });
    }
  };

  useEffect(() => {
    detectLang();
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
          
          <Route
            path="/About"
            exact
            element={<About />}
            changeLang={() => handleOnclick(lang === "en" ? "ar" : "en")}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
