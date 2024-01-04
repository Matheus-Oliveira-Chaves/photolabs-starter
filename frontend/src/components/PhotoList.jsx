import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onPhotoClick }) => {
  // Ensure `onPhotoClick` is part of the function parameters.

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => onPhotoClick(photo)}>
          {/* Pass the entire photo object to the handler when clicking the list item.
              Attach the `handlePhotoClick` to the `onClick` event of each <li>. */}
          <PhotoListItem {...photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;