import React, { useEffect, useState } from 'react'
import { routing } from '../utlis/routing'
import { getAndCheckLocalStorage, handleClearLocalStorage } from '../utlis/storage/localvalueFunction'
import useFetchCandidat, { CandidatGetById } from '../action/api/candidat/CandidatAction';
import { localvalue, typePersonConnected } from '../utlis/storage/localvalue';
import { MessageAllCandidatById } from '../action/api/messages/MessageAction';
import { EntrepriseGetById } from '../action/api/employeur/EmployeurAction';
import { MdAlternateEmail, MdClose, MdEmail, MdExitToApp, MdHome, MdLogout, MdMessage, MdPerson, MdPerson2, MdPerson4, MdPortrait, MdPostAdd, MdPriceCheck, MdSchool, MdSupervisedUserCircle, MdWork, MdWorkOutline } from "react-icons/md";
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
                        <li><Link to="/" class={`${location.pathname === `/` ? "nav-links-active text-indigo-600 font-bold " : ""}`} >Accueil</Link></li>
                        <li><Link to={`/${routing.job_list}`} class={`${location.pathname === `/${routing.job_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`} >Emplois</Link></li>
                        <li><Link to={`/${routing.startupspage}`} class={`${location.pathname === `/${routing.startupspage}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Startup-upLand</Link></li>
                        <li><Link to={`/${routing.hackatonupspage}`} class={`${location.pathname === `/${routing.hackatonupspage}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>HackathonLand</Link></li>
                        <li><Link to={`/${routing.human4aiall}`} class={`${location.pathname === `/${routing.human4aiall}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Human AI Ci Ambassadeur</Link></li>
                        <li><Link to={`/${routing.formation_list}`} class={`${location.pathname === `/${routing.formation_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Formations</Link></li>
                        <li><Link to={`/${routing.bourse_list}`} class={`${location.pathname === `/${routing.bourse_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Bourses</Link></li>
                        <li><Link to={`/${routing.blog_list}`} class={`${location.pathname === `/${routing.blog_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Activités</Link></li>
                        <li><Link to={`/${routing.aboutus}`} class={`${location.pathname === `/${routing.aboutus}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Qui somme nous</Link></li>
                        <li><Link to={`/${routing.contact}`} class={`${location.pathname === `/${routing.contact}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Contact</Link></li>
                    </ul>
                    <div className="profile-login">
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) ?
                                <Link to="#" className=" bg-indigo-600 txt-white py-3 px-4 rounded-2xl hover:bg-indigo-700 text-white profile-link space-x-2 row-auto " style={{ display: "flex", alignContent: "center" }} onClick={toggleSidebar}><MdPerson4 /> <span>Mon Profil</span></Link>
                                :
                                <Link to="#" className=" bg-indigo-600 txt-white py-3 px-4 rounded-2xl hover:bg-indigo-700 text-white login-link" onClick={toggleLoginModal}>Connexion</Link>
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
                    <li><Link onClick={toggleSidebar} to="/" class={`${location.pathname === `/` ? "nav-links-active text-indigo-600 font-bold " : ""}`} >Accueil</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.job_list}`} class={`${location.pathname === `/${routing.job_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`} >Emplois</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.startupspage}`} class={`${location.pathname === `/${routing.startupspage}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Startups</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.hackatonupspage}`} class={`${location.pathname === `/${routing.hackatonupspage}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Hackathons</Link></li>
                    <li><Link to={`/${routing.human4aiall}`} class={`${location.pathname === `/${routing.human4aiall}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Human AI Ci Ambassadeur</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.formation_list}`} class={`${location.pathname === `/${routing.formation_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Formations</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.bourse_list}`} class={`${location.pathname === `/${routing.bourse_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Bourses</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.blog_list}`} class={`${location.pathname === `/${routing.blog_list}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Activités</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.aboutus}`} class={`${location.pathname === `/${routing.aboutus}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Qui somme nous</Link></li>
                    <li><Link onClick={toggleSidebar} to={`/${routing.contact}`} class={`${location.pathname === `/${routing.contact}` ? "nav-links-active text-indigo-600 font-bold " : ""}`}>Contact</Link></li>
                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                <Link onClick={toggleSidebar} to={`/${routing.company_details}`} class={`${location.pathname === `/${routing.company_details}` ? "nav-links-active" : ""}`}>Profile</Link>
                                : ""
                        }
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                <Link onClick={toggleSidebar} to={`/${routing.candidat_details}`} class={`${location.pathname === `/${routing.candidat_details}` ? "nav-links-active" : ""}`}>Profile</Link>
                                : ""
                        }
                    </li>
                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                <Link onClick={toggleSidebar} to={`/${routing.chat_on_line}`} class={`${location.pathname === `/${routing.chat_on_line}` ? "nav-links-active" : ""}`}>Disccussions</Link>
                                : ""
                        }
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                <Link onClick={toggleSidebar} to={`/${routing.chat_on_line}`} class={`${location.pathname === `/${routing.chat_on_line}` ? "nav-links-active" : ""}`}>Disccussions</Link>
                                : ""
                        }
                    </li>

                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                <Link onClick={toggleSidebar} to={`/${routing.candidature_list_recruteur}`} class={`${location.pathname === `/${routing.candidature_list_recruteur}` ? "nav-links-active" : ""}`}>Candidatures & messages</Link>
                                : ""
                        }
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                <Link onClick={toggleSidebar} to={`/${routing.candidature_list}`} class={`${location.pathname === `/${routing.candidature_list}` ? "nav-links-active" : ""}`}>Candidatures & messages</Link>
                                : ""
                        }
                    </li>

                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                <Link onClick={toggleSidebar} to={`/${routing.candidat_details_blog}`} class={`${location.pathname === `/${routing.candidat_details_blog}` ? "nav-links-active" : ""}`}>Publications</Link>
                                : ""
                        }
                    </li>
                    <li>
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS) ?
                                <Link to={`#`} className="w-full bg-indigo-600 txt-white py-3 px-4 rounded-2xl hover:bg-indigo-700 text-white login-link" onClick={() => { handleClearLocalStorage(); toggleSidebar() }}>Déconnexion</Link>
                                :
                                <Link to="#" className="w-full bg-indigo-600 txt-white py-3 px-4 rounded-2xl hover:bg-indigo-700 text-white login-link" onClick={toggleLoginModal}>Connexion</Link>
                        }
                    </li>
                </ul>
            </div>

            {/* Login Modal */}
            {loginModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2 class="text-indigo-800">Connexion</h2>
                        <p> Profile de connexion </p>
                        <button className="px-3 rounded-xl bg-indigo-700 text-white py-3 login-option"
                            onClick={() => { navigate(`/${routing.connexion_recuteur}`) }}
                        > <MdWork /> Recruteur </button>
                        <button className="px-3 rounded-xl bg-indigo-700 text-white py-3 login-option"
                            onClick={() => { navigate(`/${routing.connexion}`) }}
                        ><MdPerson /> Candidat</button>
                        <button className="close-modal" onClick={toggleLoginModal}>✖</button>
                    </div>
                </div>
            )}
        </>

    )
}

export default NavbarWeb


