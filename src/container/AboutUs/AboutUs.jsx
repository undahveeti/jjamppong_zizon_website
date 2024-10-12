import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="about-us-container" id='history'>
      {/* Top Decorative Images */}
      <div className="top-images">
        <img src={images.pinky} alt="Pinky Promise" className="decorative-image pinky-promise" />
        <img src={images.noop} alt="Bowl of Noodles" className="decorative-image noodles-top" />
      </div>

      <div className="about-us-header">
        <h2>We Promise 4 Things to Our Customers!</h2>
      </div>

      <div className="about-us-promises">
        {/* First row */}
        <div className="promise-item">
          <img src={images.chili} alt="Chili Peppers" className="promise-image"/>
          <div className="promise-text">
            <h3>Top Quality Chili</h3>
            <p>We use only the finest quality local chili powder.</p>
          </div>
        </div>

        <div className="promise-item">
          <img src={images.nood} alt="Noodles" className="promise-image"/>
          <div className="promise-text">
            <h3>Fresh Noodles</h3>
            <p>We prepare our chewy noodles with care and precision.</p>
          </div>
        </div>

        {/* Second row */}
        <div className="promise-item">
          <img src={images.mussle} alt="Seafood" className="promise-image"/>
          <div className="promise-text">
            <h3>No Seafood Byproducts</h3>
            <p>We do not use seafood byproducts to increase quantity.</p>
          </div>
        </div>

        <div className="promise-item">
          <img src={images.recycle} alt="No Reuse" className="promise-image"/>
          <div className="promise-text">
            <h3>No Reused Ingredients</h3>
            <p>We never reuse any food or ingredients.</p>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Images */}
      <div className="bottom-images">
        <img src={images.chili2} alt="Chilies" className="decorative-image chilies-bottom" />
      </div>
    </div>
  );
};

export default AboutUs;
