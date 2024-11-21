import React, { useState, useEffect } from "react";
import { localvalueStorage } from "../../utlis/storage/localvalue";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { fetchFormationAll } from "../../action/api/formations/FormationAction";

const FormationAdminListPage = () => {
    const [filteredFormations, setFilteredFormations] = useState([]);
    const [formations, setformations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
   
    useEffect(() => {
        // Récupération initiale des données locales
        const getDataFormations = getDataFromFile(localvalueStorage.FORMATIONLIST) || [];
        fetchFormationAll(setformations,setFilteredFormations)
        setFilteredFormations(getDataFormations);
    }, []);

    useEffect(() => {
        // Mise à jour des formations filtrées après récupération API
        if (formations && formations.length > 0) {
            setFilteredFormations(formations);
        }
    }, [formations]);

    const handleSearch = (e) => {
        // const value = e.target.value.toLowerCase();
        // setSearchTerm(value);

        // const filtered = formations.filter(
        //     (formation) =>
        //         formation.formationTitle &&
        //         formation.formationTitle.toLowerCase().includes(value)
        // );
        // setFilteredFormations(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-full mx-0 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Formations</h1>

                <div className="bg-white border border-gray-200 p-1 rounded-lg shadow mb-6">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">Nombre total</h3>
                    <p className="text-gray-600 text-2xl font-bold">
                        {filteredFormations.length}
                    </p>
                </div>

                {/* Barre de recherche */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Rechercher une formation..."
                        className="w-full md:w-1/2 border border-gray-300 rounded-lg p-2"
                    />
                </div>

                {/* Tableau des formations */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-3 px-6 text-left">Photo</th>
                                <th className="py-3 px-6 text-left">Titre</th>
                                <th className="py-3 px-6 text-left">Lieu</th>
                                <th className="py-3 px-6 text-left">Date Création</th>
                                <th className="py-3 px-6 text-left">Mise à jour</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredFormations && filteredFormations.length > 0 ? (
                                filteredFormations.map((formation, index) => (
                                    <tr
                                        key={formation._id}
                                        className={`border-b ${index % 2 === 0 ? "bg-gray-50" : ""}`}
                                    >
                                    <td className="py-3 px-6"><img src={formation.logo} class="h-[50px]  w-[50px]" /></td>
                                    <td className="py-3 px-6">{formation.formationTitle}</td>
                                        <td className="py-3 px-6">{formation.location || "N/A"}</td>
                                        <td className="py-3 px-6">{formation.dateCreation}</td>
                                        <td className="py-3 px-6">{formation.lastUpdated}</td>
                                        <td className="py-3 px-6">
                                            {/* Actions */}
                                            <button className="text-blue-500">Modifier</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">
                                        Aucune formation trouvée.
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

export default FormationAdminListPage;
