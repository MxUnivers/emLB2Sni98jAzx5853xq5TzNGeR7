import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routing } from '../../utlis/routing';

const FormationCoaching = () => {

    const  navigate  =  useNavigate();


    const formations = [
        {
            title: "Developement d'application",
            img: "img/undraw_Programming_re_kg9v.png",
            description: " Cette formation se concentre sur le développement web front-end, vous apprendrez à créer des interfaces utilisateur interactives et attrayantes en utilisant des langages tels que HTML, CSS et JavaScript. Vous maîtriserez la conception responsive, l'accessibilité web et l'intégration de bibliothèques et de frameworks modernes pour créer des sites web conviviaux."
        },
        {
            title: "Formation en Conception Graphique et Design d'Interfaces",
            img: "img/undraw_Design_notes_re_eklr.png",
            description: " Explorez le monde du design graphique et de l'UX/UI design au travers de cette formation. Vous développerez des compétences en conception visuelle, en création de maquettes, en design d'expérience utilisateur (UX) et en conception d'interfaces utilisateur (UI). À la fin de cette formation, vous serez prêt à concevoir des interfaces utilisateur attrayantes et fonctionnelles."
        },
        {
            title: "Gestion de Projet Agile",
            img: "img/undraw_Scrum_board_re_wk7v.png",
            description: " Cette formation se concentre sur les principes de gestion de projet Agile et Scrum, devenus essentiels dans le monde du développement logiciel."
        }
    ]
    return (
        <section class="relative py-32">
            <div aria-hidden="true" class="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                <div class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div class="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Formations gratifiante pour vous</h2>
                    <p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Acquérez des compétences précieuses pour exceller dans votre carrière.</p>
                </div>
                <div class="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-3 lg:grid-cols-3">
                    {
                        formations.map((item) => {
                            return (
                                <div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                                    <div class="space-y-12 text-center">
                                        <img src={item.img} class="mx-auto h-20 w-20 " width="512" height="512" alt="burger illustration" />
                                        <div class="space-y-6">
                                            <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">{item.title} </h3>
                                            <p class="text-gray-600 dark:text-gray-300 line-clamp-6">{item.description}</p>
                                            <a aria-label="read more" href="#"
                                            onClick={()=>{
                                                navigate(`/${routing.formation_list}`)
                                            }}
                                            class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                
            </div>

            <div class="w-full flex flex-row justify-center mt-5 ">
                    <button type="submit"
                    onClick={()=>{
                        navigate(`/${routing.formation_list}`)
                    }}
                    title="Start buying" class=" h-12   bg-blue-800 active:bg-blue-900 px-6 rounded-3xl">
                        <span class="relative w-max font-semibold text-white  md:block"> Voire plus </span>
                    </button>
                </div>
        </section>
    )
}

export default FormationCoaching
