import { useFilters } from "@/hooks/useFilters";

export const Heading = () => {
  const {
    filters: { category, country },
  } = useFilters();
  return (
    <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-200">
      {`Top ${category.label} News in ${country.name}`}
    </h2>
  );
};
