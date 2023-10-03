import React from 'react'
import ReactPlayer from 'react-player'

const CoachingFormation1 = () => {
    return (
        <section class="mt-32 mb-32">
            <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Prêt à devenir le candidat idéal pour les entreprises ?</h2>
                    <p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Développez Votre Arsenal de Compétences avec Nos Formations</p>

                    {
                        /*<div role="tablist" aria-label="tabs" class="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
                        <div class="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800" style={{ left: "4px" }}></div>
                        <button role="tab" aria-selected="true" aria-controls="panel-0" tabindex="0" title="tab item" class="tab active relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                            <span class="m-auto block w-max text-sm font-medium tracking-wider">First Tab</span>
                        </button>
                        <button role="tab" aria-selected="false" aria-controls="panel-1" tabindex="-1" title="tab item" class="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                            <span class="m-auto block w-max text-sm font-medium tracking-wider">Second Tab</span>
                        </button>
                        <button role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1" title="tab item" class="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                            <span class="m-auto block w-max text-sm font-medium tracking-wider">Third Tab</span>
                        </button>
                    </div> */
                    }
                </div>
                <div class="mt-20">
                    <div class="gap-6 space-y-12 md:flex md:space-y-0">
                        <div class="relative md:w-1/2">
                            <div class="panel visible inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500 md:absolute" id="panel-0">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Les Compétences Gagnantes de nos Candidats Formés et Coachés : Prêts pour l{"'"}Emploi de Vos Rêves</h3>
                                    <p class="mt-8 text-gray-600 dark:text-gray-300"></p>
                                    <div class="mt-12 space-y-6">
                                        <div class="flex items-center gap-6">
                                            <div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                <img class="m-auto h-14 w-auto" src={"img/undraw_Working_re_ddwy.png"} alt="icon illustration" loading="lazy" width="512" height="512" />
                                            </div>
                                            <div class="w-[calc(100%-7.5rem)]">
                                                <h4 class="text-lg font-semibold text-gray-800 dark:text-white">Préparation aux Entretiens</h4>
                                                <p class="mt-1 text-gray-600 dark:text-gray-400">
                                                    Vos candidats apprendront à se préparer de manière efficace pour les entretiens d{"'"}embauche. Cela comprend la création de réponses
                                                    convaincantes aux questions courantes, la maîtrise des techniques de communication, et la gestion
                                                    du stress pour briller lors des entretiens.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex items-center gap-6">
                                            <div class="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                <img class="m-auto h-14 w-auto" src="img/undraw_Connecting_Teams_re_hno7.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                            </div>
                                            <div class="w-[calc(100%-7.5rem)]">
                                                <h4 class="text-lg font-semibold text-gray-800 dark:text-white">Réseautage Professionnel</h4>
                                                <p class="mt-1 text-gray-600 dark:text-gray-400">Vos services peuvent aider les candidats à développer leur réseau professionnel. Ils apprendront à établir des contacts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                            <div class="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                                <div class="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                                    <div data-target="panel-0" class="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                                        <ReactPlayer url={"https://www.youtube.com/watch?v=NUFb8Cdioh8&pp=ygUaZm9ybWF0aW9uIGNlcnRpZmlhbnRlIHV2Y2k%3D"} class="mx-auto rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" loading="lazy" width="400px" height="500px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoachingFormation1
