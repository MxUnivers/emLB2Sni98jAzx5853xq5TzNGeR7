import React, { useEffect, useState } from 'react'
import { CandidatGetAll } from '../../../action/api/candidat/CandidatAction';

const DashBoardMemberCandidatPage = () => {
    const [dataCandidat, setdataCandidat] = useState([]);
    useEffect(() => {
        CandidatGetAll(setdataCandidat);
    }, [])

    return (
        <div>

            <div class="breadcrumb-area">
                <h1>Tous les candidats de votre domaine</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="dashboard.html">tabeau de bord</a></li>
                    <li class="item"><a href="dashboard.html">candidat</a></li>
                    <li class="item">candidat</li>
                </ol>
            </div>




            <div class="all-applicants-box">
                <h2>Candidat</h2>

                <div class="row">
                    {
                        dataCandidat.map((item) => {
                            return (

                                <div class="col-lg-6 col-md-12">
                                    <div class="single-applicants-card">
                                        <div class="image">
                                            <a href="#"><img src={item.coverPicture} alt={item.username} /></a>
                                        </div>

                                        <div class="content">
                                            <h3>
                                                <a href="candidates-details-1.html">{item.firstname} {item.lastname}</a>
                                            </h3>
                                            <span>UI/UX Designer</span>

                                            <ul class="job-info">
                                                <li><i class="ri-map-pin-line"></i> {item.ville}</li>
                                                <li><i class="ri-time-line"></i> {item.is_active? "Connecté":"Déconnecté"}</li>
                                            </ul>

                                            <div class="applicants-footer">
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
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default DashBoardMemberCandidatPage;