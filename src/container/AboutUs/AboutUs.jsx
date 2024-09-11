import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';
 
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__about app__bg app__wrapper section__padding" id="about">
    <div className="app__wrapper_img">
      <img src={images.chilis} alt = "chilis img"/>

    </div>
    <div className="app__wrapper_info">
      <h1 className = "app__about-h1" >About Us</h1>
      <p className ="p__spicy" style={{margin: '2rem 0'}}>Discover South Korea's Premier Spicy Noodle Experience with over 100 Locations Nationwide. At our heart lies a passion for vibrant flavors, which is why we handpick only the finest red peppers, sourced for their fiery zest and harvested at the pinnacle of ripeness. This meticulous selection fuels the distinctive, robust flavor of our 100% natural Goobne pepper sauce—a cornerstone of our culinary offerings.

Every bowl promises a journey of taste, crafted from ingredients that are nurtured from seed to sauce, ensuring each dish not only tingles your palate but also meets the highest standards of quality. Join us for an unforgettable adventure in flavor, where traditional craftsmanship meets the fiery essence of Korea.</p>
          
  
    </div>
  
  </div>
);

export default Header;