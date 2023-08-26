import { Skeleton } from "../ui/Skeleton";

export const SkeletonNews = () => {
  return (
    <div className="bg-slate-50 rounded-xl shadow-md overflow-hidden dark:bg-slate-800">
      <Skeleton className="h-[230px]" />
      <div className="space-y-6 p-6">
        <div className="space-y-2">
          <Skeleton />
          <Skeleton />
        </div>

        <div className="space-y-2">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>

        <Skeleton />
      </div>
      <Skeleton className="h-10" />
    </div>
  );
};
