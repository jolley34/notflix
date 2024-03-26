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
  slug: string;
  video: string;
}

interface MovieContextValue {
  movies: Movie[];
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
  favoriteMovies: Movie[];
  toggleFavorite: (slug: string) => void;
}

const MovieContext = createContext<MovieContextValue>({
  movies: [],
  trendingMovies: [],
  recommendedMovies: [],
  favoriteMovies: [],
  toggleFavorite: () => {},
});

export default function MovieProvider({ children }: PropsWithChildren<{}>) {
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteMovies");
    if (savedFavorites) {
      setFavoriteMovies(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const toggleFavorite = (slug: string) => {
    const isFavorite = favoriteMovies.some((movie) => movie.slug === slug);
    if (isFavorite) {
      setFavoriteMovies(favoriteMovies.filter((movie) => movie.slug !== slug));
    } else {
      const movieToAdd = movies.find((movie) => movie.slug === slug);
      if (movieToAdd) {
        setFavoriteMovies([...favoriteMovies, movieToAdd]);
      }
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        trendingMovies: movies.filter((movie) => movie.isTrending),
        recommendedMovies: movies.filter((movie) => !movie.isTrending),
        favoriteMovies,
        toggleFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
