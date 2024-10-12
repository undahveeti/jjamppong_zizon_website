import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation for translations
import './FoodMenu.css'; // Ensure your original CSS is linked
import { images } from '../../constants'; // Assuming images are in a constants file
const FoodMenu = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  const dishes = [
    {
      id: 1,
      name: t('menu.dish1.name'),
      description: t('menu.dish1.description'),
      
      imgSrc: images.soup,
    },
    {
      id: 2,
      name: t('menu.dish2.name'),
      description: t('menu.dish2.description'),
      
      imgSrc: images.soup2,
    },
    {
      id: 3,
      name: t('menu.dish3.name'),
      description: t('menu.dish3.description'),
      
      imgSrc: images.soup3,
    },
    {
      id: 4,
      name: t('menu.dish4.name'),
      description: t('menu.dish4.description'),
     
      imgSrc: images.soup4,
    },
    {
      id: 5,
      name: t('menu.dish5.name'),
      description: t('menu.dish5.description'),
      
      imgSrc: images.soup5,
    },
    {
      id: 6,
      name: t('menu.dish6.name'),
      description: t('menu.dish6.description'),
      
      imgSrc: images.noodle,
    },
    {
      id: 7,
      name: t('menu.dish7.name'),
      description: t('menu.dish7.description'),
      
      imgSrc: images.combo,
    },
    {
      id: 8,
      name: t('menu.dish8.name'),
      description: t('menu.dish8.description'),
      
      imgSrc: images.crab,
    },
    {
      id: 9,
      name: t('menu.dish9.name'),
      description: t('menu.dish9.description'),
      
      imgSrc: images.shrimp,
    },
  ];

  return (
    <div className="menu__container">
      
      <div className="menu__scroll-wrapper"> {/* Scrollable wrapper */}
        {dishes.map((dish) => (
          <div key={dish.id} className="menu__item">
            <img src={dish.imgSrc} alt={dish.name} className="menu__item-img" />
            <div className="menu__item-info">
              <h2 className="menu__item-name">{dish.name}</h2>
              <p className="menu__item-description">{dish.description}</p>
              <p className="menu__item-price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FoodMenu;
