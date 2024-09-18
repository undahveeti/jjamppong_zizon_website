import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';

import './FindUs.css';
const FindUs = () => {
  const { t } = useTranslation();

  const [selectedStore, setSelectedStore] = useState(null); // Track selected store for modal

  // Store data (replace this with your actual data)
  const stores = [
    {
      id: 1,
      name: 'Jjamppong Zizon Los Angeles',
      address: '3446 Wilshire Blvd, Los Angeles, CA 90010',
      phone: '(213) 263-9527',
      franchisee: 'Mama Sue',
      businessHours: 'Mon - Sun: 10:30am - 9:00pm',
      image: images.about,
    },
    {
      id: 2,
      name: 'Next One',
      address: 'Somewhere in Denver',
      phone: '999-999-9999',
      franchisee: 'John Doe',
      businessHours: 'Mon - Sun: 10:00am - 9:30pm',
      image: images.store2,
    },
    // Add more stores here
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
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Store Photo</th>
            <th>Store Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Store Information</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id} style={{ textAlign: 'center' }}>
              <td><img src={store.image} alt={store.name} /></td>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.phone}</td>
              <td>
                <button className="custom__button" onClick={() => openModal(store)}>
                  Store Information
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
