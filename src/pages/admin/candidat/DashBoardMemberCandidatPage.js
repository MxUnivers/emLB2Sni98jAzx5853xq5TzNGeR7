import React, { useEffect, useState } from 'react'
import { CandidatGetAll } from '../../../action/api/candidat/CandidatAction';
import Fuse from 'fuse.js';
import CandidatCardAdmin from '../../../components/admin/CandidatCardAdmin';
import { HiRefresh } from 'react-icons/hi';

const DashBoardMemberCandidatPage = () => {
    const [dataCandidat, setdataCandidat] = useState([]);
    useEffect(() => {
        CandidatGetAll(setdataCandidat);
    }, [])


    const [searchTerm, setSearchTerm] = useState('');
    const [SearchResults, setSearchResults] = useState([]);
    const [loadingSearch, setloadingSearch] = useState(false)

    const options = {
        keys: ['secteurs_activites', 'titre', 'lieu', 'dateDebut'],
        threshold: 0.3, // Ajustez le seuil selon vos besoins
    };

    // Fonction de recherche
    const performSearch = () => {
        const fuse = new Fuse(dataCandidat, options);
        const results = fuse.search(searchTerm);
        setSearchResults(results.map((result) => result.item));
        setloadingSearch(true);
    };



    return (
        <div>

            <div class="breadcrumb-area">
                <h1>Tous les candidats de votre domaine</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="dashboard.html">tabeau de bord</a></li>
                    <li class="item"><a href="dashboard.html">candidat</a></li>
                    <li class="item">candidat</li>
                </ol>
            </div>




            <div class="all-applicants-box">
                <h2>Candidat</h2>

                <div className="flex items-center">
                    <input
                        className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); performSearch(); }}
                    />
                    {
                        loadingSearch ?
                            <span class="btn bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg "
                                onClick={() => { setloadingSearch(false) }}
                            >
                                <HiRefresh class="h-7 w-7 text-gray-300" />
                            </span>
                            : null
                    }
                </div>
                <div class="row">
                    {
                        loadingSearch ?
                            SearchResults.map((item) => {
                                return (
                                    <CandidatCardAdmin item={item} />
                                )
                            }) :
                            dataCandidat.map((item) => {
                                return (
                                    <CandidatCardAdmin item={item} />
                                )
                            })
                    }
                </div>
            </div>


        </div>
    )
}

export default DashBoardMemberCandidatPage;