import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import { useFavorites } from './FavoritesContext';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ id, location, urls, username, profile, user, onPhotoClick }) => {
  const handlePhotoClick = () => {
    if (onPhotoClick) {
      onPhotoClick({ id, location, urls, username, user, profile });
    }
  };
  
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(id);

  return (
    <div className="photo-list__item">
      {/* Container for the image and PhotoFavButton */}
      <div className="photo-list__image-container" onClick={handlePhotoClick}>
        <img src={urls.regular} alt={`Photos ${id}`} className="photo-list__image" />
        {/* PhotoFavButton placed inside the container */}
        <PhotoFavButton
          isLiked={isFavorited}
          onLikeToggle={() => toggleFavorite(photos.id)}
        />
      </div>
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`Profile ${user.username}`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="username">{user.name}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};
export default PhotoListItem;