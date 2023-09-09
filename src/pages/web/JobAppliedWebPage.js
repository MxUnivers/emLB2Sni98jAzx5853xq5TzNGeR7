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
                    candidat && candidat.offres.length > 0
                        ?
                        <main class="flex  w-screen items-center mt-10 justify-center bg-white">
                            <div className=" flex gap-10 justify-center flex-wrap items-center py-3">
                                {
                                    offres.map((item) => {
                                        if (candidat.offres.some(element2 => element2._id === item._id)) {
                                            return (
                                                <div key={item._id} onClick={() => {
                                                    setWithExpiration(localvalue.JobID, item._id, dureeDeVie);
                                                    navigate(`/${routing.job_details}`, { state: { item } });
                                                }} className="group cursor-pointer relative group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] border  hover:bg-blueColor shadow-lg  hover:shadow-3xl ">
                                                    <span className="flex justify-between items-center gap-4 mb-3">
                                                        <h1 className="text-[16px] font-semibold text-textColor line-clamp-2 ">{item.title}</h1>
                                                        <span className="flex items-center gap-1 text-gray-400 text-xs"><BiTimeFive />{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                                                    </span>
                                                    <h6 className="text-gray-400">{item.location}</h6>
                                                    <p className="text-[13px] text-gray-500 pt-[20px] border-t-[2px] mt-[20px] line-clamp-2 ">
                                                        {item.description}
                                                    </p>
                                                    <div className="company flex items-center gap-2">
                                                        <img src={item.coverPicture} alt="Company Logo" className="w-[10%] " />
                                                        <span className="text-[14px] py-[1rem] block ">
                                                            {item.company}
                                                        </span>
                                                    </div>
                                                    <div >
                                                        <button type='button' onClick={() => { handleDetailItem(item) }}
                                                            className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-bleu-300 bg-blue-200 group-hover/item:text-textColor " >
                                                            Details
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                            </div>
                        </main> :
                        <div class=" flex justify-center items-center gap-5  h-screen mt-10 text-center pt-10">
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
