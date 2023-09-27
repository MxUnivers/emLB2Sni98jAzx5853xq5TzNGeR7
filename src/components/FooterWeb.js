import React from 'react'
import { app_bg } from '../utlis/config';
import {BsLinkedin} from  "react-icons/bs";
import { routing } from '../utlis/routing';


const FooterWeb = () => {
    return (
        <footer class="footer  ">

            <section class={`py-12  ${app_bg.bg_blue}`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 lg:gap-10">
                        <div class="col-span-12 xl:col-span-4">
                            <div class="mr-12">
                                <h4 class="text-white mb-6 text-[23px]">Juman</h4>
                                <p class="text-white/50 dark:text-gray-300">
                                    Decouvrez le monde de l{"'"}entreprise 
                                </p>
                                <p class="mt-3 text-white dark:text-gray-50">Suivez nous sur </p>
                                <div class="mt-5">
                                    <ul class="flex gap-3">
                                        <li
                                            class="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                                            <a href="https://www.linkedin.com/company/uriel-traders/" target='_blank' >
                                                <BsLinkedin class="h-7 w-7"/>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p class="mb-6 text-white text-16">Scoial</p>
                            <ul class="space-y-4">
                                <li
                                    class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                                    <a href={`/${routing.blog_list}`}>
                                        <i class="mdi mdi-chevron-right"></i> Articles
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p class="mb-6 text-white text-16">Jobs</p>
                            <ul class="space-y-4">
                                <li class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                                    <a href={`/${routing.job_list}`}>
                                        <i class="mdi mdi-chevron-right"></i> Offres emplois
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p class="mb-6 text-white text-16">Abonnement</p>
                            <ul class="space-y-4">
                                <li
                                    class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                                    <a href={`/${routing.pricing}`}>
                                        <i class="mdi mdi-chevron-right"></i> Packs
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
                            <p class="mb-6 text-white text-16">Support</p>
                            <ul class="space-y-4">
                                <li
                                    class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right"></i> Help Center
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-6 border-t bg-zinc-800 border-gray-100/10 dark:bg-neutral-900">
                <div class="container mx-auto">
                    <div class="text-center">
                        <p class="mb-0 text-center text-white/50">
                            <script>document.write(new Date().getFullYear())</script>
                            © Copy Right by
                            <a href="https://mon-portfolio-mxunivers.web.app" target="_blank"
                                class="underline transition-all duration-300 hover:text-gray-50"> Dev Aymar Bly</a>
                        </p>
                    </div>
                </div>
            </section>

        </footer>
    )
}

export default FooterWeb;
