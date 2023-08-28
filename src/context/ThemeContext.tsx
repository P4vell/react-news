import { createContext, ReactNode, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Theme = "dark" | "light";

type ThemeContext = {
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContext);

const getInitialTheme = (): Theme => {
  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (userMedia.matches) {
    return "dark";
  }
  return "light";
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("THEME", getInitialTheme);
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.remove(isDark ? "light" : "dark");
    rootElement.classList.add(theme);
  }, [theme, isDark]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
