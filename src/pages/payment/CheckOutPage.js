import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { baseurl } from "../../utlis/url/baseurl";
import { dureeDeVie, localvalue, typePersonConnected, valueLocal } from "../../utlis/storage/localvalue";
import { toast } from "react-toastify";
import { routing } from "../../utlis/routing";
import LoadinButton from "../../components/loading/LoadinButton";
import { VerificationPackPaiement } from "../../action/api/packs/PackAction";
import confetti from "canvas-confetti";
import { getAndCheckLocalStorage, setWithExpiration } from "../../utlis/storage/localvalueFunction";
import { IconPack, packsItemsList } from "../../utlis/config";
import { Retour } from "../../utlis/url/ListFunction";
import useFetchCandidat from "../../action/api/candidat/CandidatAction";
import { useFetchEntreprise } from "../../action/api/employeur/EmployeurAction";


const CheckOutPage = () => {

    const location = useLocation();

    // Miniuteurs
    const [timeRemaining, setTimeRemaining] = useState(240); // 180 secondes (3 minutes)
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (timerActive && timeRemaining > 0) {
            const timerInterval = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerInterval);
        } else if (timeRemaining === 0) {
            setTimerActive(false);
        }
    }, [timerActive, timeRemaining]);
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const handleStartTimer = () => {
        setTimerActive(true);
    };





    const { pack } = location.state;
    const [userId, setUserId] = useState(null);
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [emailUser, setemailUser] = useState();
    const [telephoneUser, settelephoneUser] = useState();


    const { isLoading, errorCandiat, candidat } = useFetchCandidat(getAndCheckLocalStorage(localvalue.candidatID));
    const { isLoadingEntreprise, errorEntreprise, entreprise } = useFetchEntreprise(getAndCheckLocalStorage(localvalue.recruteurID));


    useEffect(() => {
        const candidatId = getAndCheckLocalStorage(localvalue.candidatID);
        const recruteurId = getAndCheckLocalStorage(localvalue.recruteurID);
        // Vérifier quelle valeur n'est pas null
        if (candidatId !== null) {
            setUserId(candidatId);
            if (candidat && candidat.firstname) {
                setfirstname(candidat.firstname);
            }
            if (candidat && candidat.lastname) {
                setlastname(candidat.lastname);
            }
            if (candidat && candidat.email) {
                setemailUser(candidat.email);
            }
            if (candidat && candidat.telephone) {
                settelephoneUser(candidat.telephone);
            }
        } else if (recruteurId !== null) {
            setUserId(recruteurId);
            if (entreprise && entreprise.firstname) {
                setfirstname(entreprise.firstname);
            }
            if (entreprise && entreprise.lastname) {
                setlastname(entreprise.lastname);
            }
            if (entreprise && entreprise.email) {
                setemailUser(entreprise.email);
            }
            if (entreprise && entreprise.telephone) {
                settelephoneUser(entreprise.telephone);
            }
        } else {
            // Gérer le cas où les deux valeurs sont nulles (ou autre logique selon vos besoins)
            setUserId(null);
        }
    }, []);




    useEffect(() => {
        if (pack) {
        }
    }, [pack])


    const [transactionId, settransactionId] = useState('');
    const [paymentUrl, setPaymentUrl] = useState('');
    const [IsLoginpaymentUrl, setIsLoginpaymentUrl] = useState(false);

    const handleGeneratePaymentUrl = async () => {
        if (userId !== null) {
            try {
                setIsLoginpaymentUrl(true);
                localStorage.setItem(localvalue.customer_id, userId);
                localStorage.setItem(localvalue.customer_name, firstname);
                localStorage.setItem(localvalue.customer_surname, lastname);
                localStorage.setItem(localvalue.customer_email, emailUser);
                localStorage.setItem(localvalue.customer_pack_id, pack._id);
                localStorage.setItem(localvalue.customer_pack, pack.pack);


                const response = await axios.post(`${baseurl.url}/api/v1/packs/generate-cinepay-payment-url/${getAndCheckLocalStorage(localvalue.TYPEACCESS)}`, {
                    "amount": pack.solde,
                    "customer_id": `${userId}`,
                    "customer_name": firstname,
                    "customer_surname": lastname,
                    "customer_email": emailUser,
                    "customer_phone_number": `+${telephoneUser}`,
                    "invoice_data": {
                        "UserID": userId,
                        "PackID": pack._id,
                        "TypePersonne": getAndCheckLocalStorage(localvalue.TYPEACCESS)
                    },
                    "metadata": pack._id
                });

                if (response.status === 200) {
                    setPaymentUrl(response.data.data.payment_url);
                    console.log(response.data.data.payment_url);
                    // Redirigez l'utilisateur vers l'URL de paiement
                    localStorage.setItem(localvalue.customer_transaction_id, response.data.transactionId);
                    window.open(response.data.data.payment_url, '_blank');
                    settransactionId(response.data.transactionId);
                    const transaction_id = response.data.transactionId;

                    toast.info("Veillez entrer vos informations de paiement ");
                    handleStartTimer();
                    setTimeout(async () => {
                        let data = JSON.stringify({
                            "apikey": `${valueLocal.api_key_cine_pay}`,
                            "site_id": valueLocal.site_web_id_cinetpay,
                            "transaction_id": String(transaction_id)
                        });

                        let config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: 'https://api-checkout.cinetpay.com/v2/payment/check',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: data
                        };
                        await axios.request(config)
                            .then(async (response) => {
                                if (response.data.code == "00") {
                                    setIsLoginpaymentUrl(false)
                                    await axios
                                        .post(`${baseurl.url}/api/v1/packs/${getAndCheckLocalStorage(localvalue.TYPEACCESS)}/${userId}/subscribe/${pack._id}`,
                                        )
                                        .then((response) => {
                                            confetti();
                                            toast.success("Votre Pack à été activer avec succès !");
                                            setTimeout(() => {
                                                window.location.href = `/`;
                                            }, 2500);
                                        })
                                        .catch((error) => {
                                            toast.error("Soucription pack échoué !");
                                        });

                                } else if (response.data.code == "627") {
                                    setIsLoginpaymentUrl(false);
                                    toast.error("Paiement non effectué Veillez Réesayer");
                                    console.log(response.data);
                                    window.location.reload()
                                }
                            })
                            .catch((error) => {
                                setIsLoginpaymentUrl(false);
                                toast.error("Paiement imposible !")
                                console.log(error);
                                window.location.reload()
                            });
                    }, 4 * 60 * 1000)
                }
            } catch (error) {
                setIsLoginpaymentUrl(false);
                // Gérer les erreurs ici
                toast.error("url de paiement non générer  veliiez réessayer");
                setTimeout(() => {
                    window.location.href = `/${routing.pricing}`;
                }, 2000);
            }
        } else {
            toast.error("Veillez vous connecter s'il vous plait");
        }
    };




    return (
        <div class="main-content">
            <div class="page-content mt-28">
                <div>




                    <div class="min-w-screen min-h-screen bg-gray-50 py-5">

                        <div class="px-5">
                            <div class="mb-2">
                                <span onClick={() => {
                                    Retour();
                                }} class=" cursor-pointer focus:outline-none hover:underline text-gray-500 text-sm"><i class="mdi mdi-arrow-left text-gray-400"></i>Retour</span>
                            </div>
                            <div class="mb-2">
                                <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Valider Paiement de votre pack</h1>
                            </div>
                            <div class="mb-5 text-gray-400">
                                {
                                    /* <a href="#" class="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" class="focus:outline-none hover:underline text-gray-500">Cart</a> / <span class="text-gray-600">Checkout</span> */
                                }
                            </div>
                        </div>

                        <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                            <div class="w-full">
                                <div class="-mx-3 md:flex items-start">
                                    <div class="px-3 md:w-7/12 lg:pr-10">
                                        <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                            <div class="w-full flex items-center">
                                                <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                    <img src="img/undraw_empty_cart_co35.png" alt="" />
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <h6 class="font-semibold uppercase text-gray-600">{pack.pack}</h6>
                                                    <p class="text-gray-400">
                                                        {
                                                            getAndCheckLocalStorage(localvalue.TYPEACCESS)
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <span class="font-semibold text-gray-600 text-xl">{pack && pack.solde ? pack.solde : null} CFA</span><span class="font-semibold text-gray-600 text-sm">.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            getAndCheckLocalStorage(localvalue.TYPEACCESS) == typePersonConnected[1] ?
                                                pack && pack.pack ?
                                                    packsItemsList.filter(packsItem => packsItem.pack == pack.pack).map((item) => {
                                                        return (
                                                            <div>
                                                                {
                                                                    item.avantages.map((item) => {
                                                                        return (
                                                                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                                                                <div class="w-full flex mb-3 items-center">
                                                                                    <div class="w-32">
                                                                                        <span class="text-gray-600 font-semibold">{IconPack}</span>
                                                                                    </div>
                                                                                    <div class="flex-grow pl-3">
                                                                                        <span>{item}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    }) : null
                                                :
                                                null
                                        }



                                        <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                            <div class="w-full flex items-center">
                                                <div class="flex-grow">
                                                    <span class="text-gray-600">Total</span>
                                                </div>
                                                <div class="pl-3">
                                                    <span class="font-semibold text-gray-400 text-sm"></span> <span class="font-semibold">
                                                        {pack && pack.solde ?
                                                            `${pack.solde} XOF` :
                                                            "..."
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="px-3 md:w-5/12">
                                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                            <div>
                                            </div>
                                            <div class="w-full flex mb-3 items-start justify-start border-b ">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Infos 1 :</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Vous avez le choix du mode paiement</span>
                                                </div>
                                            </div>
                                            <div class="w-full flex mb-3 items-start justify-start border-b ">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Infos 2 :</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Lorsque votre le lien de votre paiement est généré , payer sur le dernier lien générér </span>
                                                </div>
                                            </div>
                                            <div class="w-full flex mb-4 items-start justify-start border-b ">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Infos 3 :</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Veillez attendre la finalisation du paiement avant de sortir de la page</span>
                                                </div>
                                            </div>
                                            <div class="w-full flex mb-4 items-start justify-start border-b ">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Infos 4 :</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Assurer vous d{''}avoire une connexion internet lorsque vous le faite</span>
                                                </div>
                                            </div>
                                            <div class="w-full flex mb-4 items-start justify-start border-b ">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Infos 5 :</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Assurer vous d{"'"}avoir la somme disponilble sur votre compte frais 1%</span>
                                                </div>
                                            </div>
                                            <div class="w-full flex mb-4 items-start justify-start border-b ">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Infos 6 :</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Ne quitter pas cette lors du paiement</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            {timerActive ? (
                                                <p>
                                                    Temps restant : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                                </p>
                                            ) : (
                                                <p style={{ visibility: `${timerActive ? 'visible' : 'hidden'}` }}>Le délai a expiré. Veuillez réessayer.</p>
                                            )}
                                            {
                                                IsLoginpaymentUrl ?
                                                    <LoadinButton text={"Paiement en cours ..."} />
                                                    :
                                                    <button onClick={() => {
                                                        handleGeneratePaymentUrl();
                                                    }}
                                                        class="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-2 font-semibold">
                                                        <i class="mdi mdi-lock-outline mr-1"></i>
                                                        PAYER AVEC CINEPAY
                                                    </button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CheckOutPage;