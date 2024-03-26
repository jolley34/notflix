"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <IconButton onClick={toggleFavorite} color="inherit">
        {isFavorite ? (
          <FavoriteIcon fontSize="medium" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        )}
      </IconButton>
    </div>
  );
}
