"use client";
import { useMovies } from "../../context/MovieContext";

export default function MyList() {
  const { favoriteMovies } = useMovies();

  return (
    <div>
      {favoriteMovies.map((movie) => (
        <div key={movie.slug}>{movie.title}</div>
      ))}
    </div>
  );
}
