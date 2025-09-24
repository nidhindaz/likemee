import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Bridal Package',
      rating: 5,
      text: 'Like Me made my wedding day absolutely perfect! The bridal package was exceptional, and the team made sure I looked and felt like a princess. The attention to detail was incredible.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Rahul Kumar',
      service: 'Hair Styling',
      rating: 5,
      text: 'As a man, I was initially hesitant, but the staff at Like Me made me feel so comfortable. The haircut and styling exceeded my expectations. Highly recommend!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Anjali Menon',
      service: 'Facial Treatment',
      rating: 5,
      text: 'The facial treatments here are amazing! My skin has never looked better. The staff is professional and the ambiance is so relaxing. I come here regularly now.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Deepak Nair',
      service: 'Grooming Package',
      rating: 5,
      text: 'Excellent service and professional staff. The grooming package was perfect for my job interview preparation. The confidence boost was exactly what I needed!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Sneha Pillai',
      service: 'Party Makeup',
      rating: 5,
      text: 'The party makeup was stunning! I received so many compliments. The makeup lasted all night and looked flawless in all photos. Thank you Like Me team!',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deepsky-400 via-deepsky-200 to-deepsky-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-deepsky-400 to-deepsky-600 mx-auto mt-8"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 md:p-12">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <Quote className="h-16 w-16 text-deepsky-400 opacity-50" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-6 font-numeric">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-deepsky-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-deepsky-400"
                  />
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-deepsky-400 font-medium">
                      {testimonials[currentTestimonial].service}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-deepsky-400 transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full p-3"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-deepsky-400 transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full p-3"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-deepsky-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deepsky-400/10 to-deepsky-600/10 rounded-2xl p-8 border border-deepsky-400/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the same exceptional service that our clients rave about. 
              Book your appointment today and let us help you look and feel amazing.
            </p>
            <button className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105">
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;