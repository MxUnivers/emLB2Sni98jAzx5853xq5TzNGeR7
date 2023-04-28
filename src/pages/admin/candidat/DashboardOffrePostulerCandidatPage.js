import React from 'react';
import { HiSearchCircle } from 'react-icons/hi';



const DashboardOffrePostulerCandidatPage = () => {
    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Offres postuler</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="candidates-dashboard.html">Home</a></li>
                    <li class="item"><a href="candidates-dashboard.html">Dashboard</a></li>
                    <li class="item">Shortlisted Jobs</li>
                </ol>
            </div>



            <div class="dashboard-jobs-box">
                <h2>Mes offres d{"'"}emplois</h2>
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
                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-job-card">
                            <div class="job-content">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                                </div>
                                <h3>
                                    <a href="job-details-1.html">Assistant Editor</a>
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

                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-job-card">
                            <div class="job-content">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-2.png" alt="image" /></a>
                                </div>
                                <h3>
                                    <a href="job-details-1.html">Marketing Director</a>
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


                    <div class="col-lg-6 col-md-12">
                        <div class="dashboard-job-card">
                            <div class="job-content">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-6.png" alt="image" /></a>
                                </div>
                                <h3>
                                    <a href="job-details-1.html">Shopify Developer</a>
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



                </div>
            </div>
        </div>
    )
}

export default DashboardOffrePostulerCandidatPage;