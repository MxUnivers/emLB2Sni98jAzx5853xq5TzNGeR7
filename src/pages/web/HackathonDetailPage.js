import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { localvalueStorage } from "../../utlis/storage/localvalue";
import { addParticipantToHackathon, fetchAllHackathons, fetchHackathonById } from "../../action/api/hackathons/HackathonAction";
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';
import { toast } from 'react-toastify';
import { africanPostalCodes } from "../../utlis/options/optionDivers";


const HackathonDetailPage = () => {
    const { id } = useParams(); // Récupère l'id depuis l'URL
    const [hackathon, setHackathon] = useState(null);
    const [hackathons, setHackathons] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    const [participantData, setParticipantData] = useState({
        name: "",
        email: "",
        codePostal: "",
        telephone: "",
        projectName: hackathon?.name || "",
        description: "",
        coverPicture: "",
    });

    useEffect(() => {
        const hackatonsCompetitionsList = getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
        const selectedHackathon = hackatonsCompetitionsList.find((h) => h._id === id);
        setHackathon(selectedHackathon);
        fetchHackathonById(id, setHackathon);

        setParticipantData({
            projectName: hackathon?.name,
        });

    }, [id]);


   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setParticipantData({ ...participantData, [name]: value });
    };

    const handleSubmit = () => {
        // Vérification des champs requis
        const { name, email, telephone, codePostal, projectName, coverPicture } = participantData;
        if (!name || !email || !telephone || !codePostal || !projectName || !coverPicture) {
            toast.error("Veuillez remplir tous les champs obligatoires !", { position: "bottom-right" });
            return; // Arrête l'exécution si des champs sont vides
        }

        // Appel à la fonction pour ajouter un participant
        addParticipantToHackathon(id, participantData, (updatedHackathons) => {
            setHackathon(updatedHackathons.find((h) => h._id === id)); // Met à jour le hackathon local
        });
        fetchHackathonById(id, setHackathon)
        fetchAllHackathons(setHackathons);
        // Ferme le modal après soumission
        setShowModal(false);
    };


    if (!hackathon) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-l from-indigo-700 via-indigo-800 to-black">
                <h2 className="text-2xl text-white">Chargement des détails...</h2>
            </div>
        );
    }



    const handleImageUpload = async (e) => {
        const file = e.target.files[0]; // Récupère le fichier sélectionné
        if (file) {
            try {
                const imageUrl = await handleImageUploadCloudOnly(file, toast); // Upload vers Cloudinary
                if (imageUrl) {
                    setParticipantData({ ...participantData, coverPicture: imageUrl }); // Met à jour l'URL dans les données du formulaire
                }
            } catch (error) {
                toast.error("Impossible d'uploader la photo");
                // console.error("Erreur lors de l'upload de l'image :", error);
            }
        }
    };
    return (
        <div className="bg-gradient-to-l from-indigo-700 via-indigo-800 to-black min-h-screen py-16 px-6 pt-20">
            <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={hackathon?.image}
                    alt={hackathon?.name}
                    className="w-full h-[450px] object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{hackathon?.name}</h1>
                    <p className="text-gray-600 text-lg mb-4">{hackathon?.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
                        <div>
                            <h3 className="font-bold">Début :</h3>
                            <p>{moment(hackathon?.starDate).format("DD-MM-YYYY à HH:mm")}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Fin :</h3>
                            <p>{moment(hackathon?.endDate).format("DD-MM-YYYY à HH:mm")}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Lieu :</h3>
                            <p>{hackathon?.address}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Récompense :</h3>
                            <p>{hackathon?.prize}</p>
                        </div>
                    </div>
                    {/* Affichage du nombre de participants */}
                    <div className="mb-4">
                        <span className="font-bold">Nombre de participants :</span>{" "}
                        {hackathon?.participants ? hackathon?.participants.length : 0}
                    </div>
                    <div className="text-center mb-6">
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                        >
                            Participer
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal d'inscription */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
                        <h2 className="text-2xl font-bold mb-6 text-center">Inscription à l{"'"}hackathon</h2>

                        <form>
                            <div className="grid grid-cols-2 gap-6">

                                <div className="mb-4">
                                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                        Téléchargez votre photo
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                    {participantData.coverPicture && (
                                        <div className="mt-2">
                                            <img src={participantData.coverPicture} alt="Prévisualisation" className="w-40 h-40 object-cover rounded" />
                                            <p className="text-sm text-gray-500 mt-1">Photo téléchargée avec succès.</p>
                                        </div>
                                    )}
                                </div>
                                {/* Nom */}
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={participantData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={participantData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* Code Postal */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">Indicatif téléphone</label>
                                    <select
                                        name="codePostal"
                                        value={participantData.codePostal}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    >
                                        <option value="">--Choisir--</option>
                                        {africanPostalCodes.map((country, index) => (
                                            <option key={index} value={country.code}>
                                                {country.country} - {country.code}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Téléphone */}
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Téléphone</label>
                                    <input
                                        type="text"
                                        name="telephone"
                                        value={participantData.telephone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* Nom du Projet */}
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Nom du Projet</label>
                                    <input
                                        type="text"
                                        name="projectName"
                                        value={participantData.projectName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>

                                {/* Description du Projet */}

                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Description du Projet</label>
                                <textarea
                                    name="description"
                                    value={participantData.description}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg h-24"
                                ></textarea>
                            </div>

                            {/* Boutons */}
                            <div className="flex justify-end mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mr-4"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                                >
                                    Soumettre
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


        </div>
    );
};

export default HackathonDetailPage;
