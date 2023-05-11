
import React, { useEffect, useState } from 'react'
import FooterWeb from '../../components/web/FooterWeb';
import { localvalue } from '../../utlis/storage/localvalue';
import { baseurl } from '../../utlis/url/baseurl';
import axios from 'axios';
import { AnnonceGetAll } from '../../action/api/annonces/AnnoncesAction';
import moment from 'moment';
import AnnonceCard from '../../components/web/annonce/card/AnnonceCard';

const AnnonceDetail = () => {
    var idPost = sessionStorage.getItem(localvalue.annonceDetail.id);
    var [dataAnnonceRecents ,setdataAnnonceRecents] = useState([]); 
    const [post, setpost] = useState();
    useEffect(() => {
        PostById(idPost, setpost);
        AnnonceGetAll(setdataAnnonceRecents);
        
    }, [])


    const PostById = async (id, setState) => {
        await axios.get(`${baseurl.url}/api/v1/annonce/get_annonce/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
            .then((response) => {
                console.log(JSON.stringify(response.data)); setState(response.data.data);
            })
            .catch((error) => { console.log(error); });
    }

    return (
        <div>

            <div class="job-details-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            {
                                post &&
                                <div class="job-details-desc">
                                <h2>{post.titre}</h2>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki mata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consetetur.</p>

                                <div class="job-details-content">
                                    <h3>Job Responsibilities:</h3>

                                    <ul class="list">
                                        <li>Lorem decore nullam te eum id evertitur reformidans sea id possit principes.</li>
                                        <li>Dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt.</li>
                                        <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</li>
                                        <li>Sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</li>
                                        <li>Lorem decore nullam te eum id evertitur reformidans sea id possit.</li>
                                    </ul>
                                </div>

                                <div class="job-details-content">
                                    <h3>Education:</h3>

                                    <ul class="list">
                                        <li>Lorem decore nullam te eum id evertitur reformidans sea id possit principes.</li>
                                        <li>Dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt.</li>
                                        <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</li>
                                        <li>Sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</li>
                                        <li>Lorem decore nullam te eum id evertitur reformidans sea id possit.</li>
                                    </ul>
                                </div>

                                <div class="job-details-content">
                                    <h3>Experience:</h3>
²
                                    <ul class="list">
                                        <li>Lorem decore nullam te eum id evertitur reformidans sea id possit principes.</li>
                                        <li>Dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt.</li>
                                        <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</li>
                                        <li>Sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</li>
                                        <li>Lorem decore nullam te eum id evertitur reformidans sea id possit.</li>
                                    </ul>
                                </div>

                                <div class="job-details-content">
                                    <h3>About Company</h3>
                                    <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki mata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consetetur.</p>
                                </div>

                                <div class="row job-article-footer">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="article-tags">
                                            <span>Required Skill:</span>
                                            <a href="index.html">IT</a>
                                            <a href="index.html">Engineer</a>
                                            <a href="index.html">Software</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="article-share">
                                            <ul class="social">
                                                <li><span>Share:</span></li>

                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i class="flaticon-facebook"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i class="flaticon-twitter"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i class="flaticon-instagram"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank">
                                                        <i class="flaticon-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }

                            <div class="related-jobs-box">
                                <h3>Related Jobs</h3>

                                <div class="row">

                                    {
                                        dataAnnonceRecents.map((item) => {
                                            return (
                                                <AnnonceCard data={item}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12">
                            <div class="job-details-sticky">
                                <div class="job-details-information">
                                    <div class="information-box">
                                        <div class="company-logo">
                                            <img src="assets/images/job/job-1.png" alt="image" />
                                        </div>

                                        <h3>Solit IT Solution</h3>
                                        <span>Graduate Programme – IT Software Test Analyst Engineer</span>
                                    </div>

                                    <ul class="information-list-box">
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-calendar"></i> Date Posted</span>
                                                28th June
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-reload"></i> Expiration Date</span>
                                                30th September
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-location"></i> Location</span>
                                                Remote
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-volume"></i> Career Level</span>
                                                Director
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-layers"></i> Experience</span>
                                                5+ Years
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-briefcase"></i> Qualification</span>
                                                Master Degree
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-money"></i> Rate</span>
                                                $40 - $60 / Hr
                                            </div>
                                        </li>

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-resume"></i> Job Applicants</span>
                                                30 Applicants
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="job-details-btn-box">
                                        <a href="#" class="default-btn">Postuler maintenant<i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterWeb></FooterWeb>
        </div>
    )
}

export default AnnonceDetail;