// applicationReducer handles state updates related to application-level data
const applicationReducer = (state, action) => {
  // Switch statement to determine how to update the state based on the action type
  switch (action.type) {
    // Case for selecting a photo
    case "SELECT_PHOTO":
      // Update the state with the selected photo
      return { ...state, selectedPhoto: action.payload };
    // Case for closing the photo details modal
    case "CLOSE_PHOTO_DETAILS_MODAL":
      // Update the state by setting selectedPhoto to null
      return { ...state, selectedPhoto: null };
    // Case for setting photo data
    case "SET_PHOTO_DATA":
      // Update the state with the fetched photo data
      return { ...state, photoData: action.payload };
    // Case for setting topic data
    case "SET_TOPIC_DATA":
      // Update the state with the fetched topic data
      return { ...state, topicData: action.payload };
    // Default case to handle unknown action types (no state update)
    default:
      return state;
  }
};

// Export the applicationReducer for use in other parts of the application
export default applicationReducer;
