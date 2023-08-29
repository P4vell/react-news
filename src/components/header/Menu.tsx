import { AiOutlineClose } from "react-icons/ai";
import { useScrollLock } from "@/hooks/useScrollLock";
import { createPortal } from "react-dom";
import { useFilters } from "@/hooks/useFilters";
import { COUNTRIES } from "@/constants";
import { useEffect } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

type MenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Menu = ({ isOpen, toggleMenu }: MenuProps) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const { dispatch } = useFilters();

  const handleChangeCountry = (country: { name: string; code: string }) => {
    dispatch({ type: "CHANGE_COUNTRY", payload: country });
    toggleMenu();
  };

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll]);

  return createPortal(
    <>
      <div
        className={cn("fixed inset-0 bg-neutral-800/70 hidden", {
          block: isOpen,
        })}
      />
      <div
        className={cn(
          "w-[70%] max-w-[400px] h-screen fixed top-0 left-0 -translate-x-full flex flex-col bg-white space-y-6 p-6 duration-300 dark:bg-slate-900",
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

        <ul className="overflow-y-scroll menu-scroll dark:menu-scroll-dark">
          {COUNTRIES.map((country) => (
            <li key={country.code}>
              <Button
                variant="ghost"
                className="space-x-4"
                onClick={() => handleChangeCountry(country)}
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
