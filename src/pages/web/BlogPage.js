import React, { useEffect, useState } from 'react'
import BlogAll from '../../action/api/blog/BlogAction';
import moment from 'moment';
import BlogCard from '../../components/blog/BlogCard';
import Carousel from 'react-multi-carousel';
import LoadingBlogBarner from '../../components/loading/LoadingBlogBarner';
import LoadingBlogContainer from '../../components/loading/LoadingBlogBarner2';
import BlogBarnerCard from '../../components/blog/BlogBarnerCard';

const BlogPage = () => {

    const { isLoading, error, blogs, blogs2 } = BlogAll();



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (


        <div class="main-content">
            <div class="page-content mt-28">







                <div class="max-w-screen-xl mx-auto">

                    <main class="mt-10">
                        {
                            isLoading ?
                                <Carousel autoPlay transitionDuration={5} infinite responsive={responsive}>
                                    {
                                        [1, 1].map(() => {
                                            return (
                                                <div class="mx-3 my-2">
                                                    <LoadingBlogBarner />
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                                :
                                error ?
                                    <p>une erreur est survenue</p>
                                    :
                                    (
                                        <Carousel autoPlay transitionDuration={5} infinite responsive={responsive}>
                                            {
                                                blogs.map((item) => {
                                                    return (
                                                        <BlogBarnerCard data={item} />
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    )
                        }

                        <div class="w-full container-fluid flex flex-wrap  mt-10 mb-10">

                            <section class="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                                {
                                    isLoading ?
                                        (
                                            [1, 1, 1, 1, 1].map(() => {
                                                return (
                                                    <div class="mx-3 py-3">
                                                        <LoadingBlogContainer />
                                                    </div>
                                                )
                                            })
                                         ) :
                                        error ?
                                            <p>Une erreur est survenue</p>
                                            :

                                            blogs.map((item) => {
                                                return (
                                                    <BlogCard item={item} />
                                                )
                                            })
                                }
                            </section>


                            <div class="w-full px-3">

                                <div class="mb-4">
                                    <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                                    <ul>
                                        <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                            <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                                                <span class="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                                                Nutrition
                                                <span class="text-gray-500 ml-auto">23 articles</span>
                                                <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                            </a>
                                        </li>
                                        <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                            <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                                                <span class="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                                                Food & Diet
                                                <span class="text-gray-500 ml-auto">18 articles</span>
                                                <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                            </a>
                                        </li>
                                        <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                            <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                                                <span class="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                                                Workouts
                                                <span class="text-gray-500 ml-auto">34 articles</span>
                                                <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                            </a>
                                        </li>
                                        <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                            <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                                                <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                                                Immunity
                                                <span class="text-gray-500 ml-auto">9 articles</span>
                                                <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div class="border border-dotted"></div>


                                <div class="p-1 mt-4 mb-4">
                                    <h5 class="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
                                    <p class="text-gray-600">
                                        Subscribe to our newsletter. We deliver the best health related articles to your inbox
                                    </p>
                                    <input placeholder="your email address"
                                        class="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
                                    <button class="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                                        Subscribe
                                    </button>
                                </div>


                                <div class="border border-dotted"></div>

                            </div>

                        </div>
                    </main>

                </div>

            </div>
        </div >
    )
}

export default BlogPage;
