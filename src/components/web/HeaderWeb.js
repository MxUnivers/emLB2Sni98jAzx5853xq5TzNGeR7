import React, { useEffect, useState } from 'react';
import { routing } from '../../utlis/routing';
import { localvalue } from '../../utlis/storage/localvalue';
import { typeadmin } from '../../utlis/storage/account';
import ItemProfileCandidat from './navigation/ItemProfileCandidat';
import ItemProfileEmployeur from './navigation/ItemProfileEmployeur';
import { CategorieGetAllAnnonces } from '../../action/api/annonces/AnnoncesAction';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { Button, Form, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { HiLogin, HiOutlineLockClosed, HiOutlineLogout, HiOutlineUserAdd } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { CandidatDeconnexion } from '../../action/api/candidat/CandidatAction';
import { EntrepriseDisConnect } from '../../action/api/employeur/EmployeurAction';
import { NavLink, useNavigate } from 'react-router-dom';



const HeaderWeb = () => {
    const navigation = useNavigate();

    var avatarImage = "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    var typeAdmin = localStorage.getItem(localvalue.typeAdmin);

    var idCandidat = localStorage.getItem(localvalue.candidat.idCandidat)
    var idEmployeur = localStorage.getItem(localvalue.emloyeur.idEmployeur);


    const [keywords, setkeywords] = useState([]);
    useEffect(() => {
        CategorieGetAllAnnonces(setkeywords);
    }, []);

    

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);



    const handleSumitCandidat = (e) => {
        if (idCandidat == null) {
            alert("Déconnexion impossible")
        }
        else {
            e.preventDefault();
            dispatch(CandidatDeconnexion(idCandidat));
        }
    }


    const handleSubmitEntreprise = (e) => {

    }
    return (
        <header class="main-header-area">


            {
                /*
                <div class="logo">
                                    <a href="/">
                                   
                                        <img src="https://www.roquefort-labedoule.fr/_5/upload/offre-emploi-e1497615572612.png" class="white-logo w-14 h-14" alt="logo" />
                
                */
            }


            <Navbar bg="light" expand="lg" className="fixed bg-white top-0 w-full visible">
                <Navbar.Brand href="/">
                    <img src="https://www.roquefort-labedoule.fr/_5/upload/offre-emploi-e1497615572612.png" class="white-logo w-14 h-14" alt="logo" />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto visible">
                        <Nav.Link to="/" as={NavLink} className="nav-link" activeClassName="text-lg text-gray-100 bg-blue-500 ">
                           Accueil
                        </Nav.Link>
                        <Nav.Link to={`/${routing.searchAnnonce.path}`} as={NavLink} className="nav-link" activeClassName="text-lg text-gray-100 bg-blue-500 ">Annonces</Nav.Link>
                        <Nav.Link to={`/${routing.historique.path}`} as={NavLink} className="nav-link" activeClassName="text-lg text-gray-100 bg-blue-500 ">Statistiques</Nav.Link>
                        <Nav.Link to="/contact" as={NavLink} className="nav-link" activeClassName="text-lg text-gray-100 bg-blue-500 ">Contact</Nav.Link>
                        <Nav.Link to={`/${routing.stephistoriqueInscription.path}`} as={NavLink} className="nav-link" activeClassName="text-lg text-gray-100 bg-blue-500 ">Aide</Nav.Link>
                    </Nav>
                    <Nav class="visible mx-5">

                        {
                            typeAdmin == typeadmin.candidat ?
                                <NavDropdown className='mx-5'
                                    title={
                                        <Image src={avatarImage} roundedCircle className='h-10 w-10' />
                                    }
                                    id="profile-dropdown">
                                    <NavDropdown.Item href={`/${routing.candidatDashboard.path}`}>
                                        votre espace C
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href={`/${routing.candidatDashboard.path}`}>
                                        Statistiques
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            if (idCandidat == null) {
                                                alert("Déconnexion impossible")
                                            }
                                            else {
                                                e.preventDefault();
                                                dispatch(CandidatDeconnexion(idCandidat));
                                            }
                                        }} >
                                        {
                                            loading ?
                                                <p>Déconnexion en cours ... </p> :
                                                <button className="btn btn-danger flex dropdown-item">
                                                    <HiOutlineLogout className="mr-1 flex" />
                                                    <span>Deconnexion</span>
                                                </button>
                                        }
                                    </form>
                                </NavDropdown> :
                                null
                        }


                        {
                            typeAdmin == typeadmin.employeur ?
                                <NavDropdown className="mx-5"
                                    title={
                                        <Image src={avatarImage} roundedCircle className='h-10 w-10' />
                                    }
                                    id="profile-dropdown">
                                    <NavDropdown.Item href={`/${routing.candidatDashboard.path}`}>
                                        Tableau de bord E
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href={`/${routing.candidatDashboard.path}`}>
                                        Statistiques
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            if (idEmployeur == null) {
                                                alert("Déconnexion impossible")
                                            }
                                            else {
                                                e.preventDefault();
                                                dispatch(EntrepriseDisConnect(idEmployeur));
                                            }
                                        }} >
                                        {
                                            loading ?
                                                <p>Déconnexion en cours ... </p> :
                                                <button className="btn btn-danger flex dropdown-item">
                                                    <HiOutlineLogout className="mr-1 flex" />
                                                    <span>Deconnexion</span>
                                                </button>
                                        }
                                    </form>

                                </NavDropdown> :
                                null
                        }

                        
                        {
                            typeAdmin == typeadmin.candidat || typeAdmin == typeadmin.employeur ?
                                null :
                                <div class="flex space-x-2" >
                                    <Button variant="outline-primary"
                                        onClick={() => {
                                            navigation(`/${routing.connexion.path}`)
                                        }}
                                        className="mr-2 flex">
                                        <HiLogin className="mr-1 flex" />
                                        Connexion
                                    </Button>
                                    <Button variant="outline-info"
                                        onClick={() => {
                                            navigation(`/${routing.inscription.path}`)
                                        }}
                                        className="flex">
                                        <HiOutlineUserAdd className="mr-1 flex" />
                                        <span>Inscription</span>
                                    </Button>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>





        </header>
    )
}

export default HeaderWeb;