const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: './email.env' });


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { email, name, message, phoneNumber } = req.body;

  // Format the message content with user details
  const formattedMessage = `
    You have received a new message from your restaurant's franchising inquiry form:
    
    Name: ${name}
    Email: ${email} 
    Phone Number: ${phoneNumber}
    Message: ${message}
  `;

  // Create a transporter using the constant EMAIL_USER (your email account)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your constant email account used for sending
      pass: process.env.EMAIL_PASS, // App-specific password for your email account
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // The user's email (appears as the sender)
    to: process.env.RECEIVER_EMAIL, // Your inbox (where you want to receive the form submission)
    subject: `Franchising Inquiry from ${name}`, // Subject includes the user's name
    text: formattedMessage, // The message body includes all the user details
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
      return res.status(500).json({ error: `Error sending email: ${error.message}` });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Message sent successfully!" });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
