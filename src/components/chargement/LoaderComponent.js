import React from 'react'

const LoaderComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-blue-500 w-14 h-14 rounded-full animate-pulse m-1"></div>
            <div className="bg-blue-500 w-14 h-14 rounded-full animate-pulse m-1"></div>
            <div className="bg-blue-500 w-14 h-14 rounded-full animate-pulse m-1"></div>
        </div>
    )
}

export default LoaderComponent
