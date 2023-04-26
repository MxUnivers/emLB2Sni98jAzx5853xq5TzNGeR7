import React from 'react'

const Navbar = () => {
    return (
        <div class="navbar-area">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-navbar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/images/logo.png" alt="logo"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">
                                        Home
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link active">Home Demo - 1</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">Home Demo - 2</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-3.html" class="nav-link">Home Demo - 3</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Job Listing
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="job-listing-1.html" class="nav-link">Job Listing - One</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="job-listing-2.html" class="nav-link">Job Listing - Two</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="job-listing-3.html" class="nav-link">Job Listing - Three</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="add-listing.html" class="nav-link">Add Listing</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="my-listing.html" class="nav-link">My Listing</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Job Details
                                                <i class="ri-arrow-right-s-line"></i>
                                            </a>

                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="job-details-1.html" class="nav-link">Job Details - One</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="job-details-2.html" class="nav-link">Job Details - Two</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Candidates
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="candidates-1.html" class="nav-link">Candidates - One</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="candidates-2.html" class="nav-link">Candidates - Two</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="dashboard-submit-resume.html" class="nav-link">Submit Resume</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="add-resume.html" class="nav-link">Add Resume</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="my-resume.html" class="nav-link">My Resume</a>
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

                                        <li class="nav-item">
                                            <a href="candidates-dashboard.html" class="nav-link">Candidates Dashboard</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
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

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Pages
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Shop
                                                <i class="ri-arrow-right-s-line"></i>
                                            </a>

                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="shop.html" class="nav-link">Shop</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="shop-details.html" class="nav-link">Shop Details</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="cart.html" class="nav-link">Cart</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="checkout.html" class="nav-link">Checkout</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="my-account.html" class="nav-link">My Account</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="about-us.html" class="nav-link">About Us</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="pricing-plan.html" class="nav-link">Pricing Plan</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">Gallery</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="testimonials.html" class="nav-link">Testimonials</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">FAQ</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="dashboard-invoice.html" class="nav-link">Invoice</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="profile-authentication.html" class="nav-link">Profile Authentication</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="terms-of-service.html" class="nav-link">Terms of Service</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">404 Error</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="coming-soon.html" class="nav-link">Coming Soon</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
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

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>
                            </ul>

                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
                                    <a href="dashboard-post-job.html" class="default-btn">Post A Job <i class="flaticon-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
