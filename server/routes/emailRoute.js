const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eomadjambe@gmail.com', 
      pass: 'Cinderella0$', 
    },
  });

  const mailOptions = {
    from: email,
    to: 'eomadjambe@gmail.com', 
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully!');
      res.status(200).send('Email sent successfully');
    }
  });
});

module.exports = router;