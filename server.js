// server.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Twilio credentials
const accountSid = 'AC36c1cc809ec2c8d46120a3735022bd18';
const authToken = 'bca0938ed76292a19b6ef56a13d2c716';
const client = twilio(accountSid, authToken);

const app = express();
app.use(bodyParser.json());

app.post('/api/book', (req, res) => {
  const { serviceType, date, time, name, address, email, phone, pincode } = req.body;

  const messageBody = `
    New Booking Request:
    - Service Type: ${serviceType}
    - Date: ${date}
    - Time: ${time}
    - Name: ${name}
    - Address: ${address}
    - Email: ${email}
    - Phone: ${phone}
    - Pincode: ${pincode}
  `;

  client.messages
    .create({
      body: messageBody,
      from: '+15033439138', // Replace with your Twilio number
      to: '+916305543713', // Target phone number
    })
    .then((message) => {
      console.log('Message sent:', message.sid);
      res.status(200).send('Message sent successfully');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      res.status(500).send('Failed to send message');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
