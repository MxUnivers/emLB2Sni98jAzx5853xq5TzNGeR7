import React from 'react'

const JobCategoriLisPage = () => {
    return (
        <div class="main-content">

            <div class="page-content">



            <section class="bg-gray-50 mt-28">
                    <div
                        class="mx-auto px-4 py-5 lg:flex  lg:items-center"
                    >
                        <div class="mx-auto max-w-xl text-center">
                            <h1 class="text-3xl font-extrabold sm:text-5xl">
                                Categorie de Job 
                                <strong class="font-extrabold text-blue-700 sm:block">
                                    Tous les catégories activtés
                                </strong>
                            </h1>

                            <p class="mt-4 sm:text-xl/relaxed">
                                La liste de vos offre aux quelle dans chaque dans les secteurs de votre choix
                            </p>

                            <div class="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                    to={`/${routing.job_list}`}
                                >
                                    Postuler à divers offres
                                </Link>

                                <a
                                    class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                    href="/about"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
        </div>
    )
}

export default JobCategoriLisPage;