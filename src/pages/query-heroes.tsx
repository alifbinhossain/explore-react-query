import React, { useState } from 'react';
import Loader from '@shared/Loader/Loader';
import Error from '@shared/Error/Error';
import { useFetchingData } from '@hooks/useFetchingData';

interface QueryProps {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  refetch: Function;
  data: {
    data: Array<{ id: number; name: string; alterEgo: string }>;
  };
  error: {
    message: string;
  };
}

const queryHeroes = () => {
  const { isLoading, isError, isFetching, error, data, refetch }: QueryProps =
    useFetchingData({
      name: 'heroes',
      url: 'http://localhost:4000/superheroes',
    });

  console.log({ isLoading, isFetching });
  console.log({ data });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error.message} />;
  }

  return (
    <div className='container'>
      <h1>This is Query Heroes</h1>
      <button onClick={() => refetch()}>Fetch Heroes</button>
      {data?.data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default queryHeroes;
