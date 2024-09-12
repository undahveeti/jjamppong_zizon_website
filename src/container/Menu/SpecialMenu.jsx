import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './SpecialMenu.css';
import { images } from '../../constants';

const SpecialMenu = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="app__specialMenu app__bg section__padding" id="menu">
      {/* Title */}
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">{t('specialmenu.title')}</h1> {/* Translated title */}
      </div>

      {/* Menu content */}
      <div className="app__specialMenu-content">
        {/* Left side with drink options */}
        <div className="app__specialMenu-menu_options">
          <div className="app__specialMenu-menu_wine">
            <div className="app__specialMenu-menu_items">
              <p>{t('specialmenu.drink1')} <span>$7.0</span></p> {/* Translated drink */}
              <p>{t('specialmenu.drink2')} <span>$7.0</span></p>
              <p>{t('specialmenu.drink3')} <span>$3.0</span></p>
              <p>{t('specialmenu.drink4')} <span>$3.0</span></p>
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
};

export default SpecialMenu;
