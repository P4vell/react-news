import { Categories } from "../components/homepage/Categories";
import { SearchBar } from "../components/homepage/SearchBar";
import { useFilters } from "../hooks/useFilters";

const Home = () => {
  const {
    filters: { category, country },
  } = useFilters();

  return (
    <>
      <SearchBar />
      <Categories />
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-200">
        {`Top ${category.label} News in ${country.name}`}
      </h2>
    </>
  );
};

export default Home;
