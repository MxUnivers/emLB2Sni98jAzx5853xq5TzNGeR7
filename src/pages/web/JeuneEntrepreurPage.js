import React from 'react';

// Données d'exemple pour les articles

const recentArticles = [
    {
        id: 1,
        title: 'Comment démarrer une startup à succès',
        description: 'Découvrez les étapes clés pour lancer votre entreprise.',
        image: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder pour "Startup"
        author: 'John Doe',
        date: '19 Jan 2024',
        tags: ['Startup', 'Business'],
    },
    {
        id: 2,
        title: 'Les outils essentiels pour les jeunes entrepreneurs',
        description: 'Explorez les meilleurs outils pour booster votre activité.',
        image: 'https://images.pexels.com/photos/8770083/pexels-photo-8770083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder pour "Outils"
        author: 'Jane Smith',
        date: '20 Jan 2024',
        tags: ['Tools', 'Entrepreneurship'],
    },
    {
        id: 3,
        title: 'Stratégies marketing pour les startups',
        description: 'Apprenez à atteindre votre audience cible efficacement.',
        image: 'https://images.pexels.com/photos/5324915/pexels-photo-5324915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder pour "Marketing"
        author: 'Mark Johnson',
        date: '21 Jan 2024',
        tags: ['Marketing', 'Digital'],
    },
    {
        id: 3,
        title: 'Stratégies marketing pour les startups',
        description: 'Apprenez à atteindre votre audience cible efficacement.',
        image: 'https://images.pexels.com/photos/5324915/pexels-photo-5324915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder pour "Marketing"
        author: 'Mark Johnson',
        date: '21 Jan 2024',
        tags: ['Marketing', 'Digital'],
    },
];

const article = {
    id: 1,
    title: 'Comment démarrer une startup à succès',
    description: 'Découvrez les étapes clés pour lancer votre entreprise.',
    image: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder pour "Startup"
    author: 'John Doe',
    date: '19 Jan 2024',
    tags: ['Startup', 'Business'],
}

function JeuneEntrepreurPage() {
    return (
        <div className="container-fluid pt-28 mx-auto px-4 py-8">
            {/* En-tête */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Bienvenue dans la communauté des Jeunes Entrepreneurs</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Découvrez des ressources, des formations, et des opportunités pour transformer vos idées en succès.
                </p>
            </div>

            {/* Abonnement */}
            <div className="mb-8">
                <form className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Entrez votre email"
                        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r-md">
                        S{"'"}abonner
                    </button>
                </form>
            </div>

            {/* Articles Récents */}
            <div className="w-full py-5 flex flex-row gap-4 ">
                <h1 className="text-4xl font-medium text-gray-800">Récements publiés</h1>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">

                <div className="w-2/3 bg-white rounded-lg p-4">
                    {/* Image */}
                    <img src={article.image} alt={article.title} className="w-full h-[500px] object-cover rounded-lg mb-2" />

                    {/* Informations de l'auteur */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">{article.author} • {article.date}</span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{article.description}</p>

                    {/* Tags */}
                    <div className="flex space-x-2">
                        {article.tags.map((tag) => (
                            <span key={tag} className="bg-gray-60 text-gray-900 px-2 py-1 border border-gray-900 border-spacing-3 rounded-2xl text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="w-1/3 flex-col gap-4 mb-8">
                    {recentArticles.map((article) => {
                        return (<ArticleCard key={article._id} article={article} />)
                    }
                    )}
                </div>
            </div>


            {/* Barre latérale droite (optionnelle) */}
            <aside className="w-full pt-36 pb-48">
                <div>
                    <h3 className="font-bold pl-5 text-gray-800 mb-2 text-4xl">Tous les articles</h3>
                    <div className="w-full pl-5 flex flex-wrap ">
                        {recentArticles.map((article) => {
                            return (
                                <ArticleCardList article={article} />
                            )
                        })}
                    </div>
                </div>
            </aside>


        </div>
    );
}

export default JeuneEntrepreurPage;



function ArticleCard({ article }) {
    return (
        <div className="flex flex-row rounded-lg p-4">
            <div className="p-3">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-2" />
            </div>
            <div classNae="p-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{article.author} • {article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex space-x-2">
                    {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-60 text-gray-900 px-2 py-1 border border-gray-900 border-spacing-3 rounded-2xl text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}





function ArticleCardList({ article }) {
    return (
        <div className="flex flex-col w-[400px] gap-5 p-4">
            <div className="p-3 w-full">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-2" />
            </div>
            <div classNae="p-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{article.author} • {article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                <div className="flex space-x-2">
                    {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-60 text-gray-900 px-2 py-1 border border-gray-900 border-spacing-3 rounded-2xl text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}