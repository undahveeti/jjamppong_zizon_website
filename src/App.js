import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, FoodMenu } from './container';
import { Navbar } from './components';
import './App.css';
import './i18n'; // Import the i18n configuration

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <FoodMenu/>
    <SpecialMenu />
    {/*<Chef />*/}
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> 
  </div>
);

export default App;
