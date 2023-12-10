import React from 'react'
import { BiDollarCircle } from 'react-icons/bi'
import { BsCalendarWeek, BsTelephone } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { useEffect } from 'react';
import OffreGetAll, { OffreGetById } from '../../action/api/offres/OffresAction';
import { useState } from 'react';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import { useDispatch, useSelector } from 'react-redux';
import { EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import JobEditPage from './JobEditPage';
import { typeContrats } from '../../utlis/options/optionDivers';
import moment from 'moment/moment';
import { CandidaturePost } from '../../action/api/candidatures/CandidatureAction';
import { toast } from 'react-toastify';


const JobDetailPage = () => {

    const navigate = useNavigate();

    // Recruteur connecté
    var recurteur = getAndCheckLocalStorage(localvalue.recruteurID);
    // JobId
    var jobId = getAndCheckLocalStorage(localvalue.JobID);
    // Candidat connecté
    var candidatId = getAndCheckLocalStorage(localvalue.candidatID);

    const { isLoadingO, erroro, offres , offres2} = OffreGetAll();




    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);


    const location = useLocation();
    const { job } = location.state;


    const [idJobDetail, setidJobDetail] = useState(jobId);
    const [jobDetail, setjobDetail] = useState();

    const [isLoading, setisLoading] = useState();
    const [entreprise, setentreprise] = useState();
    //const [idEntreprise, setidEntreprise] = useState();



    useEffect(() => {
        OffreGetById(jobId, setjobDetail, setisLoading, setentreprise);
    }, []);

    // handle
    const handleCompanyDetail = (company) => {
        setWithExpiration(localvalue.recruteurID, company._id, dureeDeVie)
        navigate(`/${routing.company_details}`);
    }






    const [modalApply, setmodalApply] = useState()
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [telephone, settelephone] = useState();
    const [description, setdescription] = useState();
    const [cv, setcv] = useState();



    const handleShow = () => {
        setmodalApply(true);
    }
    const handleClose = () => {
        setmodalApply(false);
    }

    const showErrorToast = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const HandleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }
    // previewFile
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setcv(reader.result);
            // console.log(previewSource)
        }
    }
    const hanldeSubmitCandidat = (event) => {
        event.preventDefault();

        // Liste des champs obligatoires
        const requiredFields = [
            "firstname", "lastname", "email", "telephone", "cv", "description"
        ];

        // Vérifiez chaque champ requis.
        for (const field of requiredFields) {
            if (!eval(field)) {
                showErrorToast(
                    //`${field.replace("_", " ")} requis !`
                    `les champs avec * obligatoire`
                );
                return; // Arrêtez le traitement si un champ est vide.
            }
        }

        if (candidatId !== null || candidatId !== "") {
            dispatch(CandidaturePost(
                candidatId, jobDetail.idEntreprise, jobDetail._id,
                firstname, lastname, email, telephone, cv, description, navigate, toast
            ));
        } else {
            toast.error("Veillez vous connecté");
            setTimeout(() => {
                window.location.href = `/${routing.connexion}`
            }, 2500);
        }
    }





    return (

        <div class="main-content">

            <div class="page-content">





                <section class="section mt-24">
                    <div class="container-fluid px-7">
                        <div class="flex flex-row justify-between">
                            <div class="col-lg-8">
                                <div class="card job-detail overflow-hidden">
                                    <div>

                                        <div class="job-details-compnay-profile">
                                            {
                                                jobDetail && jobDetail.coverPicture ?
                                                    <img src={`${jobDetail.coverPicture}`} alt=""
                                                        class="img-fluid h-24 w-24 rounded-xl rounded-3" /> :
                                                    <div class="h-24 w-24 rounded-full animate-pulse bg-gray-300" />
                                            }
                                        </div>
                                    </div>


                                    <div class="card-body p-4">
                                        <div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    {
                                                        jobDetail && jobDetail.title ?
                                                            <h5 class="mb-1 text-3xl">{jobDetail.title}</h5>
                                                            :
                                                            <div class="h-7 w-full bg-gray-300 animate-pulse rounded-lg" />
                                                    }
                                                    <ul class="list-inline text-muted mb-0">
                                                        {
                                                            jobDetail && jobDetail.candidats ?
                                                                <li class="list-inline-item">
                                                                    <i class="mdi mdi-account"></i> {jobDetail.candidats.length} Candidats
                                                                </li> :
                                                                <div class="h-7 w-full bg-gray-200 animate-pulse rounded-lg" />

                                                        }
                                                        <li class="list-inline-item text-warning review-rating">
                                                            <span class="badge bg-warning">4.8</span> <i
                                                                class="mdi mdi-star align-middle"></i><i
                                                                    class="mdi mdi-star align-middle"></i><i
                                                                        class="mdi mdi-star align-middle"></i><i
                                                                            class="mdi mdi-star align-middle"></i><i
                                                                                class="mdi mdi-star-half-full align-middle"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-4">
                                                    <ul class="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                                                        <li class="list-inline-item">
                                                            <div class="favorite-icon">
                                                                <a href="javascript:void(0)"><i
                                                                    class="uil uil-heart-alt"></i></a>
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="favorite-icon">
                                                                <a href="javascript:void(0)"><i
                                                                    class="uil uil-setting"></i></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            /*<div class="mt-4">
                                            <div class="grid grid-cols-4 gap-4">
                                                <div class="col-lg-3">
                                                    <div class="border rounded-start p-3">
                                                        <p class="text-muted mb-0 fs-13">Experience</p>
                                                        <p class="fw-medium fs-15 mb-0">Minimum 1 Year</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="border p-3">
                                                        <p class="text-muted fs-13 mb-0">Employee type</p>
                                                        <p class="fw-medium mb-0">Full Time</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="border p-3">
                                                        <p class="text-muted fs-13 mb-0">Position</p>
                                                        <p class="fw-medium mb-0">Senior</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="border rounded-end p-3">
                                                        <p class="text-muted fs-13 mb-0">Offer Salary</p>
                                                        <p class="fw-medium mb-0">$2150/ Month</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */
                                        }

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Description sur le job </h5>
                                            {
                                                jobDetail && jobDetail.description ?
                                                    <div class="job-detail-desc">
                                                        <p class="text-muted mb-0">
                                                            {jobDetail.description}
                                                        </p>
                                                    </div> :
                                                    <div class="w-full h-36 bg-gray-300 animate-pulse rounded-xl" />
                                            }
                                        </div>

                                        {
                                            /*<div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Responsibilities</h5>
                                            <div class="job-detail-desc mt-2">
                                                <p class="text-muted">As a Product Designer, you will work within a
                                                    Product Delivery Team fused with UX, engineering, product and data
                                                    talent.</p>
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li><i class="uil uil-circle"></i> Have sound knowledge of
                                                        commercial activities.</li>
                                                    <li><i class="uil uil-circle"></i> Build next-generation web
                                                        applications with a focus on the client side</li>
                                                    <li><i class="uil uil-circle"></i> Work on multiple projects at
                                                        once, and consistently meet draft deadlines</li>
                                                    <li><i class="uil uil-circle"></i> have already graduated or are
                                                        currently in any year of study</li>
                                                    <li><i class="uil uil-circle"></i> Revise the work of previous
                                                        designers to create a unified aesthetic for our brand materials
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Qualifications</h5>
                                            <div class="job-detail-desc mt-2">
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li><i class="uil uil-circle"></i> B.C.A / M.C.A under National
                                                        University course complete.</li>
                                                    <li><i class="uil uil-circle"></i> 3 or more years of professional
                                                        design experience</li>
                                                    <li><i class="uil uil-circle"></i> have already graduated or are
                                                        currently in any year of study</li>
                                                    <li><i class="uil uil-circle"></i> Advanced degree or equivalent
                                                        experience in graphic and web design</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Skill & Experience</h5>
                                            <div class="job-details-desc">
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li><i class="uil uil-circle"></i> Understanding of key Design
                                                        Principal</li>
                                                    <li><i class="fa fa-circle" aria-hidden="true"></i> Proficiency With HTML, CSS,
                                                        Bootstrap</li>
                                                </ul>
                                            </div>
                                        </div> */
                                        }

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Compétences</h5>
                                            <div class="job-details-desc">
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li class="rounde-lg btn btn-success bg-blue-300 btn-sm">BootStrap</li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div class="mt-4 pt-3">
                                            <ul class="list-inline mb-0  flex flex-wrap space-x-2">
                                                <li class="list-inline-item mt-1">
                                                    Reseaux sociaux
                                                </li>
                                                {
                                                    entreprise && entreprise.facebook_url && entreprise.facebook_url !== "#" ?
                                                        <li class="list-inline-item mt-1">
                                                            <a href={`${entreprise.facebook_url}`} target="_blank" class="btn py-1 px-2 btn-primary bg-blue-700 text-white btn-hover"><i
                                                                class="uil uil-facebook-f"></i> Facebook</a>
                                                        </li> :
                                                        null
                                                }
                                                {
                                                    entreprise && entreprise.site_web && entreprise.site_web !== "#" ?
                                                        <li class="list-inline-item mt-1">
                                                            <a href={`${entreprise.site_web}`} target="_blank" class="btn py-1 px-2 btn-danger bg-red-400 text-white btn-hover"><i
                                                                class="uil uil-google"></i>site web + </a>
                                                        </li> :
                                                        null
                                                }
                                                {
                                                    entreprise && entreprise.linkedin_url && entreprise.linkedin_url !== "#" ?
                                                        <li class="list-inline-item mt-1">
                                                            <a href={`${entreprise.linkedin_url}`} target="_blank" class="btn py-1 px-2 btn-success bg-white text-blue-700 btn-hover"><i
                                                                class="uil uil-linkedin-alt"></i>Linkedine </a>
                                                        </li> :
                                                        null
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="text-3xl ">Autres Jobs </h5>

                                    {
                                        offres.map((item) => {
                                            return (
                                                <div onClick={() => {
                                                    setWithExpiration(localvalue.JobID, item._id, dureeDeVie)
                                                }}
                                                    class="job-box card  cursor-pointer mt-4 flex flex-wrap justify-between rounded-lg border ">

                                                    <div class="p-4">

                                                        <div class="row flex justify-between space-x-2">
                                                            <div class="col-lg-1">
                                                                <img src={item.coverPicture} alt=""
                                                                    class="img-fluid h-10 w-10 rounded-xl" />
                                                            </div>
                                                            <div class="col-lg-10">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <h5 class="fs-17 mb-1"><a href={`/${routing.job_details}`}
                                                                        onClick={() => {
                                                                            setWithExpiration(localvalue.JobID, item._id, dureeDeVie)
                                                                        }}
                                                                        class="text-dark text-lg font-semibold">{item.title}</a></h5>
                                                                    <ul class="list-inline mb-0 flex space-x-2">
                                                                        <li class="list-inline-item">
                                                                            <p class="text-muted fs-14 mb-0">{item.company}</p>
                                                                        </li>
                                                                        <li class="list-inline-item">
                                                                            <p class="text-muted fs-14 mb-0"><i
                                                                                class="mdi mdi-map-marker"></i> {item.addresse}</p>
                                                                        </li>
                                                                        <li class="list-inline-item">
                                                                            <p class="text-muted fs-14 mb-0"><i
                                                                                class="uil uil-wallet"></i> {item.salaire} / mois
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="mt-2">
                                                                        {
                                                                            item.typeContrat ?
                                                                                <span class="badge bg-success-subtle bg-green-600 py-1 px-2 rounded-lg text-white mt-1">{item.typeContrat}</span> :
                                                                                null
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="favorite-icon">
                                                            <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="p-3 bg-light">
                                                        <div class="flex justify-between items-center">
                                                            <div class="col-md-3">
                                                                <div class="text-md-end btn ">
                                                                    <a href={`/${routing.job_details}`} onClick={() => {
                                                                        setWithExpiration(localvalue.JobID, item._id, dureeDeVie)
                                                                    }} class="primary-link">Details
                                                                        <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }







                                </div>

                                <div class="text-center mt-4">
                                    <a href={`/${routing.job_list}`} class="primary-link form-text">Voire plus <i
                                        class="mdi mdi-arrow-right"></i></a>
                                </div>

                            </div>

                            <div class="col-lg-4 mt-4 mt-lg-0">

                                <div class="side-bar ms-lg-4">
                                    <div class="card border rounded-lg  shadow-sm job-overview">
                                        <div class="card-body p-4 flex flex-col justify-center ">
                                            {
                                                recurteur == JobDetailPage.idEntreprise ?
                                                    entreprise && entreprise.logo && entreprise.full_name ?
                                                        <Link to={`/${routing.company_details_view}`}
                                                            onClick={() => {
                                                                setWithExpiration(localvalue.recruteurDetailID, jobDetail.idEntreprise, dureeDeVie)
                                                            }}
                                                            class="w-full justify-center bg-gray-50 shadow-lg rounded-lg py-2 px-3">
                                                            <div class="flex flex-col justify-center space-y-2">
                                                                <img src={`${entreprise.logo}`} alt=""
                                                                    class="img-fluid  rounded-3xl h-12 w-12" />
                                                                <h2 class="text-xl font-bold">{entreprise.full_name}</h2>
                                                            </div>
                                                        </Link> :
                                                        <div class="flex felx-col space-y-3" >
                                                            <div class="bg-gray-200 animate-pulse rounded-xl h-16 w-16" />
                                                            <div class="bg-gray-200 animate-pulse rounded-xl h-10 w-full" />
                                                        </div>
                                                    :
                                                    entreprise && entreprise.logo && entreprise.full_name ?
                                                        <Link to={`/${routing.company_details}`} class="w-full justify-center bg-gray-50 shadow-lg rounded-lg py-2 px-3">
                                                            <div class="flex flex-col justify-center space-y-2">
                                                                <img src={`${entreprise.logo}`} alt=""
                                                                    class="img-fluid  rounded-3xl h-12 w-12" />
                                                                <h2 class="text-xl font-bold">{entreprise.full_name}</h2>
                                                            </div>
                                                        </Link> :
                                                        <div class="flex felx-col space-y-3" >
                                                            <div class="bg-gray-200 animate-pulse rounded-xl h-16 w-16" />
                                                            <div class="bg-gray-200 animate-pulse rounded-xl h-10 w-full" />
                                                        </div>
                                            }
                                            <ul class="list-unstyled mt-4 mb-0">
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i class="uil uil-user icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex ">
                                                            <h6 class="fs-14 mb-2"></h6>
                                                            {
                                                                jobDetail && jobDetail.title ?
                                                                    <p class="text-muted mb-0 text-xl ">{jobDetail.title}</p> :
                                                                    <div class="w-full h-6 rounded-xl bg-gray-200 animate-pulse " />
                                                            }
                                                        </div>
                                                    </div>
                                                </li>
                                                {
                                                    jobDetail && jobDetail.addresse ?
                                                        <li>
                                                            <div class="d-flex mt-4">
                                                                <i
                                                                    class="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                                <div class="ms-3 flex space-x-2">
                                                                    <h6 class="fs-14 mb-2">Lieu :  </h6>
                                                                    <p class="text-muted mb-0">{jobDetail.addresse} </p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div class="bg-gray-200 rounded-xl animate-pulse w-full h-7" />
                                                        </li>
                                                }
                                                {
                                                    jobDetail && jobDetail.salaire ?
                                                        <li>
                                                            <div class="d-flex mt-4">
                                                                <i
                                                                    class="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                                                                <div class="ms-3 flex space-x-2">
                                                                    <h6 class="fs-14 mb-2">Salaire / mois (Fcfa) : </h6>
                                                                    <p class="text-muted mb-0">{jobDetail.salaire}</p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li><div class="bg-gray-200 rounded-xl animate-pulse w-full h-7" /></li>
                                                }
                                                {
                                                    /*<li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Qualification</h6>
                                                            <p class="text-muted mb-0">Bachelor Degree</p>
                                                        </div>
                                                    </div>
                                                </li> */
                                                }
                                                {
                                                    jobDetail && jobDetail.typeContrat ?
                                                        <li>
                                                            <div class="d-flex mt-4 flex space-x-2">
                                                                <i
                                                                    class="uil uil-building icon bg-primary-subtle text-primary"></i>
                                                                <div class="ms-3">
                                                                    <h6 class="fs-14 mb-2">Type Comptrat</h6>
                                                                    <div class={`text-muted mb-0 bg-green-500 rounded-xl text-center py-2 text-white`}>{jobDetail.typeContrat}</div>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div class="bg-gray-200 animate-pulse w-full h-7 rounded-xl" />
                                                        </li>
                                                }
                                                {
                                                    jobDetail && jobDetail.createdAt ?
                                                        <li>
                                                            <div class="d-flex mt-4">
                                                                <i
                                                                    class="uil uil-history icon bg-primary-subtle text-primary"></i>
                                                                <div class="ms-3 flex space-x-2">
                                                                    <h6 class="fs-14 mb-2">Date Posté</h6>
                                                                    <p class="text-muted mb-0">{moment(jobDetail.createdAt).format("DD/MM/YYYY à HH:MM")}</p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div class="h-7 rounded-lg w-full bg-gray-200 animate-pulse" />
                                                        </li>
                                                }
                                            </ul>
                                            <div class="mt-3 flex space-x-2 ">
                                                {
                                                    getAndCheckLocalStorage(localvalue.TYPEACCESS) !==typePersonConnected[0] ?
                                                    <button onClick={handleShow}
                                                    class="btn btn-hover w-full mt-2 bg-gray-100 hover:bg-gray-50 active:bg-gray-200"><i
                                                        class="uil uil-bookmark"></i> Postuler</button>
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card company-profile mt-4">
                                        <div class="card-body p-4">
                                            {
                                                entreprise && entreprise.full_name && entreprise.logo ?
                                                    <div class="text-center">
                                                        <img src="assets/images/featured-job/img-02.png" alt=""
                                                            class="img-fluid rounded-3" />

                                                        <div class="mt-4 flex space-x-2">
                                                            <h6 class="fs-17 mb-1">Jobcy Technology Pvt.Ltd</h6>
                                                            <p class="text-muted">Since July 2017</p>
                                                        </div>
                                                    </div> :
                                                    <div class="flex flex-col w-full  justify-center">
                                                        <div class="bg-gray-200 rounded-full h-20 w-20 my-2  " />
                                                        <div class="bg-gray-200 w-full h-7  my-2 " />
                                                    </div>
                                            }
                                            <ul class="list-unstyled mt-4 w-full">
                                            </ul>
                                            {
                                                entreprise && entreprise._id ?
                                                    <div class="mt-4">
                                                        <a href={`/${routing.company_details}`}
                                                            onClick={() => {
                                                                setWithExpiration(entreprise._id, localvalue.recruteurID, dureeDeVie)
                                                            }}
                                                            class="btn btn-primary btn-hover w-100 rounded"><i class="mdi mdi-eye"></i>
                                                            Profile
                                                        </a>
                                                    </div> :
                                                    null
                                            }
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <h6 class="fs-16 mb-3">Job location</h6>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
                                            style={{ width: "100%" }} height="250" allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>







                {
                    modalApply &&
                    (
                        <div class="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-t to-transparent from-gray-900 " id="modal">
                            <div class="bg-white w-full m-10 my-10 rounded-lg shadow-lg p-6">
                                <h2 class="text-lg font-bold mb-4">Postuler à l'offre d'emploi {candidatId} </h2>
                                <form onSubmit={hanldeSubmitCandidat} class="">
                                    <div class="mb-1">
                                        <label for="fullName" class="block font-bold mb-1">Nom *</label>
                                        <input required={true} value={firstname} onChange={(e) => { setfirstname(e.target.value) }} type="text" id="fullName" class="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div class="mb-1">
                                        <label for="fullName" class="block font-bold mb-1">Prénoms *</label>
                                        <input required={true} value={lastname} onChange={(e) => { setlastname(e.target.value) }} type="text" id="fullName" class="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div class="mb-1">
                                        <label for="email" class="block font-bold mb-1">Email *</label>
                                        <input required={true} value={email} onChange={(e) => { setemail(e.target.value) }} type="email" id="email" class="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div class="mb-1">
                                        <label for="phone" class="block font-bold mb-1">Téléphone  , Ex: 225XXXXXXXX *</label>
                                        <input required={true} value={telephone} onChange={(e) => { settelephone(e.target.value) }} type="number" id="phone" class="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div class="mb-1">
                                        <label for="phone" class=" font-bold mb-1 flex space-x-2">Cv en pdf * {cv && <p class="text-green-600 "> ''Téléchager''</p>}</label>
                                        <input required={true} onChange={HandleFileInputChange} type="file" accept='.PDF' class="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="message" class="block font-bold mb-1">Motif *</label>
                                        <textarea id="message" value={description} onChange={(e) => { setdescription(e.target.value) }} class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                                    </div>
                                    {/*<div class="mb-4">
                                        <label for="resume" class="block font-bold mb-1">CV :</label>
                                        <input type="file" id="resume" class="w-full border     border-gray-300 rounded px-3 py-2" />
                                    </div> */}
                                    <div class="flex justify-end">
                                        {
                                            loading ?
                                                <p class="text-gray-600 animate-pulse">Envois en cours</p>
                                                :
                                                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Envoyer
                                                </button>
                                        }
                                        <button type="button" onClick={handleClose} class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 ml-2 rounded" id="closeModal">
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }








            </div>
        </div>


    )
}

export default JobDetailPage