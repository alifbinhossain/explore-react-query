import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-screen bg-gray-400 flex items-center justify-center'>
      <ScaleLoader color='#000' loading={true} />
    </div>
  );
};

export default Loader;
