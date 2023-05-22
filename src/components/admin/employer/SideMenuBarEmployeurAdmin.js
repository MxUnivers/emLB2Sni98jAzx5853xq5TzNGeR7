import React from 'react'
import { routing } from '../../../utlis/routing'
import {Nav, Navbar, Container } from 'react-bootstrap';
import { FiUser, FiLogOut, FiList, FiBriefcase } from "react-icons/fi";

const SideMenuBarEmployeurAdmin = () => {
    return (




        <div class="sidemenu-body">
            <ul class="sidemenu-nav metisMenu " id="sidemenu-nav" data-simplebar>

                <Navbar bg="light" variant="light" expand="lg" className="lg:w-30 min-h-screen fixed left-0 top-0 z-50 overflow-y-auto visible">
                    <Container className='visible'>
                        <Navbar.Toggle aria-controls="sidebar-nav" />
                        <Navbar.Collapse id="sidebar-nav" className='visible'>
                            <Nav className="flex-column">
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.candidatDashboard.path}`} >
                                    <FiUser className="mr-2" />
                                    <span class="menu-title">Tableau de bord E</span>
                                </Nav.Link>
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.employeurProfile.path}`}>
                                    <FiLogOut className="mr-2" />
                                    Profile
                                </Nav.Link>
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.employeurPostAnnonce.path}`}>
                                    <FiList className="mr-2" />
                                    Poster
                                </Nav.Link>
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.employeurAnnonces.path}`} >
                                    <FiList className="mr-2" />
                                    Publications
                                </Nav.Link>
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.candidatAllParticipant.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Candidats
                                </Nav.Link>

                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.candidatChat.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Forum
                                </Nav.Link>
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.candidatChangePassord.path}`}>
                                    <FiBriefcase className="mr-2" />
                                    Mot de passe
                                </Nav.Link>
                                <Nav.Link className="text-gray-700 flex space-x-2" href={`/${routing.candidatChat.path}`}>
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