import React from 'react'
import { FiUser, FiLogOut, FiList, FiBriefcase } from "react-icons/fi";



const Settings = () => {
    return (
        <div className="flex flex-col items-center justify ">
            <h2 className="text-2xl font-bold mb-4">Paramètres</h2>
            <div className="grid grid-cols-2 gap-3 ">
                <div className="flex items-center bg-blue-900 text-white p-4 rounded-lg">
                    <FiUser className="mr-2" />
                    <span>Profil</span>
                </div>
                <div className="flex items-center bg-blue-900 text-white p-4 rounded-lg">
                    <FiLogOut className="mr-2" />
                    <span>Déconnexion</span>
                </div>
                <div className="flex items-center bg-blue-900 text-white p-4 rounded-lg">
                    <FiList className="mr-2" />
                    <span>Listes des offres</span>
                </div>
                <div className="flex items-center bg-blue-900 text-white p-4 rounded-lg">
                    <FiBriefcase className="mr-2" />
                    <span>Annonces</span>
                </div>
            </div>
        </div>
    )
}

export default Settings;