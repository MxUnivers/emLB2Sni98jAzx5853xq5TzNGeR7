
import React, { useEffect, useState } from 'react'
import FooterWeb from '../../components/web/FooterWeb';
import { localvalue } from '../../utlis/storage/localvalue';
import { baseurl } from '../../utlis/url/baseurl';
import axios from 'axios';
import { AnnonceGetAll } from '../../action/api/annonces/AnnoncesAction';
import moment from 'moment';
import AnnonceCard from '../../components/web/annonce/card/AnnonceCard';
import BarnerDetailAnnonce from '../../components/web/annonce/details/BarnerDetailAnnonce';

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
        <BarnerDetailAnnonce data={post && post.titre} />

            <div class="job-details-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            {
                                post &&
                                <div class="job-details-desc">
                                <h2>{post.titre}</h2>
                                
                                <div class="job-details-content">
                                    <h3>Description</h3>
                                    <p class="p-3 bg-gray-100 rounded-lg">
                                    {
                                        post.description
                                    }
                                    </p>
                                </div>

                                <div class="row job-article-footer">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="article-tags">
                                            <span>Information supplémentaire</span>
                                            <a href="index.html">SALAIRE  : {post.salaire}</a>
                                            <a href="index.html">Lieu : {post.lieu}</a>
                                            <a href="index.html"> posté le : {moment(post.dateDebut).format('DD/MM/YYYY')}</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="article-share">
                                            <ul class="social">
                                                <li><span>Réseaux sociaux</span></li>

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



                            <div class="  overflow-visible sm:visible md:visible lg:hidden  job-details-sticky">
                                <div class="job-details-information">
                                    <div class="information-box">
                                        <div class="company-logo">
                                            <img src="assets/images/job/job-1.png" alt="image" />
                                        </div>

                                        {post && <h3>{post.titre}</h3>}
                                        <span>{post && post.entreprise}</span>
                                    </div>

                                    <ul class="information-list-box">
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-calendar"></i> poster le : </span>
                                                {post && moment(post.dateDebut).format('DD/MM/YYYY')}
                                            </div>
                                        </li>
                                        {
                                            // date d'expiration
                                            /*
                                            <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-reload"></i> Expiration Date</span>
                                                30th September
                                            </div>
                                        </li>
                                            */
                                        }
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-location"></i> lieu</span>
                                                {post && post.lieu}
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-resume"></i> Nombres candidat</span>
                                                {post && post.candidats.length} volotaires
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="job-details-btn-box">
                                        <a href="#" class="default-btn">Postuler maintenant<i class="flaticon-list-1"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div class="related-jobs-box">
                                <h3 class="py-3 pt-3">RECENTES PUBLICATIONS</h3>
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
                            <div class=" snap-x:hidden sm:visible md:visible lg:visible job-details-sticky">
                                <div class="job-details-information">
                                    <div class="information-box">
                                        <div class="company-logo">
                                            <img src="assets/images/job/job-1.png" alt="image" />
                                        </div>

                                        {post && <h3>{post.titre}</h3>}
                                        <span>{post && post.entreprise}</span>
                                    </div>

                                    <ul class="information-list-box">
                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-calendar"></i> poster le : </span>
                                                {post && moment(post.dateDebut).format('DD/MM/YYYY')}
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
                                                <span><i class="flaticon-location"></i> lieu</span>
                                                {post && post.lieu}
                                            </div>
                                        </li>

                                        {
                                            /*
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
                                            */
                                        }

                                        <li>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span><i class="flaticon-resume"></i> Nombres candidat</span>
                                                {post && post.candidats.length} volotaires
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