"use client";

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

export default function MovieProvider(props: PropsWithChildren<{}>) {
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>(() => {
    const savedFavorites = localStorage.getItem("favoriteMovies");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toggleFavorite = (slug: string) => {
    setFavoriteMovies((prevFavorites) => {
      const isFavorite = prevFavorites.some((movie) => movie.slug === slug);
      if (isFavorite) {
        return prevFavorites.filter((movie) => movie.slug !== slug);
      } else {
        const movieToAdd = movies.find((movie) => movie.slug === slug);
        if (movieToAdd) {
          return [...prevFavorites, movieToAdd];
        }
      }
      return prevFavorites;
    });
  };

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

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
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
