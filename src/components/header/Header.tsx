import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "./Menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="max-w-6xl flex justify-between items-center border-b border-slate-200 px-4 py-6 mx-auto dark:border-slate-700">
      <Button
        variant="ghost"
        size="sm"
        aria-label="Open menu"
        onClick={toggleMenu}
      >
        <AiOutlineMenu size={25} />
      </Button>
      <Link to="/">
        <h1 className="text-3xl text-slate-900 text-center font-semibold transition-colors dark:text-slate-200 hover:text-orange-400 dark:hover:text-indigo-600 sm:text-4xl">
          The{" "}
          <span className="underline underline-offset-4 decoration-orange-400 dark:decoration-indigo-600">
            React
          </span>{" "}
          News
        </h1>
      </Link>

      <ThemeToggle />

      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
