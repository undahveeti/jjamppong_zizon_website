import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import axios from "axios";
import './Contact.css';
import mashita from '../../assets/mashita.png';  
import business from '../../assets/business.png'; 

const Contact = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://www.jpzizonusa.com/api/send-email", formData);

      setFormData({
        email: "",
        name: "",
        message: "",
        phoneNumber: "",
      });
      alert(t('contactPage.successMessage')); // Translated success message
    } catch (error) {
      console.error("Error sending message:", error);
      alert(t('contactPage.errorMessage')); // Translated error message
    }
  };

  return (
    <div className="contact-page">
      <div className="contact p__spicy" id="contact">
        <h1>{t('contactPage.heading')}</h1> {/* Translated heading */}
        <form onSubmit={handleSubmit}>
          <label>
            {t('contactPage.nameLabel')} {/* Translated name label */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contactPage.nameLabel')} // Placeholder also translated
              required
            />
          </label>
          <br />
          <label>
            {t('contactPage.emailLabel')} {/* Translated email label */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contactPage.emailLabel')} // Placeholder also translated
              required
            />
          </label>
          <br />
          <label>
            {t('contactPage.phoneLabel')} {/* Translated phone number label */}
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder={t('contactPage.phoneLabel')} // Placeholder also translated
              required
            />
          </label>
          <br />
          <label>
            {t('contactPage.messageLabel')} {/* Translated message label */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contactPage.messageLabel')} // Placeholder also translated
              required
            />
          </label>
          <br />
          <button type="submit">{t('contactPage.sendButton')}</button> {/* Translated button text */}
        </form>

        {/* Decorative Images */}
        <img src={mashita} alt="Mashita Logo" className="decorative-image mashita-image" />
        <img src={business} alt="Business Logo" className="decorative-image business-image" />
      </div>
    </div>
  );
};

export default Contact;
