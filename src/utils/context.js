import { createContext } from "react";

const ctx = {
  theme: "",
  setTheme: () => {},
};

export const ThemeContext = createContext(ctx);