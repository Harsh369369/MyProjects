import React, { useEffect } from 'react';

const LoadingPage = ({ nextPage }) => {

  useEffect(() => {
    const timeout = setTimeout(
      nextPage, 5000);
    return () => clearTimeout(timeout);
  }, [nextPage]);

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4'>
      
      <div className='border-4 sm:border-8 rounded-full border-solid border-yellow-500 border-t-yellow-400 mx-auto my-0' id='loader' style={{ width: '5vw', height: '5vw'}}></div>
      <p className='text-sm sm:text-2xl mx-1' style={{ fontWeight: 'bold' }}>Finding learning path recommendations for you based on<br></br> your responses</p>

    </div>
  );
}

export default LoadingPage;