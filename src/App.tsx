import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}

export default App;