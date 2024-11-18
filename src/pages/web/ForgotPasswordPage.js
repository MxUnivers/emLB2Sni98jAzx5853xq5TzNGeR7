import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEnvelope, FaKey, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { UserResetPasswordForget, UserSendCodeverfiy, UserverfiyCode } from '../../action/api/candidat/CandidatAction';

const ForgotPasswordPage = () => {
    const [loadingUser, setLoadingUser] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(new Array(4).fill(''));
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setStep(1);
    }, []);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        UserSendCodeverfiy(email, email, setStep);
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        setLoadingUser(true);
        UserverfiyCode(email, email, code.join(''), setStep);
        setLoadingUser(false);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setLoadingUser(true);
        UserResetPasswordForget(email, newPassword, setStep, setShowModal);
        setEmail('');
        setCode(new Array(4).fill(''));
        setNewPassword('');
        setConfirmPassword('');
        setLoadingUser(false);
    };

    const handleCodeChange = (e, index) => {
        if (/^[0-9]$/.test(e.target.value) || e.target.value === '') {
            const newCode = [...code];
            newCode[index] = e.target.value;
            setCode(newCode);

            if (e.target.value !== '' && index < 3) {
                document.getElementById(`code-${index + 1}`).focus();
            } else if (index === 3 && e.target.value !== '') {
                document.getElementById(`code-${index}`).blur();
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Mot de passe oublié</h2>
                <hr className="mb-4"/>
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit} className="space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="formEmail">
                                Email <FaEnvelope className="inline-block ml-2" />
                            </label>
                            <input
                                type="email"
                                id="formEmail"
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Entrez votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loadingUser}
                        >
                            {loadingUser ? (
                                <span className="flex justify-center">
                                    <div className="w-6 h-6 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                </span>
                            ) : (
                                'Envoyer le code de vérification'
                            )}
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleCodeSubmit} className="space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2">Code de vérification</label>
                            <div className="flex justify-between space-x-2">
                                {code.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        id={`code-${index}`}
                                        value={digit}
                                        onChange={(e) => handleCodeChange(e, index)}
                                        className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loadingUser}
                        >
                            {loadingUser ? (
                                <span className="flex justify-center">
                                    <div className="w-6 h-6 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                </span>
                            ) : (
                                'Vérifier le code'
                            )}
                        </button>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="formNewPassword">
                                Nouveau mot de passe <FaKey className="inline-block ml-2" />
                            </label>
                            <input
                                type="password"
                                id="formNewPassword"
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Entrez votre nouveau mot de passe"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2" htmlFor="formConfirmPassword">
                                Confirmer le mot de passe <FaCheckCircle className="inline-block ml-2" />
                            </label>
                            <input
                                type="password"
                                id="formConfirmPassword"
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirmez votre mot de passe"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loadingUser}
                        >
                            {loadingUser ? (
                                <span className="flex justify-center">
                                    <div className="w-6 h-6 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                                </span>
                            ) : (
                                'Réinitialiser le mot de passe'
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
