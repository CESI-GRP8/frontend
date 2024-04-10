// UserProfileContext.js
import React, { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    referralCode: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    address: {
      country: '',
      city: '',
      streetAddress: '',
      buildingType: '',
      deliveryInstructions: '',
    },
  });

  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};
