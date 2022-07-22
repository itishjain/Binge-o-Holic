import React from 'react';
import ShowCard from './ShowCard';
import not_found_image from '../../images/not-found.png';
import { FlexGrid } from '../Styled';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : not_found_image}
          summary={show.summary}
          genre={show.genres}
          language={show.language}
          runtime={show.runtime}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
