import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("This hook must be used within a theme provider");
  }
  return context;
};
