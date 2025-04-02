import React from 'react';
import { useParams } from 'react-router-dom';

// Données d'exemple pour les articles
const articles = [
  {
    id: 1,
    title: 'Comment démarrer une startup à succès',
    description:
      "Découvrez les étapes clés pour lancer votre entreprise. Depuis la recherche de financement jusqu'à la mise en place d'une équipe solide, cet article vous guide pas à pas.",
    image: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'John Doe',
    date: '19 Jan 2024',
    tags: ['Startup', 'Business'],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nisi vel justo bibendum bibendum. Sed euismod, nisl nec tincidunt lacinia, nunc nisl aliquam nunc, vitae aliquam nunc nisl vitae nunc. Sed euismod, nisl nec tincidunt lacinia, nunc nisl aliquam nunc, vitae aliquam nunc nisl vitae nunc.",
  },
  {
    id: 2,
    title: 'Les outils essentiels pour les jeunes entrepreneurs',
    description:
      "Explorez les meilleurs outils pour booster votre activité. De la gestion de projet à l'automatisation, découvrez comment optimiser votre workflow.",
    image: 'https://images.pexels.com/photos/8770083/pexels-photo-8770083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Jane Smith',
    date: '20 Jan 2024',
    tags: ['Tools', 'Entrepreneurship'],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nisi vel justo bibendum bibendum. Sed euismod, nisl nec tincidunt lacinia, nunc nisl aliquam nunc, vitae aliquam nunc nisl vitae nunc. Sed euismod, nisl nec tincidunt lacinia, nunc nisl aliquam nunc, vitae aliquam nunc nisl vitae nunc.",
  },
];

function JeuneEntrepreurDetailPage() {
  // Récupérer l'ID de l'article depuis les paramètres d'URL
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="w-full flex items-center justify-center text-center pt-[100px] min-h-[600px]">
        <div className="text-gray-600">
          <p className="text-3xl font-bold mb-4">Article non trouvé</p>
          <p className="text-lg">Désolé, l'article que vous recherchez n'existe pas ou a été supprimé.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mx-auto py-8 bg-gradient-to-l from-indigo-900 via-indigo-900 to-black ">
      {/* Image */}
      <img src={article.image} alt={article.title} className="w-full pt-[50px] h-[400px] object-cover rounded-lg mb-4" />

      {/* Titre */}
      <div className="px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-20">{article.title}</h1>

        {/* Informations de l'auteur */}
        <div className="flex items-center text-gray-100 mb-4">
          <span>{article.author} • {article.date}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{article.description}</p>

        {/* Contenu principal */}
        <div className="text-gray-700 mb-6">
          <p>{article.content}</p>
        </div>

        {/* Tags */}
        <div className="flex space-x-2 mb-6">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-sm text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bouton Retour */}
        <button
          onClick={() => window.history.back()}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default JeuneEntrepreurDetailPage;