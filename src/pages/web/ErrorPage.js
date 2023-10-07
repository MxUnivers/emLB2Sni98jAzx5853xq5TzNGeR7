import React from 'react'
import { BiArrowBack } from "react-icons/bi";



const ErrorPage = () => {
  return (
    <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
        <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Page non trouvé</p>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Cette pas n{"'"}est pas disponible</p>
        <a href="#"
          onClick={() => {
            window.history.back();
          }}
          class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
          <BiArrowBack />
          <span>Retour</span>
        </a>
      </div>
      <div class="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <img src='img/undraw_Not_found_re_bh2e.png' />
      </div>
    </div>
  )
}

export default ErrorPage;