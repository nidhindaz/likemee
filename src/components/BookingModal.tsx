import React, { useContext, useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react';
import { BookingContext } from '../context/BookingContext';

const BookingModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal } = useContext(BookingContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'hair-styling', name: 'Hair Styling', duration: '45 min', price: '₹500+' },
    { id: 'facial', name: 'Facial Treatment', duration: '60 min', price: '₹800+' },
    { id: 'bridal', name: 'Bridal Makeup', duration: '120 min', price: '₹5000+' },
    { id: 'spa', name: 'Spa Treatment', duration: '90 min', price: '₹1200+' },
    { id: 'skincare', name: 'Skin Care', duration: '45 min', price: '₹600+' },
    { id: 'package', name: 'Complete Package', duration: '180 min', price: '₹2500+' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      setBookingData({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
      });
      closeBookingModal();
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setBookingData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
    closeBookingModal();
  };

  if (!isBookingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Book Appointment</h2>
          <button
            onClick={resetAndClose}
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/5 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
            <span className="text-sm text-gray-400">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
              <p className="text-gray-400 mb-2">Thank you for choosing Like Me Beauty Salon.</p>
              <p className="text-gray-400">We'll send you a confirmation email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <User className="h-6 w-6 mr-3 text-deepsky-400" />
                    Choose Your Service
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          bookingData.service === service.id
                            ? 'border-deepsky-400 bg-deepsky-400/10'
                            : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                        }`}
                        onClick={() => setBookingData({ ...bookingData, service: service.id })}
                      >
                        <h4 className="text-white font-semibold mb-2">{service.name}</h4>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>{service.duration}</span>
                          <span className="text-deepsky-400 font-medium font-numeric">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Calendar className="h-6 w-6 mr-3 text-deepsky-400" />
                    Select Date & Time
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-3">Select Date</label>
                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-3">Select Time</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setBookingData({ ...bookingData, time })}
                            className={`p-3 rounded-lg text-sm font-medium font-numeric transition-all duration-300 ${
                              bookingData.time === time
                                ? 'bg-deepsky-400 text-black'
                                : 'bg-gray-800 text-white hover:bg-gray-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-deepsky-400" />
                    Your Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300 font-numeric"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Additional Notes</label>
                      <textarea
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-deepsky-400 focus:outline-none focus:ring-2 focus:ring-deepsky-400/20 transition-all duration-300 resize-none"
                        placeholder="Any special requests or requirements?"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-full font-medium hover:border-gray-500 hover:text-white transition-all duration-300"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !bookingData.service) ||
                      (currentStep === 2 && (!bookingData.date || !bookingData.time))
                    }
                    className="ml-auto bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Appointment
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;