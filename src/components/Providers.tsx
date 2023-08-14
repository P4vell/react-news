import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
