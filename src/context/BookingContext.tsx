import React, { createContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isBookingModalOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

export const BookingContext = createContext<BookingContextType>({
  isBookingModalOpen: false,
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <BookingContext.Provider value={{
      isBookingModalOpen,
      openBookingModal,
      closeBookingModal
    }}>
      {children}
    </BookingContext.Provider>
  );
};