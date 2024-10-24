import React, { useEffect, useState } from 'react'
import { routing } from '../utlis/routing'
import { getAndCheckLocalStorage, handleClearLocalStorage } from '../utlis/storage/localvalueFunction'
import useFetchCandidat, { CandidatGetById } from '../action/api/candidat/CandidatAction';
import { localvalue, typePersonConnected } from '../utlis/storage/localvalue';
import { MessageAllCandidatById } from '../action/api/messages/MessageAction';
import { EntrepriseGetById } from '../action/api/employeur/EmployeurAction';
import { MdAlternateEmail, MdClose, MdEmail, MdExitToApp, MdHome, MdLogout, MdMessage, MdPerson2, MdPortrait, MdPostAdd, MdPriceCheck, MdSchool, MdSupervisedUserCircle, MdWork, MdWorkOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchProcessData } from '../action/api/QWBw8T76ht2P8tAm8ccum7FAWE55w93y/TX2uXh99585i3ft2ACwV4ASisan5MBm4';
import { statusPACKS } from '../utlis/config';
import './NavbarWeb.css';



const NavbarWeb = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
        MessageAllCandidatById(idCandidat, setmessages, setmessages2);
        const candidatId = getAndCheckLocalStorage(localvalue.candidatID);
        const recruteurId = getAndCheckLocalStorage(localvalue.recruteurID);
        if (candidatId !== null) {
            setUserId(candidatId);
            fetchProcessData(userId)
        } else if (recruteurId !== null) {
            setUserId(candidatId);
            fetchProcessData(userId);
        } else {
            // Gérer le cas où les deux valeurs sont nulles (ou autre logique selon vos besoins)
            setUserId(null);
        }
    }, []);


    const [userId, setUserId] = useState();



    const [sidebar, setSidebar] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    };






    return (
        <>
            <header>
                {/* <div className="top-bar">
                    <div className="contact-info">
                        📞 0247732731 | ✉️ contact@artus-rh.com | 🏠 72 Av. Marcel Dassault, 37200 Tours
                    </div>
                    <div className="social-links">
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div> */}
                <nav className="navbar">
                    <div className="logo">
                        <img src="assets/images/logo-dark.png" alt="Artus RH Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/" class={`${location.pathname === `/` ? "nav-links-active" : ""}`} >Accueil</Link></li>
                        <li><Link to={`/${routing.job_list}`} class={`${location.pathname === `/${routing.job_list}` ? "nav-links-active" : ""}`} >Emplois</Link></li>
                        <li><Link to={`/${routing.formation_list}`} class={`${location.pathname === `/${routing.formation_list}` ? "nav-links-active" : ""}`}>Formations</Link></li>
                        <li><Link to={`/${routing.bourse_list}`} class={`${location.pathname === `/${routing.bourse_list}` ? "nav-links-active" : ""}`}>Bourses</Link></li>
                        <li><Link to={`/${routing.blog_list}`} class={`${location.pathname === `/${routing.blog_list}` ? "nav-links-active" : ""}`}>Activités</Link></li>
                        <li><Link to={`/${routing.aboutus}`} class={`${location.pathname === `/${routing.aboutus}` ? "nav-links-active" : ""}`}>Qui somme nous</Link></li>
                        <li><Link to={`/${routing.contact}`} class={`${location.pathname === `/${routing.contact}` ? "nav-links-active" : ""}`}>Contact</Link></li>
                    </ul>
                    <div className="profile-login">
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) !== null ?
                                <Link to="#" className="profile-link" onClick={toggleSidebar}>👤 Mon Profil</Link>
                                :
                                <Link to="#" className="login-link" onClick={toggleLoginModal}>Connexion</Link>
                        }


                    </div>
                    <button className="menu-btn" onClick={toggleSidebar}>
                        ☰
                    </button>
                </nav>
            </header>

            {/* Sidebar for Profile */}
            <div className={`sidebar ${sidebar ? 'active' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>✖</button>
                <ul className="sidebar-links">
                    <li><Link to="/" class={`${location.pathname === `/` ? "nav-links-active" : ""}`} >Accueil</Link></li>
                    <li><Link to={`/${routing.job_list}`} class={`${location.pathname === `/${routing.job_list}` ? "nav-links-active" : ""}`} >Emplois</Link></li>
                    <li><Link to={`/${routing.formation_list}`} class={`${location.pathname === `/${routing.formation_list}` ? "nav-links-active" : ""}`}>Formations</Link></li>
                    <li><Link to={`/${routing.bourse_list}`} class={`${location.pathname === `/${routing.bourse_list}` ? "nav-links-active" : ""}`}>Bourses</Link></li>
                    <li><Link to={`/${routing.blog_list}`} class={`${location.pathname === `/${routing.blog_list}` ? "nav-links-active" : ""}`}>Activités</Link></li>
                    <li><Link to={`/${routing.aboutus}`} class={`${location.pathname === `/${routing.aboutus}` ? "nav-links-active" : ""}`}>Qui somme nous</Link></li>
                    <li><Link to={`/${routing.contact}`} class={`${location.pathname === `/${routing.contact}` ? "nav-links-active" : ""}`}>Contact</Link></li>
                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                <Link to={`/${routing.company_details}`} class={`${location.pathname === `/${routing.company_details}` ? "nav-links-active" : ""}`}>Profile</Link>
                                :
                                getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                    <Link to={`/${routing.candidat_details}`} class={`${location.pathname === `/${routing.candidat_details}` ? "nav-links-active" : ""}`}>Profile</Link>
                                    : ""
                        }
                    </li>

                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                <Link to={`/${routing.candidature_list_recruteur}`} class={`${location.pathname === `/${routing.candidature_list_recruteur}` ? "nav-links-active" : ""}`}>Candidatures et messages</Link>
                                :
                                getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                    <Link to={`/${routing.candidature_list}`} class={`${location.pathname === `/${routing.candidature_list}` ? "nav-links-active" : ""}`}>Candidatures et messages</Link>
                                    : ""
                        }
                    </li>

                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                "" :
                                getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                    <Link to={`/${routing.candidat_details_blog}`} class={`${location.pathname === `/${routing.candidat_details_blog}` ? "nav-links-active" : ""}`}>Activités / publications</Link>
                                    : ""
                        }
                    </li>



                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                "" :
                                getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                    <Link to={`/${routing.candidat_details_blog}`} class={`${location.pathname === `/${routing.candidat_details_blog}` ? "nav-links-active" : ""}`}>Activités / publications</Link>
                                    : ""
                        }
                    </li>






                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) !== null ?
                                <Link to={`#`} ><span class="flex-row " onClick={handleClearLocalStorage()}><MdExitToApp /> <span>Déconnexion</span></span></Link>
                                : ""
                        }
                    </li>


                </ul>
            </div>

            {/* Login Modal */}
            {loginModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Connexion</h2>
                        <p> Profile de connexion </p>
                        <button className="login-option"
                            onClick={() => { navigate(`/${routing.connexion_recuteur}`) }}
                        >Recruteur</button>
                        <button className="login-option"
                            onClick={() => { navigate(`/${routing.connexion}`) }}
                        >Candidat</button>
                        <button className="close-modal" onClick={toggleLoginModal}>✖</button>
                    </div>
                </div>
            )}
        </>

    )
}

