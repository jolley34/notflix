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

export interface ContextValue {
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
  searchResults: Movie[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setAllMovies: () => void;
}

const MovieContext = createContext<ContextValue>({
  trendingMovies: [],
  recommendedMovies: [],
  searchResults: [],
  setSearchTerm: () => {},
  setAllMovies: () => {},
});

export default function MoviesProvider(props: PropsWithChildren<{}>) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const searchMovies = (term: string) => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  const getTrendingMovies = () => {
    return movies.filter((movie) => movie.isTrending);
  };

  const getRecommendedMovies = () => {
    return movies.filter((movie) => !movie.isTrending);
  };

  const [trendingMovies, setTrendingMovies] = useState<Movie[]>(
    getTrendingMovies()
  );
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>(
    getRecommendedMovies()
  );
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setTrendingMovies(getTrendingMovies());
      setRecommendedMovies(getRecommendedMovies());
      setSearchResults([]);
    } else {
      const searchResult = searchMovies(searchTerm);
      setSearchResults(searchResult);
      setTrendingMovies(searchResult.filter((movie) => movie.isTrending));
      setRecommendedMovies(searchResult.filter((movie) => !movie.isTrending));
    }
  }, [searchTerm, movies]);

  const setAllMovies = () => {
    setTrendingMovies(getTrendingMovies());
    setRecommendedMovies(getRecommendedMovies());
    setSearchTerm("");
  };

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        recommendedMovies,
        searchResults,
        setSearchTerm,
        setAllMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
