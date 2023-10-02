import React from 'react'
import { useState } from 'react'
import { PackAllCandidat, SubscriblePackCandidat } from '../../action/api/packs/PackAction';
import { useEffect } from 'react';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { CandidatGetById } from '../../action/api/candidat/CandidatAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoadinButton from '../../components/loading/LoadinButton';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import CinepayPayment from './CinepayPayment';

const CandidatPacks = () => {
    const navigate = useNavigate();
    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);


    const [candidatDetail, setcandidatDetail] = useState();

    const [packs, setpacks] = useState([]);
    const [packs2, setpacks2] = useState([]);

    useEffect(() => {
        PackAllCandidat(setpacks, setpacks2);
        CandidatGetById(idCandidat, setcandidatDetail);
    }, []);

    // handleSumbit pack
    const [idPack, setidPack] = useState();
    const [idPack2, setidPack2] = useState();
    const [idPack3, setidPack3] = useState();

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    // handleSubmit
    const handleSubmitPack1 = (event) => {
        event.preventDefault();
        if (packs.length > 0) {
            const id = packs[0]._id;
            setidPack(id);
            console.log(idPack)
            dispatch(SubscriblePackCandidat(id, idCandidat, toast));
        }

    }

    const handleSubmitPack2 = (event) => {
        event.preventDefault();

        if (packs.length > 1) {
            const id = packs[1]._id;
            dispatch(SubscriblePackCandidat(id, idCandidat, toast));
        }
    }



    const handleSubmitPack3 = (event) => {
        event.preventDefault();

        if (packs.length > 2) {
            const id = packs[2]._id;
            setidPack3(id);

            dispatch(SubscriblePackCandidat(id, idCandidat, toast));
        }

    }

    const handleGetPricing = (item) => {
        if (getAndCheckLocalStorage(localvalue.candidatID) !== null && packs.length > 0) {
            alert("Pack recupéer");
            navigate(`/${routing.checkout}`, { state: { item } });
        } else {
            toast.info("Veillez vous connecter d'abord vous connectez ");
        }
    }









    // inegration de paiement 

    

    return (
        <div class="bg-white dark:bg-gray-800">



            <div class="flex justify-center py-2 mt-10">
                <h1 class="text-4xl font-bold"> Pack Etudiant  </h1>
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
                            packs[0].pack == candidatDetail.account.pack ?
                                <button
                                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Activé
                                </button>
                                :
                                loading ?
                                    <p><LoadinButton text={"En cours"} /></p> :
                                    <>
                                        <form  >
                                            <button type="button"
                                            onClick={()=>{
                                                //navigate(`/${routing.checkout}`,{state:{pack:packs[0]}})
                                            }}
                                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                            >
                                                Acheter
                                            </button>
                                        </form>
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
                            packs[1].pack == candidatDetail.account.pack ?
                                <button
                                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Activé
                                </button>
                                :
                                loading ?
                                    <p><LoadinButton text={"En cours"} /></p> :
                                    <>
                                        <form onSubmit={handleSubmitPack2}>
                                            <button type="submit"

                                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                            >
                                                Acheter
                                            </button>
                                        </form>
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

                        {candidatDetail && candidatDetail.account ?
                            packs[2].pack == candidatDetail.account.pack ?
                                <button
                                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Activé
                                </button>
                                :
                                loading ?
                                    <p><LoadinButton text={"En cours ..."} /></p> :
                                    <>
                                        <form onSubmit={handleSubmitPack3}>
                                            <button type="submit"

                                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                                            >
                                                Acheter
                                            </button>
                                        </form>
                                    </> :
                            <button
                                class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                            > ...
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CandidatPacks