export default NavbarWeb




/*<nav class="navbar fixed right-0 left-0 top-0 lg:top-[0px] px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
            id="navbar">
            <div class="mx-auto container-fluid">
                <div class="flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" class="flex items-center">
                        <img src="assets/images/logo-dark.png" alt="" class="logo-dark h-[42px] rounded-[50%] block dark:hidden" />
                        <img src="assets/images/logo-dark.png" alt="" class="logo-dark h-[42px] rounded-[50%] hidden dark:block" />
                    </Link>
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
                                                        
                                                    </div>
                                                </div>
                                                {
                                                    messages && messages.length > 0 ?
                                                        <div class="h-60" data-simplebar>
                                                            <div>
                                                                {
                                                                    messages.map((item) => {
                                                                        return (() => {
                                                                            <Link to="#!">
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
                                                                            </Link>
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
                                                    <Link class="border-0  text-gray-500"
                                                        to={`/${routing.candidature_list}`}>
                                                        <i class="mr-1 mdi mdi-arrow-right-circle"></i> <span>voire plus..</span>
                                                    </Link>
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
                                                            to={`/${routing.candidature_list}`}>Connexion</div>
                                                    </li>
                                                </ul>


                                                <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                    id="profile/log" aria-labelledby="navNotifications">
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.candidat_details}`}>Profile </Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.candidat_details_blog}`}>publication </Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.candidature_list}`}>Candidatures & Messages</Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.pricing}`}>Abonement</Link>
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
                                                    <Link class="text-15 font-medium  text-blue-700 underline:text-blue-700  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                        to={`/${routing.connexion}`}>Connexion</Link>
                                                </li>
                                            </ul>
                                    }



                                    
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
                                                            to={`/${routing.candidature_list}`}>Connexion</div>
                                                    </li>
                                                </ul>


                                                <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                                    id="profile/log" aria-labelledby="navNotifications">
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.company_details}`}>Profile </Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.formation_list_entreprise}`}>Formations </Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.candidature_list_recruteur}`}>Candidatures & Messages</Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.candidat_list}`}>Profiles Candidats </Link>
                                                    </li>
                                                    <li class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                        <Link class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                            to={`/${routing.pricing}`}>Abonement</Link>
                                                    </li>
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
                                                    <Link class="text-15 font-medium  text-blue-700 underline:text-blue-700  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                        to={`/${routing.connexion}`}>Connexion</Link>
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
                                <Link to='/' class={` ${location.pathname === `/` ? "active font-bold text-lg " : ""} py-5 text-gray-800 lg:px-4   lg:h-[70px] `}
                                >Accueil
                                </Link>
                            </li>
                            <li class="relative dropdown">
                                <Link to={`/${routing.job_list}`} class={` ${location.pathname === `/${routing.job_list}` ? "active font-bold text-lg " : ""} py-5 text-gray-800 lg:px-4   lg:h-[70px] `}
                                >Emplois
                                </Link>
                            </li>
                            <li class="relative dropdown">
                                <Link to={`/${routing.blog_list}`} class={` ${location.pathname === `/${routing.blog_list}` ? "active font-bold text-lg " : ""} py-5text-gray-800 lg:px-4   lg:h-[70px] `}
                                >Social
                                </Link>
                            </li>
                            <li class="relative dropdown">
                                <Link to={`/${routing.bourse_list}`} class={` ${location.pathname === `/${routing.bourse_list}` ? "active font-bold text-lg " : ""} py-5 text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px] `}
                                >Bourses
                                </Link>
                            </li>
                            <li class="relative dropdown">
                                <Link to={`/${routing.coaching_list}`} class={` ${location.pathname === `/${routing.coaching_list}` ? "active font-bold text-lg " : ""} py-5 text-gray-800 lg:px-4  dark:text-gray-50 lg:h-[70px] `}
                                >Coaching & Formations
                                </Link>
                            </li>

                            <li class="relative dropdown lg:mt-0">
                                <button class="py-5 active text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]"
                                    id="company" data-bs-toggle="dropdown">Autres <i
                                        class=' align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></button>

                                <ul class="relative top-auto z-50 py-2 list-none bg-white border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3 lg:w-48 lg:shadow-lg dark:bg-neutral-800"
                                    aria-labelledby="company">
                                    <li><Link class={`${location.pathname === `/${routing.aboutus}` ? "active font-bold " : ""} block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-gray-50`}
                                        to={`${routing.aboutus}`}>A propos</Link>
                                    </li>
                                    <li><Link class={`${location.pathname === `/${routing.contact}` ? "active font-bold " : ""} block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-gray-50`}
                                        to={`${routing.contact}`}>Contact</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>














                    {
                        show &&
                        <div class="fixed z-50 inset-0 overflow-y-auto">
                            <div class="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div class="fixed inset-0 transition-opacity">
                                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>
                                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                                <div
                                    class="inline-block mt-28 align-bottom bg-transparent rounded-lg text-left overflow-hidden transform transition-all sm:my-8 w-full  sm:max-w-lg sm:w-full"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-title"
                                >

                                    <div class="bg-transparent  px-4 w-full  pt-1 pb-4 sm:p-1 sm:pb-1">
                                        <div class="sm:flex flex flex-col w-full sm:items-start">
                                            <div class="mt-3 w-full  text-center sm:mt-0 sm:text-left">

                                            </div>
                                            <div class="min-h-full bg-transparent flex justify-center items-center">
                                                <div class="py-5 pl-10 px-12 justify-center bg-white rounded-2xl shadow-xl z-20">
                                                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <button
                                                            type="button"
                                                            class=" inline-flex justify-center px-3 py-1  rounded-md border border-transparent shadow-sm text-xs bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
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
                                                        <Link to={`/${routing.connexion}`} class="py-1 w-full text-lg text-white bg-blue-400 rounded-2xl flex justify-center space-x-2">
                                                            <MdSchool class="h-7 w-7" /> <span>Candidat</span>
                                                        </Link>
                                                        <div class="text-center py-2 justify-center w-full text-md text-gray-500">
                                                            Ou
                                                        </div>
                                                        <Link to={`/${routing.connexion_recuteur}`} class="py-1 w-full text-lg text-white bg-blue-400 rounded-2xl flex justify-center space-x-2">
                                                            <MdWork class="h-7 w-7" /><span>Recruteur</span>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }





                    {
                        isOpen && (
                            <div class="fixed z-50 inset-0 overflow-y-auto w-full">
                                <div class="flex h-screen">
                                    
                                    <div class="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 bg-white text-blue-700 p-4">
                                        <h2 class="text-2xl font-bold mb-4">
                                            <img
                                                src="assets/images/logo-dark.png"
                                                class="h-10 w-10 " alt=""
                                            />
                                        </h2>


                                        <ul>
                                            <li class={` ${location.pathname === `/` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to="/" class={`${location.pathname === `/` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Accueil</Link>
                                            </li>
                                            <li class={` ${location.pathname === `/${routing.job_list}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to={`/${routing.job_list}`} class={`${location.pathname === `/${routing.job_list}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Emplois</Link>
                                            </li>
                                            <li class={` ${location.pathname === `/${routing.blog_list}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to={`/${routing.blog_list}`} class={`${location.pathname === `/${routing.blog_list}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Social</Link>
                                            </li>
                                            <li class={` ${location.pathname === `/${routing.bourse_list}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to={`/${routing.bourse_list}`} class={`${location.pathname === `/${routing.bourse_list}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Bourses</Link>
                                            </li>
                                            <li class={` ${location.pathname === `/${routing.coaching_list}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to={`/${routing.coaching_list}`} class={`${location.pathname === `/${routing.coaching_list}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Coaching & formations</Link>
                                            </li>
                                            <li class={` ${location.pathname === `/${routing.aboutus}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to={`/${routing.aboutus}`} class={`${location.pathname === `/${routing.aboutus}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> A propos de nous</Link>
                                            </li>
                                            <li class={` ${location.pathname === `/${routing.contact}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                <Link to={`/${routing.contact}`} class={`${location.pathname === `/${routing.contact}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Contact</Link>
                                            </li>
                                        </ul>

                                        {
                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] &&
                                                getAndCheckLocalStorage(localvalue.candidatID) != null ?
                                                (
                                                    <ul>
                                                        {
                                                            candidat && candidat.account.pack == statusPACKS[2] ?
                                                                <li class={` ${location.pathname === `/${routing.blog_post}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                                    <Link to={`/${routing.blog_post}`} class={`${location.pathname === `/${routing.blog_post}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Publications</Link>
                                                                </li> : null
                                                        }
                                                        <li class={` ${location.pathname === `/${routing.candidat_details}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                            <Link to={`/${routing.candidat_details}`} class={`${location.pathname === `/${routing.candidat_details}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Profil</Link>
                                                        </li>
                                                        <li class={` ${location.pathname === `/${routing.candidature_list}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                            <Link to={`/${routing.candidature_list}`} class={`${location.pathname === `/${routing.candidat_list}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Messages & Candidatures</Link>
                                                        </li>
                                                        <li class={` ${location.pathname === `/${routing.candidat_applied}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                            <Link to={`/${routing.candidat_applied}`} class={`${location.pathname === `/${routing.candidat_applied}` ? "active font-bold text-lg" : ""} text-blue-400 hover:text-blue-700`}> Offres </Link>
                                                        </li>

                                                    </ul>
                                                ) : null
                                        }


                                        {
                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] &&
                                                getAndCheckLocalStorage(localvalue.recruteurID) !== null ?
                                                (
                                                    <ul>
                                                        <li class={` ${location.pathname === `/${routing.company_details}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                            <Link to={`/${routing.company_details}`} class="text-blue-500 hover:text-blue-700"> <span>Profil</span></Link>
                                                        </li>
                                                        <li class={` ${location.pathname === `/${routing.candidature_list_recruteur}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                            <Link to={`/${routing.candidature_list_recruteur}`} class="text-blue-500 hover:text-blue-700"> <span>Candidatures</span> </Link>
                                                        </li>

                                                        {
                                                            recruteur && recruteur.account.pack == statusPACKS[2] ?
                                                                <li class={` ${location.pathname === `/${routing.candidature_list}` ? "bg-blue-50 px-2 rounded-lg" : "border-b border-blue-200"} mb-2`}>
                                                                    <Link to={`/${routing.candidature_list}`} class="text-blue-500 hover:text-blue-700">  <span>Meilleurs Profiles Candidats</span></Link>
                                                                </li> : null
                                                        }


                                                    </ul>
                                                ) : null
                                        }
                                        <ul>
                                            <li class="mb-2">
                                                <Link to={`/${routing.pricing}`} class="text-blue-500 hover:text-blue-700"><p><span> Abonement</span></p> </Link>
                                            </li>
                                        </ul>
                                        {
                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) !== null ?
                                                <ul>

                                                    <li class={` " px-2 border-b mb-2`}>
                                                        <Link to={`#logout`} class={` text-lg" text-red-400 hover:text-red-700`}> Deconnexion</Link>
                                                    </li>
                                                </ul>
                                                :
                                                null
                                        }

                                    </div>
                                    <div class="w-3/4 bg-black p-4 opacity-25">
                                        <div class="bg-gray-50  px-4 py-3 sm:px-6 opacity-100">
                                            <button
                                                type="button"
                                                class="text-gray-900 hover:text-gray-700 focus:outline-none"
                                                onClick={() => { closeModal() }}
                                            >
                                                <MdClose class="text-black" size={50} />
                                            </button>
                                        </div>
                                        <div class="px-4 pt-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }





                </div>
            </div>
        </nav> */