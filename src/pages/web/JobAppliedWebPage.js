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
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import moment from 'moment';
import useFetchCandidat, { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import OffreGetAll from '../../action/api/offres/OffresAction';
import JobCard2 from '../../components/job/JobCard2';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';

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


    
    const { isLoadingCandidat, errorcandidat, candidat } = useFetchCandidat(idCandidat);
    const { isLoading, error, offres, offres2 } = OffreGetAll();


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

                
                        <main class="flex  w-screen items-center mt-10 justify-center bg-white">
                            <div className=" flex gap-10 justify-center flex-wrap items-center py-3">
                                {
                                    isLoading ?
                                        <LoadingCompo1 text={"Vos Offres postulés"} />
                                        :
                                        error ?
                                            <p>Une erreur est survenue ...</p>
                                            :
                                            offres.map((item) => {
                                                if (candidat.offres.some(element2 => element2 === item._id)) {
                                                    return (
                                                        <JobCard2 data={item} />
                                                    )
                                                } else {
                                                    return null;
                                                }
                                            })
                                }
                            </div>
                        </main>



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
