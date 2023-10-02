import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { optionPays } from '../../utlis/options/optionDivers';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';


const BarnerHome = () => {

    const bgImg1 = "img/gens-plan-moyen-obtenant-leur-diplome.jpg"
    const ImagList = [
        {
            titme: "",
            description: "",
            img: "img/gens-plan-moyen-obtenant-leur-diplome.jpg"
        },
        {
            titme: "",
            description: "",
            img: "img/portrait-etudiant-masculin-livres.jpg"
        },
        {
            titme: "",
            description: "",
            img: "img/groupe-afro-americains-travaillant-ensemble.jpg"
        }
    ]

    const navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section
            class="relative    py-28 bg-blue-700/75">
            <div class="container mx-auto">
                <div class="grid items-center grid-cols-12 gap-10">
                    <div class="col-span-12 lg:col-span-7">
                        <div class="mb-3 ltr:mr-14 rtl:ml-14">
                            <h6 class="mb-3 text-sm text-gray-900 uppercase dark:text-gray-50">Nous vaons + 150,000 jobs disponibles</h6>
                            <h1 class="mb-3 text-5xl font-semibold leading-tight text-white dark:text-gray-50">
                                Jouman , <br /> <span
                                    class="font-bold    group-data-[theme-color=blue]:text-blue-500">
                                    Premier site Africain de mercenas de compétences
                                </span>
                            </h1>
                            <p class="text-lg font-light text-gray-100 whitespace-pre-line dark:text-gray-100">
                                Trouvez des
                                emplois, créez des CV traçables et enrichissez vos candidatures.
                                soigneusement conçu après avoir analysé les besoins des différents secteurs d'activité.
                                secteurs d'activité.
                            </p>
                        </div>
                        <form action="#">
                            <div class="registration-form">
                                <div class="grid grid-cols-12 space-x-2">
                                    <div class="col-span-12 xl:col-span-4">
                                        <div class="mt-3 rounded-l filter-search-form filter-border mt-md-0">
                                            <i class="uil uil-briefcase-alt"></i>
                                            <input type="search" id="job-title"
                                                class="md:w-full w-full form-control filter-input-box placeholder:text-gray-200 placeholder:text-13 dark:text-gray-700"
                                                placeholder="Job, Company name..." />
                                        </div>
                                    </div>
                                    <div class="col-span-12 xl:col-span-4 rounded-3xl">
                                        <div class="mt-3 filter-search-form mt-md-0 rounded-3xl">
                                            <i class="uil uil-map-marker"></i>
                                            <select class="form-select form-control w-full  rounded-3xl" data-trigger name="choices-single-location"
                                                id="choices-single-location" aria-label="Default select example">
                                                {
                                                    optionPays.map((item) => {
                                                        return (
                                                            <option value="value">{item.label}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-span-12 xl:col-span-4">
                                        <div class="h-full mt-3">
                                            <button
                                                onClick={() => {
                                                    window.location.href = `/${routing.job_list}`
                                                }}
                                                class="btn  bg-gray-300 border rounded-lg border-transparent ltr:xl:rounded-l-none rtl:xl:rounded-r-none w-full py-[18px] text-white"
                                                type="button"><i class="uil uil-search me-1"></i> Trouver un job</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-span-12 lg:col-span-5">
                        <div class="relative mt-5 mt-lg-0 ms-xl-5">
                            <div>
                                <div class="absolute z-20 text-white text-8xl -top-12 -left-12">
                                    <i class="mdi mdi-format-quote-open"></i>
                                </div>
                                <div
                                    class="text-8xl absolute -top-[3.2rem] -left-[3.2rem] z-30 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                    <i class="mdi mdi-format-quote-open "></i>
                                </div>
                            </div>
                            <div class="swiper homeslider">
                                <Carousel responsive={responsive} autoPlay infinite transitionDuration={3} class="swiper-wrapper">
                                    {
                                        ImagList.map((item) => {
                                            return (
                                                <div class="swiper-slide">
                                                    <div class="text-center home-slide-box">
                                                        <img src={item.img} alt=""
                                                            class="max-w-full h-full rounded-3" />
                                                        <div class="bg-overlay"></div>
                                                        <div class="absolute bottom-0 p-4">
                                                            <h2 class="text-white font-secound fw-normal"> It looks perfect on
                                                                all major browsers, tablets,
                                                                and mobile devices.</h2>
                                                            <h6 class="text-white">- MichaeL Drake</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BarnerHome