import React from "react";
import { useApplicationData } from "./hooks/useApplicationData";
import TopNavigationBar from "./components/TopNavigationBar";

import PhotoList from "components/PhotoList";
import { FavoritesProvider } from "components/FavoritesContext";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <FavoritesProvider>
      <div className="App">
        <div className="home-route">
          <TopNavigationBar />
          <PhotoList photos={state.photoData} onPhotoClick={onPhotoSelect} />
        </div>
        {state.selectedPhoto && (
          <PhotoDetailsModal
            photo={state.selectedPhoto}
            onClose={onClosePhotoDetailsModal}
            onPhotoClick={onPhotoSelect}
          />
        )}
      </div>
    </FavoritesProvider>
  );
};

export default App;
