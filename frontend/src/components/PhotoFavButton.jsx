import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`photo-list__fav-icon ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className={`photo-list__fav-icon-svg ${isClicked ? 'full' : ''}`}>
      <FavIcon selected={isClicked} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;