import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import Cast from '../Components/Shows/Cast';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import ShowMainInfo from '../Components/Shows/ShowMainInfo';
import { getAPI } from '../misc/fetchAPI';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        error: null,
        show: action.show,
      };

    case 'FETCH_FAILED':
      return { ...prevState, isLoading: false, error: action.error };

    default:
      return prevState;
  }
};

const initalState = {
  show: null,
  isLoading: true,
  error: null,
};

const InfoShow = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initalState
  );

  // const [showInfo, setShowInfo] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // console.log(state);

  // console.log(id);
  useEffect(() => {
    getAPI(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(ans => {
        dispatch({ type: 'FETCH_SUCCESS', show: ans });
        setTimeout(() => {
          // setShowInfo(ans);
          // setIsLoading(false);
        }, 1000);
      })
      .catch(err => {
        dispatch({ type: 'FETCH_FAILED', error: err.message });
        // setError(err.message);
        // setIsLoading(false);
      });
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div className="load"></div>;
  }
  if (error) {
    return (
      <div>
        <h1 align="center">*************** Error 404 *************** </h1>
        <h1 align="center">An {error} error occured.</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <ShowMainInfo
          image={show.image}
          name={show.name}
          rating={show.rating}
          genres={show.genres}
          language={show.language}
        />
      </div>
      <div>
        <h2 className="details_section">Details</h2>
        <Details
          summary={show.summary}
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>
      <div>
        <h2 className="summary_section">Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>
      <div>
        <h2 className="cast_section" align="center">
          Cast
        </h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default InfoShow;
