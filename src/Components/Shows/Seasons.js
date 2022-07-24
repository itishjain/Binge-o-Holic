import React from 'react';

const Seasons = ({ seasons }) => {
  return (
    <div className="seasons_detail">
      <p>
        <span className="Seasons_page_span">Total Seasons : </span>
        {seasons.length}
      </p>
      <p>
        <span className="Seasons_page_span">Total Episodes : </span>
        {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
      </p>
      <div>
        <br />
        {seasons.map(season => (
          <div key={season.id}>
            <div>
              <p>
                <span className="Season_num">Season {season.number}</span>
              </p>
              <p>
                <span className="Seasons_page_span">Episodes: </span>
                {season.episodeOrder}
              </p>
            </div>
            <div>
              <span className="Seasons_page_span">Aired: </span>
              {season.premiereDate} <i>to</i> {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
