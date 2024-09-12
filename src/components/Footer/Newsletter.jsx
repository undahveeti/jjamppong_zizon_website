import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="app__newsletter app__bg">
      <div className="app__newsletter-heading">
        <SubHeading title={t('newsletter.subheading')} /> {/* Translated "Newsletter" */}
        <h1 className="headtext__cormorant">{t('newsletter.title')}</h1> {/* Translated "Subscribe To Our Newsletter" */}
        <p className="p__spicy">{t('newsletter.description')}</p> {/* Translated "And never miss latest updates!" */}
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder={t('newsletter.placeholder')} /> {/* Translated email placeholder */}
        <button className="custom__button">{t('newsletter.button')}</button> {/* Translated "Subscribe" */}
      </div>
    </div>
  );
};

export default Newsletter;
