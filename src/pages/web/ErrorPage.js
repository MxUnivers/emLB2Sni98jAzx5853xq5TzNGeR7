import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Erreur 404</h1>
            <p className="text-lg text-gray-600 mb-6">Oups! La page que vous recherchez n{"'"}existe pas.</p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Retour à l{"'"}accueil
            </Link>
        </div>
    );
};

export default ErrorPage;
