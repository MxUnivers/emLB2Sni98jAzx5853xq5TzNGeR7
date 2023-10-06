import React, { useState } from 'react'
import { FormationGetById } from '../../action/api/formations/FormationAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import LoadinButton from '../../components/loading/LoadinButton';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';

const FormationdetailPage = () => {

    var idFormation = localStorage.getItem(localvalue.formationId)
    const { isLoading, error, formation } = FormationGetById(idFormation);



    return (
        <div class="main-content">
            <div class="page-content mt-28">

                <section class="mt-16 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
                    <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                        <div class="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6">
                            <div class="sticky top-24 hidden h-max lg:block">
                                <div class="sticky">
                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">Modules</span>
                                    <div class="mt-6 mr-[-0.80rem] space-y-4 text-2xl text-gray-500 dark:text-gray-400">
                                        <ul class="relative space-y-3 border-l px-6 text-base dark:border-gray-700">
                                            <div id="link-indicator"
                                                class="link-indicator link-indicator absolute top-0 -left-[3.5px] z-[1] h-6 w-1.5 rounded-full border-2 border-white bg-primary transition-[top] dark:border-gray-900 dark:bg-secondaryLight"
                                                style={{ top: "0px" }}></div>
                                            {
                                                isLoading ?
                                                    (<LoadinButton text={"Module de formation"} />) :
                                                    error ? (
                                                        <LoadingCompo1 text={"veillez recger la pages"} />
                                                    ) :
                                                        formation && formation.modules && formation.modules.length > 0 ?
                                                            formation.modules.map((item) => {
                                                                return (
                                                                    <li data-target="company"
                                                                        class="section-link active-link relative before:absolute before:top-0 before:bottom-0 before:-left-6 before:my-auto before:h-[1px] before:w-3 before:bg-gray-200 dark:before:bg-gray-800">
                                                                        <a href="#company"
                                                                            class="py-2 duration-300 hover:text-primary dark:hover:text-secondaryLight">
                                                                            {item.moduleLabel}
                                                                        </a>
                                                                    </li>
                                                                )

                                                            })
                                                            :
                                                            <div>
                                                                <LoadinButton text={"Modules de formation ..."} />
                                                            </div>
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-12 text-gray-600 dark:text-gray-400 lg:col-span-4 xl:col-span-4 xl:col-start-2">
                                <div class="space-y-6">
                                    {
                                        formation && formation.formationTitle ?
                                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                                                {formation.formationTitle}
                                            </h2> :
                                            <div>...</div>
                                    }

                                    {
                                        formation && formation.logo ?
                                            <img class="rounded-2xl h-[300px] w-full " src={formation.logo} loading="lazy"
                                                alt="abstract background " />
                                            : null
                                    }
                                    {
                                        formation && formation.description ?
                                            <div class="space-y-4">
                                                <p>{formation.description}</p>
                                            </div>
                                            : null
                                    }
                                </div>

                                {
                                    formation.modules.map((item, index) => {
                                        return (
                                            <div class="my-5">
                                                <div class="space-y-6">
                                                    <h2 class="text-xxl font-bold text-blue-800 dark:text-white md:text-2xl">
                                                        {item.moduleLabel ? `module ${index + 1}  : `.toLocaleUpperCase() : ""}
                                                        {item.moduleLabel} </h2>
                                                </div>

                                                {
                                                    item.lecons.map((item, index) => {
                                                        return (
                                                            <div class="space-y-10">
                                                                <h2 class="text-lg  text-gray-800 dark:text-white md:text-xl font-bold"> Lecon {index + 1} :  {item.leconTitle}</h2>

                                                                {
                                                                    item && item.coverPicture ?
                                                                        <div class="grid grid-cols-1 lg:ml-1 xl:mx-5">
                                                                            <img class="h-96 w-full rounded-2xl object-cover" src={item.coverPicture}
                                                                                alt="abstract background" width="1556" height="778" />
                                                                        </div> : null
                                                                }

                                                                <div class="space-y-4">
                                                                    <div class="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: item.leconContent }} />
                                                                </div>


                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        )
                                    })
                                }
                                {
                                    /*<div class="space-y-6">
                                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Sales inscreased by
                                        360%</h2>
                                    <div class="space-y-4">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corporis dolores
                                            dolorem voluptas expedita, nulla explicabo qui aliquid facilis quam, facere voluptatem
                                            accusantium minus recusandae, exercitationem ipsam alias impedit.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium placeat
                                            distinctio ratione reprehenderit quam quasi quia, dolores facilis quod cumque tempore?
                                            Dolorem nisi, aperiam harum nam repellendus deleniti odio.</p>
                                    </div>
                                </div> */
                                }
                            </div>
                        </div>
                        {
                            /*<div class="mx-auto py-20 lg:w-3/5">
                            <h3 class="text-center text-2xl font-semibold text-gray-800 dark:text-white">Next case study</h3>
                            <div class="mt-8 grid">
                                <a class='rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'
                                    href='story.html'>
                                    <div class="relative gap-6 sm:flex">
                                        <div
                                            class="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-900/60 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3">
                                            <img class="m-auto w-auto sm:h-16 lg:h-12" src="../images/clients/nuxt.svg"
                                                loading="lazy" alt="nuxtjs logo" width="" height="" />
                                        </div>
                                        <div class="mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3">
                                            <div class="">
                                                <h4 class="text-xl font-semibold text-gray-800 dark:text-white">Increased sales by
                                                    360%</h4>
                                                <p class="mt-2 text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at
                                                    reprehenderit, veritatis harum et rerum.</p>

                                                <div
                                                    class="relative my-4 before:absolute before:inset-y-0 before:-left-0.5 before:z-[1] before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-gray-400 after:absolute after:inset-y-0 after:-right-0.5 after:z-[1] after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-gray-400">
                                                    <div aria-hidden="true"
                                                        class="absolute inset-0 m-auto h-px w-full border-t border-dashed dark:border-gray-600">
                                                    </div>
                                                    <div class="relative flex items-center justify-between pl-12 pr-6">
                                                        <div
                                                            class="relative flex items-center before:absolute before:inset-y-0 before:-right-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-red-400 dark:bg-gray-800">
                                                            <span
                                                                class="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-sm tracking-wider text-red-900 dark:border-red-300/40 dark:bg-red-500/10 dark:text-red-300">132k</span>
                                                        </div>
                                                        <div
                                                            class="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400 dark:bg-gray-800">
                                                            <span
                                                                class="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-sm tracking-wider text-green-900 dark:border-green-300/40 dark:bg-green-500/10 dark:text-green-300">396k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at
                                                    reprehenderit, veritatis harum et rerum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div> */
                        }
                    </div>
                </section>










            </div>
        </div>
    )
}

export default FormationdetailPage;