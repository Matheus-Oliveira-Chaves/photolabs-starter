import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import photos from 'mocks/photos';
import PhotoList from 'components/PhotoList';
import { FavoritesProvider } from 'components/FavoritesContext';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <FavoritesProvider>

  
    <div className="home-route">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <TopNavigationBar />
    <PhotoList photos={photos}/>
    </div>
  </FavoritesProvider>

  );
};

export default HomeRoute;
