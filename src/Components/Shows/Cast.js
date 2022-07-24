import React from 'react';
import No_Image_Found from '../../images/not-found.png';
// import { FlexGrid, StyleCard } from '../Styled';

const Cast = ({ cast }) => {
  return (
    <div className="Cast_Details">
      {/* <FlexGrid> */}
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          <div className="cast-content">
            <div className="cast-image">
              <img
                src={person.image ? person.image.medium : No_Image_Found}
                alt="cast-person"
              />
            </div>
            <div className="cast-name">
              <span>
                {person.name} <br /> <b>AS</b> <br /> {character.name}{' '}
                {voice ? '| Voice' : ''}
              </span>
            </div>
          </div>
        </div>
      ))}
      {/* </FlexGrid> */}
    </div>
  );
};

export default Cast;
