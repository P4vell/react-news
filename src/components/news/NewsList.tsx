import { SkeletonNews } from "./SkeletonNews";
import { ErrorMessage } from "./ErrorMessage";
import { NewsCard } from "./NewsCard";
import { TNews } from "@/lib/schemas/apiData";

type NewsListProps = {
  newsList?: TNews[];
  isLoading: boolean;
  isError: boolean;
};

export const NewsList = ({ newsList, isLoading, isError }: NewsListProps) => {
  if (isLoading) {
    return (
      <div className="gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {[...new Array(10)].map((_, index) => (
          <SkeletonNews key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorMessage message="Something went wrong, please try again." />;
  }

  return (
    <section className="gap-6 space-y-6 sm:columns-2 lg:columns-3">
      {newsList?.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </section>
  );
};
