import React from 'react'
import { BiDollarCircle } from 'react-icons/bi'
import { BsCalendarWeek, BsTelephone } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { routing } from '../../utlis/routing';

const JobDetailPage = () => {

    return (

        <div class="main-content">

            <div class="page-content">





                <section class="section mt-24">
                    <div class="container-fluid px-7">
                        <div class="flex flex-row justify-between">
                            <div class="col-lg-8">
                                <div class="card job-detail overflow-hidden">
                                    <div>
                                        <div class="job-details-compnay-profile">
                                            <img src="assets/images/featured-job/img-10.png" alt=""
                                                class="img-fluid rounded-3 rounded-3" />
                                        </div>
                                    </div>


                                    <div class="card-body p-4">
                                        <div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <h5 class="mb-1 text-3xl">Product Designer / UI Designer</h5>
                                                    <ul class="list-inline text-muted mb-0">
                                                        <li class="list-inline-item">
                                                            <i class="mdi mdi-account"></i> 8 Candidats
                                                        </li>
                                                        <li class="list-inline-item text-warning review-rating">
                                                            <span class="badge bg-warning">4.8</span> <i
                                                                class="mdi mdi-star align-middle"></i><i
                                                                    class="mdi mdi-star align-middle"></i><i
                                                                        class="mdi mdi-star align-middle"></i><i
                                                                            class="mdi mdi-star align-middle"></i><i
                                                                                class="mdi mdi-star-half-full align-middle"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-4">
                                                    <ul class="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                                                        <li class="list-inline-item">
                                                            <div class="favorite-icon">
                                                                <a href="javascript:void(0)"><i
                                                                    class="uil uil-heart-alt"></i></a>
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="favorite-icon">
                                                                <a href="javascript:void(0)"><i
                                                                    class="uil uil-setting"></i></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <div class="grid grid-cols-4 gap-4">
                                                <div class="col-lg-3">
                                                    <div class="border rounded-start p-3">
                                                        <p class="text-muted mb-0 fs-13">Experience</p>
                                                        <p class="fw-medium fs-15 mb-0">Minimum 1 Year</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="border p-3">
                                                        <p class="text-muted fs-13 mb-0">Employee type</p>
                                                        <p class="fw-medium mb-0">Full Time</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="border p-3">
                                                        <p class="text-muted fs-13 mb-0">Position</p>
                                                        <p class="fw-medium mb-0">Senior</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="border rounded-end p-3">
                                                        <p class="text-muted fs-13 mb-0">Offer Salary</p>
                                                        <p class="fw-medium mb-0">$2150/ Month</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Description sur le job </h5>
                                            <div class="job-detail-desc">
                                                <p class="text-muted mb-0">As a Product Designer, you will work within a
                                                    Product Delivery Team fused with UX, engineering, product and data
                                                    talent. You will help the team design beautiful interfaces that
                                                    solve business challenges for our clients. We work with a number of
                                                    Tier 1 banks on building web-based applications for AML, KYC and
                                                    Sanctions List management workflows. This role is ideal if you are
                                                    looking to segue your career into the FinTech or Big Data arenas.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Responsibilities</h5>
                                            <div class="job-detail-desc mt-2">
                                                <p class="text-muted">As a Product Designer, you will work within a
                                                    Product Delivery Team fused with UX, engineering, product and data
                                                    talent.</p>
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li><i class="uil uil-circle"></i> Have sound knowledge of
                                                        commercial activities.</li>
                                                    <li><i class="uil uil-circle"></i> Build next-generation web
                                                        applications with a focus on the client side</li>
                                                    <li><i class="uil uil-circle"></i> Work on multiple projects at
                                                        once, and consistently meet draft deadlines</li>
                                                    <li><i class="uil uil-circle"></i> have already graduated or are
                                                        currently in any year of study</li>
                                                    <li><i class="uil uil-circle"></i> Revise the work of previous
                                                        designers to create a unified aesthetic for our brand materials
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Qualifications</h5>
                                            <div class="job-detail-desc mt-2">
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li><i class="uil uil-circle"></i> B.C.A / M.C.A under National
                                                        University course complete.</li>
                                                    <li><i class="uil uil-circle"></i> 3 or more years of professional
                                                        design experience</li>
                                                    <li><i class="uil uil-circle"></i> have already graduated or are
                                                        currently in any year of study</li>
                                                    <li><i class="uil uil-circle"></i> Advanced degree or equivalent
                                                        experience in graphic and web design</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Skill & Experience</h5>
                                            <div class="job-details-desc">
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li><i class="uil uil-circle"></i> Understanding of key Design
                                                        Principal</li>
                                                    <li><i class="fa fa-circle" aria-hidden="true"></i> Proficiency With HTML, CSS,
                                                        Bootstrap</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">Compétences</h5>
                                            <div class="job-details-desc">
                                                <ul class="job-detail-list list-unstyled mb-0 text-muted">
                                                    <li class="rounde-lg btn btn-success bg-blue-300 btn-sm">BootStrap</li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div class="mt-4 pt-3">
                                            <ul class="list-inline mb-0 inline-flex">
                                                <li class="list-inline-item mt-1">
                                                    Share this job:
                                                </li>
                                                <li class="list-inline-item mt-1">
                                                    <a href="javascript:void(0)" class="btn btn-primary bg-blue-700 text-white btn-hover"><i
                                                        class="uil uil-facebook-f"></i> Facebook</a>
                                                </li>
                                                <li class="list-inline-item mt-1">
                                                    <a href="javascript:void(0)" class="btn btn-danger bg-red-700 text-white btn-hover"><i
                                                        class="uil uil-google"></i> Google+</a>
                                                </li>
                                                <li class="list-inline-item mt-1">
                                                    <a href="javascript:void(0)" class="btn btn-success bg-white text-blue-700 btn-hover"><i
                                                        class="uil uil-linkedin-alt"></i> linkedin</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="text-3xl ">Autres Jobs</h5>

                                    <div class="job-box card mt-4 flex ">

                                        <div class="p-4">


                                            <div class="row flex justify-between space-x-2">
                                                <div class="col-lg-1">
                                                    <img src="assets/images/featured-job/img-01.png" alt=""
                                                        class="img-fluid rounded-3" />
                                                </div>
                                                <div class="col-lg-10">
                                                    <div class="mt-3 mt-lg-0">
                                                        <h5 class="fs-17 mb-1"><a href="job-details.html"
                                                            class="text-dark">HTML Developer</a> <small
                                                                class="text-muted fw-normal">(0-2 Yrs Exp.)</small></h5>
                                                        <ul class="list-inline mb-0 flex ">
                                                            <li class="list-inline-item">
                                                                <p class="text-muted fs-14 mb-0">Jobcy Technology
                                                                    Pvt.Ltd</p>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <p class="text-muted fs-14 mb-0"><i
                                                                    class="mdi mdi-map-marker"></i> California</p>
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <p class="text-muted fs-14 mb-0"><i
                                                                    class="uil uil-wallet"></i> $250 - $800 / month
                                                                </p>
                                                            </li>
                                                        </ul>
                                                        <div class="mt-2">
                                                            <span class="badge bg-success-subtle text-success mt-1">Full
                                                                Time</span>
                                                            <span
                                                                class="badge bg-warning-subtle text-warning mt-1">Urgent</span>
                                                            <span
                                                                class="badge bg-info-subtle text-info mt-1">Private</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="favorite-icon">
                                                <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-light">
                                            <div class="flex justify-between items-center">
                                                <div class="col-md-3">
                                                    <div class="text-md-end btn ">
                                                        <a href="javascript:void(0)" class="primary-link">voire details <i
                                                            class="mdi mdi-chevron-double-right"></i></a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>







                                </div>

                                <div class="text-center mt-4">
                                    <a href="job-list.html" class="primary-link form-text">View More <i
                                        class="mdi mdi-arrow-right"></i></a>
                                </div>

                            </div>

                            <div class="col-lg-4 mt-4 mt-lg-0">

                                <div class="side-bar ms-lg-4">
                                    <div class="card border rounded-lg  shadow-sm job-overview">
                                        <div class="card-body p-4">
                                            <h6 class="fs-17">Job Overview</h6>
                                            <Link to={`/${routing.company_details}`}>
                                                <div class="flex flex-col space-y-2">
                                                    <img src="assets/images/featured-job/img-10.png" alt=""
                                                        class="img-fluid  rounded-3xl h-12 w-12" />
                                                        <h2>Entrpise en question</h2>
                                                </div>
                                            </Link>
                                            <ul class="list-unstyled mt-4 mb-0">
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i class="uil uil-user icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex ">
                                                            <h6 class="fs-14 mb-2">Titre </h6>
                                                            <p class="text-muted mb-0 text-xl ">Product Designer</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex ">
                                                            <h6 class="fs-14 mb-2">Experience </h6>
                                                            <p class="text-muted mb-0"> 0-3 Years</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Localisation </h6>
                                                            <p class="text-muted mb-0"> New york</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Salaire</h6>
                                                            <p class="text-muted mb-0">$35k - $45k</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Qualification</h6>
                                                            <p class="text-muted mb-0">Bachelor Degree</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4 flex space-x-2">
                                                        <i
                                                            class="uil uil-building icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3">
                                                            <h6 class="fs-14 mb-2">Industry</h6>
                                                            <p class="text-muted mb-0">Private</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-history icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Date Posted</h6>
                                                            <p class="text-muted mb-0">Posted 2 hrs ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="mt-3 flex space-x-2 ">
                                                <button
                                                    class="btn btn-primary btn-hover w-100 mt-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800">Posutluer <i
                                                        class="uil uil-arrow-right"></i></button>
                                                <button
                                                    class="btn btn-hover w-100 mt-2 bg-gray-100 hover:bg-gray-50 active:bg-gray-200"><i
                                                        class="uil uil-bookmark"></i> Ajouter Bookmark</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card company-profile mt-4">
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                <img src="assets/images/featured-job/img-02.png" alt=""
                                                    class="img-fluid rounded-3" />

                                                <div class="mt-4 flex space-x-2">
                                                    <h6 class="fs-17 mb-1">Jobcy Technology Pvt.Ltd</h6>
                                                    <p class="text-muted">Since July 2017</p>
                                                </div>
                                            </div>
                                            <ul class="list-unstyled mt-4">
                                                <li>
                                                    <div class="d-flex">
                                                        <i class="uil uil-phone-volume text-primary fs-4"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Phone</h6>
                                                            <p class="text-muted fs-14 mb-0">+589 560 56555</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="mt-3">
                                                    <div class="d-flex">
                                                        <i class="uil uil-envelope text-primary fs-4"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Email</h6>
                                                            <p class="text-muted fs-14 mb-0">pixltechnology@info.com</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="mt-3">
                                                    <div class="d-flex">
                                                        <i class="uil uil-globe text-primary fs-4"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Site web </h6>
                                                            <p class="text-muted fs-14 text-break mb-0">
                                                                www.Jobcytechnology.pvt.ltd.com</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="mt-3">
                                                    <div class="d-flex">
                                                        <i class="uil uil-map-marker text-primary fs-4"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Localisation</h6>
                                                            <p class="text-muted fs-14 mb-0">Oakridge Lane Richardson.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="mt-4">
                                                <a href="company-details.html"
                                                    class="btn btn-primary btn-hover w-100 rounded"><i
                                                        class="mdi mdi-eye"></i> View Profile</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <h6 class="fs-16 mb-3">Job location</h6>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
                                            style={{ width: "100%" }} height="250" allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>








            </div>
        </div>


    )
}

export default JobDetailPage