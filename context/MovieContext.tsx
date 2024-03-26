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
}

interface ContextValue {
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setAllMovies: () => void; // Ny funktion för att återställa alla filmer
}

const MovieContext = createContext<ContextValue>({
  trendingMovies: [],
  recommendedMovies: [],
  setSearchTerm: () => {},
  setAllMovies: () => {}, // Initieras som en tom funktion
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

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setTrendingMovies(getTrendingMovies());
      setRecommendedMovies(getRecommendedMovies());
    } else {
      const searchResult = searchMovies(searchTerm);
      setTrendingMovies(searchResult.filter((movie) => movie.isTrending));
      setRecommendedMovies(searchResult.filter((movie) => !movie.isTrending));
    }
  }, [searchTerm, movies]);

  // Funktion för att återställa alla filmer till ursprungstillståndet
  const setAllMovies = () => {
    setTrendingMovies(getTrendingMovies());
    setRecommendedMovies(getRecommendedMovies());
    setSearchTerm(""); // Nollställ söktermen
  };

  return (
    <MovieContext.Provider
      value={{ trendingMovies, recommendedMovies, setSearchTerm, setAllMovies }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
