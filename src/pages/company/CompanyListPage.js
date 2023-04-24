
import React from 'react';

import ModalCompanyAdd from '../../component/company/modals/ModalCompanyAdd';
import ModalCompanyEdit from '../../component/company/modals/ModalCompanyEdit';
import ModalCompanyAccess from '../../component/company/modals/ModalCompanyAccess';
import ModalCompanyStop from '../../component/company/modals/ModalCompanyStop';
import ModalCompanyMembers from '../../component/company/modals/ModalCompanyMembers';
import { ComponanyActionListRequest } from '../../actions/others/ComponanyAction';
import { useState } from 'react';
import { useEffect } from 'react';
import LoaderSpiner from '../../component/LoaderPage/LoaderSpiner';

const CompanyListPage = () => {
    const [data, setdata] = useState([]);
    const [dataSearch, setdataSearch] = useState([]);
    const [search, setsearch] = useState("");
    useEffect(() => {
        ComponanyActionListRequest(setdata,setdataSearch);
    }, []);

    const [companydata, setcompanydata] = useState({});

    const handleCompany = (item) => {
        setcompanydata(item);
    }


    // Fonction pour rechercher une compagie
    const handleSearch = (e) => {
        e.preventDefault();
        setsearch(e.target.value); //name.includes('J')
        console.log(e.target.value);
        let _full_name = dataSearch.filter((item) =>
        item.full_name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        let _description = dataSearch.filter((item) =>
        item.description.toLowerCase().includes(e.target.value.toLowerCase())
        );
        let _email = dataSearch.filter((item) =>
        item.email.toLowerCase().includes(e.target.value.toLowerCase())
        );
        let _telephone = dataSearch.filter((item) =>
        item.telephone.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setdata(_full_name && _email && _telephone && _description );
    };


    return (
        <div>
            {/*Modal de l'application */}
            <ModalCompanyAdd />
            <ModalCompanyEdit data={companydata} />
            <ModalCompanyMembers />
            <ModalCompanyAccess data={companydata} />
            <ModalCompanyStop data={companydata} />

            <div class="col-12 col-xxl-6 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-header border-bottom d-flex align-items-center justify-content-between">
                        <h2 class="fs-5 fw-bold mb-0">Listes des compagnies</h2>
                        <form class="navbar-search form-inline" id="navbar-search-main">
                            <div class="input-group input-group-merge search-bar">
                                <span class="input-group-text" id="topbar-addon">
                                    <svg class="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <input type="text" value={search} onChange={(e)=>{handleSearch(e)}} class="form-control" id="topbarInputIconLeft" placeholder="Search"  />
                            </div>
                        </form>
                        <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modal-form-signup">
                            <svg class="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            Ajouter Compagie
                        </button>
                    </div>
                    <div class="card-body" style={{ minHeight: "500px" }}>

                        {
                            data && data.length > 0 ?
                                (
                                    <ul class="list-group list-group-flush list my--3">
                                        {data.map((item) => {
                                            return (
                                                <li class="list-group-item px-0 border">
                                                    <div class="row align-items-center">
                                                        <div class="col-auto">
                                                            <a href="#" class="avatar">
                                                                <img class="rounded" alt="Image placeholder" src="../../assets/img/team/profile-picture-1.jpg" />
                                                            </a>
                                                        </div>
                                                        <div class="col-auto ms--2">
                                                            <h4 class="h6 mb-0">
                                                                <a href="#">{item.full_name}</a>
                                                            </h4>
                                                            {
                                                                item.is_active ?
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="bg-success dot rounded-circle me-1"></div>
                                                                        <small>en ligne</small>
                                                                    </div> :
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="bg-danger dot rounded-circle me-1"></div>
                                                                        <small>déonnecté</small>
                                                                    </div>
                                                            }
                                                        </div>
                                                        <div class="col-auto ms--2">
                                                            <h4 class="h6 mb-0">
                                                                <a href="#">{item.email}</a>
                                                            </h4>

                                                            <div class="d-flex align-items-center">
                                                                <div class="bg-success dot rounded-call me-1"></div>
                                                                <small>tel:{item.telephone}</small>
                                                            </div>

                                                        </div>
                                                        <div class="col-auto ms--2">
                                                            <h4 class="h6 mb-0">
                                                                <a href="#">état de compte</a>
                                                            </h4>
                                                            {
                                                                item.blocked ?
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="bg-danger dot rounded-circle me-1"></div>
                                                                        <small>désactiver</small>
                                                                    </div>
                                                                    :
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="bg-success dot rounded-circle me-1"></div>
                                                                        <small>en service</small>
                                                                    </div>
                                                            }

                                                        </div>
                                                        <div class="col text-end">

                                                            <div class="dropdown me-1">
                                                                <button type="button" class="btn btn-info dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                                                    Actions
                                                                    <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                </button>
                                                                <ul class="dropdown-menu py-0 " aria-labelledby="dropdownMenuOffset">
                                                                    <li>
                                                                        <a onClick={() => { handleCompany(item) }} class="dropdown-item rounded-top" data-bs-toggle="modal" data-bs-target="#modal-form-signup-edit" href="#">Modifier compagnie</a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => { handleCompany(item) }} class="dropdown-item rounded-top" data-bs-toggle="modal" data-bs-target="#modal-default" href="#">personnes {item.annonces.length} </a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => { handleCompany(item) }} class="dropdown-item rounded-top text-danger" data-bs-toggle="modal" data-bs-target="#modal-form-signup-stop" href="#">Bloquer compagnie</a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => { handleCompany(item) }} class="dropdown-item rounded-top text-success" data-bs-toggle="modal" data-bs-target="#modal-form-signup-access" href="#">Débloquer compagnie</a>
                                                                    </li>
                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                ) :
                                <div>
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                    <LoaderSpiner />
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyListPage;