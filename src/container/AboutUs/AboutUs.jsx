import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <div className="about-us-page">
      <div className="about-us-container" id='history'>
        <div className="top-images">
          <img src={images.pinky} alt="Pinky Promise" className="decorative-image pinky-promise" />
          <img src={images.noop} alt="Bowl of Noodles" className="decorative-image noodles-top" />
        </div>

        <div className="about-us-header">
          <h2>{t('aboutPage.title')}</h2> {/* Use translation for title */}
        </div>

        <div className="about-us-promises">
          {/* First row */}
          <div className="promise-item">
            <img src={images.chili} alt={t('aboutPage.promise1.title')} className="promise-image"/>
            <div className="promise-text">
              <h3>{t('aboutPage.promise1.title')}</h3>
              <p>{t('aboutPage.promise1.description')}</p>
            </div>
          </div>

          <div className="promise-item">
            <img src={images.nood} alt={t('aboutPage.promise2.title')} className="promise-image"/>
            <div className="promise-text">
              <h3>{t('aboutPage.promise2.title')}</h3>
              <p>{t('aboutPage.promise2.description')}</p>
            </div>
          </div>

          {/* Second row */}
          <div className="promise-item">
            <img src={images.mussle} alt={t('aboutPage.promise3.title')} className="promise-image"/>
            <div className="promise-text">
              <h3>{t('aboutPage.promise3.title')}</h3>
              <p>{t('aboutPage.promise3.description')}</p>
            </div>
          </div>

          <div className="promise-item">
            <img src={images.recycle} alt={t('aboutPage.promise4.title')} className="promise-image"/>
            <div className="promise-text">
              <h3>{t('aboutPage.promise4.title')}</h3>
              <p>{t('aboutPage.promise4.description')}</p>
            </div>
          </div>
        </div>

        <div className="bottom-images">
          <img src={images.chili2} alt="Chilies" className="decorative-image chilies-bottom" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
