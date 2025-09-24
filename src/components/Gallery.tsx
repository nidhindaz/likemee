import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern Salon Interior',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Spa Treatment Room',
      category: 'Spa'
    },
    {
      url: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bridal Makeup',
      category: 'Bridal'
    },
    {
      url: 'https://images.pexels.com/photos/3993440/pexels-photo-3993440.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair Styling',
      category: 'Hair'
    },
    {
      url: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Facial Treatment',
      category: 'Skincare'
    },
    {
      url: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional Makeup',
      category: 'Makeup'
    },
    {
      url: 'https://images.pexels.com/photos/3997954/pexels-photo-3997954.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Skincare Treatment',
      category: 'Skincare'
    },
    {
      url: 'https://images.pexels.com/photos/3993441/pexels-photo-3993441.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair Coloring',
      category: 'Hair'
    },
    {
      url: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Manicure Service',
      category: 'Nails'
    }
  ];

  const categories = ['All', 'Interior', 'Hair', 'Makeup', 'Skincare', 'Spa', 'Bridal', 'Nails'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const maxIndex = filteredImages.length - 1;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? maxIndex : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === maxIndex ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deepsky-400 via-deepsky-200 to-deepsky-500 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our work and get inspired by the transformations we create every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-deepsky-400 to-deepsky-600 mx-auto mt-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black shadow-lg shadow-deepsky-400/50'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-gray-700 hover:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform hover:scale-105 transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-deepsky-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-deepsky-400/50 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-deepsky-400 transition-colors duration-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-deepsky-400 transition-colors duration-300 z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-deepsky-400 transition-colors duration-300 z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-5xl max-h-full p-4">
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="inline-block bg-deepsky-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  {filteredImages[selectedImage].category}
                </span>
                <h3 className="text-white text-xl font-semibold">
                  {filteredImages[selectedImage].alt}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;