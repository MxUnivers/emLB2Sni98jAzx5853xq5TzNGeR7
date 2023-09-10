import React, { useEffect } from 'react'
import ModalApplyOffre from '../../containers/modal/ModalApplyOffre';
import { app_bg } from '../../utlis/config';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiTimeFive } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci";
import { routing } from '../../utlis/routing';
import { OffreGetAll } from '../../action/api/offres/OffresAction';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import moment from 'moment';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';

const JobAppliedWebPage = () => {
    const navigate = useNavigate();

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const [emploisList, setemploisList] = useState([1, 1, 1, 1]);

    const [modalApply, setmodalApply] = useState(false);
    const handleShow = (item) => {
        setmodalApply(true)
    }
    const handleClose = (item) => {
        setmodalApply(false)
    }

    const handleDetailItem = (job) => {
        setWithExpiration(localvalue.JobID, job._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { job } });
    }


    const [candidat, setcandidat] = useState();
    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);


    useEffect(() => {
        OffreGetAll(setoffres, setoffres2);
        CandidatGetById(idCandidat, setcandidat);
    }, []);


    return (
        <div class="main-content">

            <div class="page-content">


                <section class="bg-gray-50 mt-28">
                    <div
                        class="mx-auto px-4 py-5 lg:flex  lg:items-center"
                    >
                        <div class="mx-auto max-w-xl text-center">
                            <h1 class="text-3xl font-extrabold sm:text-5xl">
                                Offres postuler
                                <strong class="font-extrabold text-blue-700 sm:block">
                                    Increase Conversion.
                                </strong>
                            </h1>

                            <p class="mt-4 sm:text-xl/relaxed">
                                La liste de vos offre aux quelle vous avez postuler
                            </p>

                            <div class="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                    to={`/${routing.job_list}`}
                                >
                                    Postuler à plus d{"'"}offres
                                </Link>

                                <a
                                    class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                    href="/about"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    /*setWithExpiration(localvalue.JobID, item._id, dureeDeVie);
                                                    navigate(`/${routing.job_details}`, { state: { item } }); */
                }

                {
                    candidat && candidat.offres.length > 0
                        ?
                        <main class="flex  w-screen items-center mt-10 justify-center bg-white">
                            <div className=" flex gap-10 justify-center flex-wrap items-center py-3">
                                {
                                    offres.map((item) => {
                                        if (candidat.offres.some(element2 => element2 === item._id)) {
                                            return (
                                                <div onClick={() => {
                                                    setWithExpiration(localvalue.JobID, item._id, dureeDeVie);
                                                    navigate(`/${routing.job_details}`, { state: { item } });
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
                                        } else {
                                            return null;
                                        }
                                    })}
                            </div>
                        </main> :
                        <div class=" flex justify-center items-center gap-5  h-screen mt-10 text-center pt-5 pb-5">
                            <div class="bg-gray-50 w-full  rounded-lg animate-pulse h-28 justify-center items-center text-center " >Aucunne offre pour l{"'"}instant </div>
                        </div>
                }




                {
                    modalApply &&
                    (
                        <div class="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-t to-transparent from-gray-900 " id="modal">
                            <div class="bg-white rounded-lg shadow-lg p-6">
                                <h2 class="text-lg font-bold mb-4">Postuler à l'offre d'emploi</h2>
                                <form>
                                    <div class="mb-4">
                                        <label for="fullName" class="block font-bold mb-1">Nom complet :</label>
                                        <input type="text" id="fullName" class="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="email" class="block font-bold mb-1">Email :</label>
                                        <input type="email" id="email" class="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="phone" class="block font-bold mb-1">Téléphone :</label>
                                        <input type="tel" id="phone" class="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="message" class="block font-bold mb-1">Message :</label>
                                        <textarea id="message" class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                                    </div>
                                    <div class="mb-4">
                                        <label for="resume" class="block font-bold mb-1">CV :</label>
                                        <input type="file" id="resume" class="w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div class="flex justify-end">
                                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Envoyer
                                        </button>
                                        <button onClick={handleClose} class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 ml-2 rounded" id="closeModal">
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }



            </div>
        </div >
    )
}

export default JobAppliedWebPage;
