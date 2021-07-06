import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import DarkMode from '../DarkMode/DarkMode';

function App() {
  return (
  <div className="app">
    <Header />
    <Body />
    <Footer />
    <DarkMode />
  </div>
  );
}

export default App;
