import React from 'react'

const ContactPage = () => {
    return (
        <div class="main-content">
            <div class="page-content mt-28">
                <section class="w-full py-10 ">
                    <div class="w-full mx-10 px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                        <div class="w-full relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
                            <h1 class="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            Donner votre avis
                             <span class="opacity-80"></span></h1>
                            <p class="mt-6 text-gray-700 dark:text-gray-300">Nous vous aiderons à trouver le bon plan et la tarification pour votre entreprise.</p>
                        </div>

                        <div class="w-full mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div class="relative w-full">
                                <form action="#" class="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                                    <div class="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                                    <div class="relative">
                                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Que devons-nous savoir ?</h2>
                                        <div class="mt-8 mb-6 space-y-4">
                                            <div>
                                                <label for="name" class="mb-2 block text-gray-600 dark:text-gray-300">Votre nom <span class="text-xl text-red-500 dark:text-red-400">*</span></label>
                                                <input type="text" name="name" id="name" autocomplete="name" class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                                                <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Ce champ est requis.</span>
                                            </div>
                                            <div>
                                                <label for="email" class="mb-2 block text-gray-600 dark:text-gray-300">Email professionnel <span class="text-xl text-red-500 dark:text-red-400">*</span></label>
                                                <input type="email" name="email" id="email" autocomplete="email" class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                                                <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Ce champ est requis.</span>
                                            </div>
                                            <div>
                                                <label for="phone" class="mb-2 block text-gray-600 dark:text-gray-300">Téléphone <span class="text-xl text-red-500 dark:text-red-400">*</span></label>
                                                <input type="tel" name="phone" id="phone" autocomplete="tel" class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                                                <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Ce champ est requis.</span>
                                            </div>
                                            <div>
                                                <label for="company" class="mb-2 block text-gray-600 dark:text-gray-300">Nom de l{"'"}entreprise <span class="text-xl text-red-500 dark:text-red-400">*</span></label>
                                                <input type="text" name="company" id="company" autocomplete="organization" class="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                                                <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Ce champ est requis.</span>
                                            </div>
                                            <div>
                                                <label for="message" class="mb-2 block text-gray-600 dark:text-gray-300">Message</label>
                                                <textarea name="message" id="message" class="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>
                                                <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">Ce champ est requis.</span>
                                            </div>
                                        </div>
                                        <p class="mb-8 text-sm text-gray-600 dark:text-gray-300">En cliquant sur Soumettre ci-dessous, vous acceptez le traitement de vos informations personnelles par PlanetScale conformément à la Politique de confidentialité.</p>
                                        <button type="submit" class="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                                            <span class="relative text-base font-semibold text-white dark:text-gray-900">Commencer</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="w-full">
                                <div class="w-full relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:px-12">
                                    <div class="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                                    <div class="relative">
                                        <img class="h-12 w-auto dark:contrast-100 dark:grayscale dark:invert" 
                                        src="img/uvci.png" alt="Microsoft" width="" height="" />
                                        <p class="mt-2 mb-8 text-gray-600 dark:text-gray-300">Rejoignez des milliers d'entreprises qui ont transformé leur manière de travailler grâce à nos solutions. Maximisez l'efficacité et la collaboration dans votre équipe.</p>
                                        <div class="flex gap-4">
                                            <img class="h-12 w-12 rounded-full" src="../images/avatars/avatar-2.webp" alt="Avatar de l'utilisateur" width="200" height="200" loading="lazy" />
                                            <div>
                                                <h2 class="leading-0 text-lg font-medium text-gray-700 dark:text-white">Randy Doe</h2>
                                                <p class="leading-0 -mt-0.5 text-sm text-gray-500 dark:text-gray-400">Développeur Backend</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-12 text-center">
                                    <a class='text-sm font-semibold tracking-widest dark:text-white' href='#'>FAIT CONFIANCE PAR LES MEILLEURES PARTENAIRES </a>
                                    <div class="mt-8 flex flex-wrap justify-center gap-6  contrast-200  dark:brightness-200 dark:contrast-0 lg:gap-x-24">
                                        <img class="h-8 w-auto lg:h-10 lg:w-auto" src="img/uvci.png" loading="lazy" alt="Airbnb" width="" height="" />
                                        <img class="h-8 w-auto lg:h-10 lg:w-auto" src="img/esatic.jpg" loading="lazy" alt="Coty" width="" height="" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default ContactPage;