import React from 'react';
import { submitContactForm } from '../../action/api/contact/ContactAction'; // Adjust the path as needed
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            submitContactForm(formData,toast);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
       
    };

    return (
        <div className="main-content bg-gradient-to-l from-indigo-700 via-indigo-800 to-black   py-[100px] pt-[150px]">
            <div className="page-content">
                <section className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white">
                            Donnez votre avis
                        </h1>
                        <p className="mt-4 text-gray-50 ">
                            Aidez-nous à améliorer nos services en partageant vos retours et vos suggestions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Form Section */}
                        <div className="p-8 bg-white rounded-3xl shadow-lg dark:bg-gray-800">
                            <h2 className="text-2xl font-semibold text-white  mb-6">
                                Que devons-nous savoir ?
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Nom <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300   focus:ring-2 focus:ring-blue-500" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Email professionnel <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border   border-gray-300   focus:ring-2 focus:ring-blue-500" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Téléphone <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border   border-gray-300   focus:ring-2 focus:ring-blue-500" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Entreprise <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="company" 
                                        value={formData.company} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border   border-gray-300   focus:ring-2 focus:ring-blue-500" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border   border-gray-300   focus:ring-2 focus:ring-blue-500" 
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700">
                                    Envoyer
                                </button>
                            </form>
                        </div>
                        
                        {/* Testimonial and Partners Section */}
                        <div className="p-8 bg-white rounded-3xl shadow-lg dark:bg-gray-800">
                            {/*<img src="img/uvci.png" alt="UVCI Logo" className="h-12 w-auto mx-auto mb-8" /> */}
                            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                                Rejoignez des milliers d{"'"}entreprises qui nous font confiance pour optimiser leurs processus et collaborer efficacement.
                            </p>
                            
                            {/*<h3 className="text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">PARTENAIRES DE CONFIANCE</h3> */}
                            <div className="flex justify-center gap-6">
                                {/*<img src="img/uvci.png" alt="UVCI" className="h-10" />
                                <img src="img/esatic.jpg" alt="ESATIC" className="h-10" /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
