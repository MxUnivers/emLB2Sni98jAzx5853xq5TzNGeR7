
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createHackathon, deleteHackathon, fetchAllHackathons, modifyHackathon } from '../../action/api/hackathons/HackathonAction';
import moment from 'moment';
import { toast } from 'react-toastify';
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';
import { localvalueStorage } from '../../utlis/storage/localvalue';
import { getDataFromFile } from '../../action/storage/DataLocal';

export const HackatonAdminListPage = () => {
    const [hackathons, setHackathons] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [hackathonToEdit, setHackathonToEdit] = useState(null);
    const [hackathonData, setHackathonData] = useState({
        name: '',
        starDate: '',
        endDate: '',
        category: '',
        image: "",
        address: '',
        prize: '',
        description: '',
        rewards: [],
    });
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
    const [hackathonToDelete, setHackathonToDelete] = useState(null);
    const [newReward, setNewReward] = useState({ rank: '', prize: '' });

    const [filteredHackathons, setFilteredHackathons] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        category: '',
        startDate: '',
        endDate: '',
    });

    useEffect(() => {
      const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setEditModalOpen(false);
                setModalOpen(false);
            }
        };
        
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])
    

    useEffect(() => {
        // Fetch all hackathons
        const hackathonsList = getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
        setHackathons(hackathonsList);
        setFilteredHackathons(hackathonsList);

        fetchAllHackathons(setHackathons)

    }, []);
    useEffect(() => {
        setFilteredHackathons(hackathons)
    }, [hackathons])


    

    // Handle changement des champs de création / modification
    const handleChange = (e) => {
        const { name, value } = e.target;
        setHackathonData({ ...hackathonData, [name]: value });
    };


    const handleRewardChange = (e) => {
        const { name, value } = e.target;
        setNewReward({ ...newReward, [name]: value });
    };

    // Ajouter une récompense
    const addReward = () => {
        if (newReward.rank.trim() !== '' && newReward.prize.trim() !== '') {
            setHackathonData({
                ...hackathonData,
                rewards: [...hackathonData.rewards, newReward],
            });
            setNewReward({ rank: '', prize: '' }); // Reset fields
        }
    };

    // supprimer une recomponses
    const removeReward = (index) => {
        const updatedRewards = hackathonData.rewards.filter((_, i) => i !== index);
        setHackathonData({ ...hackathonData, rewards: updatedRewards });
    };

    const handleCreate = () => {
        // Vérification que tous les champs obligatoires sont remplis
        const { name, starDate, endDate, category, address, prize, description, rewards, image } = hackathonData;

        if (
            !name.trim() ||
            !starDate.trim() ||
            !endDate.trim() ||
            !category.trim() ||
            !address.trim() ||
            !prize.trim() ||
            !description.trim() ||
            rewards.length === 0 || // Vérifie qu'il y a au moins une récompense
            !image // Vérifie qu'une photo a été sélectionnée
        ) {
            toast.error("Veuillez remplir tous les champs et ajouter une photo avant de soumettre.", { position: "bottom-right" });
            return;
        }

        // Envoi des données si toutes les validations passent
        console.log(hackathonData);
        createHackathon(hackathonData, setHackathons);

        // Fermer le modal après création
        setModalOpen(false);

        // Réinitialiser les données du formulaire
        setHackathonData({
            name: '',
            starDate: '',
            endDate: '',
            category: '',
            address: '',
            prize: '',
            description: '',
            rewards: [],
            image: null,
        });
        fetchAllHackathons(setHackathons);  // Récupère les hackathons
    };

    const handleEdit = (id) => {
        const hackathon = hackathons.find((h) => h._id === id);
        setHackathonToEdit(hackathon);

        // setHackathonData(hackathon); // Remplir les champs avec les données existantes
        setHackathonData({
            address: hackathon?.address,
            category: hackathon?.category,
            image: hackathon?.image,
            description: hackathon?.description,
            name: hackathon?.name,
            rewards: hackathon?.rewards,
            prize: hackathon?.prize,
            starDate: moment(hackathon?.starDate).format("YYYY-MM-DDTHH:MM"),
            endDate: moment(hackathon?.endDate).format("YYYY-MM-DDTHH:MM"),
        })
        setEditModalOpen(true);
    };

    const handleModify = async () => {
        const { name, starDate, endDate, category, address, prize, description, rewards, image } = hackathonData;
        if (
            !name.trim() ||
            !starDate.trim() ||
            !endDate.trim() ||
            !category.trim() ||
            !address.trim() ||
            !prize.trim() ||
            !description.trim() ||
            rewards.length === 0 || // Vérifie qu'il y a au moins une récompense
            !image // Vérifie qu'une photo a été sélectionnée
        ) {
            toast.error("Veuillez remplir tous les champs et ajouter une photo avant de soumettre.", { position: "bottom-right" });
            return;
        }

        modifyHackathon(hackathonToEdit._id, hackathonData);
        setEditModalOpen(false); // Fermer le modal après modification
        fetchAllHackathons(setHackathons);  // Récupère les hackathons
    };

    const handleDelete = () => {
        deleteHackathon(hackathonToDelete._id, setHackathons);
        setConfirmDeleteModal(false); // Fermer le modal après suppression
        fetchAllHackathons(setHackathons);  // Récupère les hackathons
    };



    const handleImageUpload = async (e) => {
        const file = e.target.files[0]; // Récupère le fichier sélectionné
        if (file) {
            try {
                const imageUrl = await handleImageUploadCloudOnly(file, toast); // Upload vers Cloudinary
                if (imageUrl) {
                    setHackathonData({ ...hackathonData, image: imageUrl }); // Met à jour l'URL dans les données du formulaire
                }
            } catch (error) {
                toast.error("Impossible d'uploader la photo");
                // console.error("Erreur lors de l'upload de l'image :", error);
            }
        }
    };






    // filtre depour les hactoons
    // Gestion des changements dans les filtres
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });

        // Mise à jour en direct pour nom et catégorie
        if (name === 'name' || name === 'category') {
            applyFilters({ ...filters, [name]: value });
        }
    };

    // Filtrer les hackathons en fonction des critères
    const applyFilters = (currentFilters) => {
        const { name, category, startDate, endDate } = currentFilters;
        let results = [...hackathons];

        if (name.trim()) {
            results = results.filter((hackathon) =>
                hackathon.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        if (category.trim()) {
            results = results.filter((hackathon) =>
                hackathon.category.toLowerCase().includes(category.toLowerCase())
            );
        }

        if (startDate.trim() && endDate.trim()) {
            const start = new Date(startDate).getTime();
            const end = new Date(endDate).getTime();
            results = results.filter((hackathon) => {
                const hackathonStart = new Date(hackathon.starDate).getTime();
                const hackathonEnd = new Date(hackathon.endDate).getTime();
                return hackathonStart >= start && hackathonEnd <= end;
            });
        }

        setFilteredHackathons(results);
    };

    // Appliquer le filtre pour les dates
    const handleDateFilter = () => {
        applyFilters(filters);
    };


    return (
        <div className="w-full mx-0 p-4">
            <div className="w-full justify-between">
                <h5 className="filtre">
                    Hackatons
                </h5>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Créer un Hackathon
                </button>

            </div>



            {/* Filtres */}
            <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h2 className="text-lg font-semibold mb-4">Filtres</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Filtre par nom */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Rechercher par nom"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    />

                    {/* Filtre par catégorie */}
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    >
                        <option value="">Toutes les catégories</option>
                        {[...new Set(hackathons.map((hackathon) => hackathon.category))].map(
                            (category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            )
                        )}
                    </select>

                    {/* Filtre par date de début */}
                    <input
                        type="date"
                        name="startDate"
                        value={filters.startDate}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    />

                    {/* Filtre par date de fin */}
                    <input
                        type="date"
                        name="endDate"
                        value={filters.endDate}
                        onChange={handleFilterChange}
                        className="p-2 border rounded"
                    />
                </div>
                <button
                    onClick={handleDateFilter}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Appliquer les dates
                </button>
            </div>

            <div className="mt-6 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHackathons.map((hackathon) => (
                    <div
                        key={hackathon._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Affichage de la photo */}
                        {hackathon.image ? (
                            <img
                                src={hackathon.image}
                                alt={`Photo de ${hackathon.name}`}
                                className="h-48 w-full object-cover"
                            />
                        ) : (
                            <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                                <span>Aucune photo</span>
                            </div>
                        )}
                        <div className="p-4">
                            {/* Informations principales */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{hackathon.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="font-medium">Date :</span> {new Date(hackathon.starDate).toLocaleDateString()} -{' '}
                                {new Date(hackathon.endDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-medium">Catégorie :</span> {hackathon.category}
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-medium">Addresse :</span> {hackathon.address}
                            </p>

                            {/* Boutons d'actions */}
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleEdit(hackathon._id)}
                                    className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 transition-colors"
                                >
                                    Modifier
                                </button>
                                <button
                                    onClick={() => {
                                        setHackathonToDelete(hackathon);
                                        setConfirmDeleteModal(true);
                                    }}
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de création */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Créer un Hackathon</h2>
                        <form onSubmit={(e) => e.preventDefault()}>

                            <div className="mb-4">
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                    Téléchargez une photo
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                                {hackathonData.image && (
                                    <div className="mt-2">
                                        <img src={hackathonData.image} alt="Prévisualisation" className="w-16 h-16 object-cover rounded" />
                                        <p className="text-sm text-gray-500 mt-1">Photo téléchargée avec succès.</p>
                                    </div>
                                )}
                            </div>


                            <input
                                type="text"
                                name="name"
                                placeholder="Nom du Hackathon"
                                value={hackathonData.name}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="datetime-local"
                                name="starDate"
                                placeholder="Date de début"
                                value={hackathonData.starDate}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="datetime-local"
                                name="endDate"
                                placeholder="Date de fin"
                                value={hackathonData.endDate}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Catégorie"
                                value={hackathonData.category}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="number"
                                name="prize"
                                placeholder="Prix de la recompense"
                                value={hackathonData.prize}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Addresse de l'hackaton"
                                value={hackathonData.address}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={hackathonData.description}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <div className="mt-2">
                                <h3 className="text-xl font-bold mb-4">Récompenses</h3>
                                <div className="flex space-x-4 mb-4">
                                    <input
                                        type="text"
                                        name="rank"
                                        value={newReward.rank}
                                        onChange={handleRewardChange}
                                        placeholder="Rang (e.g., 1er, 2e)"
                                        className="border rounded px-2 py-1 w-1/3"
                                    />
                                    <input
                                        type="text"
                                        name="prize"
                                        value={newReward.prize}
                                        onChange={handleRewardChange}
                                        placeholder="Récompense (e.g., 1000XOF)"
                                        className="border rounded px-2 py-1 w-1/3"
                                    />
                                    <button
                                        onClick={addReward}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                                    >
                                        Ajouter
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {hackathonData.rewards.map((reward, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center bg-gray-100 p-2 rounded shadow"
                                        >
                                            <span>
                                                <strong>{reward.rank}</strong>: {reward.prize}
                                            </span>
                                            <button type="button"
                                                onClick={() => removeReward(index)}
                                                className="text-red-500 hover:text-red-600"
                                            >
                                                Supprimer
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                type="button"
                                onClick={handleCreate}
                                className="bg-blue-500 mt-10 text-white p-2 rounded"
                            >
                                Créer
                            </button>
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                className="bg-gray-500 text-white p-2 rounded ml-2"
                            >
                                Annuler
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de modification */}
            {editModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Modifier le Hackathon</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-4">
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                    Téléchargez une photo
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                                {hackathonData.image && (
                                    <div className="mt-2">
                                        <img src={hackathonData.image} alt="Prévisualisation" className="w-16 h-16 object-cover rounded" />
                                        <p className="text-sm text-gray-500 mt-1">Photo téléchargée avec succès.</p>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nom du Hackathon"
                                value={hackathonData.name}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="datetime-local"
                                name="starDate"
                                placeholder="Date de début"
                                value={hackathonData.starDate}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="datetime-local"
                                name="endDate"
                                placeholder="Date de fin"
                                value={hackathonData.endDate}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Catégorie"
                                value={hackathonData.category}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Addresse de l'hackaton"
                                value={hackathonData.address}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={hackathonData.description}
                                onChange={handleChange}
                                className="mb-2 p-2 border rounded w-full"
                            />

                            <div className="mt-2">
                                <h3 className="text-xl font-bold mb-4">Récompenses</h3>
                                <div className="flex space-x-4 mb-4">
                                    <input
                                        type="text"
                                        name="rank"
                                        value={newReward.rank}
                                        onChange={handleRewardChange}
                                        placeholder="Rang (e.g., 1er, 2e)"
                                        className="border rounded px-2 py-1 w-1/3"
                                    />
                                    <input
                                        type="text"
                                        name="prize"
                                        value={newReward.prize}
                                        onChange={handleRewardChange}
                                        placeholder="Récompense (e.g., 1000XOF)"
                                        className="border rounded px-2 py-1 w-1/3"
                                    />
                                    <button
                                        onClick={addReward}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                                    >
                                        Ajouter
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {
                                        hackathonData && hackathonData.rewards && hackathonData.rewards.length > 0 &&
                                        hackathonData.rewards.map((reward, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-between items-center bg-gray-100 p-2 rounded shadow"
                                            >
                                                <span>
                                                    <strong>{reward.rank}</strong>: {reward.prize}
                                                </span>
                                                <button
                                                    onClick={() => removeReward(index)}
                                                    className="text-red-500 hover:text-red-600"
                                                >
                                                    Supprimer
                                                </button>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <button
                                type="button"
                                onClick={handleModify}
                                className="bg-yellow-500 text-white p-2 rounded"
                            >
                                Modifier
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditModalOpen(false)}
                                className="bg-gray-500 text-white p-2 rounded ml-2"
                            >
                                Annuler
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de confirmation de suppression */}
            {confirmDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Êtes-vous sûr de vouloir supprimer ce hackathon ?</h2>
                        <div className="flex justify-between">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                Supprimer
                            </button>
                            <button
                                onClick={() => setConfirmDeleteModal(false)}
                                className="bg-gray-500 text-white p-2 rounded mt-2"
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
