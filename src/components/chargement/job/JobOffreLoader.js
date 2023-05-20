import React from 'react'


const JobOfferLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader-container">
        <div className="loader-item w-80 h-8 bg-gray-300 rounded-full animate-pulse mb-4"></div>
        <div className="loader-item w-60 h-6 bg-gray-300 rounded-full animate-pulse mb-4"></div>
        <div className="loader-item w-96 h-4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
        <div className="loader-item w-96 h-4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
        <div className="loader-item w-96 h-4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
        <div className="loader-item w-80 h-3 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default JobOfferLoader;
