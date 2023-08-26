import { buttonVariants } from "../ui/Button";
import { dateFormatter } from "@/lib/utils";
import { TNews } from "../../lib/schemas/apiData";
import { Link } from "react-router-dom";

type NewsCardProps = {
  news: TNews;
};

export const NewsCard = ({ news }: NewsCardProps) => {
  const { title, description, source, publishedAt, url, urlToImage } = news;

  return (
    <article className="bg-slate-50 text-slate-900 border border-slate-300 rounded-xl overflow-hidden shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
      {urlToImage ? (
        <div className="w-full h-[230px]">
          <img
            src={urlToImage}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}
      <div className="space-y-4 p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between items-center text-sm text-zinc-400 font-medium">
          <p>via {source.name}</p>
          <p>{dateFormatter.format(new Date(publishedAt))}</p>
        </div>
      </div>
      <Link
        className={buttonVariants({ variant: "default", size: "lg" })}
        to={url}
      >
        Go To Article
      </Link>
    </article>
  );
};
