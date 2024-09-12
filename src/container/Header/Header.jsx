import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="app__header app__bg app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={t('header.subheading')} />
        <h1 className="app__header-h1">{t('header.title')}</h1>
        <p className="p__spicy" style={{ margin: '2rem 0' }}>{t('header.content')}</p>
        {/* security reasons when opening potential vulnerabilities */}
        <a href="https://www.instagram.com/jjamppong_zizon.la/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="custom__button">{t('header.button')}</button>
        </a>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;

