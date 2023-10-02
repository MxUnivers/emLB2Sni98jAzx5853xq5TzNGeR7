import React from 'react'

const LoadingBlogContainer = () => {
    return (

        <div id="informational-banner" tabindex="-1" class=" animate-pulse top-52 left-0 z-50 flex flex-col justify-between w-full p-4 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="mb-4 md:mb-0 md:mr-4">
                <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white"></h2>
                <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"></p>
            </div>
            <div class="flex items-center flex-shrink-0">
                <a href="#" class="inline-flex items-center justify-center px-3 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-200 dark:bg-gray-100 dark:text-gray-200 dark:border-gray-200 dark:hover:text-white dark:hover:bg-gray-200">
                </a>
                <a href="#" class="inline-flex items-center justify-center px-3 py-2 mr-2 text-xs font-medium text-white bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 dark:bg-gray-300 dark:hover:bg-gray-300 focus:outline-none dark:focus:ring-gray-200">
                    </a>
                <button data-dismiss-target="#informational-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-200 hover:bg-gray-200 hover:text-gray-200 rounded-lg text-sm p-1.5 dark:hover:bg-gray-200 dark:hover:text-white">
                    
                    <span class="sr-only"></span>
                </button>
            </div>
        </div>

    )
}

export default LoadingBlogContainer;