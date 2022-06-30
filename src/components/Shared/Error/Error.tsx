import React from 'react';

const Error: React.FC<{
  error: string;
}> = ({ error }) => {
  return (
    <div className='container py-20'>
      <p className='text-center font-normal text-lg'>{error}</p>
    </div>
  );
};

export default Error;
