import React from 'react'
import { useState } from 'react';
import AnnonceCard2 from '../../components/web/annonce/card/AnnonceCard2';
import { useEffect } from 'react';
import { AnnonceGetAllByCategories, CategorieGetAllAnnonces } from '../../action/api/annonces/AnnoncesAction';
import { localvalue } from '../../utlis/storage/localvalue';
import { routing } from '../../utlis/routing';

const CategoriesAnnoncesPage = () => {

    var secteurAnnonce = localStorage.getItem(localvalue.annonceDetail.secteur_activites);

    var bgImg = "https://images.pexels.com/photos/7688985/pexels-photo-7688985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const [dataAnnonce, setdataAnnonce] = useState([]);

    const [keywords, setkeywords] = useState([]);
    useEffect(() => {
        AnnonceGetAllByCategories(secteurAnnonce, setdataAnnonce);
        CategorieGetAllAnnonces(setkeywords);
    }, []);

    
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

                    {/* listes des items teléchargés */}

                    {
                        dataAnnonce.map((item) => {
                            return (
                                <AnnonceCard2 item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoriesAnnoncesPage
