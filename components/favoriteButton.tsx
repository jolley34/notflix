"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useMovies } from "../context/MovieContext";

export default function FavoriteButton({ slug }: { slug: string }) {
  const { favoriteMovies, toggleFavorite } = useMovies();
  const isFavorite = favoriteMovies.some((movie) => movie.slug === slug);

  return (
    <div>
      <IconButton onClick={() => toggleFavorite(slug)} color="inherit">
        {isFavorite ? (
          <FavoriteIcon fontSize="medium" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        )}
      </IconButton>
    </div>
  );
}
