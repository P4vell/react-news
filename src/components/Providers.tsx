import { FiltersProvider } from "../context/FiltersContext";
import { ThemeProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FiltersProvider>
    </BrowserRouter>
  );
};
