import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useApplicationData = () => {
  const [state, setState] = useState({
    // Define your initial state properties here
    selectedPhoto: null,
    // Add other state properties as needed
  });

  const onPhotoSelect = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
    }));
  };

  const updateToFavPhotoIds = (photoId) => {
    // Implement logic to update favorite photos if needed
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
    }));
  };

  // Add other actions as needed

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    // Add other actions to the returned object
  };
};
