import React from 'react'
import { useEffect } from 'react';
import { localvalue } from '../../utlis/storage/localvalue';
import { useState } from 'react';
import { baseurl } from '../../utlis/url/baseurl';
import axios from 'axios';
import localforage from 'localforage';
import moment from 'moment';







const OffreDetailPage = () => {
    var bgImg = "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"



    const [idOffre, setidOffre] = useState('');

    useEffect(() => {
        fetchValue();
        
    }, []);

    const fetchValue = async () => {
        const value = await localforage.getItem(localvalue.offreDetail.id);
        setidOffre(value);
        alert(idOffre);
        OffreById(idOffre, setdataOffre);
    };

    const [dataOffre, setdataOffre] = useState();






    const OffreById = async (id, setState) => {
        await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setState(response.data.data);
            })
            .catch((error) => { console.log(error); });
    }



    return (
        <div>


            <div class="page-banner-area item-bg-two h-[400px]" style={{
                backgroundImage: `url('${bgImg}')`
            }}>
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2>Faite le metier de vos rêves</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-gray-100 py-12 ">
                {/*{
                    offre
                    && */}
                {
                    dataOffre ?
                        <div className="max-w-3xl mx-auto px-4">
                            <h1 className="text-3xl font-bold mb-4">{dataOffre.titre}</h1>
                            <p className="text-gray-600 mb-4">Lieu | Date postée {moment(dataOffre.dateDebut).format("DD/MM/YYYY")}</p>
                            <div className="bg-white p-6 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-2">Détails du poste</h2>
                                <p className="text-gray-700 mb-4">{dataOffre.description}</p>
                                <ul className="list-disc list-inside">
                                    <li>Niveau d{"'"}expérience requis {dataOffre.years_experience}</li>
                                    <li>Type de contrat</li>
                                    <li>Horaires de travail</li>
                                    <li>Salaire</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-2">Candidats disponibles</h2>

                                <ul className="list-disc list-inside">
                                    {
                                        /*
                                         {
                                            offre.candidatPostulees.map((item) => {
                                                return (
                                                    <li>Nom du candidat 1 {item}</li>
                                                )
                                            })
                                        }
                                        */
                                    }

                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-2">Comment postuler</h2>
                                <p className="text-gray-700 mb-4">Instructions pour postuler à l'offre d'emploi...</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-2">Informations supplémentaires</h2>
                                <p className="text-gray-700 mb-4">Informations supplémentaires sur l'offre d'emploi...</p>
                            </div>
                        </div>
                        :
                        <div class="h-20 w-full bg-gray-200 rounded-lg">
                        </div>
                }
                {
                    /*} */
                }
            </div>

        </div>
    );
};



export default OffreDetailPage;