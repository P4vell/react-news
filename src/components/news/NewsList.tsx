import { SkeletonNews } from "./SkeletonNews";
import { NewsCard } from "./NewsCard";
import { TNews } from "@/lib/schemas/apiData";

type NewsListProps = {
  newsList?: TNews[];
  isLoading: boolean;
};

export const NewsList = ({ newsList, isLoading }: NewsListProps) => {
  if (!newsList || isLoading) {
    return (
      <div className="gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {[...new Array(10)].map((_, index) => (
          <SkeletonNews key={index} />
        ))}
      </div>
    );
  }

  return (
    <section className="gap-6 space-y-6 sm:columns-2 lg:columns-3">
      {newsList?.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </section>
  );
};
