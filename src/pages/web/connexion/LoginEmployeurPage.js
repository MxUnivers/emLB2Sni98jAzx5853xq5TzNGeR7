import React from 'react'
import  {FaSpinner} from "react-icons/fa"; 
import BarnerEmployeurAuth from '../../../components/web/auth/BarnerEmployeurAuth';
import { routing } from '../../../utlis/routing';



const LoginEmployeurPage = () => {
    var logo =  "https://images.pexels.com/photos/5668878/pexels-photo-5668878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    return (
        <div>
        
        <BarnerEmployeurAuth/>
        
        <div className="mt-20 min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Connectez-vous à votre compte employeur
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Adresse email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <span className="  inset-y-0 flex items-center pl-3">
                                    <FaSpinner
                                        className="h-5 w-5 text-blue-500 group-hover:text-blue" />
                                </span>
                                <span className=" inset-y-0 flex items-center pr-3">
                                    Connexion
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                           

                            <div className="text-sm">
                                <a href={`/${routing.inscriptionEmployer}`} className="font-medium text-blue-600 hover:text-blue-500 underline">
                                     Créer un compte
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </div>

    )
}

export default LoginEmployeurPage;
