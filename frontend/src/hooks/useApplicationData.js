import React, { createContext, useContext, useReducer, useEffect } from "react";

const PORT = 8001;

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  const toggleFavorite = (photoId) => {
    dispatchFavorites({ type: "TOGGLE_FAVORITE", payload: photoId });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];
    default:
      return state;
  }
};

const ACTIONS = {
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

export const useApplicationData = () => {
  const initialState = {
    selectedPhoto: null,
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const onPhotoSelect = (photo) => {
    dispatch({ type: "SELECT_PHOTO", payload: photo });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: "UPDATE_FAV_PHOTO_IDS", payload: photoId });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_PHOTO_DETAILS_MODAL" });
  };

  const getPhotosByTopicAction = async (topicId) => {
    try {
      const response = await fetch(
        `http://localhost:${PORT}/api/topics/photos/${topicId}`
      );
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (error) {
      console.error("Error fetching photos by topic:", error.message);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:${PORT}/api/photos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error.message);
      });

    fetch(`http://localhost:${PORT}/api/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error.message);
      });
  }, []);

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getPhotosByTopicAction,
  };
};

const applicationReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PHOTO":
      return { ...state, selectedPhoto: action.payload };
    case "CLOSE_PHOTO_DETAILS_MODAL":
      return { ...state, selectedPhoto: null };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};
