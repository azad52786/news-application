import React from 'react';

const Shimmer = () => {
  return (
    <div className='w-[300px] h-[400px] flex flex-col gap-y-3 p-2 rounded-lg bg-richblack-700 shadow-lg'>
      {/* Ensure full width for each component */}
      <div className='animate-pulse bg-richblack-500  bg-opacity-20 w-full rounded-md h-[200px] bg-gray-400'></div>
      <h1 className='animate-pulse bg-richblack-500  bg-opacity-20 w-[90%] rounded-md font-mono font-semibold text-lg md:text-xl h-12 bg-gray-400'></h1>
      {/* <div className='w-full h-fit'></div> */}
      <p className=' animate-pulse bg-richblack-500  bg-opacity-20 w-full h-6 rounded-md mt-1 bg-gray-400'></p>
      <p className='animate-pulse bg-richblack-500  bg-opacity-20 w-[60%] h-6 rounded-md mt-1 bg-gray-400'></p>
      <p className='animate-pulse bg-richblack-500  bg-opacity-20 w-[80%] h-6 rounded-md mt-1 bg-gray-400'></p>
    </div>
  );
};

export default Shimmer;

