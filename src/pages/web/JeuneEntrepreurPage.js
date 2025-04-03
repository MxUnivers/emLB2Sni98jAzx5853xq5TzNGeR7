import React from 'react';
import { routing } from '../../utlis/routing';
import { useNavigate } from 'react-router-dom';
import { recentArticles } from '../../utlis/dataApi';

// Données d'exemple pour les articles



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
    const navigate =  useNavigate();

    return (
        <div className="container-fluid  pt-28 mx-auto px-4 py-8 bg-gradient-to-l from-indigo-700 via-indigo-800 to-black">
            {/* En-tête */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-100">Bienvenue dans la communauté des Jeunes Entrepreneurs</h1>
                <p className="text-lg text-gray-400 mt-2">
                    Découvrez des ressources, des formations, et des opportunités pour transformer vos idées en succès.
                </p>
            </div>

            {/* Abonnement */}
            <div className="mb-8">
                <form className="flex justify-center">
                    {/*<input
                        type="email"
                        placeholder="Entrez votre email"
                        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r-md">
                        S{"'"}abonner
                    </button> */}
                </form>
            </div>

            {/* Articles Récents */}
            <div className="w-full py-5 flex flex-row gap-4 pt-24 ">
                <h1 className="text-4xl font-medium text-gray-100">Récements publiés</h1>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">

                {
                    recentArticles.slice(0, 1).map((article) => {
                        return (
                            <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 rounded-lg p-4 cursor-pointer"
                            onClick={() => {
                                navigate(`/${routing.jeune_entrepreneurs}/${article.id}/view`)
                
                            }}
                            >
                                {/* Image */}
                                <img src={article.image} alt={article.title} className="w-full h-[500px] object-cover rounded-lg mb-2" />

                                {/* Informations de l'auteur */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">{article.author} • {article.date}</span>
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold mb-2 text-gray-100">{article.title}</h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-4">{article.description}</p>

                                {/* Tags */}
                                <div className="flex space-x-2">
                                    {article.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-60 text-gray-50 px-2 py-1 border border-gray-100 border-spacing-3 rounded-2xl text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                }


                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 flex-col gap-4 mb-8">
                    {recentArticles.slice(1, 3).map((article) => {
                        return (<ArticleCard key={article._id} article={article} />)
                    }
                    )}
                </div>
            </div>


            {/* Barre latérale droite (optionnelle) */}
            {/* Barre latérale droite (optionnelle) */}
            <aside className="w-full pt-36 pb-48 ">

                {/* Titre de la Section */}
                <div>
                    <h3 className="pl-5 text-gray-100 mb-2 text-4xl font-medium">Tous les articles</h3>
                </div>
                {/* Conteneur Flex avec flex-wrap */}
                <div className="w-full gap-4 pl-5 ">
                    {recentArticles.map((article) => (
                        <ArticleCardList key={article.id} article={article} />
                    ))}
                </div>
            </aside>


        </div>
    );
}

export default JeuneEntrepreurPage;



function ArticleCard({ article }) {
    const  navigate =  useNavigate()
    return (
        <div className="flex flex-row  p-4 border-b border-gray-300 cursor-pointer" onClick={() => {
            navigate(`/${routing.jeune_entrepreneurs}/${article.id}/view`)

        }}>
            <div className="p-3">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-2" />
            </div>
            <div classNae="p-3 aligns-items-center">
                {/*<div className="flex items-center justify-between mb-2 pt-2">
                    <span className="text-sm text-gray-200">{article.author} • {article.date}</span>
                </div> */}
                <h3 className="text-xl font-bold mb-2 text-gray-100 hover:underline">{article.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-1 hover:underline">{article.description}</p>
                <div className="flex space-x-2">
                    {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-60 text-gray-50 px-2 py-1 border border-gray-100 border-spacing-3 rounded-2xl text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}



function ArticleCardList({ article }) {
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-row  p-4 border-b cursor-pointer border-gray-300 "

            onClick={() => {
                navigate(`/${routing.jeune_entrepreneurs}/${article.id}/view`)

            }}>
            <div className="p-3">
                <img src={article.image} alt={article.title} className="min-w-[150px] w-full h-48 object-cover rounded-lg mb-2" />
            </div>
            <div classNae="p-3 w-full ">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 hover:underline">{article.author} • {article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:underline text-gray-100">{article.title}</h3>
                <p className="text-gray-400 mb-4 hover:underline">{article.description}</p>
                <div className="flex space-x-2">
                    {article.tags.map((tag) => (
                        <span key={tag} className="hover:no-underline bg-gray-60 text-gray-50 px-2 py-1 border border-gray-100 border-spacing-3 rounded-2xl text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}