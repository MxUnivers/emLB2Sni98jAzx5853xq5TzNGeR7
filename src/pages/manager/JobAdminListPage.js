import React, { useState, useEffect } from "react";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { dureeDeVie, localvalue, localvalueStorage } from "../../utlis/storage/localvalue";
import moment from "moment";
import { OffreGetAllOffre } from "../../action/api/offres/OffresAction";
import { useNavigate } from "react-router-dom";
import { routing } from "../../utlis/routing";
import { setWithExpiration } from "../../utlis/storage/localvalueFunction";

const JobAdminListPage = () => {
    const navigate = useNavigate();
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [jobs, setjobs] = useState([]);
    const [jobs2, setjobs2] = useState([])
    const [error, seterror] = useState(false);

    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        // Récupération initiale des données locales et initialisation des données filtrées
        const localData = getDataFromFile(localvalueStorage.EMPLOISLIST) || [];
        setFilteredJobs(localData)
        OffreGetAllOffre(setjobs, setFilteredJobs)
        setFilteredJobs(jobs || localData);
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(value) ||
                job.areaOffre.toLowerCase().includes(value) ||
                job.addresse.toLowerCase().includes(value) ||
                job.typeContrat.toLowerCase().includes(value) 
                // job.areaPost.toLowerCase().includes(value)
        );
        setFilteredJobs(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-full mx-0 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Emplois</h1>

                <div className="bg-white border border-gray-200 p-1 rounded-lg shadow mb-6">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">Nombre total</h3>
                    <p className="text-gray-600 text-2xl font-bold">
                        {filteredJobs.length}
                    </p>
                </div>

                {/* Barre de recherche */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Rechercher un emploi par titre ou catégorie..."
                        className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Tableau des emplois */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-3 px-6 text-left">Titre</th>
                                <th className="py-3 px-6 text-left">Catégorie</th>
                                <th className="py-3 px-6 text-left">Salaire</th>
                                <th className="py-3 px-6 text-left">Type de contrat</th>
                                <th className="py-3 px-6 text-left">Adrresse ou lieu</th>
                                <th className="py-3 px-6 text-left">Date de Création</th>
                                <th className="py-3 px-6 text-left">Dernière Modification</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">
                                        Chargement des emplois...
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan="5" className="text-center text-red-500 py-4">
                                        Erreur lors du chargement des données.
                                    </td>
                                </tr>
                            ) : (
                                filteredJobs.map((job, index) => (
                                    <tr
                                        key={job._id}
                                        className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            }`}
                                    >
                                        <td className="py-3 px-6">{job.title}</td>
                                        <td className="py-3 px-6">{job.areaOffre || ""}</td>
                                        <td className="py-3 px-6">{job.salaire || ""}</td>
                                        <td className="py-3 px-6">{job.typeContrat || ""}</td>
                                        <td className="py-3 px-6">{job.addresse || ""}</td>
                                        <td className="py-3 px-6">
                                            {moment(job.dateCreation).format("DD/MM/YYYY")}
                                        </td>
                                        <td className="py-3 px-6">
                                            {moment(job.dateModification).format("DD/MM/YYYY")}
                                        </td>
                                        <td className="py-3 px-6">
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                                onClick={() => {
                                                    setWithExpiration(localvalue.JobID, job?._id, dureeDeVie)
                                                    navigate(`/${routing.job_details}`)
                                                }}
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JobAdminListPage;
