import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCards } from '../../ShowCard.styled';
// import { StyleCard } from '../Styled';
import { StyleText, Wishlist } from '../Styled';

const ShowCard = ({
  id,
  name,
  image,
  summary,
  genre,
  language,
  runtime,
  onWatchListClick,
  isStarred,
}) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No summary Found';
  return (
    <StyledShowCards>
      <div>
        <img src={image} alt="Scene of the Show" className="img-wrapper" />
      </div>
      <StyleText>
        <h1>
          <b>Title :</b> <i>{name}</i>
        </h1>
        <h4>{genre ? `Genre : ${genre}  ` : 'Not Specified'}</h4>
      </StyleText>
      <p>
        <b>Language : </b>
        {language ? `${language}` : 'Cannot Find Language for this show.'}
      </p>
      <p>
        <b>Runtime : </b>
        {runtime ? `${runtime} mins (approx)` : 'No Run-Time specifed.'}
      </p>
      <p>
        <b>Summary</b> :{summaryAsText}
        <Link to={`/shows/${id}`}>
          <span className="readMore">Read More</span>
        </Link>
      </p>
      <div className="btn-wrapper">
        <button type="button" className="btn" onClick={onWatchListClick}>
          <Wishlist wishlisted={isStarred}>
            <p>{isStarred ? 'Added ✔ ' : 'Add to list + '}</p>
          </Wishlist>
        </button>
      </div>
    </StyledShowCards>
  );
};

export default ShowCard;
