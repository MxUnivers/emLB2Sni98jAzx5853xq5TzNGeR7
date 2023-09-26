import React from 'react'
import { app_bg } from '../../utlis/config';
import { routing } from '../../utlis/routing';
import { OffreGetAllCategory } from '../../action/api/offres/OffresAction';
import LoadingCompo1 from '../loading/LoadingCompo1';

const CategoryHome = () => {

    const { isLoading, error, category, category2 } = OffreGetAllCategory();




    return (
        <section class="py-20 dark:bg-neutral-100">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-5">
                    <div class="text-center">
                        <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Les Catégories de jobs</h3>
                        <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">
                            {`
                        Publiez une offre d'emploi pour nous décrire votre projet. Nous vous mettrons rapidement en relation avec les freelances adéquats.
                        `}
                        </p>
                    </div>
                </div>



                {
                    isLoading ?
                        (<LoadingCompo1 text={"Loading ..."} />) :
                        error ?
                            <p>Une erreur est survenue ...</p> :
                            (
                                <div class="grid grid-cols-12 gap-5">
                                    {
                                        category.map((item) => {
                                            return (
                                                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                                                    <div class="mt-4">
                                                        <div
                                                            class="px-6 py-5 transition-all duration-500 ease-in-out cursor-pointer lg:py-10 hover:-translate-y-2">
                                                            <div
                                                                class={`job-categorie h-10 w-10 bg-blue-900/70 rounded-lg text-center leading-[4.4] mx-auto `}>
                                                                <i class="uim uim-layers-alt"></i>
                                                            </div>
                                                            <div class="mt-4 text-center">
                                                                <a href="job-categories.html" class="text-gray-900">
                                                                    <h5 class="text-lg dark:text-gray-600">{item}</h5>
                                                                </a>
                                                                {
                                                                    /*<p class="mt-1 font-medium text-gray-500 dark:text-gray-300">2024 Jobs</p> */
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )

                }


                <div class="grid grid-cols-1">
                    <div class="mt-5 text-center">
                        <a href={`/${routing.job_list}`}
                            class="text-white border-transparent bg-blue-800/70 btn hover:-translate-y-2">
                            vois plus Jobs
                            <i class="uil uil-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CategoryHome