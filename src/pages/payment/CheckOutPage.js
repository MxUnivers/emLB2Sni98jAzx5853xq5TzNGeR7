import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { baseurl } from "../../utlis/url/baseurl";
import { valueLocal } from "../../utlis/storage/localvalue";
import { toast } from "react-toastify";
import { routing } from "../../utlis/routing";
import LoadinButton from "../../components/loading/LoadinButton";
import { VerificationPackPaiement } from "../../action/api/packs/PackAction";
import confetti from "canvas-confetti";


const CheckOutPage = () => {

    const location = useLocation();


    const { pack } = location.state;

    useEffect(() => {
        if (pack) {
        }
    }, [pack])


    const [transactionId, settransactionId] = useState('');
    const [paymentUrl, setPaymentUrl] = useState('');
    const [IsLoginpaymentUrl, setIsLoginpaymentUrl] = useState(false);

    const handleGeneratePaymentUrl = async () => {
        try {
            setIsLoginpaymentUrl(true);
            const response = await axios.post(`${baseurl.url}/api/v1/packs/generate-cinepay-payment-url`, {
                amount: pack.solde, // Remplacez par le montant souhaité
                // Autres données de paiement ici...
            });

            if (response.status === 200) {
                setPaymentUrl(response.data.data.payment_url);
                // Redirigez l'utilisateur vers l'URL de paiement
                window.open(response.data.data.payment_url, '_blank');
                settransactionId(response.data.transactionId)

                toast.info("Veillez entrer vos infomation de paiement ");
               
                setTimeout(async () => {
                    await axios
                        .post(`${baseurl.url}/api/v1/packs/check-cinepay-transaction`,
                            {
                                "apikey":valueLocal.api_key_cine_pay,
                                "site_id":valueLocal.site_web_id_cinetpay,
                                "transaction_id": transactionId
                            }
                        )
                        .then((response) => {
                            if (response.data.code === "00") {
                                setIsLoginpaymentUrl(false)
                                confetti();
                                toast.success("Paiement valide avec succès")
                                console.log(response.data);
                            window.location.href="/";

                            } else if (response.data.code === "627") {
                                setIsLoginpaymentUrl(false);
                                toast.error("Paiement non effectués")
                                console.log(response.data);
                            window.location.reload()
                            }
                        })
                        .catch((error) => {
                            setIsLoginpaymentUrl(false);
                            toast.error("Paiement immposible !")
                            console.log(error);
                            window.location.reload()
                        });
                    },4 * 60 * 1000)
            }
        } catch (error) {
            setIsLoginpaymentUrl(false);
            // Gérer les erreurs ici
            toast.error("url de paiement non générer  veliiez réessayer");
            setTimeout(() => {
                window.location.href = `/${routing.pricing}`;
            }, 2000);
        }
    };




    return (
        <div class="main-content">
            <div class="page-content mt-28">
                <div>




                    <div class="min-w-screen min-h-screen bg-gray-50 py-5">

                        <div class="px-5">
                            <div class="mb-2">
                                <a href="#" class="focus:outline-none hover:underline text-gray-500 text-sm"><i class="mdi mdi-arrow-left text-gray-400"></i>Back</a>
                            </div>
                            <div class="mb-2">
                                <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Panier de validation</h1>
                            </div>
                            <div class="mb-5 text-gray-400">
                                <a href="#" class="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" class="focus:outline-none hover:underline text-gray-500">Cart</a> / <span class="text-gray-600">Checkout</span>
                            </div>
                        </div>

                        <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                            <div class="w-full">
                                <div class="-mx-3 md:flex items-start">
                                    <div class="px-3 md:w-7/12 lg:pr-10">
                                        <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                            <div class="w-full flex items-center">
                                                <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <h6 class="font-semibold uppercase text-gray-600">Ray Ban Sunglasses.</h6>
                                                    <p class="text-gray-400">x 1</p>
                                                </div>
                                                <div>
                                                    <span class="font-semibold text-gray-600 text-xl">$210</span><span class="font-semibold text-gray-600 text-sm">.00</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-6 pb-6 border-b border-gray-200">
                                            <div class="-mx-2 flex items-end justify-end">
                                                <div class="flex-grow px-2 lg:max-w-xs">
                                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                                    <div>
                                                        <input class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                                                    </div>
                                                </div>
                                                <div class="px-2">
                                                    <button class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                                </div>
                                            </div>
                                        </div>

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
                                            <div class="w-full flex mb-3 items-center">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Contact</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>Scott Windon</span>
                                                </div>
                                            </div>
                                            <div class="w-full flex items-center">
                                                <div class="w-32">
                                                    <span class="text-gray-600 font-semibold">Billing Address</span>
                                                </div>
                                                <div class="flex-grow pl-3">
                                                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
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
                                            {
                                                paymentUrl && (
                                                    <div>
                                                        <p>URL de paiement générée :</p>
                                                        <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
                                                            {paymentUrl}
                                                        </a>
                                                    </div>
                                                )
                                            }
                                            {
                                                transactionId && (
                                                    <div>
                                                        <p>Transaction id :</p>
                                                        <div >
                                                            {transactionId}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="text-center text-gray-400 text-sm">
                                <a href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="focus:outline-none underline text-gray-400"><i class="mdi mdi-beer-outline"></i>Buy me a beer</a> and help support open-resource
                            </div>
                        </div>
                    </div>

                    {/*<!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->*/}
                    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                        <div>
                            <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                                <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CheckOutPage;