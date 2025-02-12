import React, { useState } from "react";
import PaymentListPage from "./manager/PaymentListPage";
import CandidateAdminListPage from "./manager/CandidateAdminListPage";
import EntrepriseAdminListPage from "./manager/EntrepriseAdminListPage";
import FormationAdminListPage from "./manager/FormationAdminPage.js";
import JobAdminListPage from "./manager/JobAdminListPage";
import { HackatonAdminListPage } from "./manager/HackatonAdminListPage";
import { localvalue } from "../utlis/storage/localvalue";
import { Navigate, useNavigate } from "react-router-dom";
import { routing } from "../utlis/routing";

const AdminTabs = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("paiements");

    if (!sessionStorage.getItem(localvalue.ADMIN_CONNECTED)) {
        return <Navigate to={`/${routing.admin_login}`} />
    } else {
        return (
            <div className="min-h-screen bg-gray-50 mt-5">
                <div className="max-w-full bg-white shadow-lg rounded-lg">
                    {/* Header */}
                    <div className="px-6 py-4 bg-blue-600 text-white rounded-t-lg">
                        <h1 className="text-2xl font-bold">Page d{"'"}Administration</h1>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap md:flex-nowrap border-b border-gray-300">
                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "paiements"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("paiements")}
                        >
                            Paiements
                        </button>
                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "candidats"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("candidats")}
                        >
                            Candidats
                        </button>
                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "entreprises"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("entreprises")}
                        >
                            Entreprises
                        </button>
                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "formations"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("formations")}
                        >
                            Formations
                        </button>
                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "emplois"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("emplois")}
                        >
                            Emplois
                        </button>
                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "hackathons"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("hackathons")}
                        >
                            Hackathons
                        </button>

                        <button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "contacts"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("contacts")}
                        >
                            Message contact
                        </button>
                        {/*<button
                            className={`flex-1 py-2 text-center font-semibold ${activeTab === "bourses"
                                    ? "border-b-4 border-blue-600 text-blue-600"
                                    : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("bourses")}
                        >
                            Bourses d{"'"}étude
                        </button> */}

                    </div>

                    {/* Tabs Content */}
                    <div className="p-6">
                        {activeTab === "paiements" && (
                            <div>
                                <PaymentListPage />
                            </div>
                        )}
                        {activeTab === "candidats" && (
                            <div>
                                <CandidateAdminListPage />
                            </div>
                        )}
                        {activeTab === "entreprises" && (
                            <div>
                                <EntrepriseAdminListPage />
                            </div>
                        )}
                        {activeTab === "formations" && (
                            <div>
                                <FormationAdminListPage />
                            </div>
                        )}
                        {activeTab === "emplois" && (
                            <div>
                                <JobAdminListPage />
                            </div>
                        )}
                        {activeTab === "hackathons" && (
                            <div>
                                <HackatonAdminListPage />
                            </div>
                        )}

                        {activeTab === "contacts" && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Contact</h2>
                                <p className="text-gray-600 mt-2">
                                    Consultez les message envoyés sur la plateforme
                                </p>
                            </div>)
                        }

                        {/*activeTab === "bourses" && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Bourses d{"'"}étude</h2>
                                <p className="text-gray-600 mt-2">
                                    Consultez et administrez les opportunités de bourses d{"'"}étude pour les utilisateurs de la plateforme.
                                </p>
                            </div>
                        )**/}
                    </div>
                </div>
            </div>
        );
    }


};

export default AdminTabs;
