import React from 'react';
import ActorCard from './ActorCard';
import No_Image_Found from '../../images/not-found.png';
import { FlexGrid } from '../Styled';
import FadeIn from 'react-fade-in/lib/FadeIn';

const ActorGrid = ({ data }) => {
  return (
    <FadeIn>
      <FlexGrid>
        {data.map(({ person }) => (
          <ActorCard
            key={person.id}
            id={person.id}
            name={person.name}
            gender={person.gender}
            image={person.image ? person.image.medium : No_Image_Found}
            birthday={person.birthday ? person.birthday : 'No Birthday Found'}
            country={person.country ? person.country.name : 'No Country Found'}
            deathday={person.deathday}
          />
        ))}
      </FlexGrid>
    </FadeIn>
  );
};

export default ActorGrid;
