import { CATEGORIES } from "../../constants";
import { Button } from "../ui/Button";

export const Categories = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {CATEGORIES.map((category) => (
        <Button key={category.id}>{category.label}</Button>
      ))}
    </div>
  );
};
