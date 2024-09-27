import React, { useState, useEffect } from "react";

import { images } from '../../constants'; // Import images from your images.js

import './Interior.css';

const Interior = () => {
  // Only get "interior1" to "interior7"
  const interiorImages = [
    images.interior,
    images.interior2,
    images.bg,
    images.interior4,
    images.interior5,
    images.interior6,
    images.interior7
  ];

  const [shuffledImages, setShuffledImages] = useState([]);

  // Function to shuffle the images
  const shuffleImages = (imagesArray) => {
    return imagesArray.sort(() => Math.random() - 0.5);
  };

  // Shuffle images when component mounts
  useEffect(() => {
    setShuffledImages(shuffleImages(interiorImages));
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="interior-page" id = "interior">
      {/* Fullscreen Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${shuffledImages[0]})` }}>
        <h1>Discover Our Atmosphere</h1>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Our Interior Design</h2>
        <div className="gallery-grid">
          {shuffledImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Interior ${index + 1}`} onClick={() => openLightbox(image)} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Selected Interior" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Interior;
