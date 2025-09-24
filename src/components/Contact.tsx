import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message
    const msg = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919207354508?text=${msg}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['NIT Kattangal', 'Kozhikode, Kerala', 'India - 673601'],
      link: 'https://maps.app.goo.gl/52R6gKWozrZPEXQd8'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9876543210', '+91 8765432109'],
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@likemebeauty.com', 'bookings@likemebeauty.com'],
      link: 'mailto:info@likemebeauty.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      link: null
    }
  ];

  const services = [
    'Hair Styling',
    'Facial Treatment',
    'Bridal Makeup',
    'Spa Treatment',
    'Skin Care',
    'Complete Package',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deepsky-400 via-deepsky-200 to-deepsky-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your look? Contact us today to book your appointment or ask any questions.
          </p>
         
          <div className="w-24 h-1 bg-gradient-to-r from-deepsky-400 to-deepsky-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => {
                        // Add numeric font for phone numbers and postal code
                        const isPhone = info.title === 'Phone';
                        const isPostal = typeof detail === 'string' && detail.match(/\d{6}/);
                        const isHour = info.title === 'Hours' && /\d/.test(detail);
                        return (
                          <p key={idx} className={`text-gray-400 mb-1 ${(isPhone || isPostal || isHour) ? 'font-numeric' : ''}`}>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="hover:text-deepsky-400 transition-colors duration-300"
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-deepsky-400" />
                  <p>Interactive map would be integrated here</p>
                  <p className="text-sm mt-2">Click to view directions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-white font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your requirements or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;