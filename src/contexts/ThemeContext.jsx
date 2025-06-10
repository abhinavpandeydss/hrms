import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../theme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const updateTheme = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (themeMode === "system") {
        setTheme(prefersDark ? darkTheme : lightTheme);
        document.documentElement.classList.toggle("dark", prefersDark);
      } else {
        setTheme(themeMode === "light" ? lightTheme : darkTheme);
        document.documentElement.classList.toggle("dark", themeMode === "dark");
      }
    };

    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
