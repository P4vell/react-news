import { CATEGORIES } from "../../constants";
import { TCategory } from "../../types";
import { Button } from "../ui/Button";

type CategoriesProps = {
  changeCategory: (category: TCategory) => void;
};

export const Categories = ({ changeCategory }: CategoriesProps) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {CATEGORIES.map((category) => (
        <Button key={category.id} onClick={() => changeCategory(category)}>
          {category.label}
        </Button>
      ))}
    </div>
  );
};
