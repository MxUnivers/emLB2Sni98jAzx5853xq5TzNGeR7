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
import { dureeDeVie, localvalue, localvalueStorage, typePersonConnected } from '../../utlis/storage/localvalue';
import { useDispatch, useSelector } from 'react-redux';
import { EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import JobEditPage from './JobEditPage';
import { typeContrats } from '../../utlis/options/optionDivers';
import moment from 'moment/moment';
import { CandidaturePost } from '../../action/api/candidatures/CandidatureAction';
import { toast } from 'react-toastify';
import { getDataFromFile } from '../../action/storage/DataLocal';
import RelativeTime from '../../components/dateTime/RelativeTime';
import JobCard2 from '../../components/job/JobCard2';
import useFetchCandidat from '../../action/api/candidat/CandidatAction';
import { statusPACKS } from '../../utlis/config';

const JobDetailPage = () => {

    const navigate = useNavigate();

    // Recruteur connecté
    var recurteur = getAndCheckLocalStorage(localvalue.recruteurID);
    // JobId
    var jobId = getAndCheckLocalStorage(localvalue.JobID);
    // Candidat connecté
    var candidatId = getAndCheckLocalStorage(localvalue.candidatID);

    const { isLoadingO, erroro, offres, offres2 } = OffreGetAll();

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const location = useLocation();

    const [idJobDetail, setidJobDetail] = useState(jobId);
    const [jobDetail, setjobDetail] = useState();

    const [isLoading, setisLoading] = useState();
    const [entreprise, setentreprise] = useState();
    const { candidat } = useFetchCandidat(candidatId)

    useEffect(() => {
        const offresget = getDataFromFile(localvalueStorage.EMPLOISLIST) || []
        const offreGet = [...offresget].find((offre) => offre._id == jobId) || {}
        setjobDetail(offreGet);
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
        if (getAndCheckLocalStorage(localvalue.TYPEACCESS) !== typePersonConnected[1]) {
            toast.error("Veillez vous connecté s'il vous plais", { position: "bottom-right" })
        } else {
            setmodalApply(true);
        }

    }
    const handleClose = () => {
        setmodalApply(false);
    }

    const showErrorToast = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
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
                    `les champs avec * obligatoire`
                );
                return;
            }
        }


        if (candidatId !== null || candidatId !== ""
            && candidat && candidat.account && candidat.account.pack &&
            (candidat.account.pack == statusPACKS[0] || candidat.account.pack == statusPACKS[1] || candidat.account.pack == statusPACKS[2])
        ) {
            dispatch(CandidaturePost(
                candidatId, jobDetail.idEntreprise, jobDetail._id,
                firstname, lastname, email, telephone, cv, description, navigate, toast
            ));
        }
        else if (
            candidat && candidat.account && candidat.account.pack &&
            (candidat.account.pack !== statusPACKS[0] && candidat.account.pack !== statusPACKS[1] && candidat.account.pack !== statusPACKS[2])
        ) {
            toast.error("Veillez souscrire à un pack pour postuler cette offre");
            navigate(`/${routing.pricing}`)
        }
        else {
            toast.error("Veillez vous connecté");
            setTimeout(() => {
                navigate(`/${routing.connexion}`)
            }, 2500);
        }
    }

    // Pagination
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const offset = currentPage * itemsPerPage;
    const currentItems = offres.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(offres.length / itemsPerPage);

    return (
        <div className="main-content">
            <div className="page-content">
                <section className="section mt-14 mb-24  ">
                    <div className="container-fluid px-7">
                        <div className="flex flex-row justify-between">

                            <div className="max-w-screen">
                                <main className="mt-16 flex flex-col lg:flex-row gap-10">

                                    <div className="w-full lg:w-2/3 card job-detail overflow-hidden">
                                        <div>
                                            <div className="job-details-compnay-profile">
                                                {
                                                    jobDetail && jobDetail.coverPicture ?
                                                        <img src={`${jobDetail.coverPicture}`} alt=""
                                                            className="img-fluid h-24 w-24 rounded-xl rounded-3" /> :
                                                        <div className="h-24 w-24 rounded-full animate-pulse bg-gray-300" />
                                                }
                                            </div>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="w-full ">

                                                <div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            {
                                                                jobDetail && jobDetail.title ?
                                                                    <h5 className="mb-1 text-3xl">{jobDetail.title}</h5>
                                                                    :
                                                                    <div className="h-7 w-full bg-gray-300 animate-pulse rounded-lg" />
                                                            }
                                                            <ul className="list-inline text-muted mb-0">
                                                                {
                                                                    jobDetail && jobDetail.candidats ?
                                                                        <li className="list-inline-item">
                                                                            <i className="mdi mdi-account"></i>
                                                                            {jobDetail.candidats.length}
                                                                            Candidats
                                                                        </li> :
                                                                        <div
                                                                            className="h-7 w-full bg-gray-200 animate-pulse rounded-lg" />
                                                                }
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <h5 className="mb-3 text-xl">Description </h5>
                                                    <hr />
                                                    {
                                                        jobDetail && jobDetail.description ?
                                                            <div className="job-detail-desc p">
                                                                <p className="text-muted mb-0">
                                                                    {jobDetail.description}
                                                                </p>
                                                            </div> :
                                                            <div className="w-full h-36 bg-gray-300 animate-pulse rounded-xl" />
                                                    }
                                                </div>

                                            </div>
                                            <div className="mt-4 pt-3">
                                                <ul className="list-inline mb-0  flex flex-wrap space-x-2">
                                                    <li className="list-inline-item mt-1">
                                                    </li>
                                                    {
                                                        entreprise && entreprise.facebook_url && entreprise.facebook_url !== "#" ?
                                                            <li className="list-inline-item mt-1">
                                                                <a href={`${entreprise.facebook_url}`} target="_blank"
                                                                    className="btn py-1 px-2 btn-primary bg-blue-700 text-white btn-hover"><i
                                                                        className="uil uil-facebook-f"></i> Facebook</a>
                                                            </li> :
                                                            null
                                                    }
                                                    {
                                                        entreprise && entreprise.site_web && entreprise.site_web !== "#" ?
                                                            <li className="list-inline-item mt-1">
                                                                <a href={`${entreprise.site_web}`} target="_blank"
                                                                    className="btn py-1 px-2 btn-danger bg-red-400 text-white btn-hover"><i
                                                                        className="uil uil-google"></i>site web + </a>
                                                            </li> :
                                                            null
                                                    }
                                                    {
                                                        entreprise && entreprise.linkedin_url && entreprise.linkedin_url !== "#" ?
                                                            <li className="list-inline-item mt-1">
                                                                <a href={`${entreprise.linkedin_url}`} target="_blank"
                                                                    className="btn py-1 px-2 btn-success bg-white text-blue-700 btn-hover"><i
                                                                        className="uil uil-linkedin-alt"></i>Linkedine </a>
                                                            </li> :
                                                            null
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/3 col-lg-4 mt-4 mt-lg-0">
                                        <div className="side-bar ms-lg-4">
                                            <div className="card border rounded-lg  shadow-sm job-overview">
                                                <div className="card-body p-4 flex flex-col justify-center ">
                                                    {
                                                        recurteur == JobDetailPage.idEntreprise ?
                                                            entreprise && entreprise.logo && entreprise.full_name ?
                                                                <Link to={`/${routing.company_details_view}`} onClick={() => {
                                                                    setWithExpiration(localvalue.recruteurDetailID, jobDetail.idEntreprise,
                                                                        dureeDeVie)
                                                                }}
                                                                    className="w-full justify-center bg-white border-b-1 rounded-lg py-2 px-3">
                                                                    <div className="flex flex-col justify-center space-y-2">
                                                                        <img src={`${entreprise.logo}`} alt=""
                                                                            className="img-fluid  rounded-3xl h-12 w-12" />
                                                                        <h2 className="text-xl font-bold">{entreprise.full_name}</h2>
                                                                        <hr />
                                                                    </div>
                                                                </Link> :
                                                                <div className="flex felx-col space-y-3">
                                                                    <div className="bg-gray-100 animate-pulse rounded-xl h-16 w-16" />
                                                                    <div className="bg-gray-100 animate-pulse rounded-xl h-10 w-full" />
                                                                </div>
                                                            :
                                                            entreprise && entreprise.logo && entreprise.full_name ?
                                                                <Link to={`/${routing.company_details}`}
                                                                    className="w-full justify-center  bg-gray-50 shadow-lg rounded-lg py-2 px-3">
                                                                    <div className="flex flex-col justify-center space-y-2">
                                                                        <img src={`${entreprise.logo}`} alt=""
                                                                            className="img-fluid  rounded-3xl h-12 w-12" />
                                                                        <h2 className="text-xl font-bold">{entreprise.full_name}</h2>
                                                                    </div>
                                                                    <hr />
                                                                </Link> :
                                                                <div className="flex felx-col space-y-3">
                                                                    <div className="bg-gray-100 animate-pulse rounded-xl h-16 w-16" />
                                                                    <div className="bg-gray-100 animate-pulse rounded-xl h-10 w-full" />
                                                                </div>
                                                    }
                                                    <ul className="list-unstyled mt-4 mb-0">
                                                        <li>
                                                            <div className="d-flex mt-4">
                                                                <i
                                                                    className="uil uil-user icon bg-primary-subtle text-primary"></i>
                                                                <div className="ms-3 flex ">
                                                                    <h6 className="fs-14 mb-2"></h6>
                                                                    {
                                                                        jobDetail && jobDetail.title ?
                                                                            <p className="text-muted mb-0 text-xl ">{jobDetail.title}
                                                                            </p> :
                                                                            <div
                                                                                className="w-full h-6 rounded-xl bg-gray-200 animate-pulse " />
                                                                    }
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {
                                                            jobDetail && jobDetail.addresse ?
                                                                <li>
                                                                    <div className="d-flex mt-4">
                                                                        <i
                                                                            className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                                        <div className="ms-3 flex space-x-2">
                                                                            <h6 className="fs-14 mb-2">Lieu : </h6>
                                                                            <p className="text-muted mb-0">{jobDetail.addresse} </p>
                                                                        </div>
                                                                    </div>
                                                                </li> :
                                                                <li>
                                                                    <div className="bg-gray-200 rounded-xl animate-pulse w-full h-7" />
                                                                </li>
                                                        }
                                                        {
                                                            jobDetail && jobDetail.salaire ?
                                                                <li>
                                                                    <div className="d-flex mt-4">
                                                                        <i
                                                                            className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                                                                        <div className="ms-3 flex space-x-2">
                                                                            <h6 className="fs-14 mb-2">Salaire / mois (Fcfa) : </h6>
                                                                            <p className="text-muted mb-0">{jobDetail.salaire}</p>
                                                                        </div>
                                                                    </div>
                                                                </li> :
                                                                <li>
                                                                    <div className="bg-gray-200 rounded-xl animate-pulse w-full h-7" />
                                                                </li>
                                                        }
                                                        {
                                                            jobDetail && jobDetail.typeContrat ?
                                                                <li>
                                                                    <div className="d-flex mt-4 flex space-x-2">
                                                                        <i
                                                                            className="uil uil-building icon bg-primary-subtle text-primary"></i>
                                                                        <div className="ms-3">
                                                                            <h6 className="fs-14 mb-2"></h6>
                                                                            <div className={`text-muted mb-0 px-3 bg-green-500 rounded-xl
                                                                text-center py-2 text-white`}>{jobDetail.typeContrat}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li> :
                                                                <li>
                                                                    <div className="bg-gray-200 animate-pulse w-full h-7 rounded-xl" />
                                                                </li>
                                                        }
                                                        {
                                                            jobDetail && jobDetail.createdAt ?
                                                                <li>
                                                                    <div className="d-flex mt-4">
                                                                        <i
                                                                            className="uil uil-history icon bg-primary-subtle text-primary"></i>
                                                                        <div className="ms-3 flex space-x-2">
                                                                            <h6 className="fs-14 mb-2">Date Posté</h6>
                                                                            <p className="text-muted mb-0">
                                                                                <RelativeTime date={jobDetail.createdAt} />

                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </li> :
                                                                <li>
                                                                    <div className="h-7 rounded-lg w-full bg-gray-200 animate-pulse" />
                                                                </li>
                                                        }
                                                    </ul>
                                                    <div className="mt-3 flex space-x-2 ">
                                                        {
                                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) !== typePersonConnected[0]
                                                                ?
                                                                <button onClick={handleShow}
                                                                    className="btn btn-hover px-5 mt-2 text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"><i
                                                                        className="uil uil-bookmark"></i> Postuler</button>
                                                                : null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card company-profile mt-4">
                                                <div className="card-body p-4">
                                                    <ul className="list-unstyled mt-4 w-full">
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>

                                <div className="col-lg-12 mt-4">
                                    <h5 className="text-2xl ">Offres interessantes </h5>
                                    {
                                        currentItems.map((item) => {
                                            return (
                                                <JobCard2 data={item} />
                                            )
                                        })
                                    }
                                    <div className="flex justify-center mt-4">
                                        {Array.from({ length: pageCount }, (_, index) => (
                                            <button key={index} onClick={() => handlePageClick(index)}
                                                className={`mx-1 px-3 py-1 ${index === currentPage ? 'bg-blue-500 text-white' :
                                                    'bg-gray-200 text-black'} rounded-md`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <a href={`/${routing.job_list}`} className="primary-link form-text">Voire plus <i
                                        className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {
                    modalApply &&
                    (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-t to-transparent from-gray-900 "
                            id="modal">
                            <div className="bg-white w-full m-10 mt-20 my-10 rounded-lg shadow-lg p-6">
                                <h2 className="text-lg font-bold mb-4">Postuler à l'offre d'emploi </h2>
                                <form onSubmit={hanldeSubmitCandidat} className="">
                                    <div className="mb-1">
                                        <label for="fullName" className="block font-bold mb-1">Nom *</label>
                                        <input required={true} value={firstname} onChange={(e) => { setfirstname(e.target.value) }}
                                            type="text" id="fullName" className="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div className="mb-1">
                                        <label for="fullName" className="block font-bold mb-1">Prénoms *</label>
                                        <input required={true} value={lastname} onChange={(e) => { setlastname(e.target.value) }}
                                            type="text" id="fullName" className="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div className="mb-1">
                                        <label for="email" className="block font-bold mb-1">Email *</label>
                                        <input required={true} value={email} onChange={(e) => { setemail(e.target.value) }} type="email"
                                            id="email" className="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div className="mb-1">
                                        <label for="phone" className="block font-bold mb-1">Téléphone , Ex: 225XXXXXXXX *</label>
                                        <input required={true} value={telephone} onChange={(e) => { settelephone(e.target.value) }}
                                            type="number" id="phone" className="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div className="mb-1">
                                        <label for="phone" className=" font-bold mb-1 flex space-x-2">Cv en pdf * {cv && <p
                                            className="text-green-600 "> <a href={`${cv}`} target='_blank'>''Téléchager'' </a></p>}</label>
                                        <input required={true} onChange={HandleFileInputChange} type="file" accept='.PDF'
                                            className="w-full border border-gray-300 rounded px-3 py-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label for="message" className="block font-bold mb-1">Motif *</label>
                                        <textarea id="message" value={description}
                                            onChange={(e) => { setdescription(e.target.value) }} className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        {
                                            loading ?
                                                <p className="text-gray-600 animate-pulse">Envois en cours</p>
                                                :
                                                <button type="submit"
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Envoyer
                                                </button>
                                        }
                                        <button type="button" onClick={handleClose}
                                            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 ml-2 rounded"
                                            id="closeModal">
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