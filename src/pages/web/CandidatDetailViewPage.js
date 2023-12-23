import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { MdEmail, MdLocationCity, MdPhone, MdWeb } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { useState } from 'react';
import useFetchCandidat, { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { useEffect } from 'react';
import Stepper from "react-stepper-horizontal";
import { CandidatureAllOfCandidat } from '../../action/api/candidatures/CandidatureAction';
import { handleCandidatEditRouting } from '../../utlis/url/ListFunction';
import useFetchEducation, { EducationCandidatPost } from '../../action/api/candidat/EducationAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useFetchExperience, { ExperienceCandidatPost } from '../../action/api/candidat/ExperienceAction';
import useFetchProject, { ProjectCandidatPost } from '../../action/api/candidat/ProjectAction';
import CandidatBlogProfile from '../../components/candidat/profile/CandidatBlogProfile';





const CandidatDetailViewPage = () => {


    var idCandidat = getAndCheckLocalStorage(localvalue.candidatDetailID);

    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);

    const { isLoadingEducation, errorEducation, candidatEducation } = useFetchEducation(idCandidat);

    const { isLoadingExperience, errorExperience, candidatExperience } = useFetchExperience(idCandidat);

    const { isLoadingProject, errorProject, candidatProject } = useFetchProject(idCandidat);


    var typeAccess = getAndCheckLocalStorage(localvalue.candidatTYPE);

    const [candidatures, setcandidatures] = useState([]);
    const [candidatures2, setcandidatures2] = useState([]);


    const [title_education, settitle_education] = useState();
    const [entreprise_education, setentreprise_education] = useState();
    const [description_education, setdescription_education] = useState();


    const [title_experience, settitle_experience] = useState();
    const [entreprise_experience, setentreprise_experience] = useState();
    const [description_experience, setdescription_experience] = useState();


    const [title_project, settitle_project] = useState();
    const [entreprise_project, setentreprise_project] = useState();
    const [description_project, setdescription_project] = useState();


    useEffect(() => {
        CandidatureAllOfCandidat(idCandidat, setcandidatures, setcandidatures2);
    }, []);



    // handle Modal 
    // position modal state
    const [step, setStep] = useState(0);
    const [stepEdit, setStepEdit] = useState(0);

    const [modalApply, setModalApply] = useState(false);// 
    const [modalApplyEdit, setModalApplyEdit] = useState(false);//

    const handleShow = (item) => { setModalApply(true); setStep(item) }
    const handleClose = (item) => { setModalApply(false) }


    const handleShowEdit = (item) => { setModalApplyEdit(true); setStepEdit(item) }
    const handleCloseEdit = (item) => { setModalApplyEdit(false) }




    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
    ];


    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const errore = useSelector((state) => state.error);

    const handleSumbitEducation = (event) => {
        event.preventDefault();
        dispatch(EducationCandidatPost(idCandidat, title_education, entreprise_education, description_education, toast))
    }

    const handleSumbitExeprience = (event) => {
        event.preventDefault();
        dispatch(ExperienceCandidatPost(idCandidat, title_experience, entreprise_experience, description_experience, toast))
    }

    const handleSumbitProject = (event) => {
        event.preventDefault();
        dispatch(ProjectCandidatPost(idCandidat, title_project, entreprise_project, description_project, toast))
    }


    return (
        <div className="main-content">
            <div className="page-content">
                <section className="section mt-28 mb-36">
                    <div className=" px-5 container-fluid">
                        <div className="row lg:flex md:lg:flex   lg:justify-between">
                            <div className="col-lg-4">
                                <div className="card border bg-white shadow rounded-lg">
                                    <div className="card-body p-4 py-5  px-5">
                                        <div className="border-b flex flex-col justify-center items-center">
                                            {
                                                candidat && candidat.coverPicture ?
                                                    <img src={candidat.coverPicture} alt=""
                                                        className="avatar-lg rounded-full  h-32 w-32" /> :
                                                    <div className="h-32 w-32 rounded-full bg-gray-200 animate-pulse" />
                                            }
                                            {
                                                candidat && candidat.firstname && candidat.lastname ?
                                                    <h6 className="fs-18 mb-0 mt-4 text-center textxl font-semibold text-gray-600">{
                                                        `${candidat.firstname} ${candidat.lastname}`
                                                    }</h6> :
                                                    <div className="my-2 bg-gray-200 animate-pulse w-full px-3 h-5 rounded-lg " />
                                            }
                                            {
                                                candidat && candidat.title_post ?
                                                    <p className="text-muted mb-4 text-center">{candidat.title_post}</p> :
                                                    <div className="bg-gray-200 animate my-1 h-6 w-full px-3 rounded-lg" />
                                            }


                                            <ul className=" inline-flex mb-5 space-x-4">

                                                {candidat && candidat.facebook_url ?
                                                    <li className="inline-flex">
                                                        <a href={candidat.facebook_url} target="_blank" className="social-link">
                                                            <CiFacebook className="h-7 w-7" />
                                                        </a>
                                                    </li> :
                                                    <li className="inline-flex">
                                                        <div className="bg-gray-200 animate my-1 h-7  w-7 px-3 rounded-lg" />
                                                    </li>
                                                }
                                                {
                                                    candidat && candidat.twitter_url ?
                                                        <li className="inline-flex">
                                                            <a href={candidat.twitter_url} target="_blank" className="social-link">
                                                                <BsTwitter className="h-7 w-7" />
                                                            </a>
                                                        </li> :
                                                        <li className="inline-flex">
                                                            <div className="bg-gray-200 animate my-1 h-7  w-7 px-3 rounded-lg" />
                                                        </li>
                                                }
                                                {
                                                    candidat && candidat.linkedin_url ?
                                                        <li className="inline-flex">
                                                            <a href={candidat.linkedin_url} target="_blank" className="social-link">
                                                                <BsLinkedin className="h-7 w-7" />
                                                            </a>
                                                        </li> :
                                                        <li className="inline-flex">
                                                            <div className="bg-gray-200 animate my-1 h-7  w-7 px-3 rounded-lg" />
                                                        </li>
                                                }
                                            </ul>

                                            <div className="mt-5 mb-5 flex justify-center">
                                                {/* 
                                                    candidat && candidat._id ?
                                                        <button
                                                            onClick={() => {
                                                                handleCandidatEditRouting();
                                                            }}
                                                            className="btn btn-blue-400 space-x-2 flex text-white bg-gray-600 py-2 px-3 rounded-lg">
                                                            <BiEdit />
                                                            <span>Mettre à jour</span>
                                                        </button> :
                                                        null
                                                         */
                                                }
                                            </div>
                                            {
                                                /*<div className="mt-1 mb-1 flex justify-center">
                                                <Link to={`/${routing.candidat_applied}`} className=" space-x-2 text-blue-700 font-bold py-2 px-3 rounded-lg">
                                                    <span>Offres Postulés {candidat && candidat.offres ? candidat.offres.length : null}</span>
                                                </Link>
                                            </div>
                                            <div className="mt-1 mb-1 flex justify-center">
                                                <Link to={`/${routing.candidature_list}`} className=" space-x-2 text-blue-700 font-bold py-2 px-3 rounded-lg">
                                                    <span>Candidature ({candidatures.length})</span>
                                                </Link>
                                            </div> */
                                            }
                                        </div>


                                    </div>


                                    <div className="candidate-profile-overview  card-body border-top p-4">
                                        <h6 className="fs-17 fw-semibold mb-3 text-2xl">Info Profile</h6>
                                        {
                                            /*<ul className=" mb-5">
                                            <li>
                                                <div className="flex flex-col">
                                                    <label className="text-dark text-gray-700 font-bold ">Categorie</label>
                                                    <div>
                                                        <p className="text-muted mb-0">Account ou banque</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex flex-col">
                                                    <label className="text-dark text-gray-700 font-bold ">Expérience</label>
                                                    <div>
                                                        <p className="text-muted mb-0">0-3</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <label className="text-dark  text-gray-700 font-bold">Vues</label>
                                                    <div>
                                                        <p className="text-muted mb-0">2574</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */
                                        }
                                        <div className="mt-3">
                                            {
                                                candidat && candidat.telephone ?
                                                    <a href={`tel:${candidat.telephone}`} className="btn btn-danger btn-hover w-100"><i
                                                        className="uil uil-phone"></i> Me contacter</a>
                                                    : null

                                            }
                                            {
                                                candidat && candidat.cv ?
                                                    <a href={`${candidat.cv}`} target='_blank' className="btn btn-primary btn-hover w-100 mt-2"><i
                                                        className="uil uil-import"></i> Telecharger cv</a>
                                                    : null
                                            }
                                        </div>

                                    </div>

                                    {
                                        candidat && candidat.competences ?
                                            <div className="card-body p-4 border-top">
                                                <h6 className=" fw-semibold mb-3  text-gray-700 font-bold">Compétences</h6>
                                                <div className="flex flex-wrap justify-center gap-2">
                                                    {
                                                        candidat.competences.map((item) => {
                                                            return (
                                                                <div className="space-y-3 flex flex-wrap space-x-3">
                                                                    <span className="badge bg-blue-400 text-white py-1 text-xs px-3 rounded-lg mt-1">
                                                                        {item.label}
                                                                    </span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div> :
                                            <div className="bg-gray-200 rounded-lg animate-pulse h-16 w-full " />
                                    }
                                    <div className="candidate-contact-details card-body p-4 border-top">
                                        <h6 className="fs-17 fw-semibold mb-3  text-gray-700 font-bold">Infos Contact</h6>
                                        <ul className="list-unstyled mb-0">
                                            {
                                                candidat && candidat.email ?
                                                    <li>
                                                        <div className="d-flex align-items-center mt-4">

                                                            <a href={`mailto:${candidat.email}`} className="ms-3">
                                                                <h6 className="fs-14 mb-1"><MdEmail /></h6>
                                                                <p className="text-muted mb-0">{candidat.email}</p>
                                                            </a>
                                                        </div>
                                                    </li> :
                                                    <li>
                                                        <div className="w-full rounded-xl bg-gray-200 animate-pulse my-1 h-4" />
                                                    </li>
                                            }
                                            {
                                                candidat && candidat.pays && candidat.adresse ?
                                                    <li>
                                                        <div className="d-flex align-items-center mt-4">

                                                            <div className="ms-3">
                                                                <h6 className="fs-14 mb-1"><MdLocationCity /></h6>
                                                                <p className="text-muted mb-0">{candidat.pays}, {candidat.adresse}</p>
                                                            </div>
                                                        </div>
                                                    </li> :
                                                    <li>
                                                        <div className="w-full rounded-xl bg-gray-200 animate-pulse my-1 h-4" />
                                                    </li>
                                            }
                                            {
                                                candidat && candidat.telephone ?
                                                    <li>
                                                        <div className="d-flex align-items-center mt-4">
                                                            <a href={`tel:${candidat.telephone}`} className="ms-3">
                                                                <h6 className="fs-14 mb-1"><MdPhone /></h6>
                                                                <p className="text-muted mb-0">{candidat.telephone}</p>
                                                            </a>
                                                        </div>
                                                    </li> :
                                                    <li>
                                                        <div className="w-full rounded-xl bg-gray-200 animate-pulse my-1 h-4" />
                                                    </li>
                                            }


                                            {
                                                candidat && candidat.site_web !== "#" ?
                                                    <li>
                                                        <div className="d-flex align-items-center mt-4">
                                                            <div className="ms-3">
                                                                <h6 className="fs-14 mb-1"><MdWeb /> site web :</h6>
                                                                <a href={`${candidat.site_web}`} target="_blank" >
                                                                    <p className="text-muted mb-0">{candidat.site_web}</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li> :
                                                    <li>
                                                        <div className="w-full rounded-xl bg-gray-200 animate-pulsemy-1 h-4 " />
                                                    </li>
                                            }




                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full col-lg-8">

                             <div className="card candaidat-details ms-lg-4 mt-4 mt-lg-0">
                               <CandidatBlogProfile idCandidat={idCandidat}/>
                             </div>

                                <div className="card candidate-details ms-lg-4 mt-4 mt-lg-0">
                                    <div className="card-body p-4 candidate-personal-detail mx-1">
                                        {
                                            candidat && candidat.description ?
                                                <div className="rounded-xl shadow-sm px-2 py-2 border ">
                                                    <h6 className="fs-17 fw-semibold mb-3 text-2xl font-semibold">Présentation</h6>
                                                    <p className="text-muted mb-2">{candidat.description}</p>
                                                </div> :
                                                <div className="bg-gray-200 w-full h-40 animate-pulse rounded-xl" />
                                        }
                                        <div className="candidate-education-details mt-4 pt-3 rounded-xl shadow-sm px-2 py-2 border ">
                                            {
                                                candidatEducation && candidatEducation.length > 0 ?
                                                    <div className="flex flex-row justify-between items-center">
                                                        <h6 className="fs-17 fw-bold mb-0 text-2xl font-semibold">Education</h6>
                                                    </div>
                                                    : null
                                            }
                                            {
                                                isLoadingEducation ?
                                                    (<p education en cours>...</p>) :
                                                    (
                                                        candidatEducation &&
                                                            candidatEducation.length > 0
                                                            ? candidatEducation.map((item) => {
                                                                return (
                                                                    <div className="candidate-education-content mt-4 flex space-x-3">
                                                                        <div className="rounded-full p-3 h-10 text-center w-10 bg-blue-500 text-white flex-shrink-0  text-primary">
                                                                            {String(item.title).charAt(1)}
                                                                        </div>
                                                                        <div className="ms-4">
                                                                            <h6 className="fs-16 mb-1">{item.title}</h6>
                                                                            <p className="mb-2 text-muted">
                                                                                {item.entreprise}
                                                                            </p>
                                                                            <p className="text-muted">{item.description}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                            : null
                                                    )
                                            }

                                        </div>
                                        <div className="candidate-education-details mt-4 pt-3 rounded-xl shadow-sm px-2 py-2 border">

                                            {
                                                candidatExperience && candidatExperience.length > 0 ?
                                                    <div className="flex flex-row justify-between items-center  ">
                                                        <h6 className="fs-17 fw-bold mb-0 text-2xl font-semibold">Expériences</h6>
                                                    </div>
                                                    : null
                                            }
                                            {
                                                isLoadingExperience ?
                                                    <p>Chargement...</p> :
                                                    errorExperience ?
                                                        <p>une erreur est survevue</p> :
                                                        (
                                                            candidatExperience.map((item) => {
                                                                return (
                                                                    <div className="candidate-education-content mt-4 flex space-x-3">
                                                                        <div className="rounded-full p-3 h-10 text-center w-10 bg-blue-500 text-white flex-shrink-0  text-primary">
                                                                            {String(item.title).charAt(0)}
                                                                        </div>
                                                                        <div className="ms-4">
                                                                            <h6 className="fs-16 mb-1">{item.title}</h6>
                                                                            <p className="mb-2 text-muted">{item.entreperise}
                                                                            </p>
                                                                            <p className="text-muted">{item.description}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        )
                                            }

                                        </div>
                                        <div className="candidate-portfolio mt-4 pt-3 rounded-xl shadow-sm px-2 py-2 border ">
                                            {
                                                candidatProject && candidatProject.length > 0 ?
                                                <div className="flex flex-row justify-between items-center">
                                                <h6 className="fs-17 fw-bold mb-0 text-2xl font-semibold">Projets</h6>
                                            </div>
                                             : null
                                            }
                                            {
                                                isLoadingProject ?
                                                    <p>En cours ...</p> :
                                                    errorProject ?
                                                        <p>Une erreur est survenue</p>
                                                        :
                                                        (
                                                            candidatProject.map((item) => {
                                                                return (
                                                                    <div className="row">
                                                                        <div className="col-lg-8 mt-4">
                                                                            <div className="candidate-portfolio-box card border-0 flex flex-row space-x-3">
                                                                                <img src={item.coverPicture} alt=""
                                                                                    className="img-fluid h-20 w-20 rounded-lg" />
                                                                                <div className="bg-overlay"></div>
                                                                                <div className="zoom-icon">
                                                                                    <div className="text-lg font-semibold">
                                                                                        {item.project}
                                                                                    </div>
                                                                                    <div className="text-xs">
                                                                                        {item.description}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                )
                                                            })
                                                        )
                                            }
                                        </div>
                                        {
                                            /*<form action="#" className="mt-4 pt-3 ">
                                            <h6 className="fs-17 fw-semibold mb-2 text-2xl font-bold">Donner votre avis</h6>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label for="inputname" className="form-label">Your Name</label>
                                                        <input type="text" className="form-control px-3 py-1 w-full rounded-lg bg-white" id="inputname"
                                                            placeholder="Enter your name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label for="inputemail" className="form-label">Email</label>
                                                        <input type="email" className="form-control px-3 py-1 w-full rounded-lg bg-white " id="inputemail"
                                                            placeholder="Enter your email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label for="inputsubject" className="form-label">Subject</label>
                                                        <input type="text" className="form-control px-3 py-1 w-full rounded-lg bg-white " id="inputsubject"
                                                            placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label for="inputcoment" className="form-label">Review</label>
                                                        <textarea className="form-control px-3 py-1 w-full rounded-lg bg-white " id="inputcoment" rows="3"
                                                            placeholder="Add your review"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary bg-blue-300 btn-hover">Envoyer <i
                                                    className="uil uil-angle-right-b"></i></button>
                                            </div>
                                        </form> 
                                        
                                        
                                        


                                        <div className="mt-4 pt-3">
                                            <div className="flex space-x-3 align-text-top">
                                                <div className="flex-shrink-0">
                                                    <img className="rounded-circle avatar img-thumbnail rounded-lg h-10 w-10"
                                                        src="assets/images/user/img-04.jpg" alt="img" />
                                                </div>
                                                <div className="flex-grow-1 ms-sm-3">
                                                    <div>
                                                        <p className="text-muted float-end fs-14 mb-2">Jun 23, 2021</p>
                                                        <h6 className="mt-sm-0 mt-3 mb-1">Michelle Durant</h6>
                                                        <div className="text-warning review-rating mb-2">
                                                            <i className="mdi mdi-star"></i>
                                                            <i className="mdi mdi-star"></i>
                                                            <i className="mdi mdi-star"></i>
                                                            <i className="mdi mdi-star"></i>
                                                            <i className="mdi mdi-star-half-full"></i>
                                                        </div>
                                                        <p className="text-muted fst-italic">" There are many variations of
                                                            passages of Lorem Ipsum available, but the majority have
                                                            suffered alteration in some form, by injected humour "</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        
                                        */
                                        }












                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>































            </div>
        </div>
    )
}

export default CandidatDetailViewPage;