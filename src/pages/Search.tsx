import { getNewsByQuery } from "@/api/newsApi";
import { ErrorMessage } from "@/components/news/ErrorMessage";
import { useParams } from "react-router-dom";
import { NewsList } from "@/components/news/NewsList";
import { useQuery } from "react-query";

const Search = () => {
  const { query } = useParams();
  const { data, isLoading, isError } = useQuery(["search", query], () =>
    getNewsByQuery(String(query))
  );

  if (data?.articles.length === 0) {
    return <ErrorMessage message={`Failed to find news for "${query}"`} />;
  }

  return (
    <>
      <h2 className="text-3xl text-slate-900 font-semibold dark:text-slate-200">
        Results for "{query}"
      </h2>
      <NewsList
        newsList={data?.articles}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default Search;
