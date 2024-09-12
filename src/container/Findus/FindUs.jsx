import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import { images } from '../../constants';

import { SubHeading } from '../../components';

const FindUs = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="app__bg app__wrapper section__padding" id="contact" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="app__wrapper_img">
        <img src={images.aboutmore} alt="findus" />
      </div>
      <div className="app__wrapper_info" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SubHeading title={t('findus.contact')} /> {/* Translated "Contact" */}
        <h1 className="headtext__cormorant" style={{ color: '#8B0000', marginBottom: '3rem' }}>{t('findus.title')}</h1> {/* Translated "Find Us" */}
        <div className="app__wrapper-content" style={{ maxWidth: '600px' }}>
          <p className="p__opensans" style={{ color: '#8B0000' }}>{t('findus.address')}</p> {/* Translated Address */}
          <p className="p__cormorant" style={{ color: '#8B0000', margin: '2rem 0' }}>{t('findus.hoursTitle')}</p> {/* Translated "Opening Hours" */}
          <p className="p__spicy">{t('findus.hours')}</p> {/* Translated Opening Hours */}
        </div>
        <a href="https://www.yelp.com/map/jjamppong-zizon-los-angeles-6" target="_blank" rel="noopener noreferrer">
          <button className="custom__button" style={{ marginTop: '2rem' }}>{t('findus.button')}</button> {/* Translated "Visit Us" */}
        </a>
      </div>
      <div className="app__wrapper_img">
        <img src={images.about} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;

