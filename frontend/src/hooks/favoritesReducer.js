// favoritesReducer handles state updates related to favorite photos
const favoritesReducer = (state, action) => {
  // Switch statement to determine how to update the state based on the action type
  switch (action.type) {
    // Case for toggling the favorite status of a photo
    case "TOGGLE_FAVORITE":
      // If the photo ID is already in the favorites list, remove it; otherwise, add it
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];
    // Default case to handle unknown action types (no state update)
    default:
      return state;
  }
};

// Export the favoritesReducer for use in other parts of the application
export default favoritesReducer;
