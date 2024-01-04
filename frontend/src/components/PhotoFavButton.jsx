import React from 'react';
import { useFavorites } from './FavoritesContext'; // Import the hook
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId }) { // Assuming you're passing a photoId prop
  const { favorites, toggleFavorite } = useFavorites(); // Use the hook to access context values.
  const isFavorited = favorites.includes(photoId); // Determine if the photo is favorited based on the global favorites state.

  const handleClick = () => {
    toggleFavorite(photoId); // Call the context's toggleFavorite instead of local state change.
  };

  return (
    <div className={`photo-list__fav-icon ${isFavorited ? 'clicked' : ''}`} onClick={handleClick}>
      <div className={`photo-list__fav-icon-svg ${isFavorited ? 'full' : ''}`}>
        <FavIcon selected={isFavorited} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;