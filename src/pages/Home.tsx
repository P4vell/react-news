import { getTopNews } from "@/api/newsApi";
import { useFilters } from "@/hooks/useFilters";
import { Categories } from "@/components/homepage/Categories";
import { SearchBar } from "@/components/homepage/SearchBar";
import { NewsList } from "@/components/news/NewsList";
import { useQuery } from "react-query";
import { Heading } from "@/components/homepage/Heading";

const Home = () => {
  const { filters } = useFilters();
  const { data, isLoading, isError } = useQuery(["news", filters], () =>
    getTopNews(filters)
  );

  return (
    <>
      <SearchBar />
      <Categories />
      <Heading filters={filters} />
      <NewsList
        newsList={data?.articles}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default Home;
