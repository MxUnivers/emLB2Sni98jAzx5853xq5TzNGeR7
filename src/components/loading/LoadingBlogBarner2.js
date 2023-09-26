import React from 'react'

const LoadingBlogContainer = () => {
    return (
        <div class=" p-2 sm:p-4 h-full rounded-2xl flex flex-col sm:flex-row gap-5 select-none ">
            <div class="h-[250px] w-full bg-gray-200 animate-pulse" ></div>
            <div class="flex flex-col flex-1 gap-5 sm:p-2">
                <div class="flex flex-1 flex-col gap-3">
                    <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
                    <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                </div>
                <div class="mt-auto flex gap-3">
                    <div class="bg-gray-200 w-full h-8 animate-pulse rounded-full" ></div>
                    <div class="bg-gray-200 w-full h-8 animate-pulse rounded-full ml-auto" ></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingBlogContainer;