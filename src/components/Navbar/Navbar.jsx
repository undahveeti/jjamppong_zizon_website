import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook to switch languages
  const [toggleMenu, setToggleMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Function to switch languages
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.zizon} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__original"><a href="#home">{t('navbar.home')}</a></li>
        <li className="p__original"><a href="#about">{t('navbar.about')}</a></li>
        <li className="p__original"><a href="#menu">{t('navbar.menu')}</a></li>
        <li className="p__original"><a href="#news">{t('navbar.news')}</a></li>
        <li className="p__original"><a href="#gallery">{t('navbar.gallery')}</a></li>
        <li className="p__original"><a href="#contact">{t('navbar.contact')}</a></li>
      </ul>

      {/* Language switch buttons */}
      <div className="app__navbar-language">
        <button onClick={() => changeLanguage('en')} className="language-button">EN</button>
        <button onClick={() => changeLanguage('ko')} className="language-button">KO</button>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="white" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurant fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__spicy"><a href="#home">{t('navbar.home')}</a></li>
              <li className="p__spicy"><a href="#about">{t('navbar.about')}</a></li>
              <li className="p__spicy"><a href="#menu">{t('navbar.menu')}</a></li>
              <li className="p__spicy"><a href="#news">{t('navbar.news')}</a></li>
              <li className="p__spicy"><a href="#gallery">{t('navbar.gallery')}</a></li>
              <li className="p__spicy"><a href="#contact">{t('navbar.contact')}</a></li>
            </ul>

            {/* Mobile language switch buttons */}
            <div className="app__navbar-language-smallscreen">
              <button onClick={() => changeLanguage('en')} className="language-button">EN</button>
              <button onClick={() => changeLanguage('ko')} className="language-button">KO</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
