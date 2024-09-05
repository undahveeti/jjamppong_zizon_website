import React from 'react';

import './Footer.css';
import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
const Footer = () => (
  <div className = "app__footer section__padding">
    <Newsletter/>
    <FooterOverlay />
    
  </div>
);

export default Footer;
