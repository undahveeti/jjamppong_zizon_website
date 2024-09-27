import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Interior.css'; // Ensure to have the updated CSS file
import { images } from '../../constants'; // Import the images
import { Navbar } from '../../components';

const Interior = () => {
  // Array of interior images
  const items = [
    images.interior, 
    images.interior2, 
    images.interior4, 
    images.interior5, 
    images.interior6, 
    images.interior7
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,  // Increased speed for a smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,  // Slower autoplay for a more relaxed experience
    fade: true,
    customPaging: i => (
      <div className="custom-dot"></div> // Custom dot styling
    ),
    appendDots: dots => (
      <div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="interior-page">


      {/* Image Carousel with text overlay */}
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {items.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={item} 
                alt={`Interior ${index + 1}`} 
                className="carousel-image" 
              />
              {/* Text Overlay */}
              <div className="image-overlay">
                <h1 className="overlay-title">Interior Design {index + 1}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Interior;
