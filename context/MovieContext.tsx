"use client";

import {
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
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
}

const MovieContext = createContext<ContextValue>({} as ContextValue);

export default function MoviesProvider(props: PropsWithChildren<{}>) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const getTrendingMovies = () => {
    return movies.filter((movie) => movie.isTrending);
  };

  const getRecommendedMovies = () => {
    return movies.filter((movie) => !movie.isTrending);
  };

  const [trendingMovies, setTrendingMovies] =
    useState<Movie[]>(getTrendingMovies);
  const [recommendedMovies, setRecommendedMovies] =
    useState<Movie[]>(getRecommendedMovies);

  useEffect(() => {
    setTrendingMovies(getTrendingMovies);
    setRecommendedMovies(getRecommendedMovies);
  }, [movies]);

  return (
    <MovieContext.Provider value={{ trendingMovies, recommendedMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
