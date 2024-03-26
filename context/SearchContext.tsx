"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import moviesData from "../data/movies.json";

export interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: Movie[];
}

const SearchContext = createContext<SearchContextValue>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchResults: [],
});

export default function SearchProvider(props: PropsWithChildren<{}>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const searchMovies = (term: string) => {
    return moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const searchResult = searchMovies(searchTerm);
      setSearchResults(searchResult);
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchResults }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
