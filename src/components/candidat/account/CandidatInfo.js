import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCandidat, { CandidatEditGenerale } from '../../../action/api/candidat/CandidatAction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { optionPays } from '../../../utlis/options/optionDivers';
import { toast } from 'react-toastify';

const CandidatInfo = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [titlePost, setTitlePost] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [adresse, setAdresse] = useState('');
    const [pays, setPays] = useState('');

    useEffect(() => {
        if (candidat) {
            setUsername(candidat.username || '');
            setFirstname(candidat.firstname || '');
            setLastname(candidat.lastname || '');
            setEmail(candidat.email || '');
            setTelephone(candidat.telephone || '');
            setTitlePost(candidat.title_post || '');
            setDateNaissance(candidat.dateNaissance || '');
            setAdresse(candidat.adresse || '');
            setPays(candidat.pays || '');
        }
    }, [candidat]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            CandidatEditGenerale(idCandidat, username, firstname, lastname, dateNaissance, email, titlePost, telephone, adresse, pays, toast)
        );
    };

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informations du compte</h3>
            <form onSubmit={handleSubmit} className="w-full space-y-5">
                <TextInput label="Nom d'utilisateur" value={username} onChange={setUsername} placeholder="Nom d'utilisateur" />
                <TextInput label="Nom" value={firstname} onChange={setFirstname} placeholder="Nom" />
                <TextInput label="Prénoms" value={lastname} onChange={setLastname} placeholder="Prénoms" />
                <TextInput label="Téléphone" value={telephone} onChange={setTelephone} type="tel" placeholder="Numéro de téléphone" />
                <TextInput label="Email" value={email} onChange={setEmail} type="email" placeholder="Email" />
                <TextInput label="Date de Naissance" value={dateNaissance} onChange={setDateNaissance} type="date" placeholder="Date de naissance" />
                <TextInput label="Titre du Poste" value={titlePost} onChange={setTitlePost} placeholder="Titre du poste" />
                <TextInput label="Adresse" value={adresse} onChange={setAdresse} placeholder="Adresse" />
                <SelectInput label="Pays" value={pays} onChange={setPays} options={optionPays} />
                
                <div className="mt-6 text-right">
                    {loading ? (
                        <p className="text-gray-500 animate-pulse">En cours...</p>
                    ) : (
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Mettre à jour
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

const TextInput = ({ label, value, onChange, type = 'text', placeholder }) => (
    <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={placeholder}
        />
    </div>
);

const SelectInput = ({ label, value, onChange, options }) => (
    <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
            <option value="">-- Choix --</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default CandidatInfo;
