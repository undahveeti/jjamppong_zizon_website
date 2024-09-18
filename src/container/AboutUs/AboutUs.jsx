import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations

import { images } from '../../constants';
import './AboutUs.css';
import { SubHeading } from '../../components';


const AboutUs = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="app__about app__bg app__wrapper section__padding" id="history">
      <div className="app__wrapper_img">
        <img src={images.chilis} alt="chilis img" />
      </div>
      <div className="app__wrapper_info">
        <h1 className="app__about-h1">{t('about.title')}</h1>
        <p className="p__spicy" style={{ margin: '2rem 0' }}>
          {t('about.content')}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
