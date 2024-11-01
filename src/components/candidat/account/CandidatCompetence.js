import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { competences, languages_school, level_School, salaires_School, years_experience_school } from '../../../utlis/options/candidatOption';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCandidat, { CandidatEditCompetence } from '../../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { toast } from 'react-toastify';

const CandidatCompetence = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);

    const [selectCompetences, setselectCompetences] = useState([]);
    const [description, setdescription] = useState('');
    const [selectLangues, setselectLangues] = useState([]);
    const [years_experience, setyears_experience] = useState('');
    const [level_school, setlevel_school] = useState('');
    const [salaire, setsalaire] = useState('');

    useEffect(() => {
        if (candidat) {
            setselectCompetences(candidat.competences || []);
            setyears_experience(candidat.years_experience || '');
            setsalaire(candidat.salaire || '');
            setlevel_school(candidat.level_school || '');
            setselectLangues(candidat.langues || []);
            setdescription(candidat.description || '');
        }
    }, [candidat]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            CandidatEditCompetence(
                idCandidat, salaire, level_school, years_experience, selectCompetences, selectLangues, description, toast
            )
        );
    };

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    return (
        <div className="min-w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Profil</h3>
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Competences */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Compétences</label>
                    <Select
                        isMulti
                        options={competences}
                        value={selectCompetences}
                        onChange={setselectCompetences}
                        placeholder="Choisissez vos compétences"
                        className="rounded-md"
                    />
                </div>

                {/* Languages */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Langues</label>
                    <Select
                        isMulti
                        options={languages_school}
                        value={selectLangues}
                        onChange={setselectLangues}
                        placeholder="Choisissez vos langues"
                        className="rounded-md"
                    />
                </div>

                {/* Level of Study */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Niveau d{"'"}étude</label>
                    <select
                        onChange={(e) => setlevel_school(e.target.value)}
                        value={level_school}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">-- Choix --</option>
                        {level_School.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Years of Experience */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Année d{"'"}expérience (travail)</label>
                    <select
                        onChange={(e) => setyears_experience(e.target.value)}
                        value={years_experience}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">-- Choix --</option>
                        {years_experience_school.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Salary */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Salaire perçu</label>
                    <select
                        onChange={(e) => setsalaire(e.target.value)}
                        value={salaire}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">-- Choix --</option>
                        {salaires_School.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Description</label>
                    <textarea
                        rows={5}
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Décrivez votre profil..."
                    />
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className={`px-6 py-2 font-semibold text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 ${loading ? 'opacity-50' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'En cours...' : 'Enregistrer'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CandidatCompetence;
