import React from 'react'
import ReactPlayer from 'react-player'
import { routing } from '../../utlis/routing'
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction'
import { localvalue, typePersonConnected } from '../../utlis/storage/localvalue'

const AboutBarner = () => {
    return (
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">


            <div class="mt-12">
                <ReactPlayer url="https://www.youtube.com/watch?v=8XgXAbOw66o&pp=ygUEdXZjaQ%3D%3D" width="100%" />
            </div>


            <div class="relative pt-36 ml-auto">
                <div class="lg:w-2/3 text-center mx-auto">
                    <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Façonner un monde avec <span class="text-primary dark:text-white">réimagination.</span></h1>
                    <p class="mt-8 text-gray-700 dark:text-gray-300">Rejoignez-nous pour redéfinir le futur grâce à l'innovation et à la créativité. Nous sommes une communauté de visionnaires et de créateurs qui transforment des idées en réalité. Explorez de nouvelles opportunités, découvrez des solutions innovantes et façonnez un monde meilleur pour tous. L'avenir appartient à ceux qui osent imaginer et innover. Rejoignez-nous aujourd{"'"}hui et soyez acteur du changement.</p>
                    <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">

                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                null :
                                <a href={`${routing.connexion}`} class="relative flex btn  h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span class="relative text-base font-semibold text-white">Commencer</span>
                                </a>
                        }

                    </div>
                    <div class="py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between items-center flex-wrap">
                        <div class="text-left w-full md:w-2/5 lg:w-1/4">
                            <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Opportunités d{"'"}emploi</h6>
                            <p class="mt-2 text-gray-500">
                                Découvrez un large éventail d{"'"}opportunités d{"'"}emploi dans des entreprises renommées. Trouvez le poste qui correspond à vos compétences et à vos aspirations professionnelles.
                            </p>
                        </div>
                        <div class="text-left w-full md:w-2/5 lg:w-1/4 mt-6 md:mt-0">
                            <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Formation de qualité</h6>
                            <p class="mt-2 text-gray-500">
                                Bénéficiez d'une formation de qualité dispensée par des experts de l'industrie. Développez de nouvelles compétences et obtenez des certifications reconnues.
                            </p>
                        </div>
                        <div class="text-left w-full md:w-2/5 lg:w-1/4 mt-6 md:mt-0">
                            <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Passerelle vers le monde professionnel</h6>
                            <p class="mt-2 text-gray-500">
                                Facilitez votre transition vers le monde professionnel en acquérant des compétences recherchées par les employeurs. Préparez-vous à réussir dans votre carrière.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="mt-12  flex flex-wrap justify-center">
                    <div class="p-4 transition duration-200 hover:grayscale-0">
                        <img src="img/esatic.jpg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                    </div>
                    <div class="p-4 transition duration-200 hover:grayscale-0">
                        <img src="img/uvci.png" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutBarner