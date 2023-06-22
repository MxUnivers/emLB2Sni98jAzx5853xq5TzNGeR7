import React from 'react'
import { routing } from '../../../../utlis/routing'
import { localvalue } from '../../../../utlis/storage/localvalue'
import moment from 'moment';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CandidatPostuleOneAnnonce } from '../../../../action/api/candidat/CandidatAction';
import { typeadmin } from '../../../../utlis/storage/account';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const AnnonceCard = ({ data }) => {
    var typeAdmin = localStorage.getItem(localvalue.typeAdmin);
    var idCandidat = localStorage.getItem(localvalue.candidat.idCandidat);


    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleShow = () => {
        setShowModal(true);
    };

    // postuler à l'annonce
    const [confirmation, setconfirmation] = useState(null);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const handleSubmit = (e) => {
        if (idCandidat == null | "" && data._id == null | "") {
            alert("Vous n'ête pas connecté veillez vous connecter s'il vous plait !")
        }
        e.preventDefault();
        dispatch(CandidatPostuleOneAnnonce(idCandidat, data._id,toast));
    }








    return (
        <div class="col-lg-4 col-md-6 w-full">
            <div class="single-job-list-card">
                <div class="job-information">
                    <div class="company-logo">
                        <a
                        ><img src="assets/images/job/job-1.png" alt="image" />
                        </a>
                    </div>
                    <h3>
                        <a href={`/${routing.detailAnnonce.path}`}
                            onClick={() => {
                                localStorage.setItem(localvalue.annonceDetail.id, `${data._id}`);
                            }}

                        >{data.titre}</a>
                    </h3>
                    <span>{data.entreprise}</span>

                    <div class="bookmark-btn">
                        <i class="ri-bookmark-line"></i>
                    </div>

                    <div class="hover-bookmark-btn">
                        <i class="ri-bookmark-fill"></i>
                    </div>
                </div>


                <ul class="location-information">
                    <li><i class="ri-map-pin-line"></i> {data.lieu}</li>
                    <li><i class="ri-time-line"></i>{moment(data.dateDebut).format('DD/MM/YYYY')} </li>
                </ul>
                {/* 
                    }} */}
                {/*
                    typeAdmin == typeadmin.candidat ?
                        <div class="job-btn">
                            <a href={`#`} onClick={handleShow}
                                class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                        </div> :
                        null
                        */
                }
            </div>

            {/* Modal Pour postuler à lanonnce */}

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Postuler à cette annonce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700">
                            votre candidature sera prise
                        </label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <form onSubmit={handleSubmit} >
                        {
                            loading ?
                                <p>envoi en cours ....</p>
                                :
                                <Button type="submit" variant="outline-primary" onClick={handleClose}>
                                    Poster votre candidature
                                </Button>
                        }
                    </form>
                </Modal.Footer>
            </Modal>

            {/** Modal de confirmation */}

            {confirmation &&
                <Alert variant="success">
                    {confirmation}
                </Alert>}
                <ToastContainer/>






        </div>
    )
}








export default AnnonceCard
