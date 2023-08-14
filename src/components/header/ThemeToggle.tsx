import { BsSun, BsMoon } from "react-icons/bs";
import { Button } from "../ui/Button";

export const ThemeToggle = () => {
  return (
    <Button variant="ghost" size="sm">
      <BsSun
        size={25}
        className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"
      />
      <BsMoon
        size={25}
        className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"
      />
    </Button>
  );
};
