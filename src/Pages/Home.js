import React, { useState } from 'react';
import MainPage from '../Components/MainPage';
import { getAPI } from '../misc/fetchAPI';

const Home = () => {
  const [searchInput, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [radioSearchOpt, setRadioSearchOpt] = useState('shows');

  // Check radio button 1 at a time.
  const isRadioSearch = radioSearchOpt === 'shows';

  // Getting input value
  const onInputChange = event => {
    setInput(event.target.value);
  };
  console.log(onInputChange);

  // Fetch from API and search when either enter key is pressed or button is clicked.
  const onSearch = () => {
    getAPI(`/search/${radioSearchOpt}?q=${searchInput}`).then(answer => {
      setResults(answer);
    });
  };

  // Search for result when enter is pressed
  const resultPressingEnter = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  // To display search results on screen
  const renderResults = () => {
    if (results && results.length === 0) {
      return (
        <div align="center">
          <h2>
            <b>
              <i>Sorry couldn't find out what you searched for :(</i>
            </b>
          </h2>
        </div>
      );
    }
    if (results && results.length > 0) {
      return results[0].show ? ( // This conditon means if results first element is show then give o/p of shows.
        <div>
          <h3 align="center">Results are : </h3>
          {results.map(items => (
            <div key={items.show.id} align="center">
              {items.show.name}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3 align="center">Results are : </h3>
          {results.map(items => (
            <div key={items.person.id} align="center">
              {items.person.name}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // For changing of radio buttons
  const onRadioChange = event => {
    setRadioSearchOpt(event.target.value);
  };
  console.log(radioSearchOpt);

  return (
    <MainPage>
      <h1 align="center">This is Home Page.</h1>
      <div align="center">
        <div>
          <label htmlFor="searchShows">
            Shows
            <input
              id="searchShows"
              type="radio"
              value="shows"
              checked={isRadioSearch}
              onChange={onRadioChange}
            ></input>
          </label>
          <label htmlFor="searchActors">
            Actors
            <input
              id="searchActors"
              type="radio"
              value="people"
              checked={!isRadioSearch}
              onChange={onRadioChange}
            ></input>
          </label>
        </div>
        <input
          type="text"
          onChange={onInputChange}
          onKeyDown={resultPressingEnter}
          value={searchInput}
          placeholder="Search Something"
        ></input>

        <button type="button" onClick={onSearch}>
          Search
        </button>
      </div>
      {renderResults()}
    </MainPage>
  );
};

export default Home;
