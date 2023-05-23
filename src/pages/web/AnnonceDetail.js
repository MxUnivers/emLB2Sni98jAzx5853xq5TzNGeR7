
import React, { useEffect, useState } from 'react'
import FooterWeb from '../../components/web/FooterWeb';
import { localvalue } from '../../utlis/storage/localvalue';
import { baseurl } from '../../utlis/url/baseurl';
import axios from 'axios';
import { AnnonceGetAll } from '../../action/api/annonces/AnnoncesAction';
import moment from 'moment';
import AnnonceCard from '../../components/web/annonce/card/AnnonceCard';
import BarnerDetailAnnonce from '../../components/web/annonce/details/BarnerDetailAnnonce';
import LoaderComponent from '../../components/chargement/LoaderComponent';
import { useQuery } from 'react-query';
import { queryCahe } from '../../utlis/config';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { typeadmin } from '../../utlis/storage/account';
import { CandidatPostuleOneAnnonce } from '../../action/api/candidat/CandidatAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const AnnonceDetail = () => {
    var idPost = localStorage.getItem(localvalue.annonceDetail.id);
    var [dataAnnonceRecents, setdataAnnonceRecents] = useState([]);
    const [post, setpost] = useState();
    useEffect(() => {
        PostById(idPost, setpost);
        AnnonceGetAll(setdataAnnonceRecents);

    }, []);




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
        dispatch(CandidatPostuleOneAnnonce(idCandidat, post._id, toast));
    }


    // pagnination 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Nombre d'éléments par page


    // Calculez l'index de début et de fin pour l'affichage des éléments sur la page actuelle
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = dataAnnonceRecents.slice(firstIndex, lastIndex);

    // Fonction pour gérer le changement de page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const PostById = async (id, setState) => {
        await axios.get(`${baseurl.url}/api/v1/annonce/get_annonce/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
            .then((response) => {
                console.log(JSON.stringify(response.data)); setState(response.data.data);
            })
            .catch((error) => { console.log(error); });
    }

    const { data, isLoading, isError } = useQuery(queryCahe.offreDetail, PostById(idPost));



    return (
        <div>
            <BarnerDetailAnnonce data={post && post.titre} />
            {/* Alert de confirmation */}
            <ToastContainer />
            {/*Modal de confirmation de validation de candidature */}
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




            <div class="job-details-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">

                            {
                                isLoading ?
                                    <LoaderComponent />
                                    :
                                    (
                                        post &&
                                        <div class="job-details-desc">
                                            <h2>{post.titre}</h2>

                                            <div class="job-details-content">
                                                <h3>Description</h3>
                                                <p class="p-3 bg-gray-100 rounded-lg">
                                                    {
                                                        post.description
                                                    }
                                                </p>
                                            </div>

                                            <div class="row job-article-footer">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="article-tags">
                                                        <span>Information supplémentaire</span>
                                                        <a href="index.html">SALAIRE  : {post.salaire}</a>
                                                        <a href="index.html">Lieu : {post.lieu}</a>
                                                        <a href="index.html"> posté le : {moment(post.dateDebut).format('DD/MM/YYYY')}</a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6">
                                                    <div class="article-share">
                                                        <ul class="social">
                                                            <li><span>Réseaux sociaux</span></li>

                                                            <li>
                                                                <a href="https://www.facebook.com/" target="_blank">
                                                                    <i class="flaticon-facebook"></i>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://twitter.com/" target="_blank">
                                                                    <i class="flaticon-twitter"></i>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://www.instagram.com/" target="_blank">
                                                                    <i class="flaticon-instagram"></i>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://www.linkedin.com/" target="_blank">
                                                                    <i class="flaticon-linkedin"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }



                            <div class="  overflow-visible sm:visible md:visible lg:hidden  job-details-sticky">
                                <div class="job-details-information">
                                    <div class="information-box">
                                        <div class="company-logo">
                                            <img src="assets/images/job/job-1.png" alt="image" />
                                        </div>

                                        {post && <h3>{post.titre}</h3>}
                                        <span>{post && post.entreprise}</span>
                                    </div>

                                    <ul class="information-list-box">
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-calendar"></i> poster le : </span>
                                                {post && moment(post.dateDebut).format('DD/MM/YYYY')}
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-location"></i> lieu</span>
                                                {post && post.lieu}
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-resume"></i> Nombres candidat</span>
                                                {post && post.candidats.length} volotaires
                                            </div>
                                        </li>
                                    </ul>


                                    {
                                        typeAdmin == typeadmin.candidat ?
                                            <div class="job-details-btn-box">
                                                <a href={`#`} onClick={handleShow}
                                                    class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>





                            <div class="related-jobs-box">
                                <h3 class="py-3 pt-3">RECENTES PUBLICATIONS</h3>
                                <div class="row">
                                    {
                                        currentItems.map((item) => {
                                            return (
                                                <AnnonceCard data={item} />
                                            )
                                        })
                                    }
                                </div>
                                {/* Rendu de la pagination */}
                                <div className="pagination">
                                    <Button variant='outline-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                        Précédent
                                    </Button>

                                    {/* Affichage des numéros de page */}
                                    {Array.from({ length: Math.ceil(dataAnnonceRecents.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
                                        <Button
                                        variant='outline-primary'
                                            key={page}

                                            onClick={() => handlePageChange(page)}
                                            className={currentPage === page ? 'active' : ''}
                                        >
                                            {page}
                                        </Button>
                                    ))}

                                    <Button
                                    variant='outline-primary'
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === Math.ceil(dataAnnonceRecents.length / itemsPerPage)}
                                    >
                                        Suivant
                                    </Button>
                                </div>


                            </div>







                        </div>

                        <div class="col-lg-4 col-md-12">
                            <div class=" snap-x:hidden sm:visible md:visible lg:visible job-details-sticky">
                                <div class="job-details-information">
                                    <div class="information-box">
                                        <div class="company-logo">
                                            <img src="assets/images/job/job-1.png" alt="image" />
                                        </div>

                                        {post && <h3>{post.titre}</h3>}
                                        <span>{post && post.entreprise}</span>
                                    </div>

                                    <ul class="information-list-box">
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-calendar"></i> poster le : </span>
                                                {post && moment(post.dateDebut).format('DD/MM/YYYY')}
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-reload"></i> Expiration Date</span>
                                                30th September
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-location"></i> lieu</span>
                                                {post && post.lieu}
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-resume"></i> Nombres candidat</span>
                                                {post && post.candidats.length} volotaires
                                            </div>
                                        </li>
                                    </ul>

                                    {
                                        typeAdmin == typeadmin.candidat ?
                                            <div class="job-details-btn-box">
                                                <a href={`#`} onClick={handleShow}
                                                    class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceDetail;