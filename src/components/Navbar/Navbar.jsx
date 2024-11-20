import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from 'react-icons/md';

import { useTranslation } from 'react-i18next';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [smallDropdown, setSmallDropdown] = useState(false);
  const [franchiseDropdown, setFranchiseDropdown] = useState(false);
  const [smallFranchiseDropdown, setSmallFranchiseDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [smallOrderDropdown, setSmallOrderDropdown] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language using i18next
    setToggleMenu(false); // Close mobile menu
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
    setSmallDropdown(false);
    setSmallFranchiseDropdown(false);
    setSmallOrderDropdown(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.zizon} alt="app logo" />
        </Link>
      </div>

      <ul className="app__navbar-links p__original">
        {/* About Us Dropdown */}
        <li
          className="app__navbar-item"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {t('navbar.about')}
          {dropdown && (
            <ul className="app__navbar-dropdown">
              <li className="p__original">
                <Link to="/history">{t('navbar.history')}</Link>
              </li>
              <li className="p__original">
                <Link to="/news">{t('navbar.news')}</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Menu */}
        <li className="app__navbar-item">
          <Link to="/food-menu">{t('navbar.menu')}</Link>
        </li>

        {/* Franchise Dropdown */}
        <li
          className="app__navbar-item"
          onMouseEnter={() => setFranchiseDropdown(true)}
          onMouseLeave={() => setFranchiseDropdown(false)}
        >
          {t('navbar.franchise')}
          {franchiseDropdown && (
            <ul className="app__navbar-dropdown">
              <li className="p__original">
                <Link to="/contact">{t('navbar.contact')}</Link>
              </li>
              <li className="p__original">
                <Link to="/find-store">{t('navbar.locations')}</Link>
              </li>
              <li className="p__original">
                <Link to="/interior">{t('navbar.intdesign')}</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Order Now Dropdown */}
        <li
          className="app__navbar-item"
          onMouseEnter={() => setOrderDropdown(true)}
          onMouseLeave={() => setOrderDropdown(false)}
        >
          <a href="#order" className="order-button">{t('navbar.orderOnline')}</a>
          {orderDropdown && (
            <ul className="app__navbar-dropdown">
              <li className="p__original">
                <a href="https://www.doordash.com/store/jjamppong-zizon-los-angeles-29863494" target="_blank" rel="noopener noreferrer">DoorDash</a>
              </li>
              <li className="p__original">
                <a href="https://postmates.com/store/jjamppong-zizon-los-angeles/rbiMouFyWp-AmWxLOhSfUQ" target="_blank" rel="noopener noreferrer">Postmates</a>
              </li>
              <li className="p__original">
                <a href="https://www.ubereats.com/store/jjamppong-zizon-los-angeles/rbiMouFyWp-AmWxLOhSfUQ" target="_blank" rel="noopener noreferrer">UberEats</a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Language switch buttons */}
      <div className="app__navbar-language">
        <button onClick={() => changeLanguage('en')} className="language-button">EN</button>
        <button onClick={() => changeLanguage('ko')} className="language-button">KO</button>
      </div>

      {/* Mobile Menu */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="white" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurant fontSize={27} className="overlay_close" onClick={handleLinkClick} />
            <ul className="app__navbar-smallscreen_links">
              {/* Small Screen About Dropdown */}
              <li className="p__spicy" onClick={() => setSmallDropdown(!smallDropdown)}>
                {t('navbar.about')}
                {smallDropdown && (
                  <ul className="app__navbar-smallscreen-dropdown">
                    <li className="p__spicy">
                      <Link to="/history" onClick={handleLinkClick}>{t('navbar.history')}</Link>
                    </li>
                    <li className="p__spicy">
                      <Link to="/news" onClick={handleLinkClick}>{t('navbar.news')}</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Small Screen Menu */}
              <li className="p__spicy">
                <Link to="/food-menu" onClick={handleLinkClick}>{t('navbar.menu')}</Link>
              </li>

              {/* Small Screen Franchise Dropdown */}
              <li className="p__spicy" onClick={() => setSmallFranchiseDropdown(!smallFranchiseDropdown)}>
                {t('navbar.franchise')}
                {smallFranchiseDropdown && (
                  <ul className="app__navbar-smallscreen-dropdown">
                    <li className="p__spicy">
                      <Link to="/contact" onClick={handleLinkClick}>{t('navbar.contact')}</Link>
                    </li>
                    <li className="p__spicy">
                      <Link to="/find-store" onClick={handleLinkClick}>{t('navbar.locations')}</Link>
                    </li>
                    <li className="p__spicy">
                      <Link to="/interior" onClick={handleLinkClick}>{t('navbar.intdesign')}</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Small Screen Order Now Dropdown */}
              <li className="p__spicy" onClick={() => setSmallOrderDropdown(!smallOrderDropdown)}>
                {t('navbar.orderOnline')}
                {smallOrderDropdown && (
                  <ul className="app__navbar-smallscreen-dropdown">
                    <li className="p__spicy">
                      <a href="https://www.doordash.com/store/jjamppong-zizon-los-angeles-29863494" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>DoorDash</a>
                    </li>
                    <li className="p__spicy">
                      <a href="https://postmates.com/store/jjamppong-zizon-los-angeles/rbiMouFyWp-AmWxLOhSfUQ" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Postmates</a>
                    </li>
                    <li className="p__spicy">
                      <a href="https://www.ubereats.com/store/jjamppong-zizon-los-angeles/rbiMouFyWp-AmWxLOhSfUQ" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>UberEats</a>
                    </li>
                  </ul>
                )}
              </li>
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
