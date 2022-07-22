import React from 'react';
import Navbar from './Navbar';
import Title from './Title';

const MainPage = ({ children }) => {
  return (
    <div>
      <Title
        title="BINGE -o- HOLIC"
        subtitle1="Are you looking for Entertainment?"
        subtitle2="Don't worry we've got You Covered :)"
      />
      <Navbar />
      {children}
    </div>
  );
};

export default MainPage;
