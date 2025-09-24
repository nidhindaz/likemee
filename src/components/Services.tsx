import React, { useState } from 'react';
import { Scissors, Sparkles, Crown, Heart, Zap, Gift } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Scissors,
      title: 'Hair Styling',
      description: 'Professional cuts, styling, and treatments for all hair types',
      price: 'From ₹500',
      image: 'https://images.pexels.com/photos/3993440/pexels-photo-3993440.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Hair Cut', 'Hair Wash', 'Hair Styling', 'Hair Coloring']
    },
    {
      icon: Sparkles,
      title: 'Facial Treatments',
      description: 'Rejuvenating facials with premium skincare products',
      price: 'From ₹800',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Deep Cleansing', 'Anti-Aging', 'Hydrating', 'Brightening']
    },
    {
      icon: Crown,
      title: 'Bridal Makeup',
      description: 'Complete bridal packages for your special day',
      price: 'From ₹5000',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Bridal Makeup', 'Hair Styling', 'Saree Draping', 'Photography']
    },
    {
      icon: Heart,
      title: 'Spa Treatments',
      description: 'Relaxing spa services for ultimate wellness',
      price: 'From ₹1200',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Body Massage', 'Aromatherapy', 'Hot Stone', 'Reflexology']
    },
    {
      icon: Zap,
      title: 'Skin Care',
      description: 'Advanced skincare treatments and consultations',
      price: 'From ₹600',
      image: 'https://images.pexels.com/photos/3997954/pexels-photo-3997954.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Acne Treatment', 'Anti-Aging', 'Skin Analysis', 'Chemical Peels']
    },
    {
      icon: Gift,
      title: 'Packages',
      description: 'Special combo packages for complete makeovers',
      price: 'From ₹2500',
      image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: ['Party Package', 'Wedding Package', 'Grooming Package', 'Couple Package']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deepsky-400 via-deepsky-200 to-deepsky-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            tailored to enhance your natural beauty and confidence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-deepsky-400 to-deepsky-600 mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-deepsky-400/50 transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-deepsky-400 group-hover:text-deepsky-200 transition duration-300 group-hover:scale-110 transform" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Service List */}
                <div className={`mb-4 overflow-hidden transition-all duration-500 ${
                  hoveredService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-deepsky-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-deepsky-400 font-numeric">
                    {service.price}
                  </span>
                  <button className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deepsky-400/10 to-deepsky-600/10 rounded-2xl p-8 border border-deepsky-400/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer customized beauty solutions tailored to your specific needs. 
              Contact us to discuss your requirements.
            </p>
            <button className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;