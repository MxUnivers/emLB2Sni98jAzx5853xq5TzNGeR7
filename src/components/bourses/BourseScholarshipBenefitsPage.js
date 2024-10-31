import React from 'react';

const BourseScholarshipBenefitsPage = () => {
    return (
        <div className="main-content bg-gray-50">
            <div className="page-content mt-10 px-6 lg:px-20 max-w-screen-lg mx-auto">
                <header className="text-center py-10">
                    <h1 className="text-4xl font-bold text-indigo-800">Les Avantages de Nos Bourses d{"'"}Études</h1>
                    <p className="text-gray-600 mt-4 text-lg">
                        Découvrez comment nos bourses d’études peuvent vous aider à réaliser vos objectifs académiques et professionnels.
                    </p>
                </header>

                <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {/* Benefit 1 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Aide Financière</h2>
                        <p className="text-gray-700">
                            Nos bourses offrent une aide financière pour alléger le coût des études, permettant aux étudiants de se concentrer davantage sur leur apprentissage sans se soucier des finances.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Accès à des Ressources Académiques</h2>
                        <p className="text-gray-700">
                            Les bénéficiaires de nos bourses obtiennent un accès privilégié aux ressources académiques, notamment les bibliothèques numériques, les publications spécialisées et les outils d{"'"}apprentissage en ligne.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Opportunités de Réseau</h2>
                        <p className="text-gray-700">
                            Rejoignez une communauté d{"'"}étudiants et de professionnels qui partagent les mêmes aspirations et bénéficiez des événements de networking pour créer des connexions importantes.
                        </p>
                    </div>

                    {/* Benefit 4 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Mentorat Personnalisé</h2>
                        <p className="text-gray-700">
                            Chaque boursier est accompagné par un mentor pour l{"'"}orienter dans son parcours académique et professionnel, favorisant ainsi une meilleure réussite.
                        </p>
                    </div>

                    {/* Benefit 5 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Expériences Internationales</h2>
                        <p className="text-gray-700">
                            Certaines de nos bourses offrent des opportunités d'échanges académiques et de stages à l'international pour acquérir une expérience globale précieuse.
                        </p>
                    </div>

                    {/* Benefit 6 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Développement des Compétences</h2>
                        <p className="text-gray-700">
                            Nos programmes sont conçus pour développer des compétences essentielles telles que le leadership, la gestion de projet et la pensée critique.
                        </p>
                    </div>
                </section>

                <div className="text-center mt-16">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Intéressé(e) par une de nos bourses ?</h3>
                    <p className="text-gray-700 mb-6">
                        Si vous souhaitez en savoir plus ou si vous êtes prêt(e) à postuler, consultez notre page d'inscription et commencez votre parcours vers une éducation transformante dès aujourd'hui.
                    </p>
                    <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                        En savoir plus et postuler
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BourseScholarshipBenefitsPage;
