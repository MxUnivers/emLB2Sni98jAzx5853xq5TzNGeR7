import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { toast } from 'react-toastify';
import { EntrepriseEditCompetence, useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';
import { employers, existence_entreprise, secteursActivite } from '../../../utlis/options/employeurOption';
import { optionPays } from '../../../utlis/options/optionDivers';
import { languages_school, salaires_School } from '../../../utlis/options/candidatOption';

const CompanyCompetence = () => {
    const idCompany = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, error, entreprise } = useFetchEntreprise(idCompany);

    const [title_post, setTitlePost] = useState('');
    const [selectCompetences, setSelectCompetences] = useState([]);
    const [selectLangues, setSelectLangues] = useState([]);
    const [employers_count, setEmployerCount] = useState('');
    const [years_experience, setYearsExperience] = useState('');
    const [salaire, setSalaire] = useState('');
    const [paysEntreprise, setPaysEntreprise] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (entreprise) {
            setTitlePost(entreprise.title_post || '');
            setSelectCompetences(entreprise.secteur_activites || []);
            setSelectLangues(entreprise.langues || []);
            setEmployerCount(entreprise.employers_count || '');
            setYearsExperience(entreprise.dateNaissance_entreprise || '');
            setSalaire(entreprise.salaire_capital || '');
            setPaysEntreprise(entreprise.pays_entreprise || '');
            setDescription(entreprise.description_entreprise || '');
        }
    }, [entreprise]);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(EntrepriseEditCompetence(idCompany, salaire, employers_count, paysEntreprise,
            title_post, selectCompetences, selectLangues, description, toast));
    };

    return (
        <div className="min-w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Profil Entreprise</h3>
            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="mb-4">
                    <label htmlFor="title_post" className="text-gray-700 font-medium">Titre de votre poste</label>
                    <input
                        type="text"
                        id="title_post"
                        value={title_post}
                        onChange={(e) => setTitlePost(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Titre du poste"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Secteur(s) de votre entreprise</label>
                    <Select
                        isMulti
                        options={secteursActivite}
                        value={selectCompetences}
                        onChange={setSelectCompetences}
                        placeholder="Choisissez vos compétences"
                        className="mt-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Langues</label>
                    <Select
                        isMulti
                        options={languages_school}
                        value={selectLangues}
                        onChange={setSelectLangues}
                        placeholder="Sélectionnez vos langues"
                        className="mt-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Nombre d{"'"}employés</label>
                    <select
                        value={employers_count}
                        onChange={(e) => setEmployerCount(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">-- Choix --</option>
                        {employers.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Année d{"'"}existence</label>
                    <select
                        value={years_experience}
                        onChange={(e) => setYearsExperience(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">-- Choix --</option>
                        {existence_entreprise.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Salaire Capital (annuel)</label>
                    <select
                        value={salaire}
                        onChange={(e) => setSalaire(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">-- Choix --</option>
                        {salaires_School.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Pays</label>
                    <select
                        value={paysEntreprise}
                        onChange={(e) => setPaysEntreprise(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">-- Choix --</option>
                        {optionPays.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Description</label>
                    <textarea
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Décrivez votre entreprise"
                    />
                </div>

                <div className="mt-6 text-right">
                    {loading ? (
                        <p className="text-gray-500 animate-pulse">En cours...</p>
                    ) : (
                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Enregistrer
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CompanyCompetence;
