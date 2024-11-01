import React from 'react'
import { useState } from 'react';
import CompanyPhoto from '../../components/entreprise/account/CompanyPhoto';
import CompanyCompetence from '../../components/entreprise/account/CompanyCompetence';
import CompanyInfo from '../../components/entreprise/account/CompanyInfo';
import CompanySocial from '../../components/entreprise/account/CompanySocial';
import CompanyPassword from '../../components/entreprise/account/CompanyPassword';
import { GrWorkshop } from 'react-icons/gr';
import { MdWork } from 'react-icons/md';

const CompanyEditProfilePage = () => {

    const buttonList = [
        { id: 1, label: "Profile" },
        { id: 2, label: "Reseaux sociaux" },
        { id: 3, label: "Compte" },
        { id: 4, label: "Autentification" },
    ];

    const [step, setStep] = useState(1);

    return (

        <div className="main-content bg-gray-50 min-h-screen mt-20 pt-10">
            <div className="mx-4  bg-white rounded-lg ">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Mise à jour du profil
                </h1>

                {/* Navigation Buttons */}
                <div className="flex justify-center mb-8 space-x-4">
                    {buttonList.map((item) => (
                        <button key={item.id} onClick={() => setStep(item.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${step === item.id
                                    ? "bg-indigo-500 text-white shadow"
                                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="border-t border-gray-200 pt-6">
                    {step === 1 && (
                        <>
                            <CompanyPhoto />
                            <div className="mt-8">
                                <CompanyCompetence />
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <div className="mt-8">
                            <CompanySocial />
                        </div>
                    )}
                    {step === 3 && (
                        <div className="mt-8">
                            <CompanyInfo />
                        </div>
                    )}
                    {step === 4 && (
                        <div className="mt-8">
                            <CompanyPassword />
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default CompanyEditProfilePage;