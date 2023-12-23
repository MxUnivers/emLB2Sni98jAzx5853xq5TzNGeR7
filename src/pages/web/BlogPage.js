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


        <div className="main-content">
            <div className="page-content mt-16">







                <div className="max-w-screen-xl mx-auto">

                    <main className="mt-10">
                        {
                            isLoading ?
                                <Carousel autoPlay transitionDuration={5} infinite responsive={responsive}>
                                    {
                                        [1, 1,1].map(() => {
                                            return (
                                                <div className="mx-3 my-2">
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
                                                        <div className="py-3 px-1 ">
                                                        <BlogBarnerCard data={item} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    )
                        }

                        <div className="w-full container-fluid flex flex-wrap  mt-10 mb-10">

                            <section className="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    isLoading ?
                                        (
                                            [1, 1, 1, 1, 1].map(() => {
                                                return (
                                                    <div className="mx-3 py-3">
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


                            <div className="w-full px-3">
                                <div className="border border-dotted"></div>
                            </div>

                        </div>
                    </main>

                </div>

            </div>
        </div >
    )
}

export default BlogPage;
