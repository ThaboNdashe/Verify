const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { firstName, surname, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: email, // Sender address
    to: process.env.EMAIL_USER, // Recipient address (your email)
    subject: subject,
    text: `
      Name: ${firstName} ${surname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).send({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});