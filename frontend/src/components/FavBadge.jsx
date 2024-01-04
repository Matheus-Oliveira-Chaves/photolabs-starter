import React from 'react';
import FavIcon from './FavIcon';
import { useFavorites } from './FavoritesContext';
import '../styles/FavBadge.scss';

const FavBadge = () => {
  const { favorites } = useFavorites();
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className={`fav-badge ${isFavPhotoExist ? 'show-alert' : ''}`}>
      <FavIcon displayAlert={isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;