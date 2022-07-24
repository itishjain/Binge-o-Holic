import React from 'react';

const Details = ({ summary, status, network, premiered }) => {
  return (
    <div className="Other-Details">
      <h3>Summary</h3>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      <p>
        <span className="Details_page_span">Status : </span>
        {status ? `${status}` : 'No Status Available'}
      </p>
      <p>
        <span className="Details_page_span">Available on : </span>
        {network == null ? 'No Available ' : `${network.name} `}
        Network
      </p>
      <p>
        <span className="Details_page_span">Premiered on -&gt; </span>
        {premiered ? `${premiered}` : 'No Premeire Information Available'}
      </p>
    </div>
  );
};

export default Details;
