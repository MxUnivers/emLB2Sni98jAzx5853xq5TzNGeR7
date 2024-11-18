import React from 'react'
import ReactPlayer from 'react-player'

const BoursOthers = () => {
    const urlivideo = "https://www.youtube.com/watch?v=EGVKdxtKWaM"
    const bgImg1 = "img/regardant-statistiques_274234-7903.jpg";
    return (
        <div class=" w-full flex flex-col space-y-3">


            {/* Section Vidéo et Description */}
            <section className="container mb-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Encadré de la Vidéo */}
                    <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                        <ReactPlayer url={urlivideo} controls height={"400px"} width={"100%"} playing={false} />
                    </div>

                    {/* Description des Avantages */}
                    <div className="w-full lg:w-1/2 text-start">
                        <h2 className="text-3xl font-semibold text-white mb-6">Pourquoi Choisir Nos Bourses ?</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li class="text-gray-50">
                                <strong className="text-white">Soutien Financier :</strong>
                                Réduisez les coûts liés à vos études et concentrez-vous sur vos objectifs académiques.
                            </li>
                            <li class="text-gray-50">
                                <strong className="text-white">Opportunités de Réseau :</strong>
                                Bénéficiez de notre réseau d{"'"}anciens boursiers et de partenariats avec des institutions reconnues.
                            </li>
                            <li class="text-gray-50">
                                <strong className="text-white">Accès aux Ressources :</strong>
                                Profitez de matériel pédagogique et de ressources exclusives pour enrichir votre apprentissage.
                            </li>
                            <li class="text-gray-50">
                                <strong className="text-white">Développement Personnel :</strong>
                                Participez à des ateliers et à des formations pour développer vos compétences personnelles et professionnelles.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BoursOthers
