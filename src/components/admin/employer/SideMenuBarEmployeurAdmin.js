import React from 'react'
import { routing } from '../../../utlis/routing'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FiUser, FiLogOut, FiList, FiBriefcase } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const SideMenuBarEmployeurAdmin = () => {
    return (




        <div class="sidemenu-body">
            <ul class="sidemenu-nav metisMenu " id="sidemenu-nav" data-simplebar>

                <Navbar bg="light" variant="light" expand="lg" className="lg:w-30 h-screen  left-0 top-0 overflow-y-auto visible border-r">
                    <Container className='visible'>
                        <Navbar.Toggle aria-controls="sidebar-nav" />
                        <Navbar.Collapse id="sidebar-nav" className='visible'>
                            <Nav className="flex-column">
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.candidatDashboard.path}`} >
                                    <FiUser className="mr-2" />
                                    <span class="menu-title">Tableau de bord E</span>
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.employeurProfile.path}`}>
                                    <FiLogOut className="mr-2" />
                                    Profile
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.employeurPostAnnonce.path}`}>
                                    <FiList className="mr-2" />
                                    Poster
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.employeurAnnonces.path}`} >
                                    <FiList className="mr-2" />
                                    Publications
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.candidatAllParticipant.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Candidats
                                </Nav.Link>

                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.candidatChat.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Forum
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.candidatChangePassord.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Mot de passe
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName='text-lg text-gray-100 bg-blue-500 ' className="text-gray-700 flex space-x-2" to={`/${routing.candidatChat.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Forum
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </ul>
        </div>
    )
}

export default SideMenuBarEmployeurAdmin;