import React from 'react'

const FormationCard = ({ item }) => {

    return (
        <a class='rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none'
            href='#'>
            <div class="relative gap-6 sm:flex">
                <div
                    class="-mx-6 -mt-6 m-2 flex rounded-2xl border border-dashed bg-gray-100 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    {
                        item && item.logo ?
                        <img class="m-auto w-full h-full rounded-3xl sm:h-16 lg:h-12" src={item.logo}
                        loading="lazy" alt="nuxtjs logo" />:
                        /*<img class="m-auto w-auto sm:h-16 lg:h-12" src="../images/clients/nuxt.svg"
                        loading="lazy" alt="nuxtjs logo" width="" height="" /> */
                        null
                    }
                </div>
                <div class="mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3">
                    <div class="">
                        <h4 class="text-xl font-semibold text-gray-800 dark:text-white">{item.formationTitle}</h4>
                        <p class="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">{item.description}</p>

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

                        {item && item.candidats ?
                            <p class="text-gray-600 dark:text-gray-400">
                                Candidat inscrit {item.candidats.length}
                            </p> :
                            null}

                    </div>
                </div>
            </div>
        </a>
    )
}

export default FormationCard;
