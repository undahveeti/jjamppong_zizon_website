import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './Laurels.css'; // Import custom styles for the page

import saleImage from '../../assets/sale.png';
import twitterImage from '../../assets/twitter.png';

const Laurels = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [currentIndex, setCurrentIndex] = useState(0);

  // Translate both title and description
  const newsData = [
    {
      image: twitterImage, // Replace with your image URL
      title: t('laurels.title1'), // Translate the title
      description: t('laurels.description1'), // Translate the description
      link: 'https://la.eater.com/2024/6/3/24170495/jjamppong-zizon-korean-noodle-chain-los-angeles-koreatown?utm_source=eater-twitter&utm_medium=social&utm_campaign=eater-dashhudson&utm_content=eater-national-twitter',
    },
    {
      image: saleImage, // Replace with your image URL
      title: t('laurels.title2'), // Translate the title
      description: t('laurels.description2'), // Translate the description
      link: 'https://www.instagram.com/p/C_OPb3sPrTX/',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, [newsData.length]);

  return (
    <div className="news-gallery app__bg" id="news">
      <a
        href={newsData[currentIndex].link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-link"
      >
        <div className="news-container">
          <img
            src={newsData[currentIndex].image}
            alt={newsData[currentIndex].title}
            className="news-image"
          />
          <div className="news-caption">
            <h2>{newsData[currentIndex].title}</h2> {/* Title translated */}
            <p>{newsData[currentIndex].description}</p> {/* Description translated */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Laurels;
