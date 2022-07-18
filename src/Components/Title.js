import React from 'react';

const Title = ({ title, subtitle1, subtitle2 }) => {
  return (
    <div>
      <h1 align="center">{title}</h1>
      <h3 align="center">{subtitle1}</h3>
      <h4 align="center">{subtitle2}</h4>
    </div>
  );
};

export default Title;
