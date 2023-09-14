import { Categories } from "@/components/homepage/Categories";
import { SearchBar } from "@/components/homepage/SearchBar";
import { NewsList } from "@/components/news/NewsList";
import { Heading } from "@/components/homepage/Heading";
import { useFilters } from "@/hooks/useFilters";
import { getTopNewsUrl } from "@/api/newsApi";

const Home = () => {
  const {
    filters: { country, category },
  } = useFilters();
  const apiUrl = getTopNewsUrl(country.code, category.value);

  return (
    <>
      <SearchBar />
      <Categories />
      <Heading />
      <NewsList
        queryKey={["top-news", country.name, category.value]}
        url={apiUrl}
      />
    </>
  );
};

export default Home;
