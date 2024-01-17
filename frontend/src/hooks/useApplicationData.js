

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const PORT = 8001;

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
    photoData: [], // Add this line
    topicData: [], // Add this line
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

  // Fetch photos and topics from the API server
  useEffect(() => {
    fetch(`http://localhost:${PORT}/api/photos`)
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error fetching photos:', error.message);
      });

    fetch(`http://localhost:${PORT}/api/topics`)
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error.message);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

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
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    // Handle other action types as needed
    default:
      return state;
  }
};
