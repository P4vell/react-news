import { VscDebugRestart } from "react-icons/vsc";
import { getNewsByQuery } from "@/api/newsApi";
import { useParams } from "react-router-dom";
import { NewsList } from "@/components/news/NewsList";
import { useQuery } from "react-query";
import { Button } from "@/components/ui/Button";

const Search = () => {
  const { query } = useParams();
  const { data, isLoading } = useQuery(["search", query], () =>
    getNewsByQuery(String(query))
  );

  if (data?.articles.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl text-slate-900 font-semibold dark:text-slate-200">
          Failed to find news for "{query}"
        </h2>
        <Button className="space-x-1" onClick={() => location.reload()}>
          <VscDebugRestart size={15} />
          <span>Try again</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl text-slate-900 font-semibold dark:text-slate-200">
        Results for "{query}"
      </h2>
      <NewsList newsList={data?.articles} isLoading={isLoading} />
    </>
  );
};

export default Search;
