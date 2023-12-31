import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";



const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem {...photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
