import { useReducer, useEffect } from 'react';
import { useState } from 'react';
import { getAPI } from './fetchAPI';

const showsReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }

    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }

    default:
      return prevState;
  }
};

function usePersistentReducer(reducer, initialState, key) {
  /* useReducer return an array of 2 states :
            1) state
            2) dispatch 

        useReducer() takes 2 or 3 arguments:
            1) reducer
            2) initialState
            3) Initializer Function ()=>{}  -   Whenever we need to compute the initial state.
                                                Whatever is returned from this function is set
                                                as the initalState, regardless what we pass as
                                                second argument in 
                                                intialState(second argument of useReducer).
        The initializer function takes up the first argument as initialState that we passed as
        a second argument in useReducer().

        We use JSON.parse() - because when we store data inside local storage we store only strings
        and we store objects we need to convert them from strings back to objects.
    */
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistent = localStorage.getItem(key);
    return persistent ? JSON.parse(persistent) : initial; //Now done with the initialization
  });

  // We need to also synchronize our state whenever we update it with local storage using useEffect.

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  // Now we will return an array from this custom-hook function consisting of state & dispatch
  return [state, dispatch];
}

// Call the function
// When we use this hook multiple times, everytime we need to pass a reducer and initialstate :(
// To avoid this we can create another hook for our shows.

export function useShows(key = 'shows') {
  return usePersistentReducer(showsReducer, [], key);
}

export function useLastSearched(key = 'lastSeached') {
  const [searchInput, setInput] = useState(() => {
    const persistent = sessionStorage.getItem(key);
    return persistent ? JSON.parse(persistent) : '';
  });

  const persistentInput = newState => {
    setInput(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };

  return [searchInput, persistentInput];
}

export function useCreatedShow(showId) {
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
  const [state, dispatch] = useReducer(reducer, {
    show: null,
    isLoading: true,
    error: null,
  });

  // const [showInfo, setShowInfo] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // console.log(state);

  // console.log(id);
  useEffect(() => {
    getAPI(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
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
  }, [showId]);
  return state;
}
