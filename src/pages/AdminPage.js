import React, { useState } from "react";
import PaymentListPage from "./manager/PaymentListPage";
import CandidateAdminListPage from "./manager/CandidateAdminListPage";
import EntrepriseAdminListPage from "./manager/EntrepriseAdminListPage";
import FormationAdminListPage from "./manager/FormationAdminPage.js";
import JobAdminListPage from "./manager/JobAdminListPage";
import { HackatonAdminListPage } from "./manager/HackatonAdminListPage";

const AdminTabs = () => {
    const [activeTab, setActiveTab] = useState("paiements");

    return (
        <div className="min-h-screen bg-gray-50 p-6 mt-20">
            <div className="max-w-full mx-2 bg-white shadow-lg rounded-lg">
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
                        className={`flex-1 py-2 text-center font-semibold ${activeTab === "emplois"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("hackathons")}
                    >
                        Hackathons
                    </button>
                    <button
                        className={`flex-1 py-2 text-center font-semibold ${activeTab === "bourses"
                                ? "border-b-4 border-blue-600 text-blue-600"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("bourses")}
                    >
                        Bourses d{"'"}étude
                    </button>
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
                            <JobAdminListPage/>
                        </div>
                    )}
                    {activeTab === "hackathons" && (
                        <div>
                            <HackatonAdminListPage/>
                        </div>
                    )}
                    
                    {activeTab === "bourses" && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Bourses d{"'"}étude</h2>
                            <p className="text-gray-600 mt-2">
                                Consultez et administrez les opportunités de bourses d{"'"}étude pour les utilisateurs de la plateforme.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminTabs;
