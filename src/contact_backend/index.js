// index.js
/*
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Here you can save the data to a database or send an email, etc.
  console.log("Contact Form Submission:", { name, email, message });

  res.status(200).json({ message: "Contact form submitted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})/;*/
/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/contact', (req, res) => {
  const { name, email, description } = req.body;
  console.log('Contact form data:', req.body);
  // Here you can handle the data, e.g., save it to a database or send an email
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/
/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let submissions = [];

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: 'rahul.pivs@gmail.com', // Your email
    pass: 'rahulkc3565', // Your email password
  },
});

app.post('/contact', (req, res) => {
  const { name, email, description } = req.body;
  submissions.push({ name, email, description, timestamp: new Date() });

  // Send an email
  const mailOptions = {
    from: 'rahul.pivs@gmail.com',
    to: 'recipient-email@example.com', // Your email or recipient email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Form submitted successfully!' });
    }
  });
});

app.get('/submissions', (req, res) => {
  res.json(submissions);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let submissions = [];

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

app.post('/contact', (req, res) => {
  const { name, email, description } = req.body;
  submissions.push({ name, email, description, timestamp: new Date() });

  // Send an email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient-email@example.com', // Your email or recipient email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Form submitted successfully!' });
    }
  });
});

app.get('/submissions', (req, res) => {
  res.json(submissions);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

