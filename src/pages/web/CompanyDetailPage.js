


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




const CompanyDetailPage = () => {

    const  navigate =  useNavigate();
    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const handleEditItem = (job) => {
        navigate(`/${routing.job_edit}`, { state: { job } });
    };
    const handleDetailItem = (job) => {
        setWithExpiration(localvalue.JobID, job._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { job } });
    };
    
    var idCompany = getAndCheckLocalStorage(localvalue.recruteurID);
    const [typePERSON, settypePERSON] = useState();
    const [company, setcompany] = useState();
    const [candidatures, setcandidatures] = useState([]);
    const [candidatures2, setcandidatures2] = useState([]);
    
    useEffect(() => {
        OffreGetAllById(idCompany, setoffres, setoffres2);
        EntrepriseGetById(idCompany, setcompany);
        CandidaturesALLOfEntreprises(idCompany, setcandidatures, setcandidatures2);
    }, []);
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    const currentItems = offres.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(offres.length / itemsPerPage);
    
    return (
        <div className="main-content">
            <div className="page-content">
                <section className="section mt-24">
                    <div className="container-fluid px-7 ">
                        <div className="flex  flex-col sm:flex-col md:flex-col lg:flex-col  justify-between">
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
                                                    getAndCheckLocalStorage(localvalue.TYPEACCESS)
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
                                            <div className="mt-4">
                                                {
                                                    company && (company._id == getAndCheckLocalStorage(localvalue.recruteurID)) ?
                                                        <button type="button"
                                                            onClick={() => {
                                                                window.location.href = `/${routing.company_edit}`
                                                            }}
                                                            className="btn btn-primary btn-hover w-100 rounded"><i
                                                                className="mdi mdi-eye"></i> Modifier profile</button> :
                                                        null
                                                }
                                            </div>
                                            <ul className="list-unstyled mt-4 mb-0">
                                                <li>
                                                    <div className="d-flex mt-4">
                                                        <i
                                                            className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                        <div className="ms-3 flex space-x-2 border border-blue-500 rounded-lg py-1 px-2">
                                                            <a href={`/${routing.candidature_list_recruteur}`} className="fs-14 mb-2 text-blue-600 font-bold text-xl">Candidature{candidatures.length > 0 ? "s" : ""} {candidatures.length > 0 ? candidatures.length : ""} </a>
                                                        </div>
                                                    </div>
                                                </li>
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
                                </div>
                            </div>
                            <div className="col-span-8 w-full">
                                <div className="card job-detail overflow-hidden">
                                    <div className="w-full card-body p-4 shadow-lg rounded-lg border">
                                        {
                                            company && company.description_entreprise ?
                                                <div className="mt-4">
                                                    <h5 className="mb-3 text-2xl">A propos de l{"'"}entreprise </h5>
                                                    <div className="job-detail-desc">
                                                        <p className="text-muted mb-0">
                                                            {company.description_entreprise}
                                                        </p>
                                                    </div>
                                                </div> :
                                                <div className="py-10 w-full rounded-xl mt-4 bg-gray-300 animate-none">
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 w-full">
                                <div className="px-2 py-4 shadow-sm mt-5 border">
                                    <h5 className="text-3xl ">Offres d{"'"}emplois</h5>
                                    <div className="flex flex-row justify-between items-center">
                                        
                                        {
                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[0] &&
                                                idCompany == getAndCheckLocalStorage(localvalue.recruteurID) ?
                                                <Link to={`/${routing.job_post}`}>
                                                    <button type="button" className="btn btn-sm btn-success bg-blue-600 text-white flex flex-row space-x-2"><span>+</span><span>Poster</span></button>
                                                </Link> :
                                                null
                                        }
                                    </div>
                                    <main className="w-full items-center mt-10 bg-white">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Titre
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Entreprise
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Localisation
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Salaire
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Type de Contrat
                                                        </th>
                                                        <th scope="col" className="relative px-6 py-3">
                                                            <span className="sr-only">Détails</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {
                                                        currentItems.map((item, index) => (
                                                            <tr key={index}>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="text-sm font-medium text-gray-900">
                                                                        {item.title}
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="text-sm text-gray-900">{item.company}</div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="text-sm text-gray-500">{item.addresse}</div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <div className="text-sm text-gray-500">{item.salaire} / mois</div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                        {item.typeContrat}
                                                                    </span>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                    <button onClick={() => handleDetailItem(item)} className="text-indigo-600 hover:text-indigo-900">
                                                                        Détails
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </main>
                                    <div className="flex justify-center mt-4 space-x-2">
                                        {
                                            [...Array(totalPages)].map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handlePageChange(index + 1)}
                                                    className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))
                                        }
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


export default CompanyDetailPage