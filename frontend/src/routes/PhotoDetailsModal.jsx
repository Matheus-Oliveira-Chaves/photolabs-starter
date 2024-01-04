import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {/* Render details of the selected photo here */}
      {photo && (
        <div className="photo-details-modal__content">
          <img
            className="photo-details-modal__image"
            src={photo.urls.full}
            alt={`Photo ${photo.id}`}
          />
          <p className="photo-details-modal__header">{`Photo by ${photo.username}`}</p>
          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt={`Profile ${photo.user.username}`}
            />
            <div className="photo-details-modal__photographer-info">
              <p>{photo.user.username}</p>
              <p className="photo-details-modal__photographer-location">
                {`${photo.location.city}, ${photo.location.country}`}
              </p>
            </div>
          </div>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;