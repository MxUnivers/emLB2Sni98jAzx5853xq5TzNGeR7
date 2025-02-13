import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseurl } from '../utlis/url/baseurl';
import { useNavigate } from 'react-router-dom';
import { routing } from '../utlis/routing';
import { localvalue } from '../utlis/storage/localvalue';

const LoginAdminPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Veuillez renseigner toutes les informations.");
            return;
        }

        try {
            const response = await fetch(`${baseurl.url}/api/v1/admins/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${baseurl.TypeToken} ${baseurl.token}`
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Connexion réussie");
                console.log("Données administrateur:", data);
                sessionStorage.setItem(localvalue.ADMIN_CONNECTED_TYPE, data?.data.role);
                sessionStorage.setItem(localvalue.ADMIN_CONNECTED, data?.token);
                sessionStorage.setItem(localvalue.ADMIN_CONNECTED_ID, data?.data._id);
                navigate(`/${routing.admin_dashboard}`);
            } else {
                toast.error(data.message || "Erreur lors de la connexion");
            }
        } catch (error) {
            toast.error("Une erreur s'est produite. Veuillez réessayer.");
            console.error("Erreur lors de la connexion:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                    <img src="assets/images/logo-dark.png" alt="Logo" className="h-16" />
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-700">Connexion Administrateur</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        {/*<a href="#" className="text-sm text-indigo-500 hover:underline">Mot de passe oublié?</a> */}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginAdminPage;




