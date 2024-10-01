import React, { useState } from "react";
import axios from "axios";
import './Contact.css';

const Contact = () => {
  // Form data state to hold user's input
  const [formData, setFormData] = useState({
    email: "",      // User's email
    name: "",       // User's name
    message: "",    // User's message
    phoneNumber: "", // User's phone number
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the state with user input
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send form data to the backend API via POST request
      await axios.post("http://localhost:5001/send-email", formData);

      // Clear the form after successful submission
      setFormData({
        email: "",
        name: "",
        message: "",
        phoneNumber: "",
      });
      alert("Message sent successfully!"); // Alert user of successful message submission
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message."); // Alert user of error
    }
  };

  return (
    <div className="contact p__spicy" id="contact">
      <h1>contact us</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for user's name, email, phone number, and message */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
