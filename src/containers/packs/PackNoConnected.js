import React from 'react';
import { toast } from 'react-toastify';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { MdCheckCircle, MdNotifications, MdSchool } from 'react-icons/md';

const PackNoConnected = () => {
    const navigate = useNavigate();
    
    const handleConnected = () => {
        if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
            toast.info("Veuillez vous connecter ");
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Pack */}
                <div className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden">
                    <div className="text-lg font-medium text-indigo-900 uppercase p-6 text-center border-b border-gray-200 tracking-wide">
                        Étudiant
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <div className="text-center">
                            
                           
                        </div>
                    </div>
                    <ul className="my-6 space-y-4">
                        <li className="flex items-center">
                            <div className="bg-green-200 rounded-full p-2 text-green-700">
                                <MdCheckCircle className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-lg ml-3">Offres d{"'"}emplois Illimitées</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-green-200 rounded-full p-2 text-green-700">
                                <MdNotifications className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-lg ml-3">Notifications sur les offres</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-green-200 rounded-full p-2 text-green-700">
                                <MdSchool className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-lg ml-3">Bourse d'études à l'étranger</span>
                        </li>
                    </ul>
                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) == null && (
                        <a
                            onClick={() => {
                                if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
                                    handleConnected();
                                } else {
                                    navigate(`/${routing.connexion}`);
                                }
                            }}
                            className="cursor-pointer block text-center bg-indigo-500 hover:bg-indigo-600 p-4 text-white font-semibold rounded-md mt-8 transition duration-300"
                        >
                            Souscrire
                        </a>
                    )}
                </div>

                {/* Company/School Pack */}
                <div className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden">
                    <div className="text-lg font-medium text-indigo-900 uppercase p-6 text-center border-b border-gray-200 tracking-wide">
                        ENTREPRISE | ECOLE
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <div className="text-center">
                            
                          
                        </div>
                    </div>
                    <ul className="my-6 space-y-4">
                        <li className="flex items-center">
                            <div className="bg-green-200 rounded-full p-2 text-green-700">
                                <MdCheckCircle className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-lg ml-3">Offres d{"'"}emplois Illimitées</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-green-200 rounded-full p-2 text-green-700">
                                <MdNotifications className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-lg ml-3">Notifications sur les offres</span>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-green-200 rounded-full p-2 text-green-700">
                                <MdSchool className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-lg ml-3">Bourse d'études à l'étranger</span>
                        </li>
                    </ul>
                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) == null && (
                        <a 
                            onClick={() => {
                                if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
                                    handleConnected();
                                } else {
                                    navigate(`/${routing.connexion_recuteur}`);
                                }
                            }}
                            className="cursor-pointer block text-center bg-indigo-500 hover:bg-indigo-600 p-4 text-white font-semibold rounded-md mt-8 transition duration-300"
                        >
                        Souscrire
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PackNoConnected;
