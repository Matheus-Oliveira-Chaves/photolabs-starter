import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import photos from 'mocks/photos';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoList.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose, onPhotoClick }) => {

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      {/* Render details of the selected photo here */}
      {photo && (
        <div >
          <img
            className="photo-details-modal__image"
            src={photo.urls.regular}
            alt={`Photo ${photo.id}`}
          />
          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt={`Profile ${photo.user.username}`}
            />
            <div className="photo-details-modal__photographer-info">
              <p>{photo.user.name}</p>
              <p className="photo-details-modal__photographer-location">
                {`${photo.location.city}, ${photo.location.country}`}
              </p>
            </div>
            </div>
            <div className="photo-details-modal__header"><p>Similar Photos</p></div>
            <div className="photo-details-modal__images">
             <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => onPhotoClick(photo)}>
         
          <PhotoListItem {...photo} />
        </li>
       ))}
    </ul> 
            
          </div>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;