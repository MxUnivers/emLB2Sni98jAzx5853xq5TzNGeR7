import React from 'react'
import { routing } from '../../utlis/routing';

const HeaderWeb = () => {
    return (
        <header class="main-header-area">
            <div class="topbar-area">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <ul class="topbar-social-list">
                                <li>
                                    <a class="visible" href="https://www.facebook.com/" target="_blank"><i class="flaticon-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/" target="_blank"><i class="flaticon-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-7 col-md-6">
                            <ul class="topbar-action">
                                <li>
                                    <a href="profile-authentication.html"><i class="flaticon-padlock"></i> Log In</a>
                                </li>

                                <li>
                                    <a href="profile-authentication.html"><i class="flaticon-user"></i> Register</a>
                                </li>

                                <li class="dropdown language-option">
                                    <button class="dropdown-toggle" type="button" id="language1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon-worldwide"></i>
                                        <span class="lang-name"></span>
                                    </button>
                                    <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language1">
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uk.png" alt="flag" />
                                            English
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/china.png" alt="flag" />
                                            简体中文
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uae.png" alt="flag" />
                                            العربيّة
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div class="navbar-area">
                <div class="main-responsive-nav">
                    <div class="container">
                        <div class="main-responsive-menu">
                            <div class="logo">
                                <a href="/">
                                    <img src="assets/images/logo-2.png" class="white-logo" alt="logo" />
                                    <img src="assets/images/logo.png" class="black-logo" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main-navbar">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href={"/"}>
                                <img src="assets/images/logo-2.png" class="white-logo" alt="logo" />
                                <img src="assets/images/logo.png" class="black-logo" alt="logo" />
                            </a>

                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item visible">
                                        <a href="#" class="nav-link active ">
                                            Home
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href={`/${routing.home.path}`} class="nav-link active">Accueil</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href={`/${routing.searchAnnonce.path}`} class="nav-link active">recherche annonce</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href={`/${routing.detailAnnonce.path}`} class="nav-link active">Détail annonce</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item visible">
                                        <a href="#" class="nav-link">
                                            Annonces
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href={`/${routing.searchAnnonce.path}`} class="nav-link">Annonces</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href={`/${routing.detailAnnonce.path}`} class="nav-link">detail annonce</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    Job dteails
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href={`/${routing.detailAnnonce.path}`} class="nav-link">Details de l{"'"}annonce</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item visible">
                                        <a href="#" class="nav-link">
                                            Candidates
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            
                                            <li class="nav-item">
                                                <a href={`/${routing.candidatDashboard.path}`} class="nav-link">tableau de bord</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    Candidates Details
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href="candidates-details-1.html" class="nav-link">Candidates Details - One</a>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a href="candidates-details-2.html" class="nav-link">Candidates Details - Two</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>

                                    <li class="nav-item visible">
                                        <a href="#" class="nav-link">
                                            Employers
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="employers.html" class="nav-link">Employers</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="employers-details.html" class="nav-link">Employers Details</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="dashboard.html" class="nav-link">Employers Dashboard</a>
                                            </li>
                                        </ul>
                                    </li>



                                    <li class="nav-item visible">
                                        <a href="#" class="nav-link">
                                            Blog
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="blog.html" class="nav-link">Blog</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="blog-details.html" class="nav-link">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item visible">
                                        <a href={`/${routing.contact.path}`} class="nav-link">Contact</a>
                                    </li>
                                </ul>

                                <div class="others-options d-flex align-items-center visible">
                                    <div class="flex flex-col space-y-2">
                                        <div class="option-item">
                                            <a href={`/${routing.inscriptionCandidat.path}`} class="default-btn">Inscription Candidat <i class="flaticon-plus"></i></a>
                                        </div>
                                        <div class="option-item">
                                            <a href={`/${routing.inscriptionEmployer.path}`} class="default-btn">Inscription Employeur <i class="flaticon-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderWeb;