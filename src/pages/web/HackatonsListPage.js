import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { fetchAllHackathons } from "../../action/api/hackathons/HackathonAction";
import { localvalueStorage } from "../../utlis/storage/localvalue";
import { routing } from "../../utlis/routing";


const HackatonsListPage = () => {
    const navigate = useNavigate();
    const [hackatonsCompetitions, setHackatonsCompetitions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const hackatonsCompetitionsList = getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
        setHackatonsCompetitions(hackatonsCompetitionsList);

        fetchAllHackathons(setHackatonsCompetitions);
    }, []);

    // Pagination: Calcul des éléments visibles
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentHackathons = hackatonsCompetitions.slice(indexOfFirstItem, indexOfLastItem);

    // Gestion du changement de page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(hackatonsCompetitions.length / itemsPerPage);

    return (
        <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-16 pt-20">
            <div className="max-w-full mx-0 px-6 sm:px-12 lg:px-0 mt-20">
                <section className="py-16 bg-transparent">
                    <div className="container mx-0 px-6">
                        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                            Nos Prochains Hackathons 🚀
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {currentHackathons.map((hackathon, index) => (
                                <div
                                onClick={()=>{navigate(`/${routing.hackatonup_detail}/${hackathon._id}`)}}
                                    className={`bg-gradient-to-br ${hackathon.gradient} p-6 rounded-lg shadow-lg w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] max-w-sm`}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-2">{hackathon.name}</h3>
                                    <img
                                        src={hackathon.image}
                                        alt={hackathon.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <p className="text-gray-200 mb-4">{hackathon.description}</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li>
                                            <span className="font-bold">Début :</span>{" "}
                                            {moment(hackathon.starDate).format("DD-MM-YYYY à HH:mm")}
                                        </li>
                                        <li>
                                            <span className="font-bold">Fin :</span>{" "}
                                            {moment(hackathon.endDate).format("DD-MM-YYYY à HH:mm")}
                                        </li>
                                        <li>
                                            <span className="font-bold">Lieu :</span> {hackathon.address}
                                        </li>
                                        <li className="text-2xl">
                                            <span className="font-bold">Récompense :</span> {hackathon.prize} F
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-center">
                                        <a
                                            href={hackathon.link}
                                            className="px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-900 transition"
                                        >
                                            Plus d{"'"}infos
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`mx-1 px-4 py-2 rounded ${
                                        currentPage === index + 1
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-800 text-gray-400 hover:bg-blue-700 hover:text-white"
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HackatonsListPage;
