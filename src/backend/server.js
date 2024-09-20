const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { email, name, message, phoneNumber } = req.body;

  // Reorder the info as: message, name, phoneNumber
  const formattedMessage = `
    Message: ${message}
    Name: ${name}
    Phone Number: ${phoneNumber}
  `;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use the email service provider you want (e.g., Gmail, SendGrid, etc.)
    auth: {
      user: "your-email@gmail.com", // Your email
      pass: "your-password", // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email, // Sender's email
    to: "recipient-email@example.com", // Hidden email where the message will be sent
    subject: "New Contact Form Message",
    text: formattedMessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Error sending email." });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
