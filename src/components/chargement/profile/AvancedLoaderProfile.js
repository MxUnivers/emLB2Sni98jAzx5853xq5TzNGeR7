import React from 'react'

const AvancedLoaderProfile = () => {

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="loader-container">
                <div className="loader-item w-32 h-32 bg-gray-300 rounded-full animate-pulse my-3"></div>
                <div className="loader-item w-40 h-6 bg-gray-300 rounded-full animate-pulse mb-4"></div>
                <div className="loader-item w-28 h-4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
                <div className="loader-item w-60 h-3 bg-gray-300 rounded-full animate-pulse mb-4"></div>

            </div>
        </div>
    );
};


export default AvancedLoaderProfile


