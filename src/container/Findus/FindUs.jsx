import React from 'react';
import { images } from '../../constants';

import { SubHeading } from '../../components';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact" style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="app__wrapper_img">
      <img src={images.aboutmore} alt="findus" />
    </div>
    <div className="app__wrapper_info" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ color: '#8B0000', marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content" style={{ maxWidth: '600px' }}>
        <p className="p__opensans" style={{ color: '#8B0000' }}>3446 Wilshire Blvd, Los Angeles, CA 90010</p>
        <p className="p__cormorant" style={{ color: '#8B0000', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__spicy">Mon - Sun: 10:30am - 9:00pm</p>
      </div>
      <a href="https://www.yelp.com/map/jjamppong-zizon-los-angeles-6" target="_blank" rel="noopener noreferrer">
        <button className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </a>
    </div>
    <div className="app__wrapper_img">
      <img src={images.about} alt="findus" />
    </div>
  </div>
);

export default FindUs;
