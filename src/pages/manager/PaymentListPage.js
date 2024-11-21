import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { fetchPaymentAll } from "../../action/api/payments/PaymentAction";
import moment from "moment";
import { getDataFromFile } from "../../action/storage/DataLocal";
import { localvalueStorage } from "../../utlis/storage/localvalue";
import { EntrepriseGetAll } from "../../action/api/employeur/EmployeurAction";
import { CandidatGetAll } from "../../action/api/candidat/CandidatAction";

// Configuration Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const PaymentListPage = () => {
    const [activeTab, setActiveTab] = useState("list");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [payments, setPayments] = useState([]);

    const [candidats, setCandidats] = useState([]);
    const [candidats2, setCandidats2] = useState([]);
    const [entreprises, setEntreprise] = useState([]);
    const [entreprise2, setEntreprise2] = useState([]);
    const [userConversation, setUserConversation] = useState([]);



    useEffect(() => {
        fetchPaymentAll(setPayments);

        const getDataCandidats = getDataFromFile(localvalueStorage.CANDIDATS) || [];
        setCandidats(getDataCandidats);
        setCandidats2(getDataCandidats);

        const getDataEntreprises = getDataFromFile(localvalueStorage.RECRUTEURS) || [];
        setEntreprise(getDataEntreprises);
        setEntreprise2(getDataEntreprises);

        
        CandidatGetAll(setCandidats, setCandidats2);
        EntrepriseGetAll(setEntreprise, setEntreprise2);

        const combinedUsers = [...getDataCandidats, ...getDataEntreprises];
        setUserConversation(combinedUsers);



    }, []);

    const handleFilter = () => {
        console.log("Filtrer les paiements entre", startDate, "et", endDate);
    };

    // Préparer les données pour le graphique
   // Préparer les données pour les graphiques
   const graphData = payments.reduce(
    (acc, payment) => {
        const date = moment(payment.date).format("YYYY-MM-DD");

        if (!acc.labels.includes(date)) {
            acc.labels.push(date);
            acc.successData.push(payment.status === "success" ? payment.amount : 0);
            acc.failedData.push(payment.status === "failed" ? payment.amount : 0);
        } else {
            const index = acc.labels.indexOf(date);
            if (payment.status === "success") {
                acc.successData[index] += payment.amount;
            } else if (payment.status === "failed") {
                acc.failedData[index] += payment.amount;
            }
        }
        return acc;
    },
    { labels: [], successData: [], failedData: [] }
);

const chartData = {
    labels: graphData.labels,
    datasets: [
        {
            label: "Paiements Réussis",
            data: graphData.successData,
            borderColor: "#22c55e", // Vert pour réussis
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            pointBackgroundColor: "#22c55e",
            tension: 0.3,
        },
        {
            label: "Paiements Échoués",
            data: graphData.failedData,
            borderColor: "#ef4444", // Rouge pour échoués
            backgroundColor: "rgba(239, 68, 68, 0.2)",
            pointBackgroundColor: "#ef4444",
            tension: 0.3,
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        tooltip: {
            mode: "index",
            intersect: false,
        },
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Dates",
            },
        },
        y: {
            display: true,
            title: {
                display: true,
                text: "Montant",
            },
        },
    },
};

    const  renderStatuts = (status)=>{
        switch (status) {
            case "success":
                return "réussi"
                break;
            case "failed":
                return "échoué"
                break;
            default:
                return "autres"
                break;
        }
    }

    const getInformationUser = (userId) => {
        const user = userConversation.find(user => user._id === userId.toString());
        
        if (!user) return "";
        
        const { firstname = "", lastname = "", entreprise = "" } = user;
        return `${firstname} ${lastname} ${entreprise}`.trim();
    };
    

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Paiements</h1>
<form className="flex flex-wrap md:flex-row items-center gap-4 mb-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Date de début
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full md:w-auto border border-gray-300 rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Date de fin
                                </label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full md:w-auto border border-gray-300 rounded-lg p-2"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleFilter}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                            >
                                Valider
                            </button>
                        </form>


                        <PaymentStatusCard  payments={payments}/>
                {/* Onglets */}
                <div className="flex border-b mb-6">
                    <button
                        className={`py-2 px-4 font-semibold ${
                            activeTab === "list"
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("list")}
                    >
                        Liste des paiements
                    </button>
                    <button
                        className={`py-2 px-4 font-semibold ${
                            activeTab === "graph"
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("graph")}
                    >
                        Graphique
                    </button>
                </div>

                {/* Contenu des onglets */}
                {activeTab === "list" && (
                    <>
                        {/* Formulaire de sélection des dates */}
                        

                        {/* Tableau des paiements */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="py-3 px-6 text-left">Utilisateur</th>
                                        <th className="py-3 px-6 text-left">Montant</th>
                                        <th className="py-3 px-6 text-left">Statut du paiement</th>
                                        <th className="py-3 px-6 text-left">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map((payment, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b ${
                                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            }`}
                                        >
                                            <td className="py-3 px-6">
                                            {getInformationUser(payment.customer_id)}
                                            </td>
                                            
                                            <td className="py-3 px-6">{payment.amount}</td>
                                            <td className="py-3 px-6">
                                                <span class={`px-2 py-1 text-xs ${payment.status =="success"?"bg-green-600 text-white":"bg-orange-600 text-white"}`}>
                                                {renderStatuts(payment.status)}
                                                </span>
                                                </td>
                                            <td className="py-3 px-6">
                                                {moment(payment.createdAt).format("DD-MM-YYYY HH:MM")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {activeTab === "graph" && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Graphique des paiements
                        </h2>
                        <div className="w-full h-96">
                            <Line data={chartData} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentListPage;





const PaymentStatusCard = ({ payments }) => {
    const [totalSuccess, setTotalSuccess] = useState(0);
    const [totalFailed, setTotalFailed] = useState(0);

    // Calculer les montants totaux
    useEffect(() => {
        const successAmount = payments
            .filter(payment => payment.status === "success")
            .reduce((sum, payment) => sum + payment.amount, 0);

        const failedAmount = payments
            .filter(payment => payment.status === "failed")
            .reduce((sum, payment) => sum + payment.amount, 0);

        setTotalSuccess(successAmount);
        setTotalFailed(failedAmount);
    }, [payments]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {/* Carte Paiements Réussis */}
            <div className="bg-green-100 border border-green-400 p-6 rounded-lg shadow">
                <h3 className="text-green-800 font-semibold text-lg mb-2">Paiements Réussis</h3>
                <p className="text-green-600 text-2xl font-bold">
                    {totalSuccess.toLocaleString("fr-FR", { style: "currency", currency: "XOF" })}
                </p>
            </div>

            {/* Carte Paiements Échoués */}
            <div className="bg-red-100 border border-red-400 p-6 rounded-lg shadow">
                <h3 className="text-red-800 font-semibold text-lg mb-2">Paiements Échoués</h3>
                <p className="text-red-600 text-2xl font-bold">
                    {totalFailed.toLocaleString("fr-FR", { style: "currency", currency: "XOF" })}
                </p>
            </div>
        </div>
    );
};
