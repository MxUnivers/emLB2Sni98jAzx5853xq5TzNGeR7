import React from 'react';

const ContactPage = () => {
    return (
        <div className="main-content bg-gray-50 dark:bg-gray-900 py-16">
            <div className="page-content">
                <section className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                            Donnez votre avis
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Aidez-nous à améliorer nos services en partageant vos retours et vos suggestions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div className="p-8 bg-white rounded-3xl shadow-lg dark:bg-gray-800">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                                Que devons-nous savoir ?
                            </h2>
                            <form action="#" className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Nom <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" name="name" className="w-full px-4 py-2 mt-1 rounded-lg border dark:bg-gray-700 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Email professionnel <span className="text-red-500">*</span>
                                    </label>
                                    <input type="email" name="email" className="w-full px-4 py-2 mt-1 rounded-lg border dark:bg-gray-700 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Téléphone <span className="text-red-500">*</span>
                                    </label>
                                    <input type="tel" name="phone" className="w-full px-4 py-2 mt-1 rounded-lg border dark:bg-gray-700 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Entreprise <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" name="company" className="w-full px-4 py-2 mt-1 rounded-lg border dark:bg-gray-700 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea name="message" className="w-full px-4 py-2 mt-1 rounded-lg border dark:bg-gray-700 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
                                    Envoyer
                                </button>
                            </form>
                        </div>
                        
                        {/* Testimonial and Partners Section */}
                        <div className="p-8 bg-white rounded-3xl shadow-lg dark:bg-gray-800">
                            <img src="img/uvci.png" alt="UVCI Logo" className="h-12 w-auto mx-auto mb-8" />
                            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                                Rejoignez des milliers d{"'"}entreprises qui nous font confiance pour optimiser leurs processus et collaborer efficacement.
                            </p>
                            <div className="flex items-center mb-8">
                                <img className="h-12 w-12 rounded-full mr-4" src="img/avatar-user.jpg" alt="User Avatar" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Randy Doe</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Développeur Backend</p>
                                </div>
                            </div>
                            <h3 className="text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">PARTENAIRES DE CONFIANCE</h3>
                            <div className="flex justify-center gap-6">
                                <img src="img/uvci.png" alt="UVCI" className="h-10" />
                                <img src="img/esatic.jpg" alt="ESATIC" className="h-10" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
