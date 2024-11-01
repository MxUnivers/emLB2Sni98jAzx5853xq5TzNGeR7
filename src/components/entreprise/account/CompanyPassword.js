import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RiLockPasswordFill } from "react-icons/ri";
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { EntrepriseEditPassword } from '../../../action/api/employeur/EmployeurAction';

const CompanyPassword = () => {
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            dispatch(EntrepriseEditPassword(idEntreprise, password, toast));
        } else {
            toast.info("Les mots de passe ne sont pas identiques");
        }
    };

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Changer le mot de passe</h3>
            <form onSubmit={handleSubmit} className=" space-y-5">
                <div class="grid grid-cols-2 gap-4">
                    <PasswordInput label="Nouveau mot de passe" value={password} onChange={setPassword} visible={visible}
                        placeholder="••••••••" />
                    <PasswordInput label="Confirmer le mot de passe" value={confirmPassword} onChange={setConfirmPassword}
                        visible={visible} placeholder="••••••••" />
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" checked={visible} onChange={() => setVisible(!visible)}
                        className="h-5 w-5"
                    />
                    <label className="text-sm text-gray-600">Afficher le mot de passe</label>
                </div>

                <div className="mt-6 text-right">
                    {loading ? (
                        <p className="text-gray-500 animate-pulse">En cours...</p>
                    ) : (
                        <button type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition flex justify-center items-center space-x-2">
                            <RiLockPasswordFill /> <span>Modifier</span>
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CompanyPassword;



const PasswordInput = ({ label, value, onChange, visible, placeholder }) => (
    <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type={visible ? "text" : "password"} value={value} onChange={(e) => onChange(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder={placeholder}
        />
    </div>
);
