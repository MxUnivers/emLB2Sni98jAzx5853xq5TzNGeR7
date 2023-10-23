import React from 'react'
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import { routing } from '../../utlis/routing';
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

const HomeSolgan = () => {
    const bgImg = "img/fille-africaine-sac-dos-notes.jpg";

    var typeAccess = getAndCheckLocalStorage(localvalue.TYPEACCESS);

    const [isLoading, setIsLoading] = useState(true); // Vous pouvez initialiser isLoading à true lors du chargement de l'image

    const handleImageLoad = () => {
        setIsLoading(false); // Définissez isLoading sur false lorsque l'image est chargée
    };

    return (
        <section class="relative py-32 lg:py-36 bg-white">
            <div
                class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span
                        class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-blue-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
                    <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
                </div>
                <span
                    class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
                <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8  lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

                    <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
                        Votre Avenir Commence Ici ! Trouvez Votre Premier Emploi Étudiant   sur <span
                            class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Jouman</span>
                    </h1>
                    <p class="mt-8 text-gray-700">
                        Transformez Votre Éducation en Expérience Pratique

                        <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                            Joman
                        </span>

                        Vous Aide à Décrocher des Opportunités de Carrière Inestimables.
                        Rejoignez-nous Aujourd{"'"}hui et Écrivez le Premier Chapitre de Votre Futur Professionnel.
                    </p>
                    <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                        <div class="flex sm:flex-row flex-col gap-5 w-full">
                            <form
                                class="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20   rounded-full ease-linear focus-within:bg-white  focus-within:border-blue-600">

                                {
                                    typeAccess == typePersonConnected[1] ?
                                        <a href={`/${routing.job_list}`} type='button' class="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                            <span class="hidden sm:flex relative z-[5]">
                                                Postuler
                                            </span>
                                        </a> :
                                        <a href={`/${routing.connexion}`} type='button' class="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                            <span class="hidden sm:flex relative z-[5]">
                                                Postuler au offres
                                            </span>
                                        </a>
                                }
                            </form>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    
                        <img src={bgImg} alt="Hero image" width="2350" height="2359" onLoad={()=>{handleImageLoad()}}
                            class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                    
                </div>
            </div>
        </section>

    )
}

export default HomeSolgan;
