import React from 'react'
import { toast } from 'react-toastify'
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';

const PackNoConnected = () => {

    const navigate = useNavigate();
    const hanleConnected = () => {
        if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
            toast.info("Veillez vous connecter ");
        }
        return;
    }


    return (
        <div class="antialiased max-w-6xl mx-auto my-12 px-8">


            <div class="relative block md:flex items-center">
                <div class="w-full m-4 md:w-1/2 relative z-1 bg-gray-50 rounded shadow-lg overflow-hidden">
                    <div class="text-lg font-medium text-blue-900 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Etudiant</div>
                    <div class="block sm:flex md:block lg:flex items-center justify-center">
                        <div class="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                            <div class="inline-flex items-center">
                                <span class="text-3xl font-medium">1.4%</span>
                                <span class="text-xl text-gray-600 ml-2">+</span>
                                <span class="text-xl ml-2">20p</span>
                            </div>
                            <span class="block text-sm text-gray-600 mt-2"></span>
                        </div>
                        <div class="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                            <div class="inline-flex items-center">
                                <span class="text-3xl font-medium">2.9%</span>
                                <span class="text-xl text-gray-600 ml-2">+</span>
                                <span class="text-xl ml-2">20p</span>
                            </div>
                            <span class="block text-sm text-gray-600 mt-2">Bonus</span>
                        </div>
                    </div>
                    <div class="flex justify-center mt-3">
                        <ul>
                            <li class="flex items-center">
                                <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                    <svg class="w-4 h-4 icon-umbrella" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z" /><path class="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z" /></svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Offre emplois Illimités</span>
                            </li>
                            <li class="flex items-center mt-3">
                                <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                    <svg class="w-4 h-4 icon-shopping-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z" /><path class="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z" /></svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Notiifcation sur les Offres </span>
                            </li>
                            <li class="flex items-center mt-3">
                                <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-pie-chart"><path class="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z" /><path class="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z" /></svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Bourse d{"'"}etude à l{"'"}étranger</span>
                            </li>
                        </ul>
                    </div>
                    {
                        getAndCheckLocalStorage(localvalue.TYPEACCESS) == null &&
                        <a onClick={() => {
                            if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
                                hanleConnected();
                            } else {
                                navigate(`/${routing.connexion}`);
                            }
                        }} class={`block flex items-center justify-center bg-blue-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16`} href="#">
                            <span>Souscrire</span>
                            <span class="font-medium text-gray-700 ml-2">➔</span>
                        </a>
                    }
                </div>



                <div class="w-full m-4 md:w-1/2 relative z-1 bg-gray-50 rounded shadow-lg overflow-hidden">
                    <div class="text-lg font-medium text-blue-900 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
                        ENTREPRISE | ECOLE
                    </div>
                    <div class="block sm:flex md:block lg:flex items-center justify-center">
                        <div class="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                            <div class="inline-flex items-center">
                                <span class="text-3xl font-medium">1.4%</span>
                                <span class="text-xl text-gray-600 ml-2">+</span>
                                <span class="text-xl ml-2">20p</span>
                            </div>
                            <span class="block text-sm text-gray-600 mt-2"></span>
                        </div>
                        <div class="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                            <div class="inline-flex items-center">
                                <span class="text-3xl font-medium">2.9%</span>
                                <span class="text-xl text-gray-600 ml-2">+</span>
                                <span class="text-xl ml-2">20p</span>
                            </div>
                            <span class="block text-sm text-gray-600 mt-2">Bonus</span>
                        </div>
                    </div>
                    <div class="flex justify-center mt-3">
                        <ul>
                            <li class="flex items-center">
                                <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                    <svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z" /><path class="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z" /></svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Offre emplois Illimités</span>
                            </li>
                            <li class="flex items-center mt-3">
                                <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                    <svg class="w-4 h-4 icon-shopping-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z" /><path class="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z" /></svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Notiifcation sur les Offres </span>
                            </li>
                            <li class="flex items-center mt-3">
                                <div class="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                    <svg class="w-4 h-4 icon-pie-chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z" /><path class="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z" /></svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Bourse d{"'"}etude à l{"'"}étranger</span>
                            </li>
                        </ul>
                    </div>
                    {
                        getAndCheckLocalStorage(localvalue.TYPEACCESS) == null &&
                        <a onClick={() => {
                            if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
                                hanleConnected();
                            } else {
                                navigate(`/${routing.connexion_recuteur}`);
                            }
                        }} class={`block flex items-center justify-center bg-blue-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16`} href="#">
                            <span>Souscrire</span>
                            <span class="font-medium text-gray-700 ml-2">➔</span>
                        </a>
                    }
                </div>


            </div>


        </div>
    )
}

export default PackNoConnected
