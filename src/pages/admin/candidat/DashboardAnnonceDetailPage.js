import React, { useEffect, useState } from 'react';
import { routing } from '../../../utlis/routing';
import { useDispatch, useSelector } from 'react-redux';
import { localvalue, localvalueGet, localvalueGetCandidat } from '../../../utlis/storage/localvalue';
import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';
import moment from 'moment';
import { CandidatGetCandidatpostulesByAnnonce, CandidatGetCandidatpostulesByOffre, CandidatPostuleOneOffre } from '../../../action/api/candidat/CandidatAction';
import { useNavigate } from 'react-router-dom';

const DashboardAnnonceDetailPage = () => {

    var idAdmin = localStorage.getItem(localvalue.candidat.idCandidat);
    var typeAdmin = localStorage.getItem(localvalue.typeAdmin);
    var IdAnnonce = localStorage.getItem(localvalue.annonceAdmin.id);

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [dataAnnonce, setdataAnnonce] = useState();
    const [dataCandidat, setdataCandidat] = useState([])

    useEffect(() => {
        AnnonceById(IdAnnonce, setdataAnnonce);
        CandidatGetCandidatpostulesByAnnonce(IdAnnonce, setdataCandidat);
    }, [])
    const AnnonceById = async (id, setState) => {
        await axios.get(`${baseurl.url}/api/v1/annonce/get_annonce/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
            .then((response) => { console.log(JSON.stringify(response.data)); setState(response.data.data); })
            .catch((error) => { console.log(error); });

    }

    // potuler à une offre 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (idAdmin == null | "") {
            alert("Requete non pris en compte");
            return;
        }
        dispatch(CandidatPostuleOneOffre(idAdmin, dataAnnonce._id));
    };




    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Detail l{"'"}annonce</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href={`#`}>Tableau de board</a></li>
                    <li class="item">Annonce</li>
                </ol>
            </div>

            <div class="dashboard-jobs-box">
                <h2></h2>
                <main class="container mx-auto my-6 px-4">
                    <div class="flex flex-col md:flex-row -mx-4">
                        {/*<!-- Colonne de gauche : informations de l'offre --> */}
                        <div class="md:w-2/3 mx-4">
                            {/*<!-- Image de l'offre --> */}
                            <div class="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" src="https://img.freepik.com/vecteurs-libre/minuscule-responsable-ressources-humaines-recherche-candidat-pour-emploi-interview-loupe-illustration-vectorielle-plane-ecran-ordinateur-carriere-emploi_74855-8619.jpg" alt="Offre d'emploi" />
                            </div>
                            {/*<!-- Description de l'offre --> */}
                            <div class="py-4">
                                <h2 class="text-2xl font-semibold">Description de l{"'"}offre</h2>
                                <p class="text-gray-700">{dataAnnonce ? dataAnnonce.description : null}</p>
                            </div>
                            {/*<!-- Informations de l'offre --> */}
                            <div class="py-4">
                                <h2 class="text-2xl font-semibold">Informations de l{"'"}offre</h2>
                                {
                                    dataAnnonce ?
                                        <ul class="text-gray-700">
                                            <li>Type de contrat : {dataAnnonce.typeContrat}</li>
                                            <li>Localisation : {dataAnnonce.lieu}</li>
                                            <li>Rémunération : {dataAnnonce.salaire} FRANCS CFA</li>
                                            <li>Poster le : {moment(dataAnnonce.dateDebut).format('DD/MM/YYYY')}</li>
                                        </ul>
                                        : null
                                }
                            </div>
                            {
                                typeAdmin == "candidat"?
                                <div class=" py-2 ">
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        {error && <p class="text-danger">Demande non prise en compte</p>}
                                        {
                                            loading ?
                                                <p>Votre de demande est cours ...</p> :
                                                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                    Postuler à l{"'"}offre</button>
                                        }
                                    </form>
                                </div>
                            </div>
                            : null
                            }
                        </div>

                        <div class="md:w-1/3 mx-4">
                            <div class="bg-white rounded-lg overflow-hidden shadow-lg">

                                <div class="w-full h-32 bg-gray-300">
                                    <img class="w-full h-full object-cover" src={"https://www.kindpng.com/picc/m/124-1247334_web-design-illustration-png-transparent-png.png"} alt="Entreprise" />
                                </div>
                                {/*Informations de l'entreprise  */}
                                {
                                    dataAnnonce ?
                                <h2 class="text-2xl font-semibold py-3 px-2 underline">{dataAnnonce.entreprise}</h2>
                                :
                                null

                                }

                                
                            </div>
                        </div>
                    </div>
                </main>
            </div >
            {
                typeAdmin == "employeur"?
                <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Liste des candidats ayant postulé</h2>
                <ul class="border rounded-md overflow-hidden">
                    {
                        dataCandidat.map((item) => {
                            return (
                                <li class="border-b bg-white px-4 py-3 flex items-center justify-between">
                                    <div class="flex items-center">
                                    {/*https://randomuser.me/api/portraits/men/32.jpg */}
                                        <img class="h-10 w-10 rounded-full mr-4" src={dataAnnonce.coverPicture ? dataAnnonce.coverPicture : "https://randomuser.me/api/portraits/men/32.jpg" } alt="Photo de profil du candidat" />
                                        <div>
                                            <h3 class="font-bold">{item.firstname} {item.lastname}</h3>
                                            <p class="text-gray-600 text-sm">expérience : {item.years_experience ? item.years_experience : "..." } ans</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            localStorage.setItem(localvalue.candidat.idCandidatDetail, item._id)
                                            navigation(`/${routing.candidatDetailProfileView.path}`);
                                        }}
                                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                        Contacter
                                    </button>
                                </li>
                            )
                        })

                    }


                </ul>
            </div>
            : null

            }
        </div>
    )
}

export default DashboardAnnonceDetailPage;