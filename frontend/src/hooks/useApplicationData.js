import React, { createContext, useContext, useReducer } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  const toggleFavorite = (photoId) => {
    dispatchFavorites({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];
    default:
      return state;
  }
};

export const useApplicationData = () => {
  const initialState = {
    selectedPhoto: null,
    // Add other state properties as needed
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const onPhotoSelect = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', payload: photo });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: 'UPDATE_FAV_PHOTO_IDS', payload: photoId });
    // Implement logic to update favorite photos if needed
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS_MODAL' });
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

const applicationReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    case 'CLOSE_PHOTO_DETAILS_MODAL':
      return { ...state, selectedPhoto: null };
    // Handle other action types as needed
    default:
      return state;
  }
};