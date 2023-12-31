import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';

import PhotoList from 'components/PhotoList';
import './App.scss';


const App = () => (
  <div className="App">
    <div className="home-route">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <TopNavigationBar />
    <PhotoList/>
    </div>
  </div>
)

export default App;
