import React, {useState} from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import photos from 'mocks/photos';
import PhotoList from 'components/PhotoList';
import { FavoritesProvider } from 'components/FavoritesContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    console.log('openModal called with photo:', photo);
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <FavoritesProvider>
      <div className="App">
        <div className="home-route">
          <TopNavigationBar />
          <PhotoList photos={photos} onPhotoClick={openModal} />
        </div>
        {isModalOpen && (
          <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} />
        )}
      </div>
    </FavoritesProvider>
  );
};

export default App;
