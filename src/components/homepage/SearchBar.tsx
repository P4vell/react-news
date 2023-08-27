import { FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { searchSchema } from "@/lib/schemas/search";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = searchSchema.parse(inputValue);
    navigate(`/search/${searchQuery}`);
  };

  return (
    <form
      className="max-w-[700px] flex items-center gap-2 bg-slate-100 border border-slate-300 rounded-full mx-auto relative dark:border-slate-700 dark:bg-slate-800"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for news..."
        className="w-full h-12 bg-transparent text-sm font-medium text-slate-900 pl-4 rounded-full placeholder:text-sm placeholder:text-zinc-400 placeholder:font-medium dark:placeholder:text-slate-200 dark:text-slate-200"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 p-2 rounded-full"
        aria-label="Search"
      >
        <AiOutlineSearch size={20} />
      </Button>
    </form>
  );
};
