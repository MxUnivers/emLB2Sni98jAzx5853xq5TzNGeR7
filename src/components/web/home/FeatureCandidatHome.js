import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCandidatHome = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
            once: true
        });
    }, []);
    return (
        <div class="featured-candidates-area pb-100" >
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="featured-candidates-image">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500">
                                        <img src="assets/images/featured-candidates/candidates-1.jpg" alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-down" data-aos-delay="70" data-aos-duration="700">
                                        <img src="assets/images/featured-candidates/candidates-2.jpg" alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-left" data-aos-delay="90" data-aos-duration="900">
                                        <img src="assets/images/featured-candidates/candidates-3.jpg" alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-right" data-aos-delay="70" data-aos-duration="700">
                                        <img src="assets/images/featured-candidates/candidates-4.jpg" alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800">
                                        <img src="assets/images/featured-candidates/candidates-5.jpg" alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-left" data-aos-delay="90" data-aos-duration="900">
                                        <img src="assets/images/featured-candidates/candidates-6.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="featured-candidates-item">
                            <div class="featured-candidates-content">
                                <h3>Trouvez des talents parmi ceux qui sont en vedette pour votre emploi</h3>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>

                            <div class="featured-candidates-box">
                                <div class="row align-items-center">
                                    <div class="col-lg-8 col-sm-6">
                                        <div class="candidates-box-content">
                                            <div class="image">
                                                <a href="candidates-details-1.html"><img src="assets/images/featured-candidates/image-8.jpg" alt="image" /></a>
                                            </div>

                                            <div class="content">
                                                <h3>
                                                    <a href="candidates-details-1.html">Jonathon Ronan</a>
                                                </h3>
                                                <span>IT Specialist</span>

                                                <div class="rating">
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <span>4.5 Rating</span>
                                                </div>

                                                <ul class="job-info">
                                                    <li><i class="ri-map-pin-line"></i> USA</li>
                                                    <li><i class="ri-money-dollar-circle-line"></i> 45 USD/Hr</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-sm-6">
                                        <div class="featured-candidates-hire">
                                            <ul class="job-other-info">
                                                <li>Top Rated</li>
                                                <li class="featured">Featured</li>
                                            </ul>
                                            <a href="contact.html" class="default-btn">Hire Me <i class="flaticon-list-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="featured-candidates-box">
                                <div class="row align-items-center">
                                    <div class="col-lg-8 col-sm-6">
                                        <div class="candidates-box-content">
                                            <div class="image">
                                                <a href="candidates-details-1.html"><img src="assets/images/featured-candidates/image-2.jpg" alt="image" /></a>
                                            </div>

                                            <div class="content">
                                                <h3>
                                                    <a href="candidates-details-1.html">John Carter</a>
                                                </h3>
                                                <span>Ui/Ux Designer</span>

                                                <div class="rating">
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <span>4.5 Rating</span>
                                                </div>

                                                <ul class="job-info">
                                                    <li><i class="ri-map-pin-line"></i> USA</li>
                                                    <li><i class="ri-money-dollar-circle-line"></i> 45 USD/Hr</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-sm-6">
                                        <div class="featured-candidates-hire">
                                            <ul class="job-other-info">
                                                <li>Top Rated</li>
                                                <li class="featured">Featured</li>
                                            </ul>
                                            <a href="contact.html" class="default-btn">Hire Me <i class="flaticon-list-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="featured-candidates-box">
                                <div class="row align-items-center">
                                    <div class="col-lg-8 col-sm-6">
                                        <div class="candidates-box-content">
                                            <div class="image">
                                                <a href="candidates-details-1.html"><img src="assets/images/featured-candidates/image-3.jpg" alt="image" /></a>
                                            </div>

                                            <div class="content">
                                                <h3>
                                                    <a href="candidates-details-1.html">Jennifer Rose</a>
                                                </h3>
                                                <span>Digital Marketer</span>

                                                <div class="rating">
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <i class="flaticon-star"></i>
                                                    <span>4.5 Rating</span>
                                                </div>

                                                <ul class="job-info">
                                                    <li><i class="ri-map-pin-line"></i> USA</li>
                                                    <li><i class="ri-money-dollar-circle-line"></i> 45 USD/Hr</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-sm-6">
                                        <div class="featured-candidates-hire">
                                            <ul class="job-other-info">
                                                <li>Top Rated</li>
                                                <li class="featured">Featured</li>
                                            </ul>
                                            <a href="contact.html" class="default-btn">Hire Me <i class="flaticon-list-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="featured-candidates-btn">
                                <a href="candidates-2.html">View All Candidates <i class="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="featured-candidates-shape">
                <img src="assets/images/featured-candidates/shape-1.png" alt="image" />
            </div>
        </div>
    )
}

export default FeatureCandidatHome;