import React, { useEffect, useState } from 'react'
import { BlogAll } from '../../action/api/blog/BlogAction';
import moment from 'moment';
import BlogCard from '../../components/blog/BlogCard';

const BlogPage = () => {
    const [blogs, setblogs] = useState([]);
    const [blogs2, setblogs2] = useState([]);

    useEffect(() => {
        BlogAll(setblogs, setblogs2)
    }, [])
    return (


        <div class="main-content">
            <div class="page-content mt-28">







                <div class="max-w-screen-xl mx-auto">

                    <main class="mt-10">
                        <div class="block md:flex md:space-x-2 px-2 lg:p-0">
                            <a
                                class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
                                style={{ height: "24em" }}
                                href="#"
                            >
                                <div class="absolute left-0 bottom-0 w-full h-full z-10"
                                    style={{ backgroundImage: `linear-gradient(180deg,transparent,rgba(0,0,0,.7))` }}></div>
                                <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                                <div class="p-4 absolute bottom-0 left-0 z-20">
                                    <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>
                                    <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                                        Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                                    </h2>
                                    <div class="flex mt-3">
                                        <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                            class="h-10 w-10 rounded-full mr-2 object-cover" />
                                        <div>
                                            <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                                            <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a class="w-full md:w-1/3 relative rounded"
                                style={{ height: "24em" }}
                                href="#"
                            >
                                <div class="absolute left-0 top-0 w-full h-full z-10"
                                    style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}>
                                </div>
                                <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                                <div class="p-4 absolute bottom-0 left-0 z-20">
                                    <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
                                    <h2 class="text-3xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit.</h2>
                                    <div class="flex mt-3">
                                        <img
                                            src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                                            class="h-10 w-10 rounded-full mr-2 object-cover" />
                                        <div>
                                            <p class="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
                                            <p class="font-semibold text-gray-400 text-xs"> 15 Aug </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="w-full container-fluid flex flex-col mt-10 mb-10">
                           
                            <section class="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                                {
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
