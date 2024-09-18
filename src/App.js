import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, FoodMenu } from './container';
import { Navbar } from './components';
import './App.css';
import './i18n'; // Import the i18n configuration

const MainContent = () => {
  // Get the current location (route)
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/history" element={<AboutUs />} />
        <Route path="/food-menu" element={<FoodMenu />} />
        <Route path="/special-menu" element={<SpecialMenu />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/news" element={<Laurels />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/find-us" element={<FindUs />} />
      </Routes>
      {/* Conditionally render Footer only on the home page */}
      {location.pathname === '/' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;
