import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';

import './FindUs.css';

const FindUs = () => {
  const { t } = useTranslation();
  const [selectedStore, setSelectedStore] = useState(null); // Track selected store for modal
  const [hoveredImage, setHoveredImage] = useState(null); // Track hovered image for enlarged display
  const [hoveredMap, setHoveredMap] = useState(null); // Track hovered map for enlarged display

  // Store data
  const stores = [
    {
      id: 1,
      name: 'Jjamppong Zizon Los Angeles',
      address: '3446 Wilshire Blvd, Los Angeles, CA 90010',
      phone: '(213) 263-9527',
      franchisee: 'Mama Sue',
      businessHours: 'Mon - Sun: 10:30am - 9:00pm',
      image: images.about,
      mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3184702780736!2d-118.30202622382234!3d34.061349517248686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b98820acdc7d%3A0x540ce7f27b248b79!2zSmphbXBwb25nIHppem9uICgg7Kes672VIOyngOyhtCBMQSAp!5e0!3m2!1sen!2sus!4v1726639008597!5m2!1sen!2sus"
    },
    {
      id: 2,
      name: 'Next One',
      address: 'Somewhere in Denver',
      phone: '999-999-9999',
      franchisee: 'John Doe',
      businessHours: 'Mon - Sun: 10:00am - 9:30pm',
      image: images.store2,
      mapLink: "https://www.google.com/maps/embed?pb=...DENVER_MAP_EMBED_URL..."
    },
  ];

  // Open Modal
  const openModal = (store) => {
    setSelectedStore(store);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedStore(null);
  };

  return (
    <div className="app__wrapper section__padding" id="find-store">
      
      {/* Store Table */}
      <table className="store-table">
        <thead>
          <tr>
            <th>Store Photo</th>
            <th>Store Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Store Information</th>
            <th>Location Map</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id} style={{ textAlign: 'center' }}>
              <td
                onMouseEnter={() => setHoveredImage(store.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={store.image} alt={store.name} className="store-image" />
              </td>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.phone}</td>
              <td>
                <button className="custom__button" onClick={() => openModal(store)}>
                  Store Information
                </button>
              </td>
              <td
                onMouseEnter={() => setHoveredMap(store.mapLink)}
                onMouseLeave={() => setHoveredMap(null)}
              >
                {/* Embedded Google Map */}
                <iframe 
                  src={store.mapLink} 
                  width="250" 
                  height="150" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${store.name} Location Map`}
                  className="store-map"
                ></iframe>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Hovered Enlarged Image */}
      {hoveredImage && (
        <div className="enlarged-overlay">
          <img src={hoveredImage} alt="Enlarged" className="enlarged-item" />
        </div>
      )}

      {/* Hovered Enlarged Map */}
      {hoveredMap && (
        <div className="enlarged-overlay">
          <iframe
            src={hoveredMap}
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Enlarged Map"
            className="enlarged-item"
          ></iframe>
        </div>
      )}

      {/* Store Information Modal */}
      {selectedStore && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedStore.name}</h2>
            <table>
              <tbody>
                <tr>
                  <td><strong>Branch Name:</strong></td>
                  <td>{selectedStore.name}</td>
                </tr>
                <tr>
                  <td><strong>Franchisee:</strong></td>
                  <td>{selectedStore.franchisee}</td>
                </tr>
                <tr>
                  <td><strong>Contact:</strong></td>
                  <td>{selectedStore.phone}</td>
                </tr>
                <tr>
                  <td><strong>Branch Address:</strong></td>
                  <td>{selectedStore.address}</td>
                </tr>
                <tr>
                  <td><strong>Business Hours:</strong></td>
                  <td>{selectedStore.businessHours}</td>
                </tr>
              </tbody>
            </table>
            <button className="custom__button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindUs;
