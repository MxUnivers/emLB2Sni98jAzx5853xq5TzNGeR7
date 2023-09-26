import React, { useEffect, useState } from 'react'
import BlogAll from '../../action/api/blog/BlogAction';
import moment from 'moment';
import BlogCard from '../../components/blog/BlogCard';
import Carousel from 'react-multi-carousel';
import LoadingBlogBarner from '../../components/loading/LoadingBlogBarner';
import LoadingBlogContainer from '../../components/loading/LoadingBlogBarner2';
import BlogBarnerCard from '../../components/blog/BlogBarnerCard';
import { useLocation } from 'react-router-dom';

const BlogDetailPage = () => {

    const { isLoading, error, blogs, blogs2 } = BlogAll();

    const  location  =  useLocation();
    const  {item} =  location.state;




    return (
        <div class="main-content">
            <div class="page-content mt-28">

                <div class="max-w-screen-xl mx-auto">


                    <main class="mt-10">

                        {
                            item && item.customerName && item.customerPhoto && item.areaPost ?
                                <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
                                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                                        style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
                                    <img 
                                    src={item.coverPicture}
                                     class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                                    <div class="p-4 absolute bottom-0 left-0 z-20">
                                        <a href="#"
                                            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{item.areaPost}</a>
                                        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                                            {item.title}
                                        </h2>
                                        <div class="flex mt-3">
                                            <img src={item.customerPhoto}
                                                class="h-10 w-10 rounded-full mr-2 object-cover" />
                                            <div>
                                                <p class="font-semibold text-gray-200 text-sm"> {item.customerName} </p>
                                                <p class="font-semibold text-gray-400 text-xs"> {moment(item.createdAt).format("DD/MM/YYYY")} {moment(item.createdAt).format("HH:MM")} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                null
                        }

                        <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        {
                            item && item.content ?
                            <div class="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: item.content }} />
                            :
                            null
                        }
                        </div>
                    </main>



                </div>

            </div>
        </div >
    )
}

export default BlogDetailPage;
