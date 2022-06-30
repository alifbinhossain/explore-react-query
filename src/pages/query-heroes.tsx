import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '@utlis/getData';
import Loader from '@shared/Loader/Loader';
import Error from '@shared/Error/Error';

interface QueryProps {
  isLoading: boolean;
  isError: boolean;
  data: {
    status: number;
    data: Array<{ id: number; name: string; alterEgo: string }>;
  };
  error: {
    message: string;
  };
}

const queryHeroes = () => {
  const { isLoading, isError, data, error }: QueryProps = useQuery(
    'heroes',
    () => getData('http://localhost:4000/superheroes')
  );

  console.log(isError);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error.message} />;
  }

  return (
    <div className='container'>
      <h1>This is Query Heroes</h1>
      {data?.data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default queryHeroes;
