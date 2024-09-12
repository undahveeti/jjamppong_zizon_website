import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurant} from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
          <nav className = "app__navbar">
            <div className = "app__navbar-logo">
              <img src={images.zizon} alt = "app logo"/>
            </div>
            <ul className = "app__navbar-links"> 
              <li className = "p__original" ><a href="#home">Home</a></li>
              <li className = "p__original"><a href="#about">About</a></li>
              <li className = "p__original"><a href="#menu">Menu</a></li>
              <li className = "p__original"><a href="#news">News</a></li>
              <li className = "p__original"><a href="#gallery">Gallery</a></li>
              <li className = "p__original"><a href="#contact">Contact</a></li>
            </ul>
            {/*<div className = "app__navbar-login">
              <a href="#login" className = "p__original"> Log In / Register </a>
              <div/>
                <a href="/" className = "p__original"> Book Table </a>
              
            </div>*/}
            <div className = "app__navbar-smallscreen">
              <GiHamburgerMenu color = "white" fontSize = {27} onClick ={() => setToggleMenu(true)}/>
                {toggleMenu && (
                <div className = "app__navbar-smallscreen_overlay flex__center slide-bottom">
                  <MdOutlineRestaurant fontSize={27} className = "overlay_close" onClick={() => setToggleMenu(false)} />
                  <ul className = "app__navbar-smallscreen_links"> 
                    <li className = "p__spicy"><a href="#home">Home</a></li>
                    <li className = "p__spicy"><a href="#about">About</a></li>
                    <li className = "p__spicy"><a href="#menu">Menu</a></li>
                    <li className = "p__spicy"><a href="#news">News</a></li>
                    <li className = "p__spicy"><a href="#gallery">Gallery</a></li>
                    <li className = "p__spicy"><a href="#contact">Contact</a></li>
                  </ul>
                </div>   
                )}  
            </div>
          </nav>
        )
};

export default Navbar;
