


import React from 'react'
import { useState } from 'react';
import FormationCard from '../../components/coachingAndFormation/formation/FormationCard';
import { routing } from '../../utlis/routing';

const FormationProfilePage = () => {
    const [formations, setformations] = useState([1, 1, 1])
    const handleNavigate =  ()=>{window.location.href=`/${routing.formation_add}`
    }

    return (
        <section class="mt-16 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
            <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6">
                <button type="button"
                onClick={()=>{
                    handleNavigate();
                }}
                title="Commencer la formation" class="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                    <span class="relative w-max font-semibold text-white dark:text-gray-900 md:block"> Ajouter </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                </button>
                </div>
                <div class="w-full mx-5 py-20 lg:w-3/5">
                    <h3 class="text-center text-2xl font-semibold text-gray-800 dark:text-white">Mes Formations</h3>
                    <div class="w-full px-5 mt-8 grid  gap-5">
                        {
                            formations.map((item) => {
                                return (
                                    <FormationCard item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FormationProfilePage;