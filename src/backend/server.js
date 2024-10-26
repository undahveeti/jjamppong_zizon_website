const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: './email.env' });

const app = express();

// Set up CORS to allow requests only from your frontend domain
const corsOptions = {
  origin: 'http://jpzizonusa.com', // Update to match your frontend domain
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email route
app.post("/send-email", (req, res) => {
  const { email, name, message, phoneNumber } = req.body;

  // Format the email content
  const formattedMessage = `
    You have received a new message from your restaurant's franchising inquiry form:
    
    Name: ${name}
    Email: ${email} 
    Phone Number: ${phoneNumber}
    Message: ${message}
  `;

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `Franchising Inquiry from ${name}`,
    text: formattedMessage,
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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
