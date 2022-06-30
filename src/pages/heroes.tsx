import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '@shared/Loader/Loader';
import Error from '@shared/Error/Error';

const heroes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className='container'>
      <h1>This is Heroes page</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default heroes;
