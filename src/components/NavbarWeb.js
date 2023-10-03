import React, { useEffect, useState } from 'react'
import { routing } from '../utlis/routing'
import { getAndCheckLocalStorage, handleClearLocalStorage } from '../utlis/storage/localvalueFunction'
import useFetchCandidat, { CandidatGetById } from '../action/api/candidat/CandidatAction';
import { localvalue, typePersonConnected } from '../utlis/storage/localvalue';
import { MessageAllCandidatById } from '../action/api/messages/MessageAction';
import { EntrepriseGetById } from '../action/api/employeur/EmployeurAction';
import { MdSchool, MdWork } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const NavbarWeb = () => {
    const navigate  =  useNavigate();
    
    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    var idRecruteur = getAndCheckLocalStorage(localvalue.recruteurID);

    const { Loading, errorCandidat, candidat } = useFetchCandidat(idCandidat);

    const [recruteur, setrecruteur] = useState();
    const [messages, setmessages] = useState([]);
    const [messages2, setmessages2] = useState([]);

    const [show, setshow] = useState(false);
    const handleShow = () => { setshow(true) }
    const handleClose = () => { setshow(false) }



    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        EntrepriseGetById(idRecruteur, setrecruteur);
        MessageAllCandidatById(idCandidat, setmessages, setmessages2)
    }, []);




    return (
        <nav class="navbar fixed right-0 left-0 top-0 lg:top-[0px] px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
            id="navbar">
            <div class="mx-auto container-fluid">
                <div class="flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="assets/images/logo-dark.png" alt="" class="logo-dark h-[22px] block dark:hidden" />
                        <img src="assets/images/logo-light.png" alt="" class="logo-dark h-[22px] hidden dark:block" />
                    </a>
                    <button onClick={() => { openModal() }} data-collapse-toggle="navbar-collapse" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg navbar-toggler group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    {
                        getAndCheckLocalStorage(localvalue.TYPEACCESS) !== null ?
                            <div class="flex items-center lg:order-2">
                                <div>
                                    <div class="relative dropdown">
                                        <div class="relative">
                                            <button type="button" onClick={() => { openModal() }}
                                                class="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-300"
                                                aria-expanded="false" data-dropdown-toggle="notification">
                                                <i class="text-2xl mdi mdi-bell"></i>
                                            </button>
                                            <span
                                                class="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-3 ring-2 ring-white dark:ring-neutral-800">
                                                3
                                            </span>
                                        </div>
                                        <div class="absolute right-0 top-auto left-auto z-50 hidden list-none bg-white rounded shadow dropdown-menu w-72 dark:bg-neutral-800 "
                                            id="notification">
                                            <div class="border rounded border-gray-50 dark:border-neutral-600"
                                                aria-labelledby="notification">
                                                <div class="grid grid-cols-1 ">
                                                    <div class="p-4 bg-gray-50 dark:bg-neutral-700">
                                                        <h6 class="mb-1 text-gray-800 dark:text-gray-50"> Messages </h6>
                                                        {
                                                            /*<p class="mb-0 text-gray-500 text-13 dark:text-gray-300">
                                                            vous avez 4 messages
                                                        </p> */
                                                        }
                                                    </div>
                                                </div>
                                                {
                                                    messages && messages.length > 0 ?
                                                        <div class="h-60" data-simplebar>
                                                            <div>
                                                                {
                                                                    messages.map((item) => {
                                                                        return (() => {
                                                                            <a href="#!">
                                                                                <div class="flex p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50">
                                                                                    <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                                                                                        <div
                                                                                            class="h-10 w-10 bg-violet-500/20 rounded-full text-center leading-[2.8]">
                                                                                            <i class="text-lg text-violet-500 uil uil-user-check"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="flex-grow">
                                                                                        <h6 class="mb-1 text-sm text-gray-700 dark:text-gray-300">22
                                                                                            verified registrations</h6>
                                                                                        <div class="text-gray-600 text-13 dark:text-gray-300">
                                                                                            <p class="mb-0"><i
                                                                                                class="mdi mdi-clock-outline dark:text-gray-300"></i>
                                                                                                <span>3 hour ago</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        })
                                                                    })
                                                                }
                                                            </div>
                                                        </div> :
                                                        <div class="py-2 px-1 ">
                                                            <h1 class="text-gray-400 text-center ">Aucun messages ...</h1>
                                                        </div>
                                                }
                                                <div
                                                    class="grid p-1 border-t border-gray-50 dark:border-zinc-600 justify-items-center bg-gray-50 dark:bg-neutral-700">
                                                    <a class="border-0  text-gray-500"
                                                        href={`/${routing.candidature_list}`}>
                                                        <i class="mr-1 mdi mdi-arrow-right-circle"></i> <span>voire plus..</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                            <div class="relative dropdown ltr:mr-4 rtl:ml-4">

                                                <button type="button" class="flex items-center px-4 py-5 dropdown-toggle"
                                                    id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="true">
                                                    {
                                                        candidat && candidat.coverPicture ?
                                                            <img class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                                                                src={candidat.coverPicture} alt="Header Avatar" /> :
                                                            <div class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2 bg-gray-200 animate-pulse" />
                                                    }
                                                    {
                                                        candidat && candidat.username ?
                                                            <span class="hidden fw-medium xl:block dark:text-gray-50">{candidat.username}</span> :
                                                            <span class="hidden fw-medium xl:block bg-gray-200 h-3 w-7 rounded-lg"></span>
                                                    }

                                                </button>

                                                <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                    id="profile/log" aria-labelledby="navNotifications">
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <div class="text-15 font-medium  text-blue-700 underline hover:text-blue-700   "
                                                            href={`/${routing.candidature_list}`}>Connexion</div>
                                                    </li>
                                                </ul>


                                                <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                    id="profile/log" aria-labelledby="navNotifications">
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.candidat_details}`}>Profile </a>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.candidat_details_blog}`}>publication </a>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.candidature_list}`}>Candidatures & Messages</a>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.pricing}`}>Abonement</a>
                                                    </li>
                                                    <li onClick={() => {
                                                        handleClearLocalStorage()
                                                    }} class="p-2 cursor-pointer dropdown-item group/dropdown dark:text-gray-300">
                                                        <div class="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                        >Dexonnexion</div>
                                                    </li>
                                                </ul>

                                            </div>
                                            :
                                            <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                id="profile/log" aria-labelledby="navNotifications">
                                                <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                    <a class="text-15 font-medium  text-blue-700 underline:text-blue-700  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                        href={`/${routing.connexion}`}>Connexion</a>
                                                </li>
                                            </ul>
                                    }



                                    {/*recurteur */}
                                    {
                                        getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                            <div class="relative dropdown ltr:mr-4 rtl:ml-4">

                                                <button type="button" class="flex items-center px-4 py-5 dropdown-toggle"
                                                    id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="true">
                                                    {
                                                        recruteur && recruteur.logo ?
                                                            <img class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                                                                src={recruteur.logo} alt="Header Avatar" /> :
                                                            <div class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2 bg-gray-200 animate-pulse" />
                                                    }
                                                    {
                                                        recruteur && recruteur.username ?
                                                            <span class="hidden fw-medium xl:block dark:text-gray-50">{recruteur.username}</span> :
                                                            <span class="hidden fw-medium xl:block bg-gray-200 h-3 w-7 rounded-lg"></span>
                                                    }

                                                </button>

                                                <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                    id="profile/log" aria-labelledby="navNotifications">
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <div class="text-15 font-medium  text-blue-700 underline hover:text-blue-700   "
                                                            href={`/${routing.candidature_list}`}>Connexion</div>
                                                    </li>
                                                </ul>


                                                <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                    id="profile/log" aria-labelledby="navNotifications">
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.company_details}`}>Profile </a>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.candidature_list_recruteur}`}>Candidatures & Messages</a>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <a class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            href={`/${routing.pricing}`}>Abonement</a>
                                                    </li>
                                                    {/*onClick={handleClearLocalStorage} */}
                                                    <li onClick={handleClearLocalStorage} class="p-2 cursor-pointer dropdown-item group/dropdown dark:text-gray-300">
                                                        <div class="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                        >Deconnexion</div>
                                                    </li>
                                                </ul>

                                            </div>
                                            :
                                            <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                id="profile/log" aria-labelledby="navNotifications">
                                                <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                    <a class="text-15 font-medium  text-blue-700 underline:text-blue-700  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                        href={`/${routing.connexion}`}>Connexion</a>
                                                </li>
                                            </ul>
                                    }
                                </div>
                            </div>
                            :
                            <div class="flex items-center lg:order-2">
                                <button type="button" onClick={() => {
                                    handleShow()
                                }}
                                    class="btn py-1 px-3 rounded-lg text-indigo-500 border-indigo-400"
                                >
                                    Connexion
                                </button>
                            </div>

                    }

                    <div id="navbar-collapse"
                        class="navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block hidden">
                        <ul class="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center  lg:flex-row"
                            id="navigation-menu">
                            <li class="relative dropdown">
                                <a href='/' class="py-5 text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px]"
                                >Accueil
                                </a>
                            </li>
                            <li class="relative dropdown">
                                <a href={`/${routing.job_list}`} class="py-5 text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px]"
                                >Emplois
                                </a>
                            </li>
                            <li class="relative dropdown">
                                <a href={`/${routing.blog_list}`} class="py-5 text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px]"
                                >Social
                                </a>
                            </li>
                            <li class="relative dropdown">
                                <a href={`/${routing.bourse_list}`} class="py-5  text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px]"
                                >Bourses
                                </a>
                            </li>
                            <li class="relative dropdown">
                                <a href={`/${routing.coaching_list}`} class="py-5  text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px]"
                                >Coaching & Formations
                                </a>
                            </li>
                            <li class="relative dropdown lg:mt-0">
                                <button class="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]"
                                    id="company" data-bs-toggle="dropdown">autres <i
                                        class='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></button>

                                <ul class="relative top-auto z-50 py-2 list-none bg-white border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3 lg:w-48 lg:shadow-lg dark:bg-neutral-800"
                                    aria-labelledby="company">
                                    <li><a class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-gray-50"
                                        href="#">A propos</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>














                    {/*modal de connexion */}
                    {
                        show &&
                        <div className="fixed z-50 inset-0 overflow-y-auto">
                            <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity">
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                                <div
                                    className="inline-block mt-28 align-bottom bg-transparent rounded-lg text-left overflow-hidden transform transition-all sm:my-8 w-full  sm:max-w-lg sm:w-full"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-title"
                                >

                                    <div className="bg-transparent  px-4 w-full  pt-1 pb-4 sm:p-1 sm:pb-1">
                                        <div className="sm:flex flex flex-col w-full sm:items-start">
                                            <div className="mt-3 w-full  text-center sm:mt-0 sm:text-left">

                                            </div>
                                            <div class="min-h-full bg-transparent flex justify-center items-center">
                                                <div class="py-5 pl-10 px-12 justify-center bg-white rounded-2xl shadow-xl z-20">
                                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <button
                                                            type="button"
                                                            className="w-full inline-flex justify-center px-3 py-1  rounded-md border border-transparent shadow-sm text-xs bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                            onClick={() => { handleClose() }}
                                                        >X
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Se Connecter</h1>
                                                        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                                                            Connecter a vous avec le profils qui vous convient . Soit
                                                            <span class="underline" onClick={() => {
                                                                navigate(`/${routing.connexion}`)
                                                            }}> Candidat</span>
                                                            ou
                                                            <span class="underline" onClick={() => {
                                                                navigate(`/${routing.connexion_recuteur}`)
                                                            }}> Recruteur</span>
                                                        </p>
                                                    </div>
                                                    <div class="text-center mt-6 flex flex-col space-y-6 justify-center">
                                                        <a href={`/${routing.connexion}`} class="py-1 w-full text-lg text-white bg-blue-400 rounded-2xl flex justify-center space-x-2">
                                                            <MdSchool class="h-7 w-7" /> <span>Candidat</span>
                                                        </a>
                                                        <div class="text-center py-2 justify-center w-full text-md text-gray-500">
                                                            Ou
                                                        </div>
                                                        <a href={`/${routing.connexion_recuteur}`} class="py-1 w-full text-lg text-white bg-blue-400 rounded-2xl flex justify-center space-x-2">
                                                            <MdWork class="h-7 w-7" /><span>Recruteur</span>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                    {/*modal de connexion fin  */}





                    {
                        isOpen && (
                            <div className="fixed z-50 inset-0 overflow-y-auto">
                                <div className="flex h-screen">
                                    {/* Sidebar */}
                                    <div className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 bg-white text-blue-700 p-4">
                                        <h2 className="text-2xl font-bold mb-4">
                                            <img
                                                src="assets/images/logo-dark.png"
                                                class="h-10 w-10 " alt=""
                                            />
                                        </h2>

                                        {
                                            candidat && candidat._id == getAndCheckLocalStorage(localvalue.candidatID) ?
                                                (
                                                    <ul>
                                                        <li className="mb-2">
                                                            <a href="/" className="text-blue-500 hover:text-blue-700">Accueil</a>
                                                        </li>
                                                        <li className="mb-2">
                                                            <a href={`/${routing.blog_post}`} className="text-blue-500 hover:text-blue-700">Publications</a>
                                                        </li>
                                                        <li className="mb-2">
                                                            <a href={`/${routing.candidat_details}`} className="text-blue-500 hover:text-blue-700">Profil</a>
                                                        </li>
                                                        <li className="mb-2">
                                                            <a href={`/${routing.candidature_list}`} className="text-blue-500 hover:text-blue-700">Candidatures</a>
                                                        </li>
                                                        {/*partie reservé au mobile */}
                                                        {
                                                            /* 
                                                            <li className="mb-2">
                                                          <a href={`/${routing.candidat_applied}`} className="text-blue-500 hover:text-blue-700">Candidatures</a>
                                                        </li> */
                                                        }

                                                        <li className="mb-2">
                                                            <a href={`/${routing.candidature_list}`} className="text-blue-500 hover:text-blue-700">Messages</a>
                                                        </li>
                                                    </ul>
                                                ) : null
                                        }


                                        {
                                            getAndCheckLocalStorage(localvalue.recruteurID) !== null ?
                                                (
                                                    <ul>
                                                        <li className="mb-2">
                                                            <a href="/" className="text-blue-500 hover:text-blue-700">Accueil</a>
                                                        </li>
                                                        {
                                                            /*<li className="mb-2">
                                                            <a href={`/${routing.blog_post}`} className="text-blue-500 hover:text-blue-700">Publications</a>
                                                        </li> */
                                                        }
                                                        <li className="mb-2">
                                                            <a href={`/${routing.company_details}`} className="text-blue-500 hover:text-blue-700">Profil</a>
                                                        </li>
                                                        <li className="mb-2">
                                                            <a href={`/${routing.candidature_list_recruteur}`} className="text-blue-500 hover:text-blue-700">Candidatures</a>
                                                        </li>
                                                        {/*partie reservé au mobile */}
                                                        {
                                                            /* 
                                                            <li className="mb-2">
                                                          <a href={`/${routing.candidat_applied}`} className="text-blue-500 hover:text-blue-700">Candidatures</a>
                                                        </li> */
                                                        }
                                                    </ul>
                                                ) : null
                                        }

                                    </div>
                                    {/* Contenu */}
                                    <div className="w-3/4 bg-black p-4 opacity-25">
                                        <div className="bg-gray-50  px-4 py-3 sm:px-6 opacity-100">
                                            <button
                                                type="button"
                                                className="text-gray-900 hover:text-gray-700 focus:outline-none"
                                                onClick={() => { closeModal() }}
                                            >
                                                <svg
                                                    className="h-6 w-6 text-black"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="px-4 pt-2">
                                            {/* Contenu principal de la page */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }





                </div>
            </div>
        </nav>
    )
}

export default NavbarWeb