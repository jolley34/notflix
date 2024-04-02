"use client";

// SearchComponent.tsx
import { Input } from "@/components/ui/input";
import { useSearch } from "@/context/SearchContext";
import React, { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  toggleSearch: () => void;
}

const SearchComponent: React.FC<Props> = ({ isOpen, toggleSearch }) => {
  const { searchTerm, setSearchTerm } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleSearch();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, toggleSearch]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div ref={inputRef}>
      {isOpen ? (
        <div className="flex">
          <Input
            type="search"
            placeholder="Titlar, filmer, serier"
            value={searchTerm}
            onChange={handleSearchInputChange}
            autoFocus
          />
          <button
            className="ml-2 bg-red-600 text-white px-3 py-1 rounded"
            onClick={toggleSearch}
          >
            Avbryt
          </button>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleSearch}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      )}
    </div>
  );
};

export default SearchComponent;
