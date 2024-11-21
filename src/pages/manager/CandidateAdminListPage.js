import React, { useState, useEffect } from "react";
import { CandidatGetAll } from "../../action/api/candidat/CandidatAction";
import { localvalueStorage } from "../../utlis/storage/localvalue";
import { getDataFromFile } from "../../action/storage/DataLocal";
import moment from "moment";

const CandidateAdminListPage = () => {
    const [candidats, setCandidats] = useState([]);
    const [candidats2, setCandidats2] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Récupération initiale des données depuis le fichier local
        const getDataCandidats = getDataFromFile(localvalueStorage.CANDIDATS) || [];
        setCandidats(getDataCandidats);
        setFilteredCandidates(getDataCandidats); // Initialisation de la liste filtrée
    
        // Appel à l'API pour mettre à jour les données des candidats
        CandidatGetAll(setCandidats, setFilteredCandidates);
    }, []); // Utilisation de `[]` pour appeler une seule fois à l'initialisation.
    

    // setFilteredCandidates(candidats2);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = candidats.filter(
            (candidate) =>
                candidate.firstname.toLowerCase().includes(value) ||
                candidate.lastname.toLowerCase().includes(value) ||
                candidate.codePostal.toLowerCase().includes(value) ||
                candidate.telephone.toLowerCase().includes(value) ||
                (candidate.email && candidate.email.toLowerCase().includes(value))
        );
        setFilteredCandidates(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-full mx-0 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Compte candidat</h1>

                <div className="bg-white border border-gray-200 p-1 rounded-lg shadow">
                <h3 className="text-gray-800 font-semibold text-lg mb-2">Nombres</h3>
                <p className="text-gray-600 text-2xl font-bold">
                    {filteredCandidates.length}
                </p>
            </div>

                {/* Barre de recherche */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Rechercher un candidat..."
                        className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Tableau des candidats */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-3 px-6 text-left">Photo</th>
                                <th className="py-3 px-6 text-left">Nom</th>
                                <th className="py-3 px-6 text-left">Prénom</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Téléphone</th>
                                <th className="py-3 px-6 text-left">Date inscription</th>
                                <th className="py-3 px-6 text-left">Date Mise ajour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCandidates.length > 0 ? (
                                filteredCandidates.map((candidate, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${
                                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        }`}
                                    >
                                    <td className="py-3 px-6"><img src={candidate.coverPicture} class="h-[50px] w-[50px] rounded-full "/></td>

                                        <td className="py-3 px-6">{candidate.firstname}</td>
                                        <td className="py-3 px-6">{candidate.lastname}</td>
                                        <td className="py-3 px-6">{candidate.email || "N/A"}</td>
                                        <td className="py-3 px-6"> {candidate.codePostal|| "N/A"} {candidate.telephone|| "N/A"}</td>
                                        <td className="py-3 px-6"> {moment(candidate.createdAt).format("DD-MM-YYYY HH:MM")|| "N/A"}</td>
                                        <td className="py-3 px-6"> {moment(candidate.updatedAt).format("DD-MM-YYYY HH:MM")|| "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="py-3 px-6 text-center text-gray-500"
                                    >
                                        Aucun candidat trouvé.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CandidateAdminListPage;
