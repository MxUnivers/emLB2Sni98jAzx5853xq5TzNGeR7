import React from 'react'

const NavbarItemCandidat = () => {
    return (
        <div class="others-options d-flex align-items-center visible">
            <div class="option-item visible">
                <div class="dropdown profile-nav-item">
                    <a href="#" class="dropdown-bs-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="menu-profile">
                            <img src="assets/images/dashboard/user1.jpg" class="rounded-circle" alt="image" />
                            <span class="name">My Account</span>
                        </div>
                    </a>

                    <div class="dropdown-menu">
                        <div class="dropdown-header d-flex flex-column align-items-center">
                            <div class="figure mb-3">
                                <img src="assets/images/dashboard/user1.jpg" class="rounded-circle" alt="image" />
                            </div>

                            <div class="info text-center">
                                <span class="name">Andy Smith</span>
                                <p class="mb-3 email">hello@androsmith.com</p>
                            </div>
                        </div>

                        <div class="dropdown-body">
                            <ul class="profile-nav p-0 pt-3">
                                <li class="nav-item active">
                                    <a href="candidates-dashboard.html" class="nav-link">
                                        <span class="icon"><i class="ri-home-line"></i></span>
                                        <span class="menu-title">Dashboard</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="dashboard-applicants.html" class="nav-link">
                                        <span class="icon"><i class="ri-file-list-line"></i></span>
                                        <span class="menu-title">All Applicants</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="candidates-dashboard-submit-resume.html" class="nav-link">
                                        <span class="icon"><i class="ri-bookmark-line"></i></span>
                                        <span class="menu-title">Submit Resumes</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="dashboard-packages.html" class="nav-link">
                                        <span class="icon"><i class="ri-stack-fill"></i></span>
                                        <span class="menu-title">Packages</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="dropdown-footer">
                            <ul class="profile-nav">
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link"><i class="ri-logout-box-r-line"></i> <span>Logout</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarItemCandidat
