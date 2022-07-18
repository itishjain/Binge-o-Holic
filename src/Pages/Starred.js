import React from 'react';
import MainPage from '../Components/MainPage';

const Starred = () => {
  return (
    // <div>
    //   {/* If we donot want go back from one page we simply donot incude MainPage Components
    //     as MainPage consist of Links to go back from 1 page to another. */}
    //   <h1 align="center">This is Starred Page.</h1>
    // </div>
    <MainPage>
      <h1 align="center">This is Starred Page.</h1>
    </MainPage>
  );
};

export default Starred;
