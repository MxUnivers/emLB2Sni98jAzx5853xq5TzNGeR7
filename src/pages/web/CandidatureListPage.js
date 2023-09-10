import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { useState } from 'react';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { CandidatureAllOfCandidat, CandidatureById } from '../../action/api/candidatures/CandidatureAction';
import { MessageAllCandidatById } from '../../action/api/messages/MessageAction';
import moment from 'moment';
import { OffreGetById } from '../../action/api/offres/OffresAction';

const CandidatureListPage = () => {


    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const [isLoading, setisLoading] = useState();
    const [entreprise, setentreprise] = useState();

    const [offreDetail, setoffreDetail] = useState();
    const [candidatures, setcandidatures] = useState([]);
    const [candidatures2, setcandidatures2] = useState([]);
    const [messageList, setmessageList] = useState([]);
    const [messageLis2, setmessageLis2] = useState([]);
    const [candidatureDetail, setcandidatureDetail] = useState();
    const [messageDetail, setmessageDetail] = useState();


    const [buttonSelected, setbuttonSelected] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowButton = (item) => setbuttonSelected(item);




    const [showMsg, setshowMsg] = useState(false);
    const handleShowMsg = () => { setshowMsg(true) };
    const handleCloseMsg = () => { setshowMsg(false) };


    const [candidature, setcandidature] = useState();
    const [message, setmessage] = useState();

    useEffect(() => {
        CandidatureAllOfCandidat(idCandidat, setcandidatures, setcandidatures2);
        MessageAllCandidatById(idCandidat, setmessageList, setmessageLis2);
    }, [])

    return (
        <div className="main-content">
            <div className="main-content">


                <section class="bg-gray-50 mt-28">
                    <div
                        class="mx-auto px-4 py-5 lg:flex  lg:items-center"
                    >
                        <div class="mx-auto max-w-xl text-center">
                            <h1 class="text-3xl font-extrabold sm:text-5xl">
                                Vos candidatures
                                <strong class="font-extrabold text-blue-700 sm:block">
                                    Candidature
                                </strong>
                            </h1>

                            <p class="mt-4 sm:text-xl/relaxed">
                                Candidatures aux offres d{"'"}emplois
                            </p>

                            <div class="mt-8 flex flex-wrap justify-center gap-4">
                                <button onClick={() => { handleShowButton(0) }}
                                    class={`block w-full rounded${buttonSelected == 0 ? " bg-blue-600 text-white" : ""} hover:bg-blue-700 active:bg-blue-500 text-blue-500 px-12 py-3 text-sm font-medium  shadow  focus:outline-none focus:ring  sm:w-auto`}

                                >
                                    Candidatures ({candidatures.length})
                                </button>

                                <button onClick={() => { handleShowButton(1) }}
                                    class={`block w-full rounded${buttonSelected == 1 ? " bg-blue-600 text-white" : ""} hover:bg-blue-700 active:bg-blue-500 text-blue-500 px-12 py-3 text-sm font-medium  shadow  focus:outline-none focus:ring  sm:w-auto`}

                                >Messages ({messageList.length})
                                </button>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Les Candidats */}
                <div className={`py-8 w-full ${buttonSelected == 0 ? "" : "hidden"}`}>
                    <div className="lg:flex flex-wrap items-center justify-center w-full gap-5">
                        {
                            candidatures.map((item) => {
                                return (
                                    <div onClick={() => {
                                        OffreGetById(item.idOffre, setoffreDetail);
                                        handleShow();
                                        setcandidatureDetail(item)
                                    }} className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded cursor-pointer">
                                        <div className="flex items-center border-b border-gray-200 pb-6">
                                            <img src={item.coverPicture}
                                                alt className="w-12 h-12 rounded-full" />
                                            <div className="flex items-start justify-between w-full">
                                                <div className="pl-3 w-full">
                                                    <p className="text-lg font-medium leading-5 text-gray-800">{item.title}</p>
                                                    <p className="text-sm leading-normal pt-2 text-gray-500">{moment(item.createdAt).format("DD/MM/YYYY")}</p>
                                                </div>
                                                <div className={`
                                            ${item.status == "PENDING" ? "bg-orange-200" : ""}
                                            ${item.status == "VALIDATE" ? "bg-green-500" : ""}
                                            ${item.status == "CANCEL" ? "bg-red-500" : ""} 
                                            py-1 px-4 ml-3 text-xs text-gray-700 rounded-full `}>
                                                    {
                                                        item.status == "PENDING" ? "ENvoyé".toUpperCase() : ""
                                                    }
                                                    {
                                                        item.status == "VALIDATE" ? "ACCEPTER" : ""
                                                    }
                                                    {
                                                        item.status == "CANCEL" ? "REFUSE" : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>





                <div className={`py-8 w-full ${buttonSelected == 1 ? "" : "hidden"}`}>
                    <div className="lg:flex flex-wrap items-center justify-center w-full gap-5">
                        {
                            messageList.map((item) => {
                                return (
                                    <div onClick={()=>{
                                        handleShowMsg()
                                        setmessageDetail(item);
                                    }} className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded cursor-pointer">
                                        <div className="flex items-center border-b border-gray-200 pb-6">
                                        <img src={`${item.coverPicture}`} className="w-12 h-12 rounded-full bg-blue-400 p-2"/>
                                            <div className="flex items-start justify-between w-full">
                                                <div className="pl-3 w-full">
                                                    <p className="text-sm font-medium leading-5 text-gray-800">{item.subject}</p>
                                                    <p className="text-xs leading-normal pt-2 text-gray-500">{moment(item.createdAt).format("DD/MM/YYYY")}</p>
                                                </div>
                                                <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        {
                                            /*<div className="px-2">
                                            <p className="text-sm leading-5 py-4 text-gray-600 line-clamp-2">{item.content}</p>
                                            <div className="flex">
                                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                                            </div>
                                        </div> */
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>






            {show && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-full  sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <div className="bg-white px-4 w-full  pt-1 pb-4 sm:p-1 sm:pb-1">
                                <div className="sm:flex flex flex-col w-full sm:items-start">
                                    <div className="mt-3 w-full  text-center sm:mt-0 sm:text-left">
                                        {
                                            candidatureDetail && candidatureDetail.title ?
                                                <h3
                                                    className="text-md font-bold text-gray-900 mb-2"
                                                    id="modal-title"
                                                >
                                                    {candidatureDetail.title}
                                                </h3> :
                                                <div class="w-full h-9 bg-gray-200 animate-pulse my-3 rounded-xl" />
                                        }
                                        {
                                            candidatureDetail && candidatureDetail.createdAt ?
                                                <p className="text-sm text-gray-500 mb-4">
                                                    Date: 28/08/2023
                                                </p> :
                                                <div class="w-10 h-9 bg-gray-200 animate-pulse my-3 rounded-xl" />
                                        }

                                        {
                                            candidatureDetail && candidatureDetail.status ?
                                                <p className={`text-sm text-gray-500 mb-4 
                                                ${candidatureDetail.status == "PENDING" ? "text-yellow-600" : ""}
                                                ${candidatureDetail.status == "VALIDATE" ? "text-green-600" : ""}
                                                ${candidatureDetail.status == "CANCEL" ? "text-red-600" : ""}
                                                `}>
                                                    Statut:
                                                    {
                                                        candidatureDetail.status == "PENDING" ? "ENvoyé".toUpperCase() : ""
                                                    }
                                                    {
                                                        candidatureDetail.status == "VALIDATE" ? "ACCEPTER" : ""
                                                    }
                                                    {
                                                        candidatureDetail.status == "CANCEL" ? "REFUSE" : ""
                                                    }
                                                </p> :
                                                <div class="w-20 h-9 bg-gray-200 animate-pulse my-3 rounded-xl" />

                                        }
                                    </div>
                                    <div class=" mt-2  w-full ">
                                        <div class=" flex justify-start rounded-lg w-full border-t ">
                                            {
                                                /*<div class="w-full space-y-3 flex flex-col ">
                                                {
                                                    offreDetail && offreDetail.coverPicture ?
                                                        <img class="h-10 w-10 rounded-lg" src={offreDetail.coverPicture} /> :
                                                        <div class="h-10 w-10 rounded-lg bg-gray-200 animate-pulse" />
                                                }
                                            </div> */
                                            }
                                            {
                                                /*<div>
                                                {
                                                    offreDetail && offreDetail.title
                                                        ?
                                                        <h2 class="text-xl font-semibold">{offreDetail.title}</h2>
                                                        :
                                                        <div class="h-10 w-full rounded-lg bg-gray-200 animate-pulse" />
                                                }
                                            </div> */
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center px-3 py-1  rounded-md border border-transparent shadow-sm text-xs bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleClose}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}







            {showMsg && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75 " onClick={handleCloseMsg}></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full ">
                                <div className="sm:flex sm:items-start">
                                    <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                                        {
                                            messageDetail && messageDetail.subject ?
                                                <h3
                                                    className="text-lg leading-6 font-medium text-gray-900 mb-2"
                                                    id="modal-title"
                                                >
                                                    {messageDetail.subject}
                                                </h3> :
                                                <div class="w-full  h-14 bg-gray-200 animate-pulse my-3 rounded-xl" />
                                        }
                                        <div className="w-full py-3 px-1 space-y-3">
                                            {
                                                messageDetail && messageDetail.createdAt ?
                                                    <p className="text-sm text-gray-500 mb-4">
                                                        {moment(messageDetail.createdAt).format("DD/MM/YYYY HH:MM")}
                                                    </p> :
                                                    <div class="w-full  h-9 bg-gray-200 animate-pulse my-3 rounded-xl" />
                                            }

                                            {
                                                messageDetail && messageDetail.content ?
                                                    <p className="w-full text-sm text-gray-500 mb-4">
                                                        {messageDetail.content}
                                                    </p> :
                                                    <div class="w-full h-9 bg-gray-200 animate-pulse my-3 rounded-xl" />
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm  bg-gray-200 font-medium text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:ml-3 sm:w-auto text-xs py-1 px-3 "
                                    onClick={handleCloseMsg}
                                >retour
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}




        </div>
    )
}

export default CandidatureListPage;