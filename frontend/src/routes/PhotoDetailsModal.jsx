import React from "react";
import PhotoListItem from "components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import { useFavorites } from "components/FavoritesContext";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoList.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, onClose, onPhotoClick, photoData }) => {
  const { favorites } = useFavorites();
  const isFavorited = favorites.includes(photo.id);



  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {photo && (
        <>
          <div className="photo-details-modal__image-container">
            <img
              className="photo-details-modal__image"
              src={photo.urls.full}
              alt={`Photo ${photo.id}`}
            />
            <div className="photo-details-modal__favorite-button">
              <PhotoFavButton isLiked={isFavorited} photoId={photo.id} />
            </div>
          </div>

          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt={`Profile ${photo.user.username}`}
            />
            <div className="photo-details-modal__photographer-info">
              <p className="username">{photo.user.name}</p>
              <p className="photo-details-modal__photographer-location">
                {`${photo.location.city}, ${photo.location.country}`}
              </p>
            </div>
          </div>
          <div className="photo-details-modal__header">
            <h2>Similar Photos</h2>
          </div>
          <div className="photo-details-modal__images">
            <ul className="photo-list">
              {photo.similar_photos.map((photo) => {
                const findPhoto = photoData.find(p => photo.id === p.id);
                return (

                <li key={photo.id}>
                  <PhotoListItem
                    onPhotoClick={() => onPhotoClick(findPhoto)}
                    {...findPhoto}

              
                  />
                </li>
              )})}
            </ul>
            
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
