import React from 'react'
import { useState } from 'react';
import AnnonceCard2 from '../../components/web/annonce/card/AnnonceCard2';
import { useEffect } from 'react';
import { AnnonceGetAllByCategories, CategorieGetAllAnnonces } from '../../action/api/annonces/AnnoncesAction';
import { localvalue } from '../../utlis/storage/localvalue';
import { routing } from '../../utlis/routing';
import { RiLoader2Fill, RiSearchLine } from "react-icons/ri";
import Fuse from 'fuse.js';







const CategoriesAnnoncesPage = () => {

    var secteurAnnonce = localStorage.getItem(localvalue.annonceDetail.secteur_activites);

    var bgImg = "https://images.pexels.com/photos/7688985/pexels-photo-7688985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const [dataAnnonce, setdataAnnonce] = useState([]);

    const [keywords, setkeywords] = useState([]);
    useEffect(() => {
        AnnonceGetAllByCategories(secteurAnnonce, setdataAnnonce);
        CategorieGetAllAnnonces(setkeywords);
        setSearchResults(dataAnnonce);
    }, []);


    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // Configuration de Fuse.js
    const options = {
        keys: ['secteur_activites', 'titre', 'lieu', 'dateDebut'],
        threshold: 0.3, // Ajustez le seuil selon vos besoins
    };
    // Fonction de recherche
    const performSearch = () => {
        const fuse = new Fuse(dataAnnonce, options);
        const results = fuse.search(searchTerm);
        setSearchResults(results.map((result) => result.item));
        setloadingSearch(true);

    };
    const [loadingSearch, setloadingSearch] = useState(false);




    return (
        <div>

            <div class="page-banner-area item-bg-four" style={{ backgroundImage: `url('${bgImg}')` }}>
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2>Secteur d{"'"}activité</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="job-list-area pt-100 pb-75">
                <div class="container">
                    <div class="section-title">
                        <h2>{`"`} {`${secteurAnnonce}`}{`"`}</h2>
                        <p>....</p>
                    </div>
                    <div className="flex space-x-4">
                        {keywords.map((category, index) => (
                            <a
                                href={`/${routing.categoriesAnnonces.path}`}
                                onClick={() => {
                                    localStorage.setItem(localvalue.annonceDetail.secteur_activites, `${category}`);
                                }}

                                key={index}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                    <div className="container w-full flex items-center my-2 mt-5">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Rechercher..."
                            className="border w-full border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            onClick={performSearch}
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 ml-2"
                        >
                            <RiSearchLine size={20} />
                            Rechercher
                        </button>
                        {
                            loadingSearch ?
                                <button
                                    onClick={() => {
                                        setloadingSearch(false);
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 ml-2"
                                >
                                    <RiLoader2Fill size={20} />
                                    recharger
                                </button>
                                :
                                null
                        }
                    </div>
                    {
                        loadingSearch ?
                            
                            searchResults.map((item) => {
                                return (
                                    <AnnonceCard2 item={item} />
                                )
                            }):
                            dataAnnonce.map((item) => {
                                return (
                                    <AnnonceCard2 item={item} />
                                )
                            })
                    }
                    {/* listes des items teléchargés */}
                </div>
            </div>
        </div>
    )
}

export default CategoriesAnnoncesPage
