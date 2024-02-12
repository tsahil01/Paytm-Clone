import React from 'react';

export default function Loader() {
  return (
    <div className='flex justify-center'>
      <div className="h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
    </div>
  );
}