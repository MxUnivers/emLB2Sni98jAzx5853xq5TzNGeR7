import React from 'react'

const SideBarAdmin = () => {
    return (
        <div class="sidemenu-area">
            <div class="sidemenu-header">
                <a href="candidates-dashboard.html" class="navbar-brand d-flex align-items-center">
                    <img src="assets/images/logo.png" alt="image"/>
                </a>

                <div class="responsive-burger-menu d-block d-lg-none">
                    <span class="top-bar"></span>
                    <span class="middle-bar"></span>
                    <span class="bottom-bar"></span>
                </div>
            </div>

            <div class="sidemenu-body">
                <ul class="sidemenu-nav metisMenu h-100" id="sidemenu-nav" data-simplebar>
                    <li class="nav-item active">
                        <a href="candidates-dashboard.html" class="nav-link">
                            <span class="icon"><i class="ri-home-line"></i></span>
                            <span class="menu-title">Tableau de bord</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="candidates-dashboard-my-profile.html" class="nav-link">
                            <span class="icon"><i class="ri-user-line"></i></span>
                            <span class="menu-title">My Profile</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="candidates-dashboard-my-resume.html" class="nav-link">
                            <span class="icon"><i class="ri-file-list-line"></i></span>
                            <span class="menu-title">My Resume</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="candidates-dashboard-applied-job.html" class="nav-link">
                            <span class="icon"><i class="ri-briefcase-line"></i></span>
                            <span class="menu-title">Applied Jobs</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="candidates-dashboard-job-alerts.html" class="nav-link">
                            <span class="icon"><i class="ri-notification-3-line"></i></span>
                            <span class="menu-title">Job Alerts</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="candidates-dashboard-shortlisted-job.html" class="nav-link">
                            <span class="icon"><i class="ri-bookmark-line"></i></span>
                            <span class="menu-title">Shortlisted Jobs</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="candidates-dashboard-cv-manager.html" class="nav-link">
                            <span class="icon"><i class="ri-book-line"></i></span>
                            <span class="menu-title">CV Manager</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="dashboard-packages.html" class="nav-link">
                            <span class="icon"><i class="ri-stack-fill"></i></span>
                            <span class="menu-title">Packages</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="dashboard-messages.html" class="nav-link">
                            <span class="icon"><i class="ri-chat-1-line"></i></span>
                            <span class="menu-title">Messages</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="dashboard-invoice.html" class="nav-link">
                            <span class="icon"><i class="ri-price-tag-line"></i></span>
                            <span class="menu-title">Invoice</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="dashboard-change-password.html" class="nav-link">
                            <span class="icon"><i class="ri-lock-line"></i></span>
                            <span class="menu-title">Change Password</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="dashboard-my-profile.html" class="nav-link">
                            <span class="icon"><i class="ri-user-line"></i></span>
                            <span class="menu-title">View Profile</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="index.html" class="nav-link">
                            <span class="icon"><i class="ri-logout-circle-r-line"></i></span>
                            <span class="menu-title">Logout</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="index.html" class="nav-link">
                            <span class="icon"><i class="ri-delete-bin-line"></i></span>
                            <span class="menu-title">Delete Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarAdmin;