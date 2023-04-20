import React from 'react'

import ModalAnnonceAdd from '../../component/annonces/modals/ModalAnnonceAdd';
import ModalAnnonceEdit from '../../component/annonces/modals/ModalAnnonceEdit';
import ModalAnnonceMembers from '../../component/annonces/modals/ModalAnnonceMembers';
import ModalAnnonceAccess from '../../component/annonces/modals/ModalAnnonceAccess';
import ModalAnnonceStop from '../../component/annonces/modals/ModalAnnonceStop';

const AnnonceListPage = () => {
    return (
        <div>
            {/*Modal de l'application */}
            <ModalAnnonceAdd />
            <ModalAnnonceEdit />
            <ModalAnnonceMembers />
            <ModalAnnonceAccess />
            <ModalAnnonceStop />

            <div class="col-12 col-xxl-6 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-header border-bottom d-flex align-items-center justify-content-between">
                        <h2 class="fs-5 fw-bold mb-0">Listes de tous les annonces </h2>
                        <form class="navbar-search form-inline" id="navbar-search-main">
                            <div class="input-group input-group-merge search-bar">
                                <span class="input-group-text" id="topbar-addon">
                                    <svg class="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
                            </div>
                        </form>
                        <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modal-form-signup">
                            <svg class="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            lancer une annonce
                        </button>
                    </div>
                    <div class="card-body" style={{ minHeight: "500px" }}>
                        <ul class="list-group list-group-flush list my--3">
                            <li class="list-group-item px-0 border">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <a href="#" class="avatar">
                                            <img class="rounded" alt="Image placeholder" src="../../assets/img/team/profile-picture-1.jpg" />
                                        </a>
                                    </div>
                                    <div class="col-auto ms--2">
                                        <h4 class="h6 mb-0">
                                            <a href="#">Nom de l{"'"}annonce</a>
                                        </h4>
                                        <div class="d-flex align-items-center">
                                            <div class="bg-success dot rounded-circle me-1"></div>
                                            <small>Disponible</small>
                                        </div>
                                    </div>
                                    <div class="col text-end">

                                        <div class="dropdown me-1">
                                            <button type="button" class="btn btn-info dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                                Actions
                                                <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                            <ul class="dropdown-menu py-0 " aria-labelledby="dropdownMenuOffset">
                                                <li>
                                                    <a class="dropdown-item rounded-top" data-bs-toggle="modal" data-bs-target="#modal-form-signup-edit" href="#">Modifier annonce</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item rounded-top" data-bs-toggle="modal" data-bs-target="#modal-default" href="#">personnes </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item rounded-top text-danger" data-bs-toggle="modal" data-bs-target="#modal-form-signup-stop" href="#">Bloquer annonce</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item rounded-top text-success" data-bs-toggle="modal" data-bs-target="#modal-form-signup-access" href="#">Débloquer annonce</a>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceListPage;