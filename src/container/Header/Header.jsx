import React from 'react';

import { images } from '../../constants';

import './Header.css';
 
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title ="Chase the new flavour"/>
    <h1 className = "app__header-h1">The Leading Champion of Jjamppong Franchises</h1>
    <p className ="p__cormorant" style={{color: 'White', margin: '2rem 0'}}>Discover the unique and flavorful experience that sets us apart. Join us and taste the difference!</p>
    <button type="button" className="custom__button">Explore More</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt = "header img"/>

    </div>
  </div>
);

export default Header;
