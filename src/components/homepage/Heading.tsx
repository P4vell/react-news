import { TFilters } from "@/types";

type HeadingProps = {
  filters: TFilters;
};

export const Heading = ({ filters }: HeadingProps) => {
  const { category, country } = filters;
  return (
    <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-200">
      {`Top ${category.label} News in ${country.name}`}
    </h2>
  );
};
