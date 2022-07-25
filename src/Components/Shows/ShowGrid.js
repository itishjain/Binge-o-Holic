import React from 'react';
import ShowCard from './ShowCard';
import not_found_image from '../../images/not-found.png';
import { FlexGrid } from '../Styled';
import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({ data }) => {
  const [starredShow, starredDispatch] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShow.includes(show.id);

        const onWatchListClick = () => {
          if (isStarred) {
            starredDispatch({ type: 'REMOVE', showId: show.id });
          } else {
            starredDispatch({ type: 'ADD', showId: show.id });
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : not_found_image}
            summary={show.summary}
            genre={show.genres}
            language={show.language}
            runtime={show.runtime}
            onWatchListClick={onWatchListClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
