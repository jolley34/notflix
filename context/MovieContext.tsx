"use client";

import {
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
  slug: string;
}

interface MovieContextValue {
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
  setAllMovies: () => void;
}

const MovieContext = createContext<MovieContextValue>({
  trendingMovies: [],
  recommendedMovies: [],
  setAllMovies: () => {},
});

export default function MovieProvider(props: PropsWithChildren<{}>) {
  const [movies, setMovies] = useState<Movie[]>(moviesData);

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

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const setAllMovies = () => {
    setTrendingMovies(getTrendingMovies());
    setRecommendedMovies(getRecommendedMovies());
  };

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        recommendedMovies,
        setAllMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
