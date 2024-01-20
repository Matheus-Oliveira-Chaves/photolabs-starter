import React from "react";
import { useFavorites } from "./FavoritesContext";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(photoId);
  const handleClick = () => {
    toggleFavorite(photoId);
  };

  return (
    <div
      className={`photo-list__fav-icon ${isFavorited ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <div className={`photo-list__fav-icon-svg ${isFavorited ? "full" : ""}`}>
        <FavIcon selected={isFavorited} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
