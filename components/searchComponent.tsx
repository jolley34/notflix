"use client";

import { Input } from "@/components/ui/input";
import { useMovies } from "@/context/MovieContext";
import { useEffect, useRef, useState } from "react";

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);
  const { setSearchTerm: setMoviesSearchTerm } = useMovies();

  const toggleSearchInput = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setMoviesSearchTerm(searchTerm.trim());
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div ref={inputRef}>
      {isOpen ? (
        <div className="flex">
          <Input
            type="search"
            placeholder="Titlar, filmer, serier"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button
            className="ml-2 bg-red-600 text-white px-3 py-1 rounded"
            onClick={handleSearch}
          >
            Sök
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
          onClick={toggleSearchInput}
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
}
