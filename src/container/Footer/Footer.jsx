import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations


import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook


  return (
    <div className="app__footer app__bg " id="login">
      <FooterOverlay />
     
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">{t('footer.contact')}</h1> {/* Translated "Contact Us" */}
          <p className="p__spicy" style={{ color: 'white' }}>3446 Wilshire Blvd, Los Angeles, CA 90010</p>
          <p className="p__spicy" style={{ color: 'white' }}>+1 213-263-9527</p>
        </div>


        <div className="app__footer-links_logo">
          <img src={images.zizon} alt="footer_logo" />
          <p className="p__spicy" style={{ color: 'white' }}>{t('footer.quote')}</p> {/* Translated Quote */}
          <div className="app__footer-links_icons">
            <a href="https://www.instagram.com/jjamppong_zizon.la/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5em' }}>
              <FiInstagram />
            </a>
          </div>
        </div>


        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">{t('footer.workingHours')}</h1> {/* Translated "Working Hours" */}
          <p className="p__spicy" style={{ color: 'white' }}>{t('footer.days')}</p> {/* Translated Days */}
          <p className="p__spicy" style={{ color: 'white' }}>{t('footer.hours')}</p> {/* Translated Hours */}
        </div>
      </div>


      <div className="footer__copyright">
        <p className="p__spicy" style={{ color: 'white' }}>{t('footer.copyright')}</p> {/* Translated Copyright */}
      </div>
    </div>
  );
};


export default Footer;
