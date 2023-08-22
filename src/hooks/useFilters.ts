import { FiltersContext } from "../context/FiltersContext";
import { useContext } from "react";

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("This hook must be used within a filters provider");
  }
  return context;
};
