import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoader } from "./ui/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));

export const PagesRoutes = () => {
  return (
    <main className="max-w-6xl space-y-6 p-6 mx-auto">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </main>
  );
};
