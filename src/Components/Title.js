import React from 'react';

const Title = ({ title, subtitle1, subtitle2 }) => {
  return (
    <div>
      <h1 align="center" className="SiteName">
        {title}
      </h1>
      <h3 align="center" className="subtitle">
        {subtitle1}
      </h3>
      <h4 align="center" className="subtitle">
        {subtitle2}
      </h4>
    </div>
  );
};

export default Title;
