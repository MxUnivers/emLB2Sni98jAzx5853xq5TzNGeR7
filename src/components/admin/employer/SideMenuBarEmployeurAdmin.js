import React from 'react'
import { routing } from '../../../utlis/routing'

const SideMenuBarEmployeurAdmin = () => {
    return (
        <div class="sidemenu-body">
            <ul class="sidemenu-nav metisMenu h-100" id="sidemenu-nav" data-simplebar>
                <li class="nav-item active">
                    <a href={`/${routing.candidatDashboard.path}`} class="nav-link">
                        <span class="icon"><i class="ri-home-line"></i></span>
                        <span class="menu-title">Tableau de bord E</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href={`/${routing.employeurProfile.path}`} class="nav-link">
                        <span class="icon"><i class="ri-user-line"></i></span>
                        <span class="menu-title">Profile</span>
                    </a>
                </li>
                {
                    /*
                    <li class="nav-item">
                    <a href={``} class="nav-link">
                        <span class="icon"><i class="ri-file-list-line"></i></span>
                        <span class="menu-title">My Resume</span>
                    </a>
                </li>
                    */
                }
                <li class="nav-item">
                    <a href={`/${routing.employeurPostAnnonce.path}`} class="nav-link">
                        <span class="icon"><i class="ri-send-plane-fill"></i></span>
                        <span class="menu-title">Poster Annonce</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href={`/${routing.candidatOffres.path}`} class="nav-link">
                        <span class="icon"><i class="ri-notification-3-line"></i></span>
                        <span class="menu-title">Annonces </span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href={`/${routing.candidatAllParticipant.path}`} class="nav-link">
                        <span class="icon"><i class="ri-file-list-line"></i></span>
                        <span class="menu-title">Tous candidats</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href={`/${routing.candidatChat.path}`} class="nav-link">
                        <span class="icon"><i class="ri-chat-1-line"></i></span>
                        <span class="menu-title">Chat Forum</span>
                    </a>
                </li>


                {
                    /*
                    <li class="nav-item">
                    <a href={`/${routing.candidatCv.path}`} class="nav-link">
                        <span class="icon"><i class="ri-book-line"></i></span>
                        <span class="menu-title"> Gestion cv</span>
                    </a>
                    </li>
                    
                    */
                }


                <li class="nav-item">
                    <a href={`/${routing.candidatChangePassord.path}`} class="nav-link">
                        <span class="icon"><i class="ri-lock-line"></i></span>
                        <span class="menu-title">Mot de passe</span>
                    </a>
                </li>


                <li class="nav-item">
                    <a href="index.html" class="nav-link">
                        <span class="icon"><i class="ri-logout-circle-r-line"></i></span>
                        <span class="menu-title">Déconnexion</span>
                    </a>
                </li>

                {
                    /*
                      <li class="nav-item">
                       <a href="index.html" class="nav-link">
                         <span class="icon"><i class="ri-delete-bin-line"></i></span>
                         <span class="menu-title">Delete Profile</span>
                       </a>
                      </li>
                    */
                }
            </ul>
        </div>
    )
}

export default SideMenuBarEmployeurAdmin;