import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import { CandidatGetAll } from '../../../action/api/candidat/CandidatAction';
import CandidatCard from '../candidat/CandidatCard';

const FeatureCandidatHome = () => {
    const [dataCandidat, setdataCandidat] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
            once: true
        });
        CandidatGetAll(setdataCandidat);
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

                            {
                                dataCandidat.map((item) => {
                                    return (
                                        <CandidatCard data={item}/>
                                    )
                                })
                            }




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