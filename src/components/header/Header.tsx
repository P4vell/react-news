import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="max-w-6xl flex justify-between items-center border-b border-slate-200 p-6 mx-auto dark:border-slate-700">
      <Link to="/">
        <h1 className="text-4xl text-slate-900 font-semibold dark:text-slate-200">
          The <span className="underline underline-offset-4 decoration-orange-400">React</span>{" "}
          News
        </h1>
      </Link>

      <ThemeToggle />
    </header>
  );
};
