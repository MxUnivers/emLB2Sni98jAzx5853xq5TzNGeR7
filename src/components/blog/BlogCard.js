import moment from 'moment'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routing } from '../../utlis/routing';

const BlogCard = ({ item }) => {
    const navigate = useNavigate();
    return (

        <div
            onClick={() => {
                navigate(`/${routing.blog_details}`, { state: { item } })
            }}

            class="min-h-screen  flex items-center overflow-hidden py-5">
            <div class="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
                <div class="flex items-center justify-between px-4">
                    <div class="flex justify-between items-center py-4">
                        <img class="w-12 h-12 rounded-full" src={item.customerPhoto} alt="Alex" />
                        <div class="ml-3">
                            <h1 class="text-lg font-bold text-gray-800 cursor-pointer">{item.customerName}</h1>
                            <p class="text-xs text-gray-800 hover:underline cursor-pointer">
                                {moment(item.createdAt).format("DD/MM/YYYY")} à {moment(item.createdAt).format("HH:MM")}
                            </p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
                {item.coverPicture?
                    <img src={item.coverPicture} class="w-full h-[220px] rounded-lg bg-cover" alt="" />:
                    null
                }
                <div class="p-6">
                    <h1 class="text-xl font-bold text-gray-800 cursor-pointer line-clamp-2">{item.title}</h1>
                    <div clas="mt-3">
                        <button class="btn  btn-primary text-blue-700  py-1 px-3 text-xs">
                            {item.areaPost}
                        </button>
                    </div>
                    {
                        /**comment 
                         * 
                         <p class="text-lg font font-thin">Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots,</p>
                        */
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCard
