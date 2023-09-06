


import React from 'react'
import { BiDollarCircle, BiTimeFive } from 'react-icons/bi'
import { BsCalendarWeek, BsTelephone } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { routing } from '../../utlis/routing';
import { Link, useNavigate } from 'react-router-dom';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import { useEffect } from 'react';
import { EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import { useState } from 'react';
import moment from 'moment/moment';
import { OffreGetAllById } from '../../action/api/offres/OffresAction';




const CompanyDetailPage = () => {



    const  navigate =  useNavigate();

    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);

    const handleEditItem = (job)=>{
        navigate(`/${routing.job_edit}`,{state:{job}})
    }


    var idCompany = getAndCheckLocalStorage(localvalue.recruteurID);
    const [typePERSON, settypePERSON] = useState();

    const [company, setcompany] = useState();
    useEffect(() => {
        EntrepriseGetById(idCompany, setcompany);
        OffreGetAllById(idCompany,setoffres,setoffres2);
    }, [])



    return (

        <div class="main-content">

            <div class="page-content">


                <section class="section mt-24">
                    <div class="container-fluid px-7 ">
                        <div class="flex  flex-col sm:flex-col md:flex-row lg:flex-row  justify-between">




                            <div class="w-full col-span-4 px-5">

                                <div class="side-bar ms-lg-4">
                                    <div class="card border rounded-lg  shadow-sm job-overview">
                                        <div class="card-body p-4 flex-col flex justify-center items-center">

                                            <div class="w-fullflex flex-col justify-center">
                                                {
                                                    company && company.logo ?
                                                        <div class="">
                                                            <img src={`${company.logo}`} alt=""
                                                                class="img-fluid rounded-full  h-32 w-32" />
                                                        </div> :
                                                        <div class="">
                                                            <div class="rounded-full  h-32 w-32 animate-pulse bg-gray-300" />
                                                        </div>

                                                }
                                                {
                                                    getAndCheckLocalStorage(localvalue.TYPEACCESS)
                                                }
                                                {
                                                    company && company.full_name ?
                                                        <div class="flex mt-4 flex-col justify-center">
                                                            <i class="uil uil-user icon bg-primary-subtle text-primary"></i>
                                                            <div class="ms-3 flex ">
                                                                <h6 class="fs-14 mb-2"></h6>
                                                                <p class="text-muted mb-0 text-xl text-center ">{company.full_name}</p>
                                                            </div>
                                                        </div> :
                                                        <div class="flex mt-4 flex-col justify-center w-full h-7 rounded-lg bg-gray-300 animate-pulse ">
                                                        </div>
                                                }
                                            </div>

                                            <div class="mt-4">
                                                <a href="company-details.html"
                                                    class="btn btn-primary btn-hover w-100 rounded"><i
                                                        class="mdi mdi-eye"></i> Modifier profile</a>
                                            </div>

                                            <ul class="list-unstyled mt-4 mb-0">

                                                {
                                                    company && company.employers_count ?
                                                        <li>
                                                            <div class="d-flex mt-4">
                                                                <i
                                                                    class="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                                                                <div class="ms-3 flex space-x-2">
                                                                    <h6 class="fs-14 mb-2">Employés </h6>
                                                                    <p class="text-muted mb-0"> {company.employers_count}</p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div class="d-flex mt-4 w-full bg-gray-300 animate-pulse" />
                                                        </li>

                                                }

                                                {
                                                    company && company.addresse_entreprise ?
                                                        <li>
                                                            <div class="d-flex mt-4">
                                                                <i
                                                                    class="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                                <div class="ms-3 flex space-x-2">
                                                                    <h6 class="fs-14 mb-2">Localisation </h6>
                                                                    <p class="text-muted mb-0"> {company.addresse_entreprise}</p>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li>
                                                            <div class="d-flex mt-4 w-full bg-gray-300 animate-pulse" />
                                                        </li>

                                                }
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>

                                                        <h6 class="fs-14 mb-2">Secteurs d{"'"}activités</h6>
                                                        <div class="ms-3 flex flex-wrap gap-2">

                                                            {company && Array.isArray(company.secteur_activites) && company.secteur_activites.length > 0 ? (
                                                                company.secteur_activites.map((item, index) => (
                                                                    <p key={index} class="text-muted mb-0 bg-green-400 text-white px-2 py-1 rounded-lg">
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
                                            <div class="mt-4">
                                                <h6 class="fs-16 mb-3 text-2xl">Carte</h6>
                                                <iframe
                                                    src={`${company.maps_entreprise}`}
                                                    style={{ width: "100%" }} height="250" allowfullscreen="" loading="lazy"></iframe>
                                            </div> :
                                            <div class="mt-4 rounded-xl bg-gray-300 animate-pulse w-full py-10">
                                            </div>
                                    }
                                </div>

                            </div>








                            <div class="col-span-8 w-full">
                                <div class="card job-detail overflow-hidden">
                                    {
                                        /*<div>
                                        <div class="job-details-compnay-profile">
                                            <img src={`${company.logo}`} alt=""
                                                class=" h-5 w-5 rounded-full" />
                                        </div>
                                    </div> */
                                    }


                                    <div class="w-full card-body p-4 shadow-lg rounded-lg border">


                                        {
                                            company && company.description_entreprise ?
                                                <div class="mt-4">
                                                    <h5 class="mb-3 text-2xl">A propos de l{"'"}entreprise </h5>
                                                    <div class="job-detail-desc">
                                                        <p class="text-muted mb-0">
                                                            {
                                                                company.description_entreprise
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div class="py-10 w-full rounded-xl mt-4 bg-gray-300 animate-none">
                                                </div>
                                        }



                                    </div>
                                </div>

                                <div class=" px-2 py-4 shadow-sm mt-5 border">
                                    <h5 class="text-3xl ">Offres d{"'"}emplois</h5>
                                    <div class=" flex flex-row  justify-between items-center">
                                        <input type="text" class="px-3 py-1 rounded-lg bg-gray-50 w-full " />
                                        {
                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] ?
                                                <Link to={`/${routing.job_post}`}>
                                                    <button type="button" class="btn btn-success bg-blue-600 text-white flex flex-row space-x-2"><span>+</span><span>Poster</span></button>
                                                </Link> :
                                                null
                                        }
                                    </div>


                                    <main class="flex  w-full items-center mt-10 justify-center bg-white">
                                        <div className=" flex gap-5 justify-center flex-wrap items-center py-3">
                                            {
                                                offres.map((item) => {
                                                    return (
                                                        <div key={item.id} className="group  relative group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] border  hover:bg-blueColor shadow-lg  hover:shadow-3xl ">
                                                            <span className="flex justify-between items-center gap-4">
                                                                <h1 className="text-[16px] font-semibold text-textColor ">{item.full_name}</h1>
                                                                <span className="flex items-center gap-1 text-gray-400"><BiTimeFive />{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                                                            </span>
                                                            <h6 className="text-gray-400">{item.location}</h6>
                                                            <p className="text-[13px] text-gray-500 pt-[20px] border-t-[2px] mt-[20px] line-clamp-3 ">
                                                                {item.description_entreprise}
                                                            </p>
                                                            <div className="company flex items-center gap-2">
                                                                <img src={item.coverPicture} alt="Company Logo" className="w-[10%]" />
                                                                <span className="text-[14px] py-[1rem] block ">
                                                                        {item.company}
                                                                </span>
                                                            </div>
                                                            <div >
                                                                <button onClick={()=>{handleEditItem(item)}}
                                                                    className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor " >Modifier
                                                                </button>
                                                            </div>
                                                            <a href={`/${routing.job_details}`}>
                                                                <button
                                                                    className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-bleu-300 bg-blue-200 group-hover/item:text-textColor " >Details
                                                                </button>
                                                            </a>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </main>
                                </div>
                                <div class="text-center mt-4">
                                    <a href="#" class="btn btn bg-blue-300 btn-sm py-1 px-2 text-md text-white  primary-link form-text">Voire plus  <i
                                        class="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>








            </div>
        </div>


    )
}


export default CompanyDetailPage