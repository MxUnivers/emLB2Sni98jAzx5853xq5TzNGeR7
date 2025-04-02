import React, { useEffect, useState } from 'react';
import { routing } from '../utlis/routing';
import { getAndCheckLocalStorage, handleClearLocalStorage } from '../utlis/storage/localvalueFunction';
import { localvalue, typePersonConnected } from '../utlis/storage/localvalue';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdMenu, MdClose, MdPerson, MdWork, MdMessage, MdLogout, MdExpandMore } from 'react-icons/md';

const NavbarWeb = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebar, setSidebar] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [actionsDropdown, setActionsDropdown] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const userType = getAndCheckLocalStorage(localvalue.TYPEACCESS);
    const isAuthenticated = userType !== null;

    const toggleSidebar = () => setSidebar(!sidebar);
    const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);
    const toggleActionsDropdown = () => setActionsDropdown(!actionsDropdown);
    const toggleLoginModal = () => setLoginModal(!loginModal);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-6 py-4 z-50">
                <div className="flex items-center">
                    <button className="text-indigo-600 text-2xl lg:hidden" onClick={toggleSidebar}><MdMenu /></button>
                    <Link to="/" className="ml-4 text-xl font-bold text-indigo-600">
                    <img src="assets/images/logo-dark.png" className="h-10 w-10 rounded-lg" alt="Jouman"/>
                    </Link>
                </div>
                <ul className="hidden lg:flex space-x-6">
                    {/*<li><Link to="/" className={`hover:text-indigo-600 ${location.pathname === '/' ? 'text-indigo-600 font-bold' : ''}`}>Accueil</Link></li> */}
                    <li><Link to={`/${routing.job_list}`} className={location.pathname === `/${routing.job_list}` ? 'text-indigo-600 font-bold' : ''}>Emplois</Link></li>
                <li><Link to={`/${routing.startupspage}`} className={location.pathname === `/${routing.startupspage}` ? 'text-indigo-600 font-bold' : ''}>Startup-Land</Link></li>
                <li><Link to={`/${routing.hackatonupspage}`} className={location.pathname === `/${routing.hackatonupspage}` ? 'text-indigo-600 font-bold' : ''}>Hackathon-land</Link></li>
                <li><Link to={`/${routing.formation_list}`} className={location.pathname === `/${routing.formation_list}` ? 'text-indigo-600 font-bold' : ''}>Formations</Link></li>
                <li><Link to={`/${routing.jeune_entrepreneurs}`} className={location.pathname === `/${routing.jeune_entrepreneurs}` ? 'text-indigo-600 font-bold' : ''}>Jeunes-entrepreneurs</Link></li>
                <li><Link to={`/${routing.human4aiall}`} className={location.pathname === `/${routing.human4aiall}` ? 'text-indigo-600 font-bold' : ''}>Human Ai</Link></li>
                <li><Link to={`/${routing.bourse_list}`} className={location.pathname === `/${routing.bourse_list}` ? 'text-indigo-600 font-bold' : ''}>Bourses</Link></li>
                <li><Link to={`/${routing.aboutus}`} className={location.pathname === `/${routing.aboutus}` ? 'text-indigo-600 font-bold' : ''}>Qui sommes-nous</Link></li>
                <li><Link to={`/${routing.contact}`} className={location.pathname === `/${routing.contact}` ? 'text-indigo-600 font-bold' : ''}>Contact</Link></li>

                    {/*<li className="relative">
                        <button onClick={toggleActionsDropdown} className="hover:text-indigo-600 flex items-center">Actions <MdExpandMore /></button>
                        {actionsDropdown && (
                            <ul className="absolute bg-white shadow-md mt-2 rounded-md p-2 w-48">
                                <li><Link to={`/${routing.startupspage}`} className="block px-4 py-2 hover:bg-indigo-100">Startups</Link></li>
                                <li><Link to={`/${routing.hackatonupspage}`} className="block px-4 py-2 hover:bg-indigo-100">Hackathons</Link></li>
                                <li><Link to={`/${routing.formation_list}`} className="block px-4 py-2 hover:bg-indigo-100">Formations</Link></li>
                            </ul>
                        )}
                    </li> */}
                </ul>
                <div className="relative">
                    {isAuthenticated ? (
                        <button onClick={toggleProfileDropdown} className="text-indigo-600 flex items-center space-x-2">
                            <MdPerson />
                            <span>Profil</span>
                        </button>
                    ) : (
                        <button onClick={toggleLoginModal} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Connexion</button>
                    )}
                    {profileDropdown && (
                        <ul className="absolute z-50 right-0 bg-white shadow-md mt-2 rounded-md p-2 w-48">
                            {
                                getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                    <>
                                        <li><Link to={`/${routing.company_details}`} className="block px-4 py-2 hover:bg-indigo-100">Mon Profil</Link></li>
                                        <li><Link to={`/${routing.job_post}`} className="block px-4 py-2 hover:bg-indigo-100">Poster une offre</Link></li>
                                        <li><a href={`/${routing.candidature_list_recruteur}`} className="block px-4 py-2 hover:bg-indigo-100">Candidatures</a></li>
                                        <li><Link to={`/${routing.company_edit}`} className="block px-4 py-2 hover:bg-indigo-100">Mettre à jour profile</Link></li>
                                        <li><Link to={`/${routing.pricing}`} className="block px-4 py-2 hover:bg-indigo-100">Plan</Link></li>
                                        <li><a href={`/${routing.chat_on_line}`} className="block px-4 py-2 hover:bg-indigo-100">Discussions</a></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to={`/${routing.candidat_details}`} className="block px-4 py-2 hover:bg-indigo-100">Mon Profil</Link></li>
                                        <li><a href={`/${routing.candidature_list}`} className="block px-4 py-2 hover:bg-indigo-100">Candidatures</a></li>
                                        <li><Link to={`/${routing.candidat_details_blog}`} className="block px-4 py-2 hover:bg-indigo-100">Blog</Link></li>
                                        <li><Link to={`/${routing.pricing}`} className="block px-4 py-2 hover:bg-indigo-100">Plan </Link></li>
                                        <li><a href={`/${routing.chat_on_line}`} className="block px-4 py-2 hover:bg-indigo-100">Discussions</a></li>
                                        <li><Link to={`/${routing.candidat_edit}`} className="block px-4 py-2 hover:bg-indigo-100">Mettre à jour profile</Link></li>
                                    </>
                            }

                            <li><button onClick={handleClearLocalStorage} className="block w-full text-left text-red-800 px-4 py-2 hover:bg-red-100">Déconnexion</button></li>
                        </ul>
                    )}
                </div>
            </nav>

            {loginModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Connexion</h2>
                        <p className="text-gray-600 mb-6">Sélectionnez votre type de compte :</p>
                        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 mb-3" onClick={() => navigate(`/${routing.connexion_recuteur}`)}>Recruteur</button>
                        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700" onClick={() => navigate(`/${routing.connexion}`)}>Candidat</button>
                        <button onClick={toggleLoginModal} className="w-full mt-4 text-gray-600 hover:underline">Annuler</button>
                    </div>
                </div>
            )}



            {sidebar && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out" onClick={toggleSidebar}></div>
            )}
            <div className={`fixed top-0 left-0 w-64 bg-white h-full shadow-md transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}> 
                <div className="flex flex-row justify-between">
                <Link className=" ml-10 mt-3" to="/">
                <img src="assets/images/logo-dark.png" className="h-10 w-10 rounded-lg" alt="Jouman"/>
                </Link>
                <button className="text-indigo-600 text-2xl p-4" onClick={toggleSidebar}><MdClose /></button>
                </div>
                <ul className="space-y-4 p-4 px-4 flex flex-col justify-center mx-6">
                <li><Link to={`/${routing.job_list}`} className={location.pathname === `/${routing.job_list}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Emplois</Link></li>
                <li><Link to={`/${routing.startupspage}`} className={location.pathname === `/${routing.startupspage}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Startup-Land</Link></li>
                <li><Link to={`/${routing.hackatonupspage}`} className={location.pathname === `/${routing.hackatonupspage}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Hackathon-land</Link></li>
                <li><Link to={`/${routing.formation_list}`} className={location.pathname === `/${routing.formation_list}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Formations</Link></li>
                <li><Link to={`/${routing.jeune_entrepreneurs}`} className={location.pathname === `/${routing.jeune_entrepreneurs}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Jeunes-ntrepreneurs</Link></li>
                <li><Link to={`/${routing.human4aiall}`} className={location.pathname === `/${routing.human4aiall}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Human Ai</Link></li>
                <li><Link to={`/${routing.bourse_list}`} className={location.pathname === `/${routing.bourse_list}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Bourses</Link></li>
                <li><Link to={`/${routing.aboutus}`} className={location.pathname === `/${routing.aboutus}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Qui sommes-nous</Link></li>
                <li><Link to={`/${routing.contact}`} className={location.pathname === `/${routing.contact}` ? 'text-indigo-600 font-bold' : ''} onClick={toggleSidebar} >Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default NavbarWeb;
