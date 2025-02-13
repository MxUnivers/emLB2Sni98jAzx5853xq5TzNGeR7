import React from 'react';
import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { routing } from '../utlis/routing';

const FooterWeb = () => {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  gap-10">
                    
                    {/* Section Jouman */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img src="assets/images/logo-dark.png" className="h-10 w-10 rounded-lg" alt="Jouman Logo"/>
                        </div>
                        <p className="text-sm text-gray-100 w-[400px]">
                            <strong className="text-xl text-white">Jouman</strong> vous accompagne dans votre développement professionnel en vous connectant aux meilleures opportunités. 
                            Découvrez des offres d’emploi adaptées à votre profil, explorez le monde des startups, participez à des hackathons 
                            inspirants et accédez à des formations pour booster votre carrière.
                        </p>
                    </div>

                    {/* Section Liens Rapides */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Liens rapides</h4>
                        <ul className="space-y-2">
                            <li><a href={`/${routing.job_list}`} className="hover:text-white">Emplois</a></li>
                            <li><a href={`/${routing.startupspage}`} className="hover:text-white">Startup-Land</a></li>
                            <li><a href={`/${routing.hackatonupspage}`} className="hover:text-white">Hackathon-Land</a></li>
                            <li><a href={`/${routing.formation_list}`} className="hover:text-white">Formations</a></li>
                        </ul>
                    </div>

                    {/* Section Autres Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Autres Services</h4>
                        <ul className="space-y-2">
                            <li><a href={`/${routing.human4aiall}`} className="hover:text-white">Human AI</a></li>
                            <li><a href={`/${routing.bourse_list}`} className="hover:text-white">Bourses</a></li>
                            <li><a href={`/${routing.aboutus}`} className="hover:text-white">Qui sommes-nous</a></li>
                            <li><a href={`/${routing.contact}`} className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Section Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Besoin d{"'"}aide ?</h4>
                        <p className="text-sm text-gray-100">Contactez-nous pour toute question ou information.</p>
                        <div className="mt-4">
                            <a href={`/${routing.contact}`} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                                Nous Contacter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section Réseaux Sociaux */}
                <div className="mt-10 text-center">
                    <p className="text-white font-semibold mb-3">Suivez-nous :</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-blue-800 transition duration-300">
                            <BsLinkedin className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-pink-600 transition duration-300">
                            <BsInstagram className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300">
                            <BsFacebook className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-sky-500 transition duration-300">
                            <BsTwitter className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-red-600 transition duration-300">
                            <BsYoutube className="h-5 w-5 text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Section Copyright */}
            <div className="border-t border-gray-700 py-4 mt-10 text-center text-sm">
                © 2024 <a href="https://mon-portfolio-mxunivers.web.app" target="_blank" className="hover:underline">Dev Aymar Bly</a>. Tous droits réservés.
            </div>
        </footer>
    );
};

export default FooterWeb;
