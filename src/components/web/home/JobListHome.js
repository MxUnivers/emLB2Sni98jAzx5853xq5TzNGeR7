import React, { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';

const JobListHome = () => {

    useEffect(() => {
        Aos.init({
            duration: 10000,
            easing: 'ease-in-out-back',
            once: true
        });
    }, []);
  return (
    <div class="job-list-area pb-100">
            <div class="container">
                <div class="section-title" data-aos="fade-right">
                    <h2>Annonces Recentes</h2>
                    <p>
                    Découvrez les offres
                     d'emploi les plus récentes sur notre plateforme de gestion 
                    d'emplois. Nous avons des opportunités passionnantes dans différents domaines, des postes à temps plein, à temps partiel et des stages. Nous travaillons avec des entreprises de premier plan pour vous aider à trouver votre prochaine opportunité professionnelle. Parcourez
                     nos annonces récentes et postulez dès maintenant pour commencer votre carrière.
                    </p>
                </div>

                <div class="row" data-aos="fade-up">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-list-card">
                            <div class="job-information">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image"/></a>
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
                                <a href="job-details-1.html" class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-list-card">
                            <div class="job-information">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-2.png" alt="image"/></a>
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
                                <a href="job-details-1.html" class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-list-card">
                            <div class="job-information">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-3.png" alt="image"/></a>
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
                                <a href="job-details-1.html" class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-list-card">
                            <div class="job-information">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-4.png" alt="image"/></a>
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
                                <a href="job-details-1.html" class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-list-card">
                            <div class="job-information">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-5.png" alt="image"/></a>
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
                                <a href="job-details-1.html" class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-list-card">
                            <div class="job-information">
                                <div class="company-logo">
                                    <a href="job-details-1.html"><img src="assets/images/job/job-6.png" alt="image"/></a>
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
                                <a href="job-details-1.html" class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="browse-jobs-btn">
                    <a href="job-listing-1.html" class="default-btn">Browse All Jobs <i class="flaticon-list-1"></i></a>
                </div>
            </div>
        </div>
  )
}

export default JobListHome