import css from "./SearchBar.module.css";
import { FC, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SlMagnifier } from "react-icons/sl";

interface SearchBarProps {
  onSearch: (newQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSearch(query);
    setQuery("");
  };
  return (
    <header className={css.box}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <SlMagnifier className={css.search} />
        </button>
        <Toaster />
      </form>
    </header>
  );
};
export default SearchBar;
