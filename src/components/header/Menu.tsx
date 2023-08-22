import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import { useFilters } from "../../hooks/useFilters";
import { COUNTRIES } from "../../constants";
import { useEffect } from "react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

type MenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Menu = ({ isOpen, toggleMenu }: MenuProps) => {
  const { dispatch } = useFilters();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  return createPortal(
    <>
      <div
        className={cn("fixed inset-0 bg-neutral-800/70 hidden", {
          block: isOpen,
        })}
      />
      <div
        className={cn(
          "w-[70%] max-w-[400px] h-screen fixed top-0 left-0 -translate-x-full flex flex-col bg-white space-y-6 p-6 duration-300 overflow-y-scroll dark:bg-slate-900",
          {
            "translate-x-0": isOpen,
          }
        )}
      >
        <Button
          size="sm"
          variant="ghost"
          aria-label="Close menu"
          className="self-end"
          onClick={toggleMenu}
        >
          <AiOutlineClose size={25} />
        </Button>

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-300">
          Filter by country
        </h2>

        <ul>
          {COUNTRIES.map((country) => (
            <li key={country.code}>
              <Button
                variant="ghost"
                className="space-x-4"
                onClick={() =>
                  dispatch({ type: "CHANGE_COUNTRY", payload: country })
                }
              >
                <img src={country.flag} alt={`${country.name} flag`} />
                <p>{country.name}</p>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>,
    document.getElementById("menu") as HTMLDivElement
  );
};
