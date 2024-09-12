import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.welcome];

const Gallery = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300; // Adjust this value for how far each click should move the gallery
    } else {
      current.scrollLeft += 300; // Adjust this value similarly
    }
  };

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">{t('gallery.title')}</h1> {/* Translated "Photo Gallery" */}
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem 1rem 1rem 1rem' }}>
          {t('gallery.description')} {/* Translated description */}
        </p>
        <a href="https://www.yelp.com/biz_photos/jjamppong-zizon-los-angeles-6" target="_blank" rel="noopener noreferrer">
          <button type="button" className="custom__button">{t('gallery.button')}</button> {/* Translated "View More" */}
        </a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" className="gallery__image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
