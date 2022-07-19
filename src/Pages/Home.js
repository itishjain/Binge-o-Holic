import React, { useState } from 'react';
import MainPage from '../Components/MainPage';

const Home = () => {
  const [searchInput, setInput] = useState('');

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
      .then(result => result.json())
      .then(answer => {
        console.log(answer);
      });
  };

  const resultPressingEnter = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPage>
      <h1 align="center">This is Home Page.</h1>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={resultPressingEnter}
        value={searchInput}
      ></input>
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPage>
  );
};

export default Home;
