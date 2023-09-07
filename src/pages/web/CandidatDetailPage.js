import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { MdEmail, MdLocationCity, MdPhone, MdWeb } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { useState } from 'react';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { useEffect } from 'react';

const CandidatDetailPage = () => {



    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID)
    var typeAccess = getAndCheckLocalStorage(localvalue.candidatTYPE);

    const [candidat, setcandidat] = useState();

    useEffect(() => {
        CandidatGetById(idCandidat, setcandidat);
    }, [])


    return (
        <div class="main-content">
            <div class="page-content">
                <section class="section mt-28 mb-36">
                    <div class=" px-5 container-fluid">
                        <div class="row lg:flex md:lg:flex   lg:justify-between">
                            <div class="col-lg-4">
                                <div class="card border bg-white shadow rounded-lg">
                                    <div class="card-body p-4 py-5  px-5">
                                        <div class="border-b flex flex-col justify-center items-center">
                                            {
                                                candidat && candidat.coverPicture ?
                                                    <img src={candidat.coverPicture} alt=""
                                                        class="avatar-lg rounded-full  h-32 w-32" /> :
                                                    <div class="h-32 w-32 rounded-full bg-gray-200 animate-pulse" />
                                            }
                                            {
                                                candidat && candidat.firstname && candidat.lastname ?
                                                    <h6 class="fs-18 mb-0 mt-4 text-center textxl font-semibold text-gray-600">{
                                                        `${candidat.firstname} ${candidat.lastname}`
                                                    }</h6> :
                                                    <div class="my-2 bg-gray-200 animate-pulse w-full px-3 h-5 rounded-lg " />
                                            }
                                            {
                                                candidat && candidat.title_post ?
                                                    <p class="text-muted mb-4 text-center">{candidat.title_post}</p> :
                                                    <div class="bg-gray-200 animate my-1 h-6 w-full px-3 rounded-lg" />
                                            }


                                            <ul class=" inline-flex mb-5 space-x-4">

                                                {candidat && candidat.facebook_url ?
                                                    <li class="inline-flex">
                                                        <a href={candidat.facebook_url} target="_blank" class="social-link">
                                                            <CiFacebook class="h-7 w-7" />
                                                        </a>
                                                    </li> :
                                                    <li class="inline-flex">
                                                        <div class="bg-gray-200 animate my-1 h-7  w-7 px-3 rounded-lg" />
                                                    </li>
                                                }
                                                {
                                                    candidat && candidat.twitter_url ?
                                                        <li class="inline-flex">
                                                            <a href={candidat.twitter_url} target="_blank" class="social-link">
                                                                <BsTwitter class="h-7 w-7" />
                                                            </a>
                                                        </li> :
                                                        <li class="inline-flex">
                                                            <div class="bg-gray-200 animate my-1 h-7  w-7 px-3 rounded-lg" />
                                                        </li>
                                                }
                                                {
                                                    candidat && candidat.linkedin_url ?
                                                        <li class="inline-flex">
                                                            <a href={candidat.linkedin_url} target="_blank" class="social-link">
                                                                <BsLinkedin class="h-7 w-7" />
                                                            </a>
                                                        </li> :
                                                        <li class="inline-flex">
                                                            <div class="bg-gray-200 animate my-1 h-7  w-7 px-3 rounded-lg" />
                                                        </li>
                                                }
                                            </ul>

                                            <div class="mt-5 mb-5 flex justify-center">
                                                {
                                                    candidat && candidat._id ?
                                                        <button class="btn btn-blue-400 space-x-2 flex text-white bg-gray-600 py-2 px-3 rounded-lg">
                                                            <BiEdit />
                                                            <span>Mettre à jour</span>
                                                        </button> :
                                                        null
                                                }
                                            </div>
                                            <div class="mt-1 mb-1 flex justify-center">
                                                <Link to={`/${routing.candidat_applied}`} class=" space-x-2 text-blue-700 font-bold py-2 px-3 rounded-lg">
                                                    <span>Offres (0)</span>
                                                </Link>
                                            </div>
                                            <div class="mt-1 mb-1 flex justify-center">
                                                <Link to={`/${routing.candidature_list}`} class=" space-x-2 text-blue-700 font-bold py-2 px-3 rounded-lg">
                                                    <span>Candidature (0)</span>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>


                                    <div class="candidate-profile-overview  card-body border-top p-4">
                                        <h6 class="fs-17 fw-semibold mb-3 text-2xl">Info Profile</h6>
                                        {
                                            /*<ul class=" mb-5">
                                            <li>
                                                <div class="flex flex-col">
                                                    <label class="text-dark text-gray-700 font-bold ">Categorie</label>
                                                    <div>
                                                        <p class="text-muted mb-0">Account ou banque</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex flex-col">
                                                    <label class="text-dark text-gray-700 font-bold ">Expérience</label>
                                                    <div>
                                                        <p class="text-muted mb-0">0-3</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex">
                                                    <label class="text-dark  text-gray-700 font-bold">Vues</label>
                                                    <div>
                                                        <p class="text-muted mb-0">2574</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */
                                        }
                                        <div class="mt-3">
                                            <a href="javascript:void(0)" class="btn btn-danger btn-hover w-100"><i
                                                class="uil uil-phone"></i> Me contacter</a>
                                            <a href="javascript:void(0)" class="btn btn-primary btn-hover w-100 mt-2"><i
                                                class="uil uil-import"></i> Telecharger mon cv</a>
                                        </div>

                                    </div>

                                    {
                                        candidat && candidat.competences ?
                                            <div class="card-body p-4 border-top">
                                                <h6 class=" fw-semibold mb-3  text-gray-700 font-bold">Compétences</h6>
                                                <div class="flex flex-wrap justify-center gap-2">
                                                {
                                                    candidat.competences.map((item) => {
                                                        return (
                                                            <div class="space-y-3 flex flex-wrap space-x-3">
                                                                <span class="badge bg-blue-400 text-white py-2 px-3 rounded-lg mt-1">
                                                                    {item.label}
                                                                </span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            </div>:
                                            <div  class="bg-gray-200 rounded-lg animate-pulse h-16 w-full " />
                                    }
                                    <div class="candidate-contact-details card-body p-4 border-top">
                                        <h6 class="fs-17 fw-semibold mb-3  text-gray-700 font-bold">Infos Contact</h6>
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                        <i class="uil uil-envelope-alt"></i>
                                                    </div>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-1"><MdEmail /></h6>
                                                        <p class="text-muted mb-0">gabrielpalmer@gmail.com</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                        <i class="uil uil-map-marker"></i>
                                                    </div>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-1"><MdLocationCity /></h6>
                                                        <p class="text-muted mb-0">Dodge City, Louisiana</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                        <i class="uil uil-phone"></i>
                                                    </div>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-1"><MdPhone /></h6>
                                                        <p class="text-muted mb-0">+1(452) 125-6789</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-items-center mt-4">
                                                    <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                        <i class="uil uil-skype-alt"></i>
                                                    </div>
                                                    <div class="ms-3">
                                                        <h6 class="fs-14 mb-1"><MdWeb /> site web : </h6>
                                                        <p class="text-muted mb-0">https://www.ok.com</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="card candidate-details ms-lg-4 mt-4 mt-lg-0">
                                    <div class="card-body p-4 candidate-personal-detail">
                                        <div>
                                            <h6 class="fs-17 fw-semibold mb-3 text-2xl font-semibold">A propos de moi</h6>
                                            <p class="text-muted mb-2">Very well thought out and articulate
                                                communication. Clear milestones, deadlines and fast work. Patience.
                                                Infinite patience. No
                                                shortcuts. Even if the client is being careless. Some quick example text
                                                to build on the card title and bulk the card{"'"}s content Moltin gives you
                                                platform.</p>
                                        </div>
                                        <div class="candidate-education-details mt-4 pt-3">
                                            <h6 class="fs-17 fw-bold mb-0 text-2xl font-semibold">Education</h6>
                                            <div class="candidate-education-content mt-4 flex space-x-3">
                                                <div class="rounded-full p-3 h-10 text-center w-10 bg-blue-500 text-white flex-shrink-0  text-primary">
                                                    B
                                                </div>
                                                <div class="ms-4">
                                                    <h6 class="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                                                    <p class="mb-2 text-muted">International University - (2004 - 2010)
                                                    </p>
                                                    <p class="text-muted">There are many variations of passages of
                                                        available, but the majority alteration in some form. As a highly
                                                        skilled and successfull product development and design
                                                        specialist with more than 4 Years of My experience.</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="candidate-education-details mt-4 pt-3">
                                            <h6 class="fs-17 fw-bold mb-0 text-2xl font-semibold">Experiences</h6>


                                            <div class="candidate-education-content mt-4 flex space-x-3">
                                                <div class="rounded-full p-3 h-10 text-center w-10 bg-blue-500 text-white flex-shrink-0  text-primary">
                                                    W
                                                </div>
                                                <div class="ms-4">
                                                    <h6 class="fs-16 mb-1">Web Design & Development Team Leaders</h6>
                                                    <p class="mb-2 text-muted">International University - (2004 - 2010)
                                                    </p>
                                                    <p class="text-muted">There are many variations of passages of
                                                        available, but the majority alteration in some form. As a highly
                                                        skilled and successfull product development and design
                                                        specialist with more than 4 Years of My experience.</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="candidate-portfolio mt-4 pt-3">
                                            <h6 class="fs-17 fw-bold mb-0 text-2xl font-semibold">Projects</h6>
                                            <div class="row">
                                                <div class="col-lg-4 mt-4">
                                                    <div class="candidate-portfolio-box card border-0 flex flex-row space-x-3">
                                                        <img src="assets/images/blog/img-01.jpg" alt=""
                                                            class="img-fluid h-20 w-20 rounded-lg" />
                                                        <div class="bg-overlay"></div>
                                                        <div class="zoom-icon">
                                                            <div class="text-lg font-semibold">
                                                                Tiitre du Projet
                                                            </div>
                                                            <div class="text-xs">
                                                                description du projet
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <form action="#" class="mt-4 pt-3 ">
                                            <h6 class="fs-17 fw-semibold mb-2 text-2xl font-bold">Donner votre avis</h6>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="mb-3">
                                                        <label for="inputname" class="form-label">Your Name</label>
                                                        <input type="text" class="form-control px-3 py-1 w-full rounded-lg bg-white" id="inputname"
                                                            placeholder="Enter your name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label for="inputemail" class="form-label">Email</label>
                                                        <input type="email" class="form-control px-3 py-1 w-full rounded-lg bg-white " id="inputemail"
                                                            placeholder="Enter your email" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label for="inputsubject" class="form-label">Subject</label>
                                                        <input type="text" class="form-control px-3 py-1 w-full rounded-lg bg-white " id="inputsubject"
                                                            placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="mb-3">
                                                        <label for="inputcoment" class="form-label">Review</label>
                                                        <textarea class="form-control px-3 py-1 w-full rounded-lg bg-white " id="inputcoment" rows="3"
                                                            placeholder="Add your review"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <button type="submit" class="btn btn-primary bg-blue-300 btn-hover">Envoyer <i
                                                    class="uil uil-angle-right-b"></i></button>
                                            </div>
                                        </form>






                                        <div class="mt-4 pt-3">
                                            <div class="flex space-x-3 align-text-top">
                                                <div class="flex-shrink-0">
                                                    <img class="rounded-circle avatar img-thumbnail rounded-lg h-10 w-10"
                                                        src="assets/images/user/img-04.jpg" alt="img" />
                                                </div>
                                                <div class="flex-grow-1 ms-sm-3">
                                                    <div>
                                                        <p class="text-muted float-end fs-14 mb-2">Jun 23, 2021</p>
                                                        <h6 class="mt-sm-0 mt-3 mb-1">Michelle Durant</h6>
                                                        <div class="text-warning review-rating mb-2">
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star"></i>
                                                            <i class="mdi mdi-star-half-full"></i>
                                                        </div>
                                                        <p class="text-muted fst-italic">" There are many variations of
                                                            passages of Lorem Ipsum available, but the majority have
                                                            suffered alteration in some form, by injected humour "</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>





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

export default CandidatDetailPage;