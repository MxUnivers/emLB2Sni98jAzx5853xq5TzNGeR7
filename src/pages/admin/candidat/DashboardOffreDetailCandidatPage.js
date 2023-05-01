import React, { useEffect, useState } from 'react';
import { routing } from '../../../utlis/routing';
import { useDispatch, useSelector } from 'react-redux';
import { localvalue, localvalueGetCandidat } from '../../../utlis/storage/localvalue';
import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';
import moment from 'moment';
import { CandidatGetCandidatpostulesByOffre, CandidatPostuleOneOffre } from '../../../action/api/candidat/CandidatAction';
import { useNavigate } from 'react-router-dom';

const DashboardOffreDetailCandidatPage = () => {

    var idAdmin = localStorage.getItem(localvalue.candidat.idCandidat);

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [dataOffre, setdataOffre] = useState();
    const [dataCandidat, setdataCandidat] = useState([])

    useEffect(() => {
        OffreById(localvalueGetCandidat.offreId, setdataOffre);
        CandidatGetCandidatpostulesByOffre(localvalueGetCandidat.offreId, setdataCandidat);
    }, [])
    const OffreById = async (id, setState) => {
        await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`, {
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
        dispatch(CandidatPostuleOneOffre(idAdmin, dataOffre._id));
    };




    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Detail sur l{"'"}offre</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href={`/${routing.candidatDashboard.path}`}>Tableau de board</a></li>
                    <li class="item">offre d{"'"}emplois</li>
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
                                <img class="w-full h-full object-cover" src="https://source.unsplash.com/random/800x600" alt="Offre d'emploi" />
                            </div>
                            {/*<!-- Description de l'offre --> */}
                            <div class="py-4">
                                <h2 class="text-2xl font-semibold">Description de l{"'"}offre</h2>
                                <p class="text-gray-700">{dataOffre ? dataOffre.description : null}</p>
                            </div>
                            {/*<!-- Informations de l'offre --> */}
                            <div class="py-4">
                                <h2 class="text-2xl font-semibold">Informations de l{"'"}offre</h2>
                                {
                                    dataOffre ?
                                        <ul class="text-gray-700">
                                            <li>Type de contrat : CDI</li>
                                            <li>Localisation : Paris</li>
                                            <li>Rémunération : 35-40K€ annuel</li>
                                            <li>Date de début : {moment(dataOffre.dateDebut).format('DD/MM/YYYY')}</li>
                                        </ul>
                                        : null
                                }
                            </div>
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
                        </div>

                        <div class="md:w-1/3 mx-4">
                            <div class="bg-white rounded-lg overflow-hidden shadow-lg">

                                <div class="w-full h-32 bg-gray-300">
                                    <img class="w-full h-full object-cover" src="https://source.unsplash.com/random/800x600" alt="Entreprise" />
                                </div>
                                {/*<!-- Informations de l'entreprise --> */}

                                <h2 class="text-2xl font-semibold">Nom de l{"'"}entreprise</h2>
                                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod velit eget libero cursus porttitor. Duis eget sapien quam. Sed luctus vestibulum sapien, vel pulvinar augue feugiat in.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Liste des candidats ayant postulé</h2>
                <ul class="border rounded-md overflow-hidden">
                    {
                        dataCandidat.map((item) => {
                            return (
                                <li class="border-b bg-white px-4 py-3 flex items-center justify-between">
                                    <div class="flex items-center">
                                        <img class="h-10 w-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Photo de profil du candidat" />
                                        <div>
                                            <h3 class="font-bold">{item.firstname} {item.lastname}</h3>
                                            <p class="text-gray-600 text-sm">expérience : {item.years_experience} ans</p>
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

        </div>
    )
}

export default DashboardOffreDetailCandidatPage;