








import React, { useState, useEffect } from 'react';
import { routing } from '../../utlis/routing';
import { Link, useNavigate } from 'react-router-dom';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import { OffreGetAllById } from '../../action/api/offres/OffresAction';
import { EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import { CandidaturesALLOfEntreprises } from '../../action/api/candidatures/CandidatureAction';

const CompanyDetaiOffrelPage = () => {


    const navigate = useNavigate();
    const [company, setCompany] = useState(null);
    const [offres, setOffres] = useState([]);
    const [candidatures, setCandidatures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const idCompany = getAndCheckLocalStorage(localvalue.recruteurDetailID);

    useEffect(() => {
        OffreGetAllById(idCompany, setOffres);
        EntrepriseGetById(idCompany, setCompany);
    }, [idCompany]);

    const currentItems = offres && offres.length > 0 ? offres.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
    const totalPages = offres && offres.length > 0 ? Math.ceil(offres.length / itemsPerPage): Math.ceil([].length / itemsPerPage)

    return (
        <div className="main-content w-full">
            <div className="page-content mt-24 w-full bg-gray-50">
                <section className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Company Info Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-4">
                                {  company && company?.logo ? (
                                    <img src={company.logo} alt="Company Logo" className="rounded-full w-full h-full" />
                                ) : (
                                    <div className="bg-gray-300 rounded-full w-full h-full animate-pulse" />
                                )}
                            </div>
                            <h2 className="text-2xl font-bold">{company?.full_name || 'Loading...'}</h2>
                            <p className="text-gray-600 mt-2">
                                {company?.addresse_entreprise || 'Location not available'}
                            </p>

                        </div>

                        {/* Additional Info and Job Listings */}
                        <div className="lg:col-span-2">
                            {/* Company Overview */}
                            <div className="bg-white rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-semibold">A propos de l{"'"}entreprise</h3>
                                <p className="text-gray-600 mt-4">
                                    {company?.description_entreprise || 'Company description not available.'}
                                </p>
                            </div>

                            {/* Job Listings */}
                            {
                                currentItems && currentItems.length > 0 && (
                                    <div className="bg-white  rounded-lg p-6">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-semibold">Offres d{"'"}emploi</h3>

                                        </div>



                                        <div className="mt-4 overflow-x-auto">
                                            <table className="w-full bg-white rounded-lg">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="py-2 px-4 text-left">Titre</th>
                                                        <th className="py-2 px-4 text-left">Entreprise</th>
                                                        <th className="py-2 px-4 text-left">Localisation</th>
                                                        <th className="py-2 px-4 text-left">Salaire</th>
                                                        <th className="py-2 px-4 text-left">Type de Contrat</th>
                                                        <th className="py-2 px-4">Détails</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { currentItems.map((item, index) => (
                                                        <tr key={index} className="border-b">
                                                            <td className="py-2 px-4">{item.title}</td>
                                                            <td className="py-2 px-4">{item.company}</td>
                                                            <td className="py-2 px-4">{item.addresse}</td>
                                                            <td className="py-2 px-4">{item.salaire} / mois</td>
                                                            <td className="py-2 px-4">{item.typeContrat}</td>
                                                            <td className="py-2 px-4 text-right">
                                                                <button
                                                                    onClick={() => navigate(`/${routing.job_details}`, { state: { job: item } })}
                                                                    className="text-indigo-600"
                                                                >
                                                                    Détails
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Pagination */}
                                        <div className="flex justify-center mt-4">
                                            {[...Array(totalPages)].map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                    className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default CompanyDetaiOffrelPage;

