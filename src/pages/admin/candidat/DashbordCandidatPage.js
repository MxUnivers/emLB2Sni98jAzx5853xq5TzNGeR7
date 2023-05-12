import React, { useEffect, useState } from 'react'
import { localvalue } from '../../../utlis/storage/localvalue';
import { CandidatGetById } from '../../../action/api/candidat/CandidatAction';

const DashbordCandidatPage = () => {
    var idAdmin  = localStorage.getItem(localvalue.candidat.idCandidat);
    const [candidat, setcandidat] = useState("");


    useEffect(()=>{
        CandidatGetById( idAdmin,setcandidat)
    })
    return (

        <div>
            <div class="breadcrumb-area">
            {
                candidat &&
                <h1>{candidat.firstname} {candidat.lastname}</h1>

            }
                <ol class="breadcrumb">
                    <li class="item"><a href="#">Accueil</a></li>
                    <li class="item">Tableau de bord</li>
                </ol>
            </div>



            <div class="notification-alert alert alert-success alert-dismissible fade show" role="alert">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>



            <div class="dashboard-fun-fact-area">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="stats-fun-fact-box">
                            <div class="icon-box">
                                <i class="ri-briefcase-line"></i>
                            </div>
                            <span class="sub-title">Emplois Postules</span>
                            <h3>
                            {
                                candidat ?
                                candidat.offresPostulees.length:
                                "..."
                            }
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="stats-fun-fact-box">
                            <div class="icon-box">
                                <i class="ri-file-list-line"></i>
                            </div>
                            <span class="sub-title">Job Alerts</span>
                            <h3>1245</h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="stats-fun-fact-box">
                            <div class="icon-box">
                                <i class="ri-chat-2-line"></i>
                            </div>
                            <span class="sub-title">Messages</span>
                            <h3>85</h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="stats-fun-fact-box">
                            <div class="icon-box">
                                <i class="ri-bookmark-line"></i>
                            </div>
                            <span class="sub-title">Shortlist</span>
                            <h3>57</h3>
                        </div>
                    </div>


                </div>
            </div>



            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="recent-notifications-box">
                        <h3>Recent Notifications</h3>

                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Tyrone Lowe</span> Applied For A Job <strong>Software Engineer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Kaedyn Fraser</span> Applied For A Job <strong>Web Developer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Harold Adams</span> Applied For A Job <strong>Technical Architect</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Joshua Mcnair</span> Applied For A Job <strong>UI Designer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Kathryn Mcgee</span> Applied For A Job <strong>Senior Product Designer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Kaedyn Fraser</span> Applied For A Job <strong>Product Designer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Dianna Smiley</span> Applied For A Job <strong>Android Developer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Micheal Murphy</span> Applied For A Job <strong>Digital Marketer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Yamilet Booker</span> Applied For A Job <strong>Senior Data Engineer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-bookmark-line"></i>
                                </div>
                                <span>Milana Myles</span> Applied For A Job <strong>Shopify Developer</strong>
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="invoices-box">
                        <h3>Invoices</h3>

                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="paid">Paid</li>
                                    <li>Order: #181815</li>
                                    <li>Date: 14/08/2021</li>
                                </ul>
                                <span>Premium Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="unpaid">Unpaid</li>
                                    <li>Order: #181814</li>
                                    <li>Date: 13/08/2021</li>
                                </ul>
                                <span>Advance Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="paid">Paid</li>
                                    <li>Order: #181813</li>
                                    <li>Date: 12/08/2021</li>
                                </ul>
                                <span>Starter Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="unpaid">Unpaid</li>
                                    <li>Order: #181812</li>
                                    <li>Date: 11/08/2021</li>
                                </ul>
                                <span>Basic Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="paid">Paid</li>
                                    <li>Order: #181815</li>
                                    <li>Date: 14/08/2021</li>
                                </ul>
                                <span>Premium Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="unpaid">Unpaid</li>
                                    <li>Order: #181814</li>
                                    <li>Date: 13/08/2021</li>
                                </ul>
                                <span>Advance Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="ri-file-line"></i>
                                </div>
                                <ul>
                                    <li class="paid">Paid</li>
                                    <li>Order: #181813</li>
                                    <li>Date: 12/08/2021</li>
                                </ul>
                                <span>Starter Plan</span>
                                <a href="dashboard-invoice.html" class="default-btn">View Invoice</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>




            
        </div>
    )
}

export default DashbordCandidatPage;