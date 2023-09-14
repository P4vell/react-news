import { useParams } from "react-router-dom";
import { NewsList } from "@/components/news/NewsList";
import { getSearchNewsUrl } from "@/api/newsApi";

const Search = () => {
  const { query } = useParams();
  const apiUrl = getSearchNewsUrl(String(query));

  return (
    <>
      <h2 className="text-3xl text-slate-900 font-semibold dark:text-slate-200">
        Results for "{query}"
      </h2>
      <NewsList queryKey={["search-news", String(query)]} url={apiUrl} />
    </>
  );
};

export default Search;
