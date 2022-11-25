import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeContext } from "../utils/context";

import Home from "../pages";
import Detail from "../pages/Detail";

const Index = () => {
  const [theme, setTheme] = useState("light");

  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default Index;
