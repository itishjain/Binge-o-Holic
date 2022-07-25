import React, { useEffect, useState } from 'react';
import MainPage from '../Components/MainPage';
import ShowGrid from '../Components/Shows/ShowGrid';
import { useShows } from '../misc/custom-hooks';
import { getAPI } from '../misc/fetchAPI';

const Starred = () => {
  const [watch_list] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (watch_list && watch_list.length > 0) {
      const promises = watch_list.map(showId => getAPI(`/shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [watch_list]);

  return (
    // <div>
    //   {/* If we donot want go back from one page we simply donot incude MainPage Components
    //     as MainPage consist of Links to go back from 1 page to another. */}
    //   <h1 align="center">This is Starred Page.</h1>
    // </div>
    <MainPage>
      {isLoading && <div className="load"></div>}{' '}
      {error && (
        <div>
          <h1 align="center">*************** Error 404 *************** </h1>
          <h1 align="center">An {error} error occured.</h1>
        </div>
      )}
      {!isLoading && !shows && (
        <div>
          <h1 align="center">Currently NO Show is on Watch List.</h1>
        </div>
      )}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPage>
  );
};

export default Starred;
