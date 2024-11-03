import React, { useEffect, useState } from 'react';
import CandidatPacks from '../../containers/packs/CandidatPacks';
import RecruteurPacks from '../../containers/packs/RecruteurPacks';
import { MdSchool, MdWorkOutline } from 'react-icons/md';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import PackNoConnected from '../../containers/packs/PackNoConnected';

const PrincingPage = () => {
    const [pack, setPack] = useState(false);

    const handleShowPack = () => setPack(true);
    const handleClosePack = () => setPack(false);

    useEffect(() => {
        if (getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[1]) {
            setPack(false);
        } else if (getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[0]) {
            setPack(true);
        }
    }, [pack]);

    return (
        <div className="bg-white min-h-screen mt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                        Nos <span className="font-semibold text-indigo-600">Plans</span> pour vos <span className="font-semibold text-indigo-600">stratégies</span>
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Vous trouverez ci-dessous nos trois principaux plans qui correspondent à vos attentes.
                    </p>
                   {/* <p className="text-gray-600">It starts from here! You can teach yourself what you really like.</p> */}
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[1] && (
                        <button
                            className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-300 ${pack === false ? "bg-indigo-700 text-white" : "bg-white text-indigo-700 border border-indigo-700"}`}
                            onClick={handleClosePack}
                        >
                            <MdSchool className="text-lg" />
                            <span>Étudiant</span>
                        </button>
                    )}

                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[0] && (
                        <button
                            className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-300 ${pack === true ? "bg-indigo-700 text-white" : "bg-white text-indigo-700 border border-indigo-700"}`}
                            onClick={handleShowPack}
                        >
                            <MdWorkOutline className="text-lg" />
                            <span>Recruteur</span>
                        </button>
                    )}
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[1] && <CandidatPacks />}
                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[0] && <RecruteurPacks />}
                    {getAndCheckLocalStorage(localvalue.TYPEACCESS) === null && <PackNoConnected />}
                </div>
            </div>
        </div>
    );
};

export default PrincingPage;
