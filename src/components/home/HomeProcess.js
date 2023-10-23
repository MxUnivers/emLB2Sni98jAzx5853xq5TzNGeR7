import React from 'react'

const HomeProcess = () => {
  return (
    <section class="py-20 dark:bg-neutral-100">
                <div class="container mx-auto">
                    <div class="nav-tabs round-pill">
                        <div class="grid items-center grid-cols-12 gap-5">
                            <div class="col-span-12 lg:col-span-6">
                                <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Comment postuler en tant qu{"'"}étudiant</h3>
                                <p class="text-gray-500 dark:text-gray-300">
                                {
                                    `Nous vous mettrons rapidement en relation avec les Entreprise adéquats.`
                                }
                                </p>

                                <div class="mt-5">
                                    <ul class="text-gray-700 nav">
                                        <li class="w-full mb-[22px]">
                                            <a href="javascript:void(0);" data-tw-toggle="tab"
                                                data-tw-target="v-pills-home-tab"
                                                class="relative inline-block w-full p-2 active group/active"
                                                aria-current="page">
                                                <div
                                                    class="after:content-[''] after:h-[65px] after:border after:border-dashed after:border-gray-100 after:absolute ltr:after:left-7 rtl:after:right-7 after:-bottom-5 after:group-[.active]:bg-violet-300 hidden md:block">
                                                </div>
                                                <div class="flex">
                                                    <div
                                                        class="shrink-0 h-10 w-10 rounded-full text-center bg-blue-800/70">
                                                        <span
                                                        class=" text-16 leading-[2.5] text-white dark:text-white">1</span>
                                                    </div>
                                                    <div class="grow ltr:ml-4 rtl:mr-4">
                                                        <h5
                                                            class="fs-18 text-xl font-semibold mb-3 mx-5 text-gray-900 group-data-[theme-color=violet]:group-[.active]:text-violet-500 group-data-[theme-color=sky]:group-[.active]:text-sky-500 dark:text-gray-50">
                                                            Connecter vous pour postuler aux différent offres </h5>
                                                        <p class="mt-1 mb-2 text-xs text-gray-500 dark:text-gray-300">
                                                        {
                                                            `
                                                            Nous vous connaissons mieux que quiconque. Grâce à votre profil, 
                                                            nous vous présentons des emplois qui correspondent à vos compétences, à vos ambitions et à vos
                                                             rêves. Fini le temps perdu à fouiller parmi des milliers d'annonces qui 
                                                             ne vous concernent pas.
                                                            `
                                                        }    
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="w-full mb-[22px]">
                                            <a href="javascript:void(0);" data-tw-toggle="tab"
                                                data-tw-target="v-pills-profile"
                                                class="relative inline-block w-full p-2 group" aria-current="page">
                                                <div
                                                    class="after:content-[''] after:h-[65px] after:border after:border-dashed after:border-gray-100 after:absolute ltr:after:left-7 rtl:after:right-7 after:-bottom-5 after:group-[.active]:bg-violet-300 hidden md:block">
                                                </div>
                                                <div class="flex">
                                                    <div
                                                    class="shrink-0 h-10 w-10 rounded-full text-center bg-blue-800/70">
                                                        <span
                                                        class=" text-16 leading-[2.5] text-white dark:text-white">2</span>
                                                    </div>
                                                    <div class="grow ltr:ml-4 rtl:mr-4">
                                                        <h5
                                                            class="fs-18 text-xl font-semibold mb-3 mx-5 text-gray-900 group-[.active]:text-violet-500 dark:text-gray-50">
                                                            Trouver votre job</h5>
                                                        <p class="mt-1 mb-2 text-xs text-gray-500">
                                                        {
                                                            `Nous collaborons avec 
                                                            les meilleures entreprises pour vous offrir 
                                                            des opportunités d'emploi exceptionnelles que 
                                                            vous ne trouverez nulle part ailleurs.`
                                                        }
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="w-full mb-[22px]">
                                            <a href="javascript:void(0);" data-tw-toggle="tab"
                                                data-tw-target="v-pills-messages"
                                                class="relative inline-block w-full p-2 group" aria-current="page">
                                                <div class="flex">
                                                    <div
                                                    class="shrink-0 h-10 w-10 rounded-full text-center bg-blue-800/70">
                                                        <span
                                                            class=" text-16 leading-[2.5] text-white dark:text-white">3</span>
                                                    </div>
                                                    <div class="grow ltr:ml-4 rtl:mr-4">
                                                        <h5
                                                            class="fs-18 text-xl font-semibold mb-3 mx-5 text-gray-900 group-[.active]:text-violet-500 dark:text-gray-50">
                                                           Postuler</h5>
                                                        <p class="mt-1 mb-2 text-xs text-gray-500">
                                                        {
                                                            `Fini les heures perdues à parcourir des centaines 
                                                            d'annonces d'emploi. Nous avons simplifié le processus 
                                                            pour vous. Postulez en quelques clics et suivez l'état 
                                                            de vos candidatures en un clin d'œil.`
                                                        }
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <div class="tab-content">
                                    <div class="block tab-pane" id="v-pills-home-tab">
                                        <img src="assets/images/process-01.png" alt="" class="max-w-full"/>
                                    </div>
                                    <div class="hidden tab-pane" id="v-pills-profile">
                                        <img src="assets/images/process-02.png" alt="" class="max-w-full"/>
                                    </div>
                                    <div class="hidden tab-pane" id="v-pills-messages">
                                        <img src="assets/images/process-03.png" alt="" class="max-w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default HomeProcess;