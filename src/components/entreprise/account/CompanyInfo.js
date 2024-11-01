import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localvalue } from '../../../utlis/storage/localvalue';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { toast } from 'react-toastify';
import { EntrepriseEditGenerale, useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';

const CompanyInfo = () => {
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, error, entreprise } = useFetchEntreprise(idEntreprise);

    const [full_name, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [title_post, setTitlePost] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [adresse, setAdresse] = useState('');
    const [pays, setPays] = useState('');

    useEffect(() => {
        if (entreprise) {
            setUsername(entreprise.username || '');
            setFullName(entreprise.full_name || '');
            setFirstname(entreprise.firstname || '');
            setLastname(entreprise.lastname || '');
            setEmail(entreprise.email || '');
            setTelephone(entreprise.telephone || '');
            setTitlePost(entreprise.title_post || '');
            setDateNaissance(entreprise.dateNaissance || '');
            setAdresse(entreprise.adresse || '');
            setPays(entreprise.pays || '');
        }
    }, [entreprise]);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(EntrepriseEditGenerale(idEntreprise, full_name, username, firstname, lastname, dateNaissance, email, title_post, telephone, toast));
    };

    return (
        <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Informations Générales</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                {[
                    { label: "Nom d'utilisateur", value: username, setter: setUsername, type: "text" },
                    { label: "Nom de votre entreprise", value: full_name, setter: setFullName, type: "text" },
                    { label: "Nom", value: firstname, setter: setFirstname, type: "text" },
                    { label: "Prénoms", value: lastname, setter: setLastname, type: "text" },
                    { label: "Téléphone", value: telephone, setter: setTelephone, type: "tel" },
                    { label: "Email", value: email, setter: setEmail, type: "email" },
                    { label: "Date de naissance", value: dateNaissance, setter: setDateNaissance, type: "date" },
                    { label: "Titre du poste", value: title_post, setter: setTitlePost, type: "text" },
                ].map((field, index) => (
                    <div key={index}>
                        <label className="text-gray-700 font-medium" htmlFor={field.label}>
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            id={field.label}
                            value={field.value}
                            onChange={(e) => field.setter(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            required
                        />
                    </div>
                ))}
                <div>
                    <label className="text-gray-700 font-medium" htmlFor="address">Adresse</label>
                    <input
                        type="text"
                        id="address"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                        placeholder="Adresse de l'entreprise"
                    />
                </div>
                <div>
                    <label className="text-gray-700 font-medium" htmlFor="country">Pays</label>
                    <select
                        id="country"
                        value={pays}
                        onChange={(e) => setPays(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    >
                        <option value="">-- Sélectionner le pays --</option>
                        {/* Replace with dynamic country options */}
                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option value="France">France</option>
                        {/* Add other options dynamically */}
                    </select>
                </div>
                <div className="text-right mt-8">
                    {loading ? (
                        <p className="text-gray-500 animate-pulse">En cours...</p>
                    ) : (
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
                        >
                            Mettre à jour
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CompanyInfo;
