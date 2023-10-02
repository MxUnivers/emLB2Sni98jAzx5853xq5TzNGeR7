import React from 'react'
import ReactPlayer from 'react-player'

const BoursOthers = () => {
    const urlivideo = "https://www.youtube.com/watch?v=EGVKdxtKWaM"
    const bgImg1 = "img/regardant-statistiques_274234-7903.jpg";
    return (
        <div class=" w-full flex flex-col space-y-3">


            <section>
                <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 md:items-center">
                        <div class="md:5/12 lg:w-6/12">
                            <ReactPlayer url={urlivideo} controls height={"400px"} width={"100%"} playing={false} />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
                                Découvrez comment nos bourses d'études ont ouvert des portes à d'innombrables étudiants, les aidant à façonner une carrière qui les passionne.
                            </h2>
                            <p class="mt-8 text-gray-600 dark:text-gray-300">

                            </p>
                            <button type="button" title="Start buying"
                                class=" mt-5 relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                <span
                                    class="relative w-max font-semibold text-white dark:text-gray-900 ">
                                    Decouvrir </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                                    <path
                                        d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="my-32 mt-12">
                <div class="mx-auto mt-20 px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 md:flex-row md:items-center">
                        <div class="md:7/12 order-last md:order-first lg:w-6/12">
                            <h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
                                Laissez nos bourses d{"'"}études vous guider vers une carrière que vous aimerez,
                                où chaque jour
                                est une opportunité d{"'"}apprendre et de grandir.
                            </h2>
                            <p class="mt-8 text-gray-600 dark:text-gray-300">

                                Nos bourses d{"'"}études ne sont pas seulement un soutien financier, mais une passerelle vers une carrière agréable et épanouissante.
                            </p>
                            <button type="button" title="Start buying"
                                class=" mt-5 relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                <span
                                    class="relative w-max font-semibold text-white dark:text-gray-900 ">
                                    Decouvrir </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                                    <path
                                        d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                </svg>
                            </button>
                        </div>
                        <div class="md:5/12 order-first md:order-last lg:w-6/12">
                            <img src={bgImg1} alt="tailus stat cards components" loading="lazy" width="1446"
                                height="968" />
                        </div>
                    </div>
                </div>
            </section>




            <section class="bg-gray-50 py-32 dark:bg-darker">
                <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                        Temoignages
                        </h2>
                        <p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn{"'"}t need
                            to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software
                            friction - company size.</p>
                    </div>
                    <div class="mt-12 grid gap-8 md:grid-cols-2">
                        <div
                            class="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
                            <div class="flex h-full flex-col justify-center space-y-6 md:space-y-8">
                                <img class="mr-auto h-12 w-auto" src="img/uvci.png" loading="lazy"
                                    alt="microsoft" />
                                <p class="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
                                    <span class="font-serif">"</span> En tant qu'établissement d'enseignement, nous avons accueilli de nombreux étudiants exceptionnels grâce à des bourses d'études. Leurs réalisations et leur engagement enrichissent notre communauté académique.
                                    <br />
                                    <br /><span
                                        class="font-serif">"</span>
                                </p>
                                <div class="flex items-center gap-3">
                                    <img class="h-12 w-12 rounded-full" src="../images/avatars/avatar-2.webp" loading="lazy"
                                        alt="user avatar" width="200" height="200" />
                                    <div>
                                        <h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Henri 
                                        </h3>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">Enseignant chercheur à UVCI</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                            <img class="h-12 w-auto" src="img/uvci.png" loading="lazy" alt="airbnb" width=""
                                height="" />
                            <p class="text-gray-600 dark:text-gray-300">
                            <span class="font-serif">"</span>
                            La bourse que j'ai obtenue a ouvert des portes que je n'aurais jamais cru possibles. Elle a été le catalyseur de mon parcours éducatif exceptionnel.
                            <span class="font-serif">"</span></p>
                            <div class="flex items-center gap-3 text-left">
                                <img class="h-12 w-12 rounded-full" src="../images/avatars/avatar-3.webp" alt="user avatar"
                                    width="200" height="200" loading="lazy" />
                                <div>
                                    <h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Coulibay Sara
                                    </h3>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Etudiante en Developement d{"'"}application et système (DAS)</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                            <img class="h-12 w-auto" src="img/uvci.png" loading="lazy" alt="ge" />
                            <p class="text-gray-600 dark:text-gray-300"><span class="font-serif">"</span>
                            Mon expérience avec une bourse d'études a été transformative. Elle m'a offert la chance de poursuivre mes études supérieures et de réaliser mon potentiel académique.
                                <span class="font-serif">"</span></p>
                            <div class="flex items-center gap-3 text-left">
                                <img class="h-12 w-12 rounded-full" src="../images/avatars/avatar-4.webp" alt="user avatar"
                                    width="200" height="200" loading="lazy" />
                                <div>
                                    <h3 class="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Kouakou Fréderin
                                    </h3>
                                    <span class="text-sm text-gray-500 dark:text-gray-400">Etudiant en Base de données informatique (BD)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BoursOthers
