import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem onPhotoClick={() => onPhotoClick(photo)} {...photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
