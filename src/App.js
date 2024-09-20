import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, FoodMenu, Contact} from './container';
import { Navbar } from './components';
import './App.css';
import './i18n'; // Import the i18n configuration

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Render Header and Gallery on the home page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Gallery />
              </>
            }
          />
          <Route path="/history" element={<AboutUs />} />
          <Route path="/food-menu" element={<FoodMenu />} />
          <Route path="/special-menu" element={<SpecialMenu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/news" element={<Laurels />} />
          <Route path="/find-store" element={<FindUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

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
