import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full h-4 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
};
