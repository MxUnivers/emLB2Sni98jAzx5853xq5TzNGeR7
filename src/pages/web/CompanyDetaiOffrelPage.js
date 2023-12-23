


import React from 'react'
import { BiDollarCircle, BiTimeFive } from 'react-icons/bi'
import { BsCalendarWeek, BsTelephone } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { routing } from '../../utlis/routing';
import { Link, useNavigate } from 'react-router-dom';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import { useEffect } from 'react';
import { EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import { useState } from 'react';
import moment from 'moment/moment';
import { OffreGetAllById } from '../../action/api/offres/OffresAction';
import { CandidaturesALLOfEntreprises } from '../../action/api/candidatures/CandidatureAction';
import JobCard from '../../components/job/JobCard';




const CompanyDetaiOffrelPage = () => {



    const navigate = useNavigate();

    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);

    const handleEditItem = (job) => {
        navigate(`/${routing.job_edit}`, { state: { job } })
    }
    const handleDetailItem = (job) => {
        setWithExpiration(localvalue.JobID, job._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { job } });
    }


    var idCompany = getAndCheckLocalStorage(localvalue.recruteurDetailID);
    const [typePERSON, settypePERSON] = useState();

    const [company, setcompany] = useState();
    const [candidatures, setcandidatures] = useState([]);
    const [candidatures2, setcandidatures2] = useState([]);
    useEffect(() => {


        OffreGetAllById(idCompany, setoffres, setoffres2);
        EntrepriseGetById(idCompany, setcompany);
        CandidaturesALLOfEntreprises(idCompany, setcandidatures, setcandidatures2)
    }, [])



    return (

        <div className="main-content">

            <div className="page-content">


                <section className="section mt-24">
                    <div className="container-fluid px-7 ">
                        <div className="flex  flex-col sm:flex-col md:flex-row lg:flex-row  justify-between">




                            <div className="w-full col-span-4 px-5">

                                <div className="side-bar ms-lg-4">
                                    <div className="card border rounded-lg  shadow-sm job-overview">
                                        <div className="card-body p-4 flex-col flex justify-center items-center">

                                            <div className="w-fullflex flex-col justify-center">
                                                {
                                                    company && company.logo ?
                                                        <div className="">
                                                            <img src={`${company.logo}`} alt=""
                                                                className="img-fluid rounded-full  h-32 w-32" />
                                                        </div> :
                                                        <div className="">
                                                            <div className="rounded-full  h-32 w-32 animate-pulse bg-gray-300" />
                                                        </div>

                                                }
                                                
                                                {
                                                    company && company.full_name ?
                                                        <div className="flex mt-4 flex-col justify-center">
                                                            <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                                                            <div className="ms-3 flex ">
                                                                <h6 className="fs-14 mb-2"></h6>
                                                                <p className="text-muted mb-0 text-xl text-center ">{company.full_name}</p>
                                                            </div>
                                                        </div> :
                                                        <div className="flex mt-4 flex-col justify-center w-full h-7 rounded-lg bg-gray-300 animate-pulse ">
                                                        </div>
                                                }
                                            </div>

                                            {
                                                /*<div className="mt-4">
                                                <a href="#"
                                                    className="btn btn-primary btn-hover w-100 rounded"><i
                                                        className="mdi mdi-eye"></i> Modifier profile</a>
                                            </div> */
                                            }


                                            <ul className="list-unstyled mt-4 mb-0">
                                                {
                                                    /*<li>
                                                    <div className="d-flex mt-4">
                                                        <i
                                                            className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                        <div className="ms-3 flex space-x-2 border border-blue-500 rounded-lg py-1 px-2">
                                                            <a href={`/${routing.candidature_list_recruteur}`} className="fs-14 mb-2 text-blue-600 font-bold text-xl">Candidature{candidatures.length >0 ? "s":""} {candidatures.length > 0 ? candidatures.length: ""} </a>
                                                        </div>
                                                    </div>
                                                </li> */
                                                }

                                                {
                                                    company && company.employers_count ?
                                                        <li>
                                                            <div className="d-flex mt-4">
                                                                <i
                                                                    className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                                                                <div className="ms-3 flex space-x-2">
                                                                    <h6 className="fs-14 mb-2">Employés </h6>
                                                                    <p className="text-muted mb-0"> {company.employers_count}</p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div className="d-flex mt-4 w-full bg-gray-300 animate-pulse" />
                                                        </li>

                                                }

                                                {
                                                    company && company.addresse_entreprise ?
                                                        <li>
                                                            <div className="d-flex mt-4">
                                                                <i
                                                                    className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                                <div className="ms-3 flex space-x-2">
                                                                    <h6 className="fs-14 mb-2">Localisation </h6>
                                                                    <p className="text-muted mb-0"> {company.addresse_entreprise}</p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div className="d-flex mt-4 w-full bg-gray-300 animate-pulse" />
                                                        </li>

                                                }

                                                <li>
                                                    <div className="d-flex mt-4">
                                                        <i
                                                            className="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>

                                                        <h6 className="fs-14 mb-2">Secteurs d{"'"}activités</h6>
                                                        <div className="ms-3 flex flex-wrap gap-2">

                                                            {company && Array.isArray(company.secteur_activites) && company.secteur_activites.length > 0 ? (
                                                                company.secteur_activites.map((item, index) => (
                                                                    <p key={index} className="text-muted mb-0 bg-green-400 text-white px-2 py-1 rounded-lg">
                                                                        {item.label}
                                                                    </p>
                                                                ))
                                                            ) : null}
                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>





                                        </div>
                                    </div>



                                    {
                                        company && company.maps_entreprise ?
                                            <div className="mt-4">
                                                <h6 className="fs-16 mb-3 text-2xl">Carte</h6>
                                                <iframe
                                                    src={`${company.maps_entreprise}`}
                                                    style={{ width: "100%" }} height="250" allowfullscreen="" loading="lazy"></iframe>
                                            </div> :
                                            <div className="mt-4 rounded-xl bg-gray-300 animate-pulse w-full py-10">
                                            </div>
                                    }
                                </div>

                            </div>








                            <div className="col-span-8 w-full">
                                <div className="card job-detail overflow-hidden">
                                    {
                                        /*<div>
                                        <div className="job-details-compnay-profile">
                                            <img src={`${company.logo}`} alt=""
                                                className=" h-5 w-5 rounded-full" />
                                        </div>
                                    </div> */
                                    }


                                    <div className="w-full card-body p-4 shadow-lg rounded-lg border">


                                        {
                                            company && company.description_entreprise ?
                                                <div className="mt-4">
                                                    <h5 className="mb-3 text-2xl">A propos de l{"'"}entreprise </h5>
                                                    <div className="job-detail-desc">
                                                        <p className="text-muted mb-0">
                                                            {
                                                                company.description_entreprise
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="py-10 w-full rounded-xl mt-4 bg-gray-300 animate-none">
                                                </div>
                                        }



                                    </div>
                                </div>

                                <div className=" px-2 py-4 shadow-sm mt-5 border">
                                    <h5 className="text-3xl ">Offres d{"'"}emplois</h5>
                                    <div className=" flex flex-row  justify-between items-center">
                                        <input type="text" className="px-3 py-1 rounded-lg bg-gray-50 w-full " />
                                    </div>


                                    <main className="flex  w-full items-center mt-10 justify-center bg-white">
                                        <div className=" flex gap-5 justify-center flex-wrap items-center py-3">
                                            {
                                                offres.map((item) => {
                                                    return (
                                                        /*<div key={item.id} className="group  relative group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] border  hover:bg-blueColor shadow-lg  hover:shadow-3xl ">
                                                            <span className="flex justify-between items-center gap-4">
                                                                <h1 className="text-[16px] font-semibold text-textColor line-clamp-2 ">{item.title}</h1>
                                                                <span className="flex items-center gap-1 text-gray-400 text-xs"><BiTimeFive />{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                                                            </span>
                                                            <h6 className="text-gray-400">{item.location}</h6>
                                                            <p className="text-[13px] text-gray-500 pt-[20px] border-t-[2px] mt-[20px] line-clamp-3 ">
                                                                {item.description}
                                                            </p>
                                                            <div className="company flex items-center gap-2">
                                                                <img src={item.coverPicture} alt="Company Logo" className="w-[10%]" />
                                                                <span className="text-[14px] py-[1rem] block ">
                                                                    {item.company}
                                                                </span>
                                                            </div>
                                                            <div >
                                                                <button onClick={() => { handleEditItem(item) }}
                                                                    className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor " >Modifier
                                                                </button>
                                                            </div>
                                                            <div >
                                                                <button type='button' onClick={() => { handleDetailItem(item) }}
                                                                    className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-bleu-300 bg-blue-200 group-hover/item:text-textColor " >Details
                                                                </button>
                                                            </div>
                                                        </div> */
                                                        <JobCard data={item}/>
                                                    )
                                                })}
                                        </div>
                                    </main>
                                </div>
                                <div className="text-center mt-4">
                                    <a href="#" className="btn btn bg-blue-300 btn-sm py-1 px-2 text-md text-white  primary-link form-text">Voire plus  <i
                                        className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>








            </div>
        </div>


    )
}


export default CompanyDetaiOffrelPage