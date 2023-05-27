import React from 'react'
import { useEffect } from 'react';
import { localvalue } from '../../utlis/storage/localvalue';
import { useState } from 'react';
import { baseurl } from '../../utlis/url/baseurl';
import axios from 'axios';
import localforage from 'localforage';
import moment from 'moment';
import { CandidatPostuleOneOffre } from '../../action/api/candidat/CandidatAction';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';







const OffreDetailPage = () => {
    var bgImg = "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


    var idCandidat = localStorage.getItem(localvalue.candidat.id);
    alert(idCandidat);

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




    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };


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


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const handleSubmit = (e) => {
        if (idCandidat == null | "" && dataOffre._id == null | "") {
            alert("Vous n'ête pas connecté veillez vous connecter s'il vous plait !")
        }
        e.preventDefault();
        dispatch(CandidatPostuleOneOffre(idCandidat, dataOffre._id, toast));
    }


    return (
        <div>
            <ToastContainer />


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

                                <Button variant="outline-primary" onClick={handleOpenModal}>
                                    Postuler
                                </Button>
                            </div>
                            {
                                dataOffre && dataOffre.candidatPostulees.length > 0 ?

                                    (
                                        <div className="bg-white p-6 rounded shadow mb-4">
                                            <h2 className="text-xl font-bold mb-2">Candidats disponibles</h2>

                                            <ul className="list-disc list-inside">
                                                {

                                                    dataOffre.candidatPostulees.map((item) => {
                                                        return (
                                                            <li>Nom du candidat 1 {item.firtname} {item.lastname} {item.email} </li>
                                                        )
                                                    })

                                                }

                                            </ul>
                                        </div>
                                    ) :
                                    null
                            }
                            <div className="bg-white p-6 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-2">Comment postuler</h2>
                                <p className="text-gray-700 mb-4">Instructions pour postuler à l'offre d'emploi...</p>
                            </div>
                            {
                                /*
                                <div className="bg-white p-6 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-2">Informations supplémentaires</h2>
                                <p className="text-gray-700 mb-4">Informations supplémentaires sur l'offre d'emploi...</p>
                            </div>
                                */
                            }
                        </div>
                        :
                        <div class="h-20 w-full bg-gray-200 rounded-lg">
                        </div>
                }
                {
                    /*} */
                }
            </div>


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal content goes here...</p>
                </Modal.Body>
                <Modal.Footer>
                    <form onSubmit={handleSubmit}>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        {
                            loading ?
                                <p>en cours de traitement</p>
                                :
                                <Button variant="primary" type="submit" onClick={handleCloseModal}>
                                    Poster sa candidature
                                </Button>
                        }
                    </form>
                </Modal.Footer>
            </Modal>

        </div>
    );
};



export default OffreDetailPage;