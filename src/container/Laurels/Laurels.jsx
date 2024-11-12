import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiInstagram } from 'react-icons/fi';
import './Laurels.css';

import saleImage from '../../assets/sale.png';
import twitterImage from '../../assets/twitter.png';

const Laurels = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsData = [
    {
      image: twitterImage,
      title: t('laurels.title1'),
      description: t('laurels.description1'),
      link: 'https://la.eater.com/2024/6/3/24170495/jjamppong-zizon-korean-noodle-chain-los-angeles-koreatown?utm_source=eater-twitter&utm_medium=social&utm_campaign=eater-dashhudson&utm_content=eater-national-twitter',
    },
    {
      image: saleImage,
      title: t('laurels.title2'),
      description: t('laurels.description2'),
      link: 'https://www.instagram.com/p/C_OPb3sPrTX/',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [newsData.length]);

  return (
    <div className="news-gallery app__bg" id="news">
      {/* Centered Instagram Icon Link on Top */}
      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/jjamppong_zizon.la/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FiInstagram />
        </a>
      </div>

      {/* News Data Content */}
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
            <h2>{newsData[currentIndex].title}</h2>
            <p>{newsData[currentIndex].description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Laurels;
