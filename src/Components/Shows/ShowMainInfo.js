import React from 'react';
import Image_not_Found from '../../images/not-found.png';
// import { StyledShowCards } from '../../ShowCard.styled';

const ShowMainInfo = ({
  image,
  name,
  rating,
  genres,
  language,
  onWatchListClick,
  isStarred,
}) => {
  return (
    <div className="FullInfo">
      <div className="Image-section">
        <img src={image ? image.medium : Image_not_Found} alt="Show img" />
      </div>
      <div className="Details-section">
        <div className="Main-info">
          <h1 className="show-Heading">
            Name :
            <span className="show-Title">
              <i>{name}</i>
            </span>
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
        </div>
      </div>
    </div>
  );
};

export default ShowMainInfo;
