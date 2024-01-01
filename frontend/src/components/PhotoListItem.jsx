import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import { useFavorites } from './FavoritesContext';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorited = favorites.includes(id);

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" />
      <PhotoFavButton
        isLiked={isFavorited}
        onLikeToggle={() => toggleFavorite(id)}
      />
      <div className="photo-list__user-details">
        <img src={profile} alt={`Profile ${username}`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="username">{username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;