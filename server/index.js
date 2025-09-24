const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Email configuration (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@likemebeauty.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p>This message was sent from the Like Me Beauty Salon website contact form.</p>
      `
    };

    // Send confirmation email to customer
    const customerConfirmation = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Like Me Beauty Salon',
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Your Message Details:</h3>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
  <p>In the meantime, feel free to call us at +91 9207354508 for any urgent inquiries.</p>
        <hr>
        <p>Best regards,<br>Like Me Beauty Salon Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerConfirmation);

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.post('/api/booking', async (req, res) => {
  try {
    const { service, date, time, name, email, phone, notes } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bookings@likemebeauty.com',
      subject: `New Appointment Booking - ${name}`,
      html: `
        <h2>New Appointment Booking</h2>
        <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Booking Details:</h3>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        </div>
        <p>Please confirm this appointment by contacting the customer.</p>
        <hr>
        <p>This booking was made through the Like Me Beauty Salon website.</p>
      `
    };

    // Send confirmation email to customer
    const customerConfirmation = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Booking Confirmation - Like Me Beauty Salon',
      html: `
        <h2>Appointment Booking Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Thank you for booking an appointment with Like Me Beauty Salon. We have received your booking request.</p>
        <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Your Booking Details:</h3>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          ${notes ? `<p><strong>Special Notes:</strong> ${notes}</p>` : ''}
        </div>
        <p><strong>Status:</strong> Pending Confirmation</p>
        <p>We will call you within 2 hours to confirm your appointment. Please ensure your phone is reachable.</p>
        <hr>
        <p>Location: NIT Kattangal, Kozhikode, Kerala</p>
  <p>Phone: +91 9207354508</p>
        <p>If you need to reschedule or cancel, please call us at least 2 hours in advance.</p>
        <p>Thank you for choosing Like Me Beauty Salon!</p>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerConfirmation);

    res.status(200).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ error: 'Failed to process booking' });
  }
});

app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'newsletter@likemebeauty.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        <hr>
        <p>This subscription was made through the Like Me Beauty Salon website.</p>
      `
    };

    // Send welcome email to subscriber
    const welcomeEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Like Me Beauty Salon Newsletter!',
      html: `
        <h2>Welcome to Like Me Beauty Salon!</h2>
        <p>Thank you for subscribing to our newsletter. You'll be the first to know about:</p>
        <ul>
          <li>Special offers and discounts</li>
          <li>New services and treatments</li>
          <li>Beauty tips and trends</li>
          <li>Exclusive events and promotions</li>
        </ul>
        <p>We promise to send you only valuable content and never spam your inbox.</p>
        <hr>
        <p>Visit us at: NIT Kattangal, Kozhikode, Kerala</p>
  <p>Call us: +91 9207354508</p>
        <p>Best regards,<br>Like Me Beauty Salon Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(welcomeEmail);

    res.status(200).json({ message: 'Newsletter subscription successful' });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});