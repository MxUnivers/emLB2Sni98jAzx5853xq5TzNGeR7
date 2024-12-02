import React from 'react'
import PartenairesSection from '../../components/human4ai/PartenairesSection'
import ReactPlayer from "react-player"

const Human4AiPage = () => {
    return (
        <div class="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-16 pt-20">

            <header class="relative bg-gradient-to-l from-indigo-700 via-indigo-800 py-16 pt-20 text-white">
                <div class="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('intelligence-artificielle.jpg')` }}></div>

                <div class="relative container mx-auto px-4 py-16 text-center">
                    <h1 class="text-4xl md:text-5xl font-bold">
                        L'Intelligence Artificielle au Service de l'Humanité
                    </h1>
                    <p class="mt-4 text-xl md:text-xl text-gray-200">
                        Human AI se concentre à démocratiser l{"'"}Intelligence Artificielle, en assurant sa transparence et son accessibilité partout dans le monde.
                    </p>
                </div>
            </header>

            <section className="py-16 text-white">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-semibold">Découvrir l{"'"}IA en vidéo</h2>
                <p className="mt-4 text-gray-300">
                  Explorez l{"'"}intelligence artificielle grâce à des vidéos immersives.
                  Découvrez comment l{"'"}IA change le monde, de la santé à l{"'"}éducation,
                  en passant par la technologie et bien plus encore.
                </p>
                
              </div>
              <div className="relative">
                <ReactPlayer
                url={"what_ia.mp4"}
                widht="100%"
                height="400px"
                  className="w-full h-64 rounded-lg shadow-lg"
                  controls
                />
              </div>
            </div>
          </section>



            <section class="py-16 bg-white">
                <div class="container mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">

                    <div class="group p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div class="text-4xl text-blue-500 mb-4 group-hover:animate-bounce">🌟</div>
                        <h3 class="text-xl font-semibold">Découvrir</h3>
                        <p class="mt-2 text-gray-600">
                            L'Intelligence Artificielle et ses applications grâce à un espace d'exposition.
                        </p>
                    </div>

                    <div class="group p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div class="text-4xl text-blue-500 mb-4 group-hover:animate-spin">🧠</div>
                        <h3 class="text-xl font-semibold">Comprendre</h3>
                        <p class="mt-2 text-gray-600">
                            Des événements dédiés pour tous les âges et horizons.
                        </p>
                    </div>

                    <div class="group p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <div class="text-4xl text-blue-500 mb-4 group-hover:animate-pulse">⚙️</div>
                        <h3 class="text-xl font-semibold">Expérimenter</h3>
                        <p class="mt-2 text-gray-600">
                            Des projets en collaboration avec tout l{"'"}écosystème.
                        </p>
                    </div>
                </div>
            </section>


            <section class="py-16 bg-gradient-to-r from-indigo-700 via-indigo-800 to-black text-white">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-semibold mb-4">
                        <span class="block overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing">
                            Un Espace d{"'"}Éducation et de Dialogue
                        </span>
                    </h2>
                    <p class="mt-4 text-gray-200 max-w-2xl mx-auto">
                        Parce qu'il est essentiel d'échanger avec les communautés scientifiques et décideurs pour maximiser l'impact de l'IA.
                    </p>

                    <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-3xl font-bold">1250</h3>
                            <p class="text-gray-300">Conférences IA</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">2852</h3>
                            <p class="text-gray-300">Formations Digitales</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">519</h3>
                            <p class="text-gray-300">Ateliers</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">859</h3>
                            <p class="text-gray-300">Acculturations</p>
                        </div>
                    </div>
                </div>
            </section>


       



            <PartenairesSection/>
        </div>
    )
}

export default Human4AiPage
