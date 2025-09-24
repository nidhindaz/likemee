import React from 'react';
import { Award, Users, Clock, Zap, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Users,
      number: '5000+',
      title: 'Happy Clients',
      description: 'Satisfied customers who trust our expertise'
    },
    {
      icon: Award,
      number: '8+',
      title: 'Years Experience',
      description: 'Delivering excellence since 2016'
    },
    {
      icon: Star,
      number: '4.9',
      title: 'Average Rating',
      description: 'Consistently rated by our customers'
    },
    {
      icon: Zap,
      number: '50+',
      title: 'Services Offered',
      description: 'Comprehensive beauty solutions'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about making you look and feel your best'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for perfection in every service we provide'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our valued clients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deepsky-400 via-deepsky-200 to-deepsky-500 bg-clip-text text-transparent">
            About Like Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the story behind Kozhikode's most trusted beauty destination.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-deepsky-400 to-deepsky-600 mx-auto mt-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Beauty Journey Starts Here
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="font-numeric">Since 2016</span>, Like Me Family Beauty Hub has been Kozhikode's premier destination 
                for comprehensive beauty and wellness services. Located in the heart of NIT Kattangal, 
                we have built our reputation on delivering exceptional service and outstanding results.
              </p>
              <p>
                Our team of skilled professionals combines traditional techniques with modern innovations 
                to provide you with the finest beauty treatments. Whether you're looking for a simple 
                refresh or a complete transformation, we're here to help you look and feel your absolute best.
              </p>
              <p>
                At Like Me, we believe that beauty is not just about appearance – it's about confidence, 
                self-expression, and feeling great in your own skin. That's why we take the time to 
                understand your unique needs and create personalized solutions just for you.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="border-2 border-deepsky-400 text-deepsky-400 px-8 py-3 rounded-full font-semibold hover:bg-deepsky-400 hover:text-black transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Like Me Salon"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-deepsky-400 to-deepsky-600 p-6 rounded-2xl text-black max-w-xs">
              <div className="text-3xl font-bold mb-2 font-numeric">8+ Years</div>
              <div className="font-semibold">of Excellence in Beauty</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center border border-gray-800 hover:border-deepsky-400/50 transition-all duration-500 transform hover:scale-105 group"
            >
              <item.icon className="h-12 w-12 text-deepsky-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold text-white mb-2 font-numeric">{item.number}</div>
              <div className="text-xl font-semibold text-deepsky-400 mb-2">{item.title}</div>
              <div className={`text-gray-400 text-sm${item.description.includes('2016') ? ' font-numeric' : ''}`}>{item.description}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do at Like Me Beauty Salon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 text-center border border-gray-800 hover:border-deepsky-400/50 transition-all duration-500 group backdrop-blur-sm"
            >
              <div className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;