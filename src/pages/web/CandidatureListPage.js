import React from 'react'
import { Link } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CandidatureListPage = () => {

    const [candidatures, setcandidatures] = useState([1, 1, 1, 1, 1])
    const [messageList, setmessageList] = useState([1,1,1,1,1,1]);


    const [buttonSelected, setbuttonSelected] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowButton = (item) => setbuttonSelected(item);




    const [showMsg, setshowMsg] = useState(false);
    const handleShowMsg = () => {setshowMsg(true)};
    const handleCloseMsg = () => {setshowMsg(false)};


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
                                <button onClick={()=>{handleShowButton(0)}}
                                class={`block w-full rounded${buttonSelected==0 ?" bg-blue-600 text-white":"" } hover:bg-blue-700 active:bg-blue-500 text-blue-500 px-12 py-3 text-sm font-medium  shadow  focus:outline-none focus:ring  sm:w-auto`}

                                >
                                    Candidatures ({candidatures.length})
                                </button>

                                <button onClick={()=>{handleShowButton(1)}}
                                class={`block w-full rounded${buttonSelected==1 ?" bg-blue-600 text-white":"" } hover:bg-blue-700 active:bg-blue-500 text-blue-500 px-12 py-3 text-sm font-medium  shadow  focus:outline-none focus:ring  sm:w-auto`}
                                    
                                >Messages ({messageList.length})
                                </button>
                            </div>
                        </div>
                    </div>
                </section>




                <div className={`py-8 w-full ${buttonSelected == 0 ? "":"hidden"}`}>
                    <div className="lg:flex flex-wrap items-center justify-center w-full gap-5">
                        {
                            candidatures.map((item) => {
                                return (
                                    <div onClick={handleShow} className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded cursor-pointer">
                                        <div className="flex items-center border-b border-gray-200 pb-6">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt className="w-12 h-12 rounded-full" />
                                            <div className="flex items-start justify-between w-full">
                                                <div className="pl-3 w-full">
                                                    <p className="text-xl font-medium leading-5 text-gray-800">Dogecoin nerds</p>
                                                    <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
                                                </div>
                                                <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-2 ">
                                            <p className="text-sm leading-5 py-4 text-gray-600 line-clamp-1">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                                            <div className="flex mt-3">
                                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-gray-700 rounded-full bg-green-100">#crypto</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>





                <div className={`py-8 w-full ${buttonSelected == 1 ? "":"hidden"}`}>
                    <div className="lg:flex flex-wrap items-center justify-center w-full gap-5">
                        {
                            messageList.map((item) => {
                                return (
                                    <div onClick={handleShowMsg} className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded cursor-pointer">
                                        <div className="flex items-center border-b border-gray-200 pb-6">
                                            <div className="w-12 h-12 rounded-full bg-blue-400 p-2">A</div>
                                            <div className="flex items-start justify-between w-full">
                                                <div className="pl-3 w-full">
                                                    <p className="text-xl font-medium leading-5 text-gray-800">Dogecoin nerds</p>
                                                    <p className="text-sm leading-normal pt-2 text-gray-500">28/08/2023</p>
                                                </div>
                                                <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-2">
                                            <p className="text-sm leading-5 py-4 text-gray-600 line-clamp-2">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                                            <div className="flex">
                                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                                            </div>
                                        </div>
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
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900 mb-2"
                                            id="modal-title"
                                        >
                                            Titre de la candidature
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Date: 28/08/2023
                                        </p>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Détails: detail de la cadnidature
                                        </p>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Statut: accepter
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
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
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900 mb-2"
                                            id="modal-title"
                                        >
                                            Message destiné au candidat candidat
                                        </h3>
                                        <div className="w-full py-3 px-1 space-y-3">
                                            <div>
                                                
                                                <input type="text" className="py-2 w-full px-3 rounded-lg border" placeholder='Objet du message' />
                                            </div>

                                            <div>
                                                <textarea type="text" className="py-2 w-full px-3 rounded-lg border" placeholder='Message' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleCloseMsg}
                                >
                                    retour
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleCloseMsg}
                                >
                                    Envoyer
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