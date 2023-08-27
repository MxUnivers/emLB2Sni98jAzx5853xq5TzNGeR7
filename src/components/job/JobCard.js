import React from 'react'

const JobCard = ({ data }) => {
    return (
        <div
            class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600 ">
            <div
                class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-amber-800/70">
                <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i
                    class="mdi mdi-star"></i></a>
            </div>
            <div class="p-4">
                <div class="grid items-center grid-cols-12">
                    <div class="col-span-12 lg:col-span-2">
                        <div class="mb-4 text-center mb-md-0">
                            <a href="company-details.html"><img
                                src={data.logo} alt=""
                                class="mx-auto img-fluid h-[100px] w-[100px] rounded-3" /></a>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-3">
                        <div class="mb-2 mb-md-0">
                            <h5 class="mb-1 fs-18"><a href="job-details.html"
                                class="text-gray-900 dark:text-gray-50">{data.titre}</a>
                            </h5>
                            <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">{data.entreprise}</p>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-3">
                        {
                            data.lieu ?
                                <div class="mb-2 lg:flex">
                                    <div class="flex-shrink-0">
                                        <i
                                            class="mr-1 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 mdi mdi-map-marker"></i>
                                    </div>
                                    <p class="mb-0 text-gray-500 dark:text-gray-300">{data.lieu}</p>
                                </div>
                                :
                                null
                        }
                    </div>

                    <div class="col-span-12 lg:col-span-2">
                        <div>
                            <p class="mb-2 text-gray-500 dark:text-gray-300">
                            <span
                                class="text-amber-900/70">
                                $</span>{data.salaire}/mois
                            </p>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-2">
                        <div class="flex flex-wrap gap-1.5">
                            <span
                                class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full
                                Time</span>
                            <span
                                class="badge bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">Private</span>
                        </div>
                    </div>

                </div>

            </div>
            <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 lg:col-span-4">
                        <div>
                            <p class="mb-0 text-gray-500 dark:text-gray-300"><span
                                class="text-gray-900 dark:text-gray-50">Experience
                                :</span> 1-2 annnées</p>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-6">
                        <div>
                            <p class="mb-0 text-gray-500 dark:text-gray-300"><span
                                class="text-gray-900 dark:text-gray-50">Notes
                                :</span>
                                {`languages only differ in their grammar.`} </p>
                        </div>
                    </div>

                    <div class="col-span-3 lg:col-span-2">
                        <div class="text-start text-md-end dark:text-gray-50">
                            <a href="#applyNow" data-bs-toggle="modal">Apply Now <i
                                class="mdi mdi-chevron-double-right"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default JobCard