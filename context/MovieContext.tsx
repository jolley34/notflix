"use client";
"use client";
// movieContext.tsx
import React, {
  PropsWithChildren,
  createContext,
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

interface ContextValue {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const MovieContext = createContext<ContextValue>({} as ContextValue);

export default function MoviesProvider(props: PropsWithChildren<{}>) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
