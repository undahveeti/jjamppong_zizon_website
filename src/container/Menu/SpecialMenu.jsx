import React from 'react';
import './SpecialMenu.css';
import { images } from '../../constants';

const SpecialMenu = () => (
  <div className="app__specialMenu app__bg flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Drinks & Beverages</h1>
    </div>
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

      {/* Right side with an image */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu_img" />
      </div>
    </div>
  </div>
);

export default SpecialMenu;
