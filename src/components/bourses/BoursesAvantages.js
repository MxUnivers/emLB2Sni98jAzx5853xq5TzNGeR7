import React from 'react'

const BoursesAvantages = () => {


    const avantages = [
        {
            title: "Financement de l'Éducation ",
            img: "img/undraw_Finance_re_gnv2.png",
            description: "Les bourses d'études fournissent un financement précieux pour les frais de scolarité, les livres, le logement et d'autres dépenses liées à l'éducation. Cela permet aux étudiants de poursuivre leur formation sans avoir à supporter le fardeau financier complet, ce qui réduit le besoin de prêts étudiants importants."
        },
        {
            title: "Opportunités d'Élargir les Horizons",
            img: "img/undraw_missed_chances_k3cq.png",
            description: "En obtenant des bourses d'études, les étudiants peuvent réduire ou éliminer la dette d'études potentielle. Cela signifie qu'ils entrent sur le marché du travail avec moins de dettes, ce qui les aide à démarrer leur carrière sur une base financière plus solide."
        },
        {
            title: "Allègement de la Dette",
            img: "img/undraw_Savings_re_eq4w.png",
            description: "Les bourses d'études offrent souvent aux étudiants la possibilité d'étudier à l'étranger, d'explorer de nouvelles cultures et de développer des compétences interculturelles. Horizons personnels et professionnels, tout en améliorant l'employabilité dans un marché du travail en Afrique."
        }
    ]
    return (
        <section class="my-32">
            <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                        opportunités éducatives enrichissantes.
                    </h2>
                    <p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
                        Découvrez comment nos bourses d'études transforment vos aspirations en réalités éducatives en offrant un accès abordable à l' enseignement supérieur benefique en entreprise .
                    </p>
                </div>

                <div
                    class="mt-12 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">

                    {
                        avantages.map((item) => {
                            return (
                                <div
                                    class="group relative bg-white transition-shadow hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                                    <div class="relative space-y-8 p-8 py-12">
                                        <img src={item.img} loading="lazy" class="w-20 h-20"
                                            width="512" height="512" alt="burger illustration" />
                                        <div class="space-y-2">
                                            <h3
                                                class="text-2xl font-semibold text-gray-700 transition group-hover:text-primary dark:text-white dark:group-hover:text-primaryLight">
                                                {item.title}</h3>
                                            <p class="text-gray-600 dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                        <a href="#"
                                            class="flex items-center justify-between text-gray-500 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primaryLight">
                                            <span class="text-sm"></span>

                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default BoursesAvantages
