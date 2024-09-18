import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import images from '../../constants/images';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook to switch languages
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false); // dropdown for desktop "About"
  const [smallDropdown, setSmallDropdown] = useState(false); // dropdown for mobile "About"

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Function to switch languages
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.zizon} alt="app logo" />
      </div>

      <ul className="app__navbar-links p__original">
        {/* Desktop About Dropdown */}
        <li className="app__navbar-item"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
          About
          {dropdown && (
            <ul className="app__navbar-dropdown">
              <li className="p__original"><Link to="/">{t('navbar.home')}</Link></li>
              <li className="p__original"><Link to="/history">{t('navbar.about')}</Link></li>
              <li className="p__original"><Link to="/food-menu">{t('navbar.menu')}</Link></li>
              <li className="p__original"><Link to="/news">{t('navbar.news')}</Link></li>
              <li className="p__original"><Link to="/gallery">{t('navbar.gallery')}</Link></li>
            </ul>
          )}
        </li>
        <li className="p__original"><a href="#locations">Locations</a></li>
        <li className="p__original"><a href="#contact">{t('navbar.contact')}</a></li>
        {/* Order Now Button */}
        <li className="p__original"><a href="#order" className="order-button">Order Now</a></li>
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

              {/* Small Screen About Dropdown */}
              <li className="p__spicy" onClick={() => setSmallDropdown(!smallDropdown)}>
                About
                {smallDropdown && (
                  <ul className="app__navbar-smallscreen-dropdown">
                    <li className="p__spicy"><Link to="/">{t('navbar.home')}</Link></li>
                    <li className="p__spicy"><Link to="/history">{t('navbar.about')}</Link></li>
                    <li className="p__spicy"><Link to="/food-menu">{t('navbar.menu')}</Link></li>
                    <li className="p__spicy"><Link to="/news">{t('navbar.news')}</Link></li>
                    <li className="p__spicy"><Link to="/gallery">{t('navbar.gallery')}</Link></li>
                  </ul>
                )}
              </li>

              <li className="p__spicy"><a href="#locations">Locations</a></li>
              <li className="p__spicy"><a href="#contact">{t('navbar.contact')}</a></li>
              <li className="p__spicy"><a href="#order" className="order-button">Order Now</a></li>
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