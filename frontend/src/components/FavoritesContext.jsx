// Import necessary React hooks and components
import React, { createContext, useContext, useState } from "react";

// Create a context for managing favorites
const FavoritesContext = createContext();

// Custom hook to access the favorites context
export const useFavorites = () => {
  // Returns the current context's value
  return useContext(FavoritesContext);
};

// FavoritesProvider component that wraps its children with the favorites context
export const FavoritesProvider = ({ children }) => {
  // State to manage the list of favorite photo IDs
  const [favorites, setFavorites] = useState([]);

  // Function to toggle the favorite status of a photo
  const toggleFavorite = (photoId) => {
    // Update the state based on the previous state
    setFavorites((prevFavorites) =>
      // If the photo ID is already in the favorites list, remove it; otherwise, add it
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  // Provide the favorites state and toggleFavorite function to the context
  return (
    // Use the context provider to make the values available to its children
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
