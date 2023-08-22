import { CATEGORIES } from "../../constants";
import { useFilters } from "../../hooks/useFilters";
import { Button } from "../ui/Button";

export const Categories = () => {
  const { dispatch } = useFilters();

  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {CATEGORIES.map((category) => (
        <Button
          key={category.id}
          onClick={() =>
            dispatch({ type: "CHANGE_CATEGORY", payload: category })
          }
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};
