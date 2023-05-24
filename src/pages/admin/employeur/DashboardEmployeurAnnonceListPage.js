import React, { useEffect, useState } from 'react'
import { localvalue } from '../../../utlis/storage/localvalue';
import { EntrepriseGetAllAnnonces, EntrepriseGetAllOffres } from '../../../action/api/employeur/EmployeurAction';
import { HiRefresh, HiSearchCircle } from 'react-icons/hi';
import { routing } from '../../../utlis/routing';
import { LocaleState } from '../../../utlis/storage/localvalueFunction';
import Fuse from 'fuse.js';
import { AnnonceCardAdmin } from '../../../components/admin/annonces/AnnonceCardAdmin';
import OffreCardAdmin from '../../../components/admin/offres/OffreCardAdmin';
import { AnnoncesOfEntreprises, AnnoncesOfEntreprisesId } from '../../../action/api/annonces/AnnoncesAction';



const DashboardEmployeurAnnonceListPage = () => {

    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);
    // Annonces
    const [dataAnnonce, setdataAnnonce] = useState([]);
    const [dataAnnonce2, setdataAnnonce2] = useState([]);
    // Offres
    const [dataOffre, setdataOffre] = useState([]);
    const [dataOffre2, setdataOffre2] = useState([]);
    useEffect(() => {
        // EntrepriseGetAllAnnonces(idAdmin, setdataAnnonce, setdataAnnonce2);
        AnnoncesOfEntreprisesId(idAdmin,setdataAnnonce,setdataAnnonce2)
        EntrepriseGetAllOffres(idAdmin, setdataOffre, setdataOffre2);
    }, []);



    const [showComponentA, setshowComponentA] = useState(true);
    const [showComponentB, setshowComponentB] = useState(false);

    const handleShowComponentA = () => {
        setshowComponentA(true);
        setshowComponentB(false);
    };

    const handleShowComponentB = () => {
        setshowComponentA(false);
        setshowComponentB(true);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loadingSearch, setloadingSearch] = useState(false)
    // recherche employeur et candidat
    const options = {
        keys: ['secteurs_activites', 'titre', 'lieu', 'dateDebut', 'salaire'],
        threshold: 0.3, // Ajustez le seuil selon vos besoins
    };
    // Fonction de recherche
    const performSearch = () => {
        setloadingSearch(false);
        if (showComponentA) {
            const fuse = new Fuse(dataAnnonce, options);
            const results = fuse.search(searchTerm);
            setSearchResults(results.map((result) => result.item));
            setloadingSearch(true);
        } else if (showComponentB) {
            const fuse = new Fuse(dataOffre, options);
            const results = fuse.search(searchTerm);
            setSearchResults(results.map((result) => result.item));
            setloadingSearch(true);
        }
        else {
            return;
        }
    };
    // appele de la fonction de recherche
    

    return (
        <div>
            <div class="breadcrumb-area">
                <h1>VOS POSTES</h1>
                <ol class="breadcrumb">
                    <li class="">
                        <button onClick={handleShowComponentA} class=" btn bg-blue-600 hover:bg-blue-600 active:bg-blue-600">ANNONCES</button>
                    </li>
                    <li class="mx-3 justify-center items-center btn">{"|".toUpperCase()}</li>
                    <li class="item">
                        <button onClick={handleShowComponentB} class=" btn bg-blue-600 hover:bg-blue-600 active:bg-blue-600">OFFRES</button>
                    </li>
                </ol>
            </div>




            {
                showComponentA &&
                <div class="dashboard-jobs-box">
                    <h2>MES ANNONCES</h2>
                    <div class=" bg-white ">
                        <div class=" p-2 bg-gray-100 flex flex-row bg-white shadow-md rounded-lg py-3 px-2 border-b">
                            
                            <div>
                                <input type='text' value={searchTerm}
                                    onChange={(e) => {setSearchTerm(e.target.value) ; performSearch(); }}
                                    class="form-control" placeholder="rechercher ..."
                                />
                            </div>
                            {
                                loadingSearch ?
                                    <div class="bg-gray-200 p-1 rounded-2xl">
                                        <span class="btn bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg "
                                            onClick={() => { setloadingSearch(false) }}
                                        >
                                            <HiRefresh class="h-7 w-7 text-gray-300" />
                                        </span>
                                    </div> : null
                            }
                        </div>
                    </div>

                    <div class="row">

                        {
                            loadingSearch ?
                                searchResults.map((item) => {
                                    return (
                                        <AnnonceCardAdmin item={item} />
                                    )
                                }) :
                                dataAnnonce.map((item) => {
                                    return (
                                        <AnnonceCardAdmin item={item} />
                                    )
                                })
                        }
                    </div>
                </div>
            }



            {
                showComponentB
                &&
                <div class="dashboard-jobs-box">
                    <h2>MES OFFRES</h2>
                    <div class=" bg-white ">
                        <div class=" p-2 bg-gray-100 flex flex-row bg-white shadow-md rounded-lg py-3 px-2 border-b">
                            {
                                /*
                                <div class="bg-gray-200 p-1 rounded-2xl">
                                <span>
                                    <HiSearchCircle class="h-7 w-7 text-gray-300" />
                                </span>
                            </div>
                                */
                            }
                            <div>
                                <input type='text' value={searchTerm}
                                    onChange={(e) =>{setSearchTerm(e.target.value) ; performSearch(); }}
                                    class="form-control" placeholder="rechercher ..."
                                />
                            </div>
                            {
                                loadingSearch ?
                                    <div class="bg-gray-200 p-1 rounded-2xl">
                                        <span class="btn bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg "
                                            onClick={() => { setloadingSearch(false) }}
                                        >
                                            <HiRefresh class="h-7 w-7 text-gray-300" />
                                        </span>
                                    </div> :
                                    null
                            }
                        </div>
                    </div>
                    <div class="row">
                        {
                            loadingSearch ?
                                searchResults.map((item) => {
                                    return (
                                        <OffreCardAdmin item={item} />
                                    )
                                }) :
                                dataOffre.map((item) => {
                                    return (
                                        <OffreCardAdmin item={item} />
                                    )
                                })
                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default DashboardEmployeurAnnonceListPage;