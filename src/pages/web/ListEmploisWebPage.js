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



    const handleDetailItem = (job)=>{
        setWithExpiration(localvalue.JobID,job._id,dureeDeVie);
        navigate(`/${routing.job_details}`,{state:{job}});
    }




    return (
        <div class="main-content">

            <div class="page-content">










                <div className='bg-gray-50 mt-24 grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] m-5'>

                    <form action=''>

                        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-greyIsh-700'>

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

                            <button className=' h-full p-5 px-10 rounded-[10px] btn btn-primary text-white cursor-pointer bg-blue-600 hover:bg-blue-500'>rechercher</button>



                        </div>
                    </form>

                    <div className='secDiv flex items-center gap-10 justify-center'>
                        <div className='singleSearch flex items-center gap-2'>
                            <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>
                            <select name="" id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                                <option value="">Relevance</option>
                                <option value="">Inclusive</option>
                                <option value="">Starts With</option>
                                <option value="">Contains</option>
                            </select>
                        </div>

                        <div className='singleSearch flex items-center gap-2'>
                            <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>
                            <select name="" id='type' className='bg-white rounded-[3px] px-4 py-1'>
                                <option value="">Full-time</option>
                                <option value="">Remote</option>
                                <option value="">Contract</option>
                                <option value="">Part-time</option>
                            </select>
                        </div>

                        <div className='singleSearch flex items-center gap-2'>
                            <label htmlFor='level' className='text-[#808080] font-semibold'>Level:</label>
                            <select name="" id='level' className='bg-white rounded-[3px] px-4 py-1'>
                                <option value="">Senior</option>
                                <option value="">Begginner</option>
                                <option value="">Intermadiate</option>
                                <option value="">Advocate</option>
                            </select>
                        </div>

                        <span className='text-[#a1a1a1] btn btn-danger cursor-pointer'>Effacer</span>
                    </div>

                </div>

                <main class="flex  w-screen items-center mt-10 justify-center bg-white">


                    <div className=" flex gap-10 justify-center flex-wrap items-center py-3">
                        {
                            offres.map((item) => {
                                return (
                                    <div key={item.id} className="group  relative group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] border  hover:bg-blueColor shadow-lg  hover:shadow-3xl ">
                                        <span className="flex justify-between items-center gap-4">
                                            <h1 className="text-[16px] font-semibold text-textColor line-clamp-2 ">{item.title}</h1>
                                            <span className="flex items-center gap-1 text-gray-400 text-xs"><BiTimeFive />{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                                        </span>
                                        <h6 className="text-gray-400">{item.location}</h6>
                                        <p className="text-[13px] text-gray-500 pt-[20px] border-t-[2px] mt-[20px] line-clamp-3 ">
                                            {item.description}
                                        </p>
                                        <div className="company flex items-center gap-2">
                                            <img src={item.coverPicture} alt="Company Logo" className="w-[10%]" />
                                            <span className="text-[14px] py-[1rem] block ">
                                                {item.company}
                                            </span>
                                        </div>
                                        
                                        <div >
                                            <button type='button' onClick={() => { handleDetailItem(item) }}
                                                className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-bleu-300 bg-blue-200 group-hover/item:text-textColor " >Details
                                            </button>
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
