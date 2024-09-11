import React, { useState, useEffect } from 'react';
import './Laurels.css'; // Import custom styles for the page

import saleImage from '../../assets/sale.png';
import twitterImage from '../../assets/twitter.png';

const Laurels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsData = [
    {
      image: twitterImage, // Replace with your image URL
      title: 'We\'re turning the heat up!',
      description: 'Eater LA covers our summer opening!',
      link: 'https://la.eater.com/2024/6/3/24170495/jjamppong-zizon-korean-noodle-chain-los-angeles-koreatown?utm_source=eater-twitter&utm_medium=social&utm_campaign=eater-dashhudson&utm_content=eater-national-twitter', // Example link
    },
    {
      image: saleImage, // Replace with your image URL
      title: 'Craving the perfect comfort meal?',
      description: 'Our delicious Jjangmyeon is on special sale! 7 days a week!',
      link: 'https://www.instagram.com/p/C_OPb3sPrTX/', // Example link
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
            <h2>{newsData[currentIndex].title}</h2>
            <p>{newsData[currentIndex].description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Laurels;
