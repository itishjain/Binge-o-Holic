import React from 'react';
import { ActorCards } from '../../ActorCardDesign.styled';

const ActorCard = ({ name, gender, image, birthday, country, deathday }) => {
  return (
    <ActorCards>
      <div className="img-wrapper">
        <img src={image} alt="Actor pic" />
      </div>
      <h1>
        Name : <i>{name}</i>
      </h1>
      <p>
        <b>Gender : </b>
        {gender}
      </p>
      <p>
        <b>Birthday (yyyy-mm-dd) : </b>
        {birthday}
      </p>
      <p>
        <b>From : </b>
        {country}
      </p>
      <p>
        <b>Death-Day (yyyy-mm-dd) : </b>
        {deathday ? `Died on - ${deathday}` : 'Alive'}
      </p>
    </ActorCards>
  );
};

export default ActorCard;
