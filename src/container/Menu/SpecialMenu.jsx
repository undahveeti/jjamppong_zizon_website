import React from 'react';
import './SpecialMenu.css';
import { images } from '../../constants';

const SpecialMenu = () => (
  <div className="app__specialMenu app__bg section__padding" id="menu">
    {/* Title */}
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Drinks & Beverages</h1>
    </div>

    {/* Menu content */}
    <div className="app__specialMenu-content">
      {/* Left side with drink options */}
      <div className="app__specialMenu-menu_options">
        <div className="app__specialMenu-menu_wine">
          <div className="app__specialMenu-menu_items">
            <p>Soju (Chamisul, Chum-Churum, Jinro) <span>$7.0</span></p>
            <p>Beer (Terra, Cass) <span>$7.0</span></p>
            <p>Cola 500ml <span>$3.0</span></p>
            <p>Cider 500ml <span>$3.0</span></p>
          </div>
        </div>
      </div>
    </div>

    {/* Full-screen image that is overlaid */}
    <div className="app__specialMenu-bg_img">
      <img src={images.menu} alt="menu_img" />
    </div>
  </div>
);

export default SpecialMenu;
