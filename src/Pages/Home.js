import React, { useState } from 'react';
import MainPage from '../Components/MainPage';
import { getAPI } from '../misc/fetchAPI';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorGrid from '../Components/Actors/ActorGrid';
import { useLastSearched } from '../misc/custom-hooks';

const Home = () => {
  const [searchInput, setInput] = useLastSearched();
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
          <ShowGrid data={results} />
        </div>
      ) : (
        <div>
          <h3 align="center">Results are : </h3>
          <ActorGrid data={results} />
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
      <h1 align="center">What are you looking for ?</h1>
      <div align="center">
        <div className="radioBtns">
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
        <div className="searchItems">
          <input
            type="text"
            className="searchInputBox"
            onChange={onInputChange}
            onKeyDown={resultPressingEnter}
            value={searchInput}
            placeholder="  Search Something ......"
          />
          <button id="searchBtn" type="button" onClick={onSearch}>
            Search
          </button>
        </div>
      </div>
      {renderResults()}
    </MainPage>
  );
};

export default Home;
