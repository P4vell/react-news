import { Categories } from "../components/homepage/Categories";
import { Heading } from "../components/homepage/Heading";
import { SearchBar } from "../components/homepage/SearchBar";
import { useFilters } from "../hooks/useFilters";

const Home = () => {
  const { filters } = useFilters();

  return (
    <>
      <SearchBar />
      <Categories />
      <Heading filters={filters} />
    </>
  );
};

export default Home;
