import React, { useEffect, useState } from 'react'
import { localvalue } from '../../../utlis/storage/localvalue';
import { EntrepriseGetAllAnnonces, EntrepriseGetAllOffres } from '../../../action/api/employeur/EmployeurAction';
import { HiSearchCircle } from 'react-icons/hi';

const DashboardEmployeurAnnonceListPage = () => {


    var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);
    // Annonces
    const [dataAnnonce, setdataAnnonce] = useState([]);
    const [dataAnnonce2, setdataAnnonce2] = useState([]);
    // Offres
    const [dataOffre, setdataOffre] = useState([]);
    const [dataOffre2, setdataOffre2] = useState([]);
    useEffect(() => {
        EntrepriseGetAllAnnonces(idAdmin, setdataAnnonce, setdataAnnonce2);
        EntrepriseGetAllOffres(idAdmin, setdataOffre, setdataOffre2);
    }, []);



    const [showComponentA, setshowComponentA] = useState(true);
    const [showComponentB, setshowComponentB] = useState(false);

    const handleShowComponentA = () => {
        setshowComponentA(true);
        setshowComponentB(false);
    };

    const handleShowComponentB = () => {
        setshowComponentA(false);
        setshowComponentB(true);
    };


    return (
        <div>
            <div class="breadcrumb-area">
                <h1>VOS POSTES</h1>
                <ol class="breadcrumb">
                    <li class="">
                        <button onClick={handleShowComponentA} class=" btn bg-blue-600 hover:bg-blue-600 active:bg-blue-600">ANNONCES</button>
                    </li>
                    <li class="mx-3 justify-center items-center btn">{"|".toUpperCase()}</li>
                    <li class="item">
                        <button onClick={handleShowComponentB} class=" btn bg-blue-600 hover:bg-blue-600 active:bg-blue-600">OFFRES</button>
                    </li>
                </ol>
            </div>




            {
                showComponentA &&
                <div class="dashboard-jobs-box">
                    <h2>MES ANNONCES</h2>
                    <div class=" bg-white ">
                        <div class=" p-2 bg-gray-100 flex flex-row bg-white shadow-md rounded-lg py-3 px-2 border-b">
                            <div class="bg-gray-200 p-1 rounded-2xl">
                                <span>
                                    <HiSearchCircle class="h-7 w-7 text-gray-300" />
                                </span>
                            </div>
                            <div><input type='text' class="form-control" placeholder="rechercher ..." /></div>
                        </div>
                    </div>

                    <div class="row">

                        {
                            dataAnnonce.map((item) => {
                                return (
                                    <div class="col-lg-6 col-md-12">
                                        <div class="dashboard-job-card">
                                            <div class="job-content">
                                                <div class="company-logo">
                                                    <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                                                </div>
                                                <h3>
                                                    <a
                                                    >{item.titre}</a>
                                                </h3>
                                                <div class="bookmark-btn">
                                                    <i class="ri-bookmark-line"></i>
                                                </div>
                                                <div class="hover-bookmark-btn">
                                                    <i class="ri-bookmark-fill"></i>
                                                </div>
                                                <ul class="location-information">
                                                    <li><i class="ri-briefcase-line"></i> Segment</li>
                                                    <li><i class="ri-map-pin-line"></i> United Kingdom</li>
                                                    <li><i class="ri-money-dollar-circle-line"></i>  $25k - $35k</li>
                                                </ul>
                                                <ul class="job-tag-list">
                                                    <li>Full Time</li>
                                                    <li class="urgent">Urgent</li>
                                                    <li class="private">Private</li>
                                                </ul>
                                                <ul class="option-list">
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="View Aplication" type="button"><i class="ri-eye-line"></i></button></li>
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve Aplication" type="button"><i class="ri-check-line"></i></button></li>
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Reject Aplication" type="button"><i class="ri-close-line"></i></button></li>
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Aplication" type="button"><i class="ri-delete-bin-line"></i></button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }



            {
                showComponentB
                &&
                <div class="dashboard-jobs-box">
                    <h2>MES OFFRES</h2>
                    <div class=" bg-white ">
                        <div class=" p-2 bg-gray-100 flex flex-row bg-white shadow-md rounded-lg py-3 px-2 border-b">
                            <div class="bg-gray-200 p-1 rounded-2xl">
                                <span>
                                    <HiSearchCircle class="h-7 w-7 text-gray-300" />
                                </span>
                            </div>
                            <div><input type='text' class="form-control" placeholder="rechercher ..." /></div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            dataOffre.map((item) => {
                                return (
                                    <div class="col-lg-6 col-md-12">
                                        <div class="dashboard-job-card">
                                            <div class="job-content">
                                                <div class="company-logo">
                                                    <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                                                </div>
                                                <h3>
                                                    <a
                                                    >{item.titre}</a>
                                                </h3>
                                                <div class="bookmark-btn">
                                                    <i class="ri-bookmark-line"></i>
                                                </div>
                                                <div class="hover-bookmark-btn">
                                                    <i class="ri-bookmark-fill"></i>
                                                </div>
                                                <ul class="location-information">
                                                    <li><i class="ri-briefcase-line"></i> Segment</li>
                                                    <li><i class="ri-map-pin-line"></i> United Kingdom</li>
                                                    <li><i class="ri-money-dollar-circle-line"></i>  $25k - $35k</li>
                                                </ul>
                                                <ul class="job-tag-list">
                                                    <li>Full Time</li>
                                                    <li class="urgent">Urgent</li>
                                                    <li class="private">Private</li>
                                                </ul>
                                                <ul class="option-list">
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="View Aplication" type="button"><i class="ri-eye-line"></i></button></li>
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve Aplication" type="button"><i class="ri-check-line"></i></button></li>
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Reject Aplication" type="button"><i class="ri-close-line"></i></button></li>
                                                    <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Aplication" type="button"><i class="ri-delete-bin-line"></i></button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default DashboardEmployeurAnnonceListPage;