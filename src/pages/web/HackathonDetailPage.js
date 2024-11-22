import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { fetchAllHackathons } from "../../action/api/hackathons/HackathonAction";
import { localvalue, localvalueStorage } from "../../utlis/storage/localvalue";
import { getDataFromFile } from "../../action/storage/DataLocal";


const HackathonDetailPage = () => {
    const { id } = useParams(); // Récupère l'id depuis l'URL
    const [hackathon, setHackathon] = useState(null);

    useEffect(() => {
        const hackatonsCompetitionsList = getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
        const selectedHackathon = hackatonsCompetitionsList.find((h) => h._id === id);
        setHackathon(selectedHackathon);
        // Fetch all hackathons et trouve celui correspondant à l'ID
        // fetchAllHackathons((hackathons) => {
        //     const selectedHackathon = hackathons.find((h) => h._id === id);
        //     setHackathon(selectedHackathon);
        // });
    }, [id]);

    if (!hackathon) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-l from-indigo-700 via-indigo-800 to-black">
                <h2 className="text-2xl text-white">Chargement des détails...</h2>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black min-h-screen py-16 px-6 pt-20">
            <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-[450px] object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{hackathon.name}</h1>
                    <p className="text-gray-600 text-lg mb-4">{hackathon.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
                        <div>
                            <h3 className="font-bold">Début :</h3>
                            <p>{moment(hackathon.starDate).format("DD-MM-YYYY à HH:mm")}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Fin :</h3>
                            <p>{moment(hackathon.endDate).format("DD-MM-YYYY à HH:mm")}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Lieu :</h3>
                            <p>{hackathon.address}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Récompense :</h3>
                            <p>{hackathon.prize}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <a
                            href={hackathon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                        >
                            Plus d{"'"}informations
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HackathonDetailPage;
