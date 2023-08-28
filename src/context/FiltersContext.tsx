import { ReactNode, createContext, useReducer } from "react";
import { TFilters } from "@/types";

type ReducerAction =
  | {
      type: "CHANGE_CATEGORY";
      payload: { label: string; value: string };
    }
  | { type: "CHANGE_COUNTRY"; payload: { name: string; code: string } };

type FiltersContext = {
  filters: TFilters;
  dispatch: (action: ReducerAction) => void;
};

const FiltersContext = createContext({} as FiltersContext);

const initialState: TFilters = {
  category: {
    label: "General",
    value: "general",
  },
  country: {
    name: "United States",
    code: "us",
  },
};

const filtersReducer = (state: TFilters, action: ReducerAction): TFilters => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        category: payload,
      };
    case "CHANGE_COUNTRY":
      return {
        ...state,
        country: payload,
      };
    default:
      return state;
  }
};

const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  return (
    <FiltersContext.Provider value={{ filters, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
