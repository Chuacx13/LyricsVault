import React from 'react';
import loading from '../assets/loading.gif';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={loading} alt="loading.." />
    </div>
  )
}

export default Loading