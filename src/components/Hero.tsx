import React, { useContext } from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';
import { BookingContext } from '../context/BookingContext';

const Hero: React.FC = () => {
  const { openBookingModal } = useContext(BookingContext);

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Rating' },
    { icon: Clock, value: '24/7', label: 'Support' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Salon Interior" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-deepsky-400 via-deepsky-200 to-deepsky-500 bg-clip-text text-transparent leading-tight">
              Like Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 tracking-wide">
              The Beauty Salon
            </p>
            <div className="flex items-center justify-center space-x-2 text-deepsky-400 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-deepsky-400"></div>
              <span className="text-sm font-medium tracking-widest font-numeric">SINCE 2016</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-deepsky-400"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Experience luxury and elegance at Kozhikode's premier unisex beauty destination. 
            Where beauty meets perfection, and every visit is a royal treatment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up animation-delay-400">
            <button 
              onClick={openBookingModal}
              className="group relative px-8 py-4 bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-deepsky-400/50"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-deepsky-200 to-deepsky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-deepsky-400 text-deepsky-400 font-semibold rounded-full text-lg hover:bg-deepsky-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            {stats.map((stat, index) => (
              <div key={index} className="group flex items-center justify-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10 w-full flex flex-col items-center justify-center">
                  <stat.icon className="h-8 w-8 text-deepsky-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-numeric">{stat.value}</div>
                  <div className="text-gray-400 text-sm text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-deepsky-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-deepsky-400 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;