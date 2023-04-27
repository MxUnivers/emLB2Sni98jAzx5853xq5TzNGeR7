import React from 'react'
import { routing } from '../../../utlis/routing';

const AnnonceResultSearch = () => {
    return (

        <div class="w-full job-list-area pb-100" >
            <div class="w-full container-fluid flex justify-center">
                <div class="w-full container flex justify-center">
                    {
                        /*
                        <div class="col-lg-4 col-md-12">
                        <div class="job-list-map-sticky">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7535241766864!2d-73.90996728434231!3d40.81140973946449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5b9998bf269%3A0xbb6dd99c5d7c00ab!2sWales%20Ave%2C%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1625473568079!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                    </div>
                        */
                    }

                    <div class=" w-full  col-md-12 job-list-with-max-width pt-100 visible">
                        <div class=" w-full job-list-search-box">
                            <h3>"'recherche'..."</h3>

                            <form class="job-list-search-form">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-edit"></i></label>
                                            <input class="form-control" type="text" placeholder="mot clé" />
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-placeholder"></i></label>
                                            <select class="selectize-filter form-control" >
                                                <option value="1">Location</option>
                                                <option value="2">Canada</option>
                                                <option value="3">Japan</option>
                                                <option value="4">Germany</option>
                                                <option value="5">Switzerland</option>
                                                <option value="6">Australia</option>
                                                <option value="7">United States</option>
                                                <option value="8">New Zealand</option>
                                                <option value="9">United Kingdom</option>
                                                <option value="10">Sweden</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12">
                                        <div class="form-group">
                                            <label><i class="flaticon-list"></i></label>
                                            <select class="selectize-filter form-control">
                                                <option value="1">Catégorie</option>
                                                <option value="2">Assurance</option>
                                                <option value="3">Banking</option>
                                                <option value="4">Copyright</option>
                                                <option value="5">Design</option>
                                                <option value="6">Finance</option>
                                                <option value="7">IT Sector</option>
                                                <option value="8">Management</option>
                                                <option value="9">Photography</option>
                                                <option value="10">Software</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="search-btn">
                                        <button type="submit"><i class="ri-search-line"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="row ">

                            <div class="col-lg-4 col-md-6   visible">
                                <div class="single-job-list-card  visible">
                                    <div class="job-information  visible">
                                        <div class="company-logo visible">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Assistant Editor</a>
                                        </h3>
                                        <span>Solit IT Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 3 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href={`/${routing.detailAnnonce.path}`} class="default-btn">Detail annonce <i class="flaticon-list-1"></i></a>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-2.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Marketing Director</a>
                                        </h3>
                                        <span>Constik Corporation</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 7 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> West Africa, Jordan</li>
                                        <li><i class="ri-time-line"></i> Full Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-3.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Assistant Editor</a>
                                        </h3>
                                        <span>Solit IT Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 5 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> New York City, 25321</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-4.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Marketing Advisor</a>
                                        </h3>
                                        <span>INVA Business Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 1 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-5.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Sales Executive</a>
                                        </h3>
                                        <span>Pufo Corporation</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 7 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> West Africa, Jordan</li>
                                        <li><i class="ri-time-line"></i> Full Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-6.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Content Writter</a>
                                        </h3>
                                        <span>Abaz News Magazine</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 5 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> New York City, 25321</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Assistant Editor</a>
                                        </h3>
                                        <span>Solit IT Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 3 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-2.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Marketing Director</a>
                                        </h3>
                                        <span>Constik Corporation</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 7 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> West Africa, Jordan</li>
                                        <li><i class="ri-time-line"></i> Full Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-3.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Assistant Editor</a>
                                        </h3>
                                        <span>Solit IT Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 5 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> New York City, 25321</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-4.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Marketing Advisor</a>
                                        </h3>
                                        <span>INVA Business Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 1 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-5.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Sales Executive</a>
                                        </h3>
                                        <span>Pufo Corporation</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 7 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> West Africa, Jordan</li>
                                        <li><i class="ri-time-line"></i> Full Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-6.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Content Writter</a>
                                        </h3>
                                        <span>Abaz News Magazine</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 5 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> New York City, 25321</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Assistant Editor</a>
                                        </h3>
                                        <span>Solit IT Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 3 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-2.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Marketing Director</a>
                                        </h3>
                                        <span>Constik Corporation</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 7 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> West Africa, Jordan</li>
                                        <li><i class="ri-time-line"></i> Full Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-3.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Assistant Editor</a>
                                        </h3>
                                        <span>Solit IT Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 5 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> New York City, 25321</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 ">
                                <div class="single-job-list-card">
                                    <div class="job-information">
                                        <div class="company-logo">
                                            <a href="job-details-1.html"><img src="assets/images/job/job-4.png" alt="image" /></a>
                                        </div>
                                        <h3>
                                            <a href="job-details-1.html">Marketing Advisor</a>
                                        </h3>
                                        <span>INVA Business Solution</span>

                                        <div class="bookmark-btn">
                                            <i class="ri-bookmark-line"></i>
                                        </div>

                                        <div class="hover-bookmark-btn">
                                            <i class="ri-bookmark-fill"></i>
                                        </div>
                                    </div>

                                    <ul class="job-tag-list">
                                        <li>Featured</li>
                                        <li class="urgent">Urgent</li>
                                        <li class="private">Private</li>
                                        <li>Part Time</li>
                                    </ul>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> 1 Days Left</li>
                                        <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>

                                    <div class="job-btn">
                                        <a href="job-details-1.html" class="default-btn">Apply Jobs <i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="load-more-btn">
                            <a href="#" id="loadmore" class="default-btn">Load More <i class="flaticon-loading"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceResultSearch;