import React from 'react'
import { routing } from '../../../utlis/routing';

const ItemProfileEmployeur = () => {
    return (
        <div class="row align-items-center visible">
            <div class="col-lg-5 col-md-6 ">
                <ul class="topbar-social-list">
                    <li class="dropdown language-option">
                        <button class="dropdown-toggle " type="button" id="language1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <div class="menu-profile flex flex-col items-center justify-center bg-blue-600 rounded-lg p-2">
                                <img src={"assets/images/dashboard/user1.jpg"} class="rounded-circle h-10" alt="image" />
                                <span class="name text-white">email@gmail.com E</span>
                            </div>
                        </button>
                        <div class="dropdown-menu language-dropdown-menu visible bg-blue-300" aria-labelledby="language1">
                            <a class="dropdown-item" href={`/${routing.employeurDashboard.path}`} >
                                Tableau de bord
                            </a>
                            <a class="dropdown-item" href={`/${routing.candidatAllParticipant.path}`}>
                                Candidats
                            </a>
                            <a class="dropdown-item" href={`/${routing.employeurAnnonces.path}`} >
                                Publications
                            </a>
                            <a class="dropdown-item" href="#">
                                Deconnexion
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemProfileEmployeur ;