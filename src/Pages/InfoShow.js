import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getAPI } from '../misc/fetchAPI';

const InfoShow = () => {
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(null);
  console.log(id);
  useEffect(() => {
    getAPI(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(ans => {
      setShowInfo(ans);
    });
  }, [id]);
  console.log(showInfo);
  return <div>This is Show Page</div>;
};

export default InfoShow;
