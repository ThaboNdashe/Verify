const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

app.post('/send-email', (req, res) => {
  const { firstName, surname, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email address
    subject,
    text: `
      Name: ${firstName} ${surname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ message: 'Error sending email' });
    }
    console.log('Email sent successfully:', info.response);
    res.send({ message: 'Email sent successfully' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});