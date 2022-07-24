import React from 'react';
import Image_not_Found from '../../images/not-found.png';
import { StyledShowCards } from '../../ShowCard.styled';

const ShowMainInfo = ({ image, name, rating, genres, language }) => {
  return (
    <div className="FullInfo">
      <div className="Image-section">
        <img src={image ? image.medium : Image_not_Found} alt="Show img" />
      </div>
      <div className="Details-section">
        <div className="Main-info">
          <h1>
            Name : <i>{name}</i>
          </h1>
          <p>
            {rating.average == null ? (
              'No Ratings Found'
            ) : (
              <div>
                {`Rating : ${rating.average} `}
                <span className="fa fa-star checked"></span>
              </div>
            )}
          </p>
          <p>
            <span className="genre-title">Genre : </span>
            {genres ? (
              <div className="genre-style">
                {genres.map((genre, i) => (
                  <span className="genre-keys" key={i}>
                    {genre}
                  </span>
                ))}
              </div>
            ) : (
              'No genre Found'
            )}
          </p>
          <p>
            {language ? (
              <div>
                <span className="Lang">Available Languages : </span>
                {language}
              </div>
            ) : (
              'No Language specified'
            )}
          </p>
          <StyledShowCards>
            <div className="btn-wrapper">
              <button type="button" className="btn">
                Add to list +
              </button>
            </div>
          </StyledShowCards>
        </div>
      </div>
    </div>
  );
};

export default ShowMainInfo;
