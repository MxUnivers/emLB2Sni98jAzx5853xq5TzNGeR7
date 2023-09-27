import React from 'react'
import Carousel from 'react-multi-carousel';
import BlogAll from '../../action/api/blog/BlogAction';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { toast } from 'react-toastify';

const HomeBlog = () => {

    const navigate = useNavigate();
    const { isLoading, error, blogs, blogs2 } = BlogAll()

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section class="py-20 bg-gray-50 ">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-5">
                    <div class="mb-5 text-center">
                        <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Publication récentes</h3>
                        <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300"></p>
                    </div>
                </div>
                <Carousel responsive={responsive} infinite transitionDuration={5} autoPlay class="grid grid-cols-12 gap-5 justify-center items-center">



                    {
                        blogs.map((item) => {
                            return (
                                <div class="col-span-12 md:col-span-6 lg:col-span-4 ">
                                    <div onClick={() => {
                                        if (getAndCheckLocalStorage(localvalue.TYPEACCESS)) {
                                            toast.info("Vous n'êtes pas autorisé à lire cette publication vellez vous connecter")
                                        } else {
                                            setWithExpiration(localvalue.BlogID, item._id, dureeDeVie)
                                            navigate(`/${routing.blog_details}`, { state: { item } })
                                            setTimeout(() => {
                                                window.location.href = `/${routing.blog_details}`
                                            }, 1000);
                                        }
                                    }}
                                        class="p-2 mt-3 cusor-pointer transition-all duration-500 bg-white rounded shadow-lg shadow-gray-100/50 card dark:bg-neutral-800 dark:shadow-neutral-600/20 group/blog">
                                        <div class="relative overflow-hidden">
                                            <img src={item.coverPicture} alt="" class="rounded h-[200px] w-full " />
                                            <div
                                                class="absolute inset-0 hidden transition-all duration-500 rounded-md bg-black/30 group-hover/blog:block">
                                            </div>
                                            <div
                                                class="hidden text-white transition-all duration-500 top-2 left-2 group-hover/blog:block author group-hover/blog:absolute">
                                                <p class="mb-0 "><i class="mdi mdi-account text-light"></i> <a
                                                    href="javascript:void(0)" class="text-light user">{item.customerName}</a></p>
                                                <p class="mb-0 text-light date"><i class="mdi mdi-calendar-check"></i>
                                                    {moment(item.createdAt).format("DD/MM/YYYY")} {moment(item.createdAt).format("HH:MM")}
                                                </p>
                                            </div>
                                            {
                                                /*<div
                                                class="hidden bottom-2 right-2 group-hover/blog:block author group-hover/blog:absolute">
                                                <ul class="mb-0 list-unstyled">
                                                    <li class="list-inline-item"><a href="javascript:void(0)"
                                                        class="text-white"><i class="mdi mdi-heart-outline me-1"></i> 33</a>
                                                    </li>
                                                    <li class="list-inline-item"><a href="javascript:void(0)"
                                                        class="text-white"><i class="mdi mdi-comment-outline me-1"></i>
                                                        08</a></li>
                                                </ul>
                                            </div> */
                                            }
                                        </div>
                                        <div class="p-5">
                                            <a href="#" class="primary-link">
                                                <h5 class="mb-1 text-gray-900 font-bold line-clamp-2 fs-17 dark:text-gray-50 hover:underline">
                                                    {item.title}
                                                </h5>
                                            </a>
                                            <div class="mb-3 text-gray-500 dark:text-gray-300 line-clamp-1"
                                                dangerouslySetInnerHTML={{ __html: item.content }}
                                            />
                                            <button href=""
                                                class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                                voire plus <i class="align-middle mdi mdi-chevron-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </Carousel>
            </div>
        </section>

    )
}

export default HomeBlog
