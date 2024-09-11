import React, { useRef, useState } from 'react';
import './FoodMenu.css';
import { images } from '../../constants';

const FoodMenu = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainer = useRef(null);

  const dishes = [
    {
      id: 1,
      name: 'Spicy Seafood Noodle Soup',
      description: 'Spicy noodle soup with seafood like shrimp, mussels, and clams.',
      price: '$19.00',
      imgSrc: images.soup1,
    },
    {
      id: 2,
      name: 'Extremely Spicy Seafood Noodle Soup',
      description: 'For spice lovers, this packs an extra punch!',
      price: '$20.00',
      imgSrc: images.soup2,
    },
    {
      id: 3,
      name: 'Seafood Rice Soup',
      description: 'Mild rice soup with an assortment of fresh seafood.',
      price: '$18.00',
      imgSrc: images.soup3,
    },
    // Add more items...
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust this value to change scroll speed
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="app__FoodMenu app__bg flex__center section__padding" id="menu">
      <div className="app__FoodMenu-title">
        <h1 className="headtext__cormorant">Noodles, Soups, and Dishes</h1>
      </div>
      <div className="scroll-instructions">
        <p className ="p__spicy">Drag to scroll through dishes</p>
      </div>
      <div
        className="app__FoodMenu-menu_soups"
        ref={scrollContainer}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {dishes.map((dish) => (
          <div key={dish.id} className="app__FoodMenu-menu_item">
            <img src={dish.imgSrc} alt={dish.name} className="menu-item-image" />
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p className="price">{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
