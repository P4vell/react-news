import { SkeletonNews } from "./SkeletonNews";
import { ErrorMessage } from "./ErrorMessage";
import { NewsCard } from "./NewsCard";
import { apiDataSchema } from "@/lib/schemas/apiData";
import { Loader2 } from "lucide-react";
import { useInfiniteQuery } from "react-query";
import { apiClient } from "@/api/newsApi";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";

type NewsListProps = {
  queryKey: string[];
  url: string;
};

export const NewsList = ({ queryKey, url }: NewsListProps) => {
  const lastNewsRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastNewsRef.current,
    threshold: 1,
  });
  const { data, fetchNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery(
      queryKey,
      async ({ pageParam = 1 }) => {
        const response = await apiClient.get(
          `${url}&pageSize=15&page=${pageParam}`
        );
        const { articles } = await apiDataSchema.parseAsync(response.data);
        return articles;
      },
      {
        getNextPageParam: (_, pages) => {
          return pages.length + 1;
        },
      }
    );

  const articles = data?.pages.flatMap((page) => page);

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {[...new Array(10)].map((_, index) => (
          <SkeletonNews key={index} />
        ))}
      </div>
    );
  }

  if (isError || articles?.length === 0) {
    return <ErrorMessage message="Something went wrong, please try again." />;
  }

  return (
    <>
      <section className="gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {articles?.map((news, index) => {
          if (index === articles.length - 1) {
            return <NewsCard key={index} news={news} ref={ref} />;
          } else {
            return <NewsCard key={index} news={news} />;
          }
        })}
      </section>
      {isFetchingNextPage ? (
        <div className="flex justify-center">
          <Loader2 className="w-8 h-8 text-orange-600 animate-spin dark:text-indigo-600" />
        </div>
      ) : null}
    </>
  );
};
