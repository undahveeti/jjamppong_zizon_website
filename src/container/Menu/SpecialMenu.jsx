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
          <p className="app__specialMenu-menu_headings"></p>
          <div className="app__specialMenu-menu_items">
            <p>Chardonnay - $12</p>
            <p>Cabernet Sauvignon - $14</p>
            <p>IPA - $8</p>
            <p>Lager - $7</p>
            <p>Merlot - $13</p>
            <p>Pinot Grigio - $11</p>
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
