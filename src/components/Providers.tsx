import { QueryClientProvider, QueryClient } from "react-query";
import { FiltersProvider } from "@/context/FiltersContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FiltersProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </FiltersProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
