import React from 'react'
import { routing } from '../../../utlis/routing'
import { localvalue } from '../../../utlis/storage/localvalue'
import { CandidatDeconnexion } from '../../../action/api/candidat/CandidatAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ItemProfileCandidat = () => {
    var idCandidat = localStorage.getItem(localvalue.candidat.idCandidat);


    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const [loading, setloading] = useState(false);
    const handleSumit = (e) => {
        if (idCandidat == null) {
            alert("Déconnexion impossible")
        }
        else {
            e.preventDefault();
            CandidatDeconnexion(idCandidat);
        }
    }

    return (
        <div class="row align-items-center visible">
            <div class="col-lg-5 col-md-5 ">
                <ul class="topbar-social-list">
                    <li class="dropdown language-option">
                        <button class="dropdown-toggle " type="button" id="language1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <div class="menu-profile flex flex-col items-center justify-center bg-blue-600 rounded-lg p-2">
                                <img src={"assets/images/dashboard/user1.jpg"} class="rounded-circle h-10" alt="image" />
                                <span class="name text-white">email@gmail.com</span>
                            </div>
                        </button>
                        <div class="dropdown-menu language-dropdown-menu visible bg-blue-300" aria-labelledby="language1">
                            <a class="dropdown-item" href={`/${routing.candidatDashboard.path}`}>
                                Tableau de bord
                            </a>
                            <a class="dropdown-item" href={`/${routing.candidatProfile.path}`} >
                                Profile
                            </a>

                            <a class="dropdown-item" href="#" >

                                <form onSubmit={handleSumit}>
                                    <a class="dropdown-item" href={`#`} >
                                        <button type='submit' >
                                            {
                                                loading ? "Deconnexion en cours ..." :"Deconnexion"
                                            }
                                        </button>
                                    </a>
                                </form>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemProfileCandidat