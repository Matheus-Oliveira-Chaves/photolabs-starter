// Import necessary React hooks and components
import React, { createContext, useContext, useReducer, useEffect } from "react";
// Import custom reducers
import favoritesReducer from "./favoritesReducer";
import applicationReducer from "./applicationReducer";

// Define the port for API requests
const PORT = 8001;

// Create a context for managing favorite photos
const FavoritesContext = createContext();

// Custom hook to access the favorites context
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// FavoritesProvider component that wraps its children with the favorites context
export const FavoritesProvider = ({ children }) => {
  // Use the favoritesReducer to manage the list of favorite photo IDs
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  // Function to toggle the favorite status of a photo
  const toggleFavorite = (photoId) => {
    dispatchFavorites({ type: "TOGGLE_FAVORITE", payload: photoId });
  };

  // Provide the favorites state and toggleFavorite function to the context
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Define action types for the applicationReducer
const ACTIONS = {
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

// Custom hook to manage application-level state using the applicationReducer
export const useApplicationData = () => {
  // Initial state for the application
  const initialState = {
    selectedPhoto: null,
    photoData: [],
    topicData: [],
  };

  // Use the applicationReducer to manage the application state
  const [state, dispatch] = useReducer(applicationReducer, initialState);

  // Function to handle selecting a photo
  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  // Function to update favorite photo IDs
  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: "UPDATE_FAV_PHOTO_IDS", payload: photoId });
  };

  // Function to close the photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  // Function to fetch photos by topic from the API
  const getPhotosByTopicAction = async (topicId) => {
    try {
      // Use the fetch API to make a GET request to the specified endpoint
      const response = await fetch(`/api/topics/photos/${topicId}`);
      // Parse the JSON response
      const data = await response.json();
      // Dispatch an action to update the state with the fetched photo data
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (error) {
      // Handle errors if the fetch operation for photos by topic fails
      console.error("Error fetching photos by topic:", error.message);
    }
  };

  // Effect to fetch initial data when the component mounts
  useEffect(() => {
    // Fetch photos from the API endpoint
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        // Dispatch an action to update the state with the fetched photo data
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        // Handle errors if the fetch operation for photos fails
        console.error("Error fetching photos:", error.message);
      });

    // Fetch topics from the API endpoint
    fetch(`/api/topics`)
      .then((response) => response.json())
      .then((data) => {
        // Dispatch an action to update the state with the fetched topic data
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        // Handle errors if the fetch operation for topics fails
        console.error("Error fetching topics:", error.message);
      });
  }, []);

  // Return the state and functions to interact with the state
  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getPhotosByTopicAction,
  };
};
