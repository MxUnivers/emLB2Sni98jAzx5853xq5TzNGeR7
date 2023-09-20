import React from 'react'
import { useState } from 'react'
import { PackAllCandidat, SubscriblePackCandidat } from '../../action/api/packs/PackAction';
import { useEffect } from 'react';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CandidatPacks = () => {
    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID)


    const [candidatDetail, setcandidatDetail] = useState();

    const [packs, setpacks] = useState([]);
    const [packs2, setpacks2] = useState([]);

    useEffect(() => {
        PackAllCandidat(setpacks, setpacks2);
        CandidatGetById(idCandidat, setcandidatDetail);
    }, []);

    // handleSumbit pack
    const [idPack, setidPack] = useState();

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    // handleSubmit
    const handleSubmitPack = (event) => {
        event.prevenDefault();
        if (idCandidat == "") {
            return alert("Une erreur est survenue validation votre pack");
        }
        dispatch(SubscriblePackCandidat(idPack, idCandidat, toast));
    }



    return (
        <div class="bg-white dark:bg-gray-800">


            <div class="flex justify-center py-2 mt-10">
                <h1 class="text-4xl font-bold">Etudiant {candidatDetail && candidatDetail.account ? candidatDetail.firstname : null} </h1>
            </div>


            <div class="container px-6 py-8 mx-auto">

                <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Agent
                            </h2>
                        </div>
                        <div class="flex-shrink-0">
                            <span
                                class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                            >
                                1000f
                            </span>
                            <span class="text-gray-500 dark:text-gray-400">
                                /an
                            </span>
                        </div>
                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                20 Sms
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                email
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Offres compétences
                            </li>
                        </ul>

                        {candidatDetail && candidatDetail.account ?
                            packs.find((pack) => pack.title === candidatDetail.account.pack) ?
                                <button
                                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Activé
                                </button>
                                :
                                loading ?
                                    <p>en cours...</p> :
                                    <>
                                        {
                                            packs.map((item) => {
                                                if (item.title == candidatDetail.account.pack)
                                                    return (
                                                        <form onSubmit={handleSubmitPack}>
                                                            <button type="submit" onClick={() => {
                                                                setidPack(item._id);
                                                            }}
                                                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                                            >
                                                                Acheter
                                                            </button>
                                                        </form>
                                                    )
                                            })
                                        }
                                    </> :
                            <button
                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                            > ...
                            </button>
                        }

                    </div>

                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2
                                class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                            >
                                Profesional
                            </h2>
                        </div>
                        <div class="flex-shrink-0">
                            <span
                                class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                            >
                                2000f
                            </span>
                            <span class="text-gray-500 dark:text-gray-400">
                                /an
                            </span>
                        </div>
                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                60 SMS
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Email
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Recomandations entreprise
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Offre entreprise
                            </li>
                        </ul>

                        {candidatDetail && candidatDetail.account ?
                            packs.find((pack) => pack.title === candidatDetail.account.pack) ?
                                <button
                                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Activé
                                </button>
                                :
                                <button
                                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Acheter
                                </button> :
                            <button
                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                            >
                                ...
                            </button>
                        }
                    </div>

                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex-shrink-0">
                            <h2
                                class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                            >
                                Gold
                            </h2>
                        </div>
                        <div class="flex-shrink-0">
                            <span
                                class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                            >
                                5000f
                            </span>
                            <span class="text-gray-500 dark:text-gray-400">
                                /an
                            </span>
                        </div>
                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                100 SMS
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                100 EMAILS
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Coaching
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Chat
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Recomandation entreprise
                            </li>
                            <li class="text-gray-500 dark:text-gray-400">
                                Suggestions
                            </li>
                        </ul>

                        <button
                            class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                        >
                            Acheter
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CandidatPacks
