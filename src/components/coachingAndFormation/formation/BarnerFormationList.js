import React from 'react'

const BarnerFormationList = () => {
    const  bgImg =  "img/undraw_Performance_overview_re_mqrq.png"
    return (
        <section class="relative pt-2 sm:pt-6 md:pt-4 lg:pt-5">
            <div aria-hidden="true" class="absolute inset-0 top-56 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                <div class="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="grid gap-6 lg:grid-cols-2">
                    <div class="text-center sm:mx-auto sm:w-3/4 md:w-2/4 lg:w-auto">
                        <img class="m-auto h-16 w-auto" src="../images/clients/airbnb.svg" loading="lazy" alt="airbnb"
                            width="" height="" />
                        <h1 class="relative mt-6 text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                            Seance de Coachine & formation sur 
                            <span
                                class="relative bg-gradient-to-r from-primaryLight to-secondary bg-clip-text px-2 text-5xl text-transparent dark:to-secondaryLight sm:text-6xl">Jouman</span>
                        </h1>
                        <p class="my-6 text-gray-600 dark:text-gray-300">
                        Developpez vos compétences vers le monde de l{"'"}entreprise
                        </p>
                    </div>
                    <img class="h-auto rounded-3xl object-cover" src={bgImg} alt="abstract background"
                        width="1000" height="668" />
                </div>
                <div
                    class="relative -mx-4 mt-4 flex snap-x snap-mandatory justify-between gap-6 overflow-x-auto border-b border-gray-100 px-4 py-8 dark:border-gray-800 sm:-mx-12 sm:px-12 lg:mx-0 lg:mt-16 lg:border-y lg:px-0">
                    <div class="snap-center text-center sm:text-left">
                        <div
                            class="mx-auto mb-4 flex h-12 w-12 rounded-xl border border-primary/20 bg-white shadow-md shadow-primary/10 dark:border-gray-700 dark:bg-gray-800 sm:mr-auto sm:ml-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="m-auto h-6 w-6 text-primary dark:text-blue-300">
                                <path class="text-primaryLight" fill-rule="evenodd"
                                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clip-rule="evenodd" />
                                <path
                                    d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                            </svg>
                        </div>
                        <h2 class="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">The
                            lowest price</h2>
                        <p class="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">Some text here</p>
                    </div>
                    <div class="snap-center text-center sm:text-left">
                        <div
                            class="mx-auto mb-4 flex h-12 w-12 rounded-xl border border-purple-500/20 bg-white shadow-md shadow-purple-600/10 dark:border-gray-700 dark:bg-gray-800 sm:mr-auto sm:ml-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="m-auto h-6 w-6 text-purple-600">
                                <path class="text-purple-300"
                                    d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                <path
                                    d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                            </svg>
                        </div>
                        <h2 class="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">The
                            fastest on the market</h2>
                        <p class="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">Some text here</p>
                    </div>
                    <div class="snap-center text-center sm:text-left">
                        <div
                            class="mx-auto mb-4 flex h-12 w-12 rounded-xl border bg-white shadow-md shadow-yellow-600/10 dark:border-gray-700 dark:bg-gray-800 sm:mr-auto sm:ml-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="m-auto h-6 w-6 text-yellow-700">
                                <path class="text-yellow-500"
                                    d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                                <path fill-rule="evenodd"
                                    d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h2 class="mx-auto w-max text-lg font-semibold text-gray-700 dark:text-white sm:ml-0 sm:w-auto">The
                            most loved</h2>
                        <p class="mx-auto mt-1 w-max text-gray-500 sm:ml-0 sm:w-auto">Some text here</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BarnerFormationList
