import React, { useState, useEffect } from "react";
import { EntrepriseGetAll } from "../../action/api/employeur/EmployeurAction";
import { dureeDeVie, localvalue, localvalueStorage } from "../../utlis/storage/localvalue";
import { getDataFromFile } from "../../action/storage/DataLocal";
import moment from "moment";
import { routing } from "../../utlis/routing";
import { setWithExpiration } from "../../utlis/storage/localvalueFunction";
import { useNavigate } from "react-router-dom";

const EntrepriseAdminListPage = () => {
    const navigate  =  useNavigate()
    const [entreprises, setEntreprises] = useState([]);
    const [entreprises2, setEntreprises2] = useState([]);
    const [filteredEntreprises, setFilteredEntreprises] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Récupération initiale des données depuis le fichier local
        const getDataEntreprises = getDataFromFile(localvalueStorage.RECRUTEURS) || [];
        setEntreprises(getDataEntreprises);
        setFilteredEntreprises(getDataEntreprises); // Initialisation de la liste filtrée

        // Appel à l'API pour mettre à jour les données des entreprises
        EntrepriseGetAll(setEntreprises, setFilteredEntreprises);
    }, []); // Utilisation de `[]` pour appeler une seule fois à l'initialisation.

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = entreprises.filter(
            (entreprise) =>
                entreprise.full_name.toLowerCase().includes(value) ||
                entreprise.firstname.toLowerCase().includes(value) ||
                entreprise.lastname.toLowerCase().includes(value) ||
                entreprise.codePostal.toLowerCase().includes(value) ||
                entreprise.telephone.toLowerCase().includes(value) ||
                (entreprise.email && entreprise.email.toLowerCase().includes(value))
        );
        setFilteredEntreprises(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-1">
            <div className="max-w-full mx-0 bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Comptes Entreprises</h1>

                <div className="bg-white border border-gray-200 p-1 rounded-lg shadow">
                <h3 className="text-gray-800 font-semibold text-lg mb-2">Nombres</h3>
                <p className="text-gray-600 text-2xl font-bold">
                    {filteredEntreprises.length}
                </p>
            </div>

                {/* Barre de recherche */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Rechercher une entreprise..."
                        className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Tableau des entreprises */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-3 px-6 text-left">Logo</th>
                                <th className="py-3 px-6 text-left">Entreprise</th>
                                <th className="py-3 px-6 text-left">Nom</th>
                                <th className="py-3 px-6 text-left">Prénoms</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Téléphone</th>
                                <th className="py-3 px-6 text-left">Code postal</th>
                                <th className="py-3 px-6 text-left">Date d{"'"}inscription</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEntreprises.map((entreprise, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                                >
                                    <td className="py-3 px-6">
                                        <img
                                            src={entreprise.logo || "/placeholder-image.png"}
                                            alt="Logo"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="py-3 px-6">{entreprise.full_name}</td>
                                    <td className="py-3 px-6">{entreprise.firstname}</td>
                                    <td className="py-3 px-6">{entreprise.lastname}</td>
                                    <td className="py-3 px-6">{entreprise.email || "N/A"}</td>
                                    <td className="py-3 px-6">{entreprise.telephone || "N/A"}</td>
                                    <td className="py-3 px-6">{entreprise.codePostal || "N/A"}</td>
                                    <td className="py-3 px-6">
                                        {moment(entreprise.createdAt).format("DD/MM/YYYY")}
                                    </td>
                                    
                                        <td className="py-3 px-6">
                                            <button type="button"  className="bg-blue-600 hover:bg-blue-700 active:bg-bue-800 text-white px-3 py-2 rounded-3xl" onClick={() => {
                                                setWithExpiration(localvalue.recruteurDetailID, entreprise?._id, dureeDeVie)
                                                navigate(`/${routing.company_details_view}`)
                                            }} > Details
                                            </button>
                                            </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EntrepriseAdminListPage;
