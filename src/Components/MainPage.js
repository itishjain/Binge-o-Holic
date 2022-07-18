import React from 'react';
import Navbar from './Navbar';
import Title from './Title';

const MainPage = ({ children }) => {
  return (
    <div>
      <Title
        title="BOX - OFFICE"
        subtitle1="Are you looking for Entertainment?"
        subtitle2="Don't worry we've Covered You :)"
      />

      <Navbar />
      {children}
    </div>
  );
};

export default MainPage;
