import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { fetchAllHackathons } from "../../action/api/hackathons/HackathonAction";
import moment from "moment";

const HackathonPage = () => {
    const navigate = useNavigate();
    const [hackatonsCompetitions, sethackatonsCompetitions] = useState([
    ]);

    useEffect(() => {
        // Fetch all hackathons
        const hackatonsCompetitionsList = getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
        sethackatonsCompetitions(hackatonsCompetitionsList);

        fetchAllHackathons(sethackatonsCompetitions)

    }, []);





    return (
        <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-16 pt-20">

            {/* Conteneur Principal */}
            <div className="max-w-full mx-10 px-6 sm:px-12 lg:px-24 mt-20">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white mb-6">
                        Rejoignez Nos Hackathons 🚀
                    </h1>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        Nos Hackathons sont bien plus que des compétitions : ce sont des occasions uniques de
                        collaboration, d'innovation et d'apprentissage. Que vous soyez étudiant, développeur,
                        designer ou entrepreneur, vous pouvez partager vos idées, créer des solutions
                        concrètes et impressionner les investisseurs.
                    </p>
                    <p className="text-lg text-gray-200 mt-4 leading-relaxed">
                        Chaque Hackathon est conçu pour maximiser votre potentiel grâce à des outils,
                        mentors et ressources de pointe. En participant, vous aurez l{"'"}opportunité
                        de construire un réseau professionnel solide et d’accélérer vos projets.
                    </p>
                </div>


                {/* Compétitions à venir */}
                <section className="py-16 bg-slate-950">
                    <div className="container mx-0 px-6">
                        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                            Nos Prochains Hackathons 🚀
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap justify-center ">
                            {/* Génération dynamique des Hackathons */}
                            {hackatonsCompetitions.map((hackathon, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${hackathon.gradient} p-6 rounded-lg shadow-lg`}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-2">{hackathon.name}</h3>
                                    {/* Image du Hackathon */}
                                    <img
                                        src={hackathon.image}
                                        alt={hackathon.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <p className="text-gray-200 mb-4">{hackathon.description}</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li><span className="font-bold">Début :</span> {moment(hackathon.starDate).format("DD-MM-YYYY à HH:MM")}</li>
                                        <li><span className="font-bold">Fin :</span> {moment(hackathon.endDate).format("DD-MM-YYYY à HH:MM")}</li>
                                        <li><span className="font-bold">Lieu :</span> {hackathon.address}</li>
                                        <li class="text-2xl"><span className="font-bold">Récompense : </span> {hackathon.prize} F</li>
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
                    </div>


                </section>












            </div>
        </div>
    );
};

export default HackathonPage;
