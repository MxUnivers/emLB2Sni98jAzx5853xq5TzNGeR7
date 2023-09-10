import React from 'react'
import ModalApplyOffre from '../../containers/modal/ModalApplyOffre';
import { app_bg } from '../../utlis/config';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiTimeFive } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci";
import { routing } from '../../utlis/routing';
import { OffreGetAll, OffreGetAllById } from '../../action/api/offres/OffresAction';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { useEffect } from 'react';
import moment from 'moment';
import { typeContrats } from '../../utlis/options/optionDivers';
import { MdWorkOutline } from 'react-icons/md';

const ListEmploisWebPage = () => {
    const navigate = useNavigate();

    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);

    const [modalApply, setmodalApply] = useState(false);
    const handleShow = (item) => {
        setmodalApply(true)
    }
    const handleClose = (item) => {
        setmodalApply(false)
    }

    useEffect(() => {
        OffreGetAll(setoffres, setoffres2);
    }, []);



    const handleDetailItem = (job) => {
        setWithExpiration(localvalue.JobID, job._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { job } });
    }




    return (
        <div class="main-content">

            <div class="page-content">










                <div className='w-full bg-gray-50 mt-24 gap-3 rounded-[10px] p-5'>

                    <form action=''>

                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center py-3 rounded-[8px] gap-5 bg-white p-5 shadow-greyIsh-700'>

                            <div className='flex gap-2 items-center'>
                                <AiOutlineSearch className='text-[25px] icon' />
                                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...' />
                                {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
                            </div>

                            <div className='flex gap-2 items-center'>
                                <BsHouseDoor className='text-[25px] icon' />
                                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Company...' />
                                {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
                            </div>

                            <div className='flex gap-2 items-center'>
                                <CiLocationOn className='text-[25px] icon' />
                                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location...' />
                                {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
                            </div>

                            <div className='flex gap-2 items-center'>
                                <MdWorkOutline className='text-[25px] icon' />
                                <select name="" id='type' className='bg-white rounded-[3px] px-4 py-1'>
                                <option >--choix de contrat --</option>
                                    {
                                        typeContrats.map((item) => {
                                            return (
                                                <option value={item.label}>{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <button type="button" className=' h-full p-5 px-10 py-2 rounded-[10px] btn btn-primary text-white cursor-pointer bg-blue-600 hover:bg-blue-500'>
                                    rechercher
                                </button>
                                <button type="reset" className='text-[#a1a1a1] btn btn-danger cursor-pointer'>
                                    Effacer
                                </button>
                            </div>


                        </div>
                    </form>



                </div>

                <main class="flex min-h-full-screen  w-full items-center mt-10 justify-center bg-white px-5">


                    <div className=" flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center flex-wrap items-center py-3">
                        {
                            offres.map((item) => {
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
                                                        <ul class="list-inline mb-0 flex flex-wrap space-x-2">
                                                            <li class="list-inline-item">
                                                                <p class="text-muted fs-14 mb-0">
                                                                <i class="mdi mdi-work"></i>
                                                                {item.company}</p>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <p class="text-muted fs-14 mb-0">
                                                                <i class="mdi mdi-map-marker"></i> {item.addresse}</p>
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
                            })}
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

export default ListEmploisWebPage;
