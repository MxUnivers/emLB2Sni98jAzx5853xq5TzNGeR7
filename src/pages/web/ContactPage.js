import React, { useState } from 'react';
import { submitContactForm } from '../../action/api/contact/ContactAction';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false); // Ajout de l'état de chargement

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
        if (!formData.email.trim()) {
            newErrors.email = "L'email est requis.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Adresse email invalide.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Le numéro de téléphone est requis.";
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Format invalide. 10 à 15 chiffres requis.";
        }

        if (!formData.company.trim()) newErrors.company = "Le nom de l'entreprise est requis.";
        if (!formData.message.trim()) newErrors.message = "Le message ne peut pas être vide.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Veuillez corriger les erreurs.");
            return;
        }

        setIsLoading(true); // Début du chargement

        try {
            await submitContactForm(formData, toast);
            toast.success("Votre message a été envoyé avec succès !");
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
        } catch (error) {
            toast.error("Erreur lors de l'envoi du message.");
        } finally {
            setIsLoading(false); // Fin du chargement
        }
    };

    return (
        <div className="main-content bg-gradient-to-l from-indigo-700 via-indigo-800 to-black py-[100px] pt-[150px]">
            <div className="page-content">
                <section className="max-w-7xl mx-auto px-6">
                    {/* Slogan Motivant */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white">📝 Donnez votre avis, Faites-nous grandir !</h1>
                        <p className="mt-4 text-gray-50">
                            Aidez-nous à améliorer nos services en partageant vos retours et suggestions.
                        </p>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Formulaire de Contact */}
                        <div className="p-8 bg-white rounded-3xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">📬 Contactez-nous</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Champ Nom */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Nom <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                {/* Champ Email */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                {/* Champ Téléphone */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Téléphone <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>

                                {/* Champ Entreprise */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Entreprise <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="company" 
                                        value={formData.company} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                                </div>

                                {/* Champ Message */}
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Votre Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" 
                                        rows="4"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                {/* Bouton Envoyer avec Loader */}
                                <button 
                                    type="submit" 
                                    className={`w-full py-3 text-white font-semibold rounded-lg shadow ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                                            Envoi en cours...
                                        </span>
                                    ) : (
                                        "📩 Envoyer"
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Section Témoignages & Partenaires */}
                        <div className="p-8 bg-white rounded-3xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">✨ Pourquoi nous contacter ?</h3>
                            <p className="text-gray-600 text-center mb-8">
                                Nous valorisons vos retours et travaillons chaque jour pour améliorer nos services.
                                Vous avez une question ou une suggestion ? Faites-nous savoir !
                            </p>
                            
                            {/*<h4 className="text-center text-lg font-semibold text-gray-800 mb-4">Nos partenaires de confiance</h4> */}
                            <div className="flex justify-center gap-6">
                                <img src="contactpage.jpg" alt="contact" className="h-96 w-full rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
