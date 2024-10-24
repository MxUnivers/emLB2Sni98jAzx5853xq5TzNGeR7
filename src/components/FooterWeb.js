import React from 'react';
import {BsLinkedin, BsInstagram} from  "react-icons/bs";
import { routing } from '../utlis/routing';
import './FooterWeb.css'; // Make sure to link your CSS file for styling

const FooterWeb = () => {
    return (
        <footer className="footer">

            <section className="py-12 bg-dark">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 lg:gap-10">
                        
                        {/* Footer Left Column */}
                        <div className="col-span-12 xl:col-span-4">
                            <div className="mr-12">
                                <h4 className="text-white mb-6 text-[23px]">Jouman</h4>
                                <p className="text-white/50 dark:text-gray-300">
                                    Découvrez le monde de l{"'"}entreprise 
                                </p>
                                <p className="mt-3 text-white dark:text-gray-50">Suivez nous sur :</p>
                                <div className="mt-5">
                                    <ul className="flex gap-3">
                                        <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-blue-800 hover:border-transparent">
                                            <a href="https://www.linkedin.com/company/uriel-traders/" target='_blank'>
                                                <BsLinkedin className="h-7 w-7"/>
                                            </a>
                                        </li>
                                        <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-pink-600 hover:border-transparent">
                                            <a href="https://www.instagram.com/jouman" target='_blank'>
                                                <BsInstagram className="h-7 w-7"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Right Columns */}
                        <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p className="mb-6 text-white text-16">Social</p>
                            <ul className="space-y-4">
                                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50">
                                    <a href={`/${routing.blog_list}`}>
                                        <i className="mdi mdi-chevron-right"></i> Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p className="mb-6 text-white text-16">Emplois</p>
                            <ul className="space-y-4">
                                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50">
                                    <a href={`/${routing.job_list}`}>
                                        <i className="mdi mdi-chevron-right"></i> Offres emplois
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p className="mb-6 text-white text-16">Abonnement</p>
                            <ul className="space-y-4">
                                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50">
                                    <a href={`/${routing.pricing}`}>
                                        <i className="mdi mdi-chevron-right"></i> Packs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p className="mb-6 text-white text-16">Contact</p>
                            <ul className="space-y-4">
                                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50">
                                    <a href={`/${routing.aboutus}`}>
                                        <i className="mdi mdi-chevron-right"></i> A propos
                                    </a>
                                </li>
                                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50">
                                    <a href={`/${routing.contact}`}>
                                        <i className="mdi mdi-chevron-right"></i> contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 border-t bg-zinc-800 border-gray-100/10 dark:bg-neutral-900">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="mb-0 text-center text-white/50">
                            © Copy 2024 par
                            <a href="https://mon-portfolio-mxunivers.web.app" target="_blank" className="underline transition-all duration-300 hover:text-gray-50"> Dev Aymar Bly</a>
                        </p>
                    </div>
                </div>
            </section>

        </footer>
    );
};

export default FooterWeb;
