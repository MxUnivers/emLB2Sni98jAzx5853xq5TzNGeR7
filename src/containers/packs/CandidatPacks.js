import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PackAllCandidat, SubscriblePackCandidat } from '../../action/api/packs/PackAction';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import LoadinButton from '../../components/loading/LoadinButton';
import { routing } from '../../utlis/routing';
import { IconPack } from '../../utlis/config';

const CandidatPacks = () => {
    const navigate = useNavigate();
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const [candidatDetail, setCandidatDetail] = useState();
    const [packs, setPacks] = useState([]);
    const [packs2, setPacks2] = useState([]);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);

    useEffect(() => {
        PackAllCandidat(setPacks,setPacks2);
        CandidatGetById(idCandidat, setCandidatDetail);
    }, []);

    const handleNavigateToCheckout = (pack) => {
        navigate(`/${routing.checkout}`, { state: { pack } });
    };

    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen p-6">
            <div className="flex justify-center py-2 mt-10">
                <h1 className="text-4xl font-bold">Pack Étudiant</h1>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    {packs && packs.length > 0 && packs.map((pack)=>{
                        return (
                            <div className="w-full max-w-sm p-4">
                                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                                    <h2 className="text-center text-blue-500 font-semibold uppercase">{pack.name || ""}</h2>
                                    <span className="block text-center text-4xl font-bold text-gray-800">{pack.price || ""} F</span>
                                    <ul className="mt-4 space-y-2">
                                        {pack.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <div className="rounded-full p-2 text-green-700">
                                                    {IconPack}
                                                </div>
                                                <span className="ml-2 text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6">
                                        {candidatDetail && candidatDetail.account ? (
                                            candidatDetail.account.pack === pack.pack ? (
                                                <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">
                                                    Activé
                                                </button>
                                            ) : loading ? (
                                                <LoadinButton text={"En cours..."} />
                                            ) : (
                                                <button
                                                    onClick={() => handleNavigateToCheckout(pack)}
                                                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                                                >
                                                    Acheter
                                                </button>
                                            )
                                        ) : (
                                            <button
                                                onClick={() => handleNavigateToCheckout(pack)}
                                                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                                            >
                                                Acheter
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
};

export default CandidatPacks;
