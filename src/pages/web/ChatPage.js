import React, { useEffect, useState } from 'react';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue, localvalueStorage } from '../../utlis/storage/localvalue';
import { sendMessage } from '../../action/api/chat/ChatAction';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseurl } from '../../utlis/url/baseurl';
import useFetchCandidat, { CandidatGetAll } from '../../action/api/candidat/CandidatAction';
import { EntrepriseGetAll, EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import { getDataFromFile, saveDataToFile } from '../../action/storage/DataLocal';
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';
import { useRef } from 'react';
import { FiPaperclip } from 'react-icons/fi'; // Assurez-vous d'avoir installé react-icons
import ErrorPrincing from '../../components/empty/ErrorPrincing';
import { routing } from '../../utlis/routing';
import { statusPACKS } from '../../utlis/config';

const ChatPage = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID) || getAndCheckLocalStorage(localvalue.recruteurID);
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);

    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [image, setImage] = useState(null); // État pour l'image à envoyer
    const [currentConversationId, setCurrentConversationId] = useState(null);

    // Fonction pour récupérer les conversations
    const fetchConversations = () => {
        const userId = idCandidat || idEntreprise;
        axios.get(`${baseurl.url}/api/v1/chat/get_conversations/participants/${userId}`)
            .then(response => {
                setConversations(response.data.data);
                saveDataToFile(response.data.data, localvalueStorage.CONVERSATIONS);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des conversations :", error);
            });
    };

    // Fonction pour récupérer les messages d'une conversation
    const fetchMessages = async (conversationId) => {
        await axios.get(`${baseurl.url}/api/v1/chat/get_conversation/${conversationId}`)
            .then(response => {
                setMessages(response.data.data.messages);
                setCurrentConversationId(conversationId);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des messages :", error);
                toast.error("Impossible de récupérer les messages.");
            });
    };

    // Envoi d'un nouveau message
    const handleSendMessage = () => {
        if (newMessage.trim() || image) {
            setWithExpiration(localvalue.conversationID, currentConversationId, dureeDeVie)
            sendMessage(currentConversationId, idCandidat || idEntreprise, newMessage, image, toast)
                .then(messageData => {
                    setMessages([...messages, messageData]); // Ajouter le nouveau message à la liste
                    setNewMessage(''); // Réinitialiser le champ de saisie
                    setImage(null); // Réinitialiser l'image
                })
                .catch(error => {
                    console.error("Erreur lors de l'envoi du message :", error);
                });
        }
    };

    // Gérer le changement d'image
    const handleImageChange = async (e) => {
        const fileImage = e.target.files[0]
        const imageget = await handleImageUploadCloudOnly(fileImage, toast)
        setImage(imageget)
    };

    // Autres parties de votre code...
    const [candidats, setCandidats] = useState([]);
    const [candidats2, setCandidats2] = useState([]);
    const [entreprises, setEntreprise] = useState([]);
    const [entreprise2, setEntreprise2] = useState([]);
    const [userConversation, setUserConversation] = useState([]);

    const [entrepriseDetail, setentrepriseDetail] = useState();
    const { isLoadingC, errorC, candidat } = useFetchCandidat(idCandidat);
    useEffect(() => {
        EntrepriseGetById(idEntreprise, setentrepriseDetail)
    }, []);



    useEffect(() => {
        const getDataCandidats = getDataFromFile(localvalueStorage.CANDIDATS) || [];
        setCandidats(getDataCandidats);
        setCandidats2(getDataCandidats);

        const getDataEntreprises = getDataFromFile(localvalueStorage.RECRUTEURS) || [];
        setEntreprise(getDataEntreprises);
        setEntreprise2(getDataEntreprises);

        const getDataConversations = getDataFromFile(localvalueStorage.CONVERSATIONS) || [];
        setConversations(getDataConversations);

        fetchConversations();
        fetchMessages(getAndCheckLocalStorage(localvalue.conversationID))
        CandidatGetAll(setCandidats, setCandidats2);
        EntrepriseGetAll(setEntreprise, setEntreprise2);

        const combinedUsers = [...getDataCandidats, ...getDataEntreprises];
        setUserConversation(combinedUsers);
    }, []);


    const messageEndRef = useRef(null); // Référence pour la fin de la liste des messages

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]); // Dépendance sur messages


    return (
        <div class="sticky top-24">
            {
                (candidat && candidat && candidat.account && candidat.account.pack && candidat.account.pack == statusPACKS[2]) ||
                    (candidat && candidat && candidat.account && candidat.account.pack && candidat.account.pack == statusPACKS[1]) ||
                    (entrepriseDetail && entrepriseDetail && entrepriseDetail.account && entrepriseDetail.account.pack && entrepriseDetail.account.pack == statusPACKS[0]) ||
                    (entrepriseDetail && entrepriseDetail && entrepriseDetail.account && entrepriseDetail.account.pack && entrepriseDetail.account.pack == statusPACKS[1]) ||
                    (entrepriseDetail && entrepriseDetail && entrepriseDetail.account && entrepriseDetail.account.pack && entrepriseDetail.account.pack == statusPACKS[2])
                    ?
                    <div className="flex max-h-screen bg-gray-50 ">
                        {/* Sidebar */}
                        <div className="w-1/4 bg-white border-r border-gray-200 shadow-md pt-20">
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">Discussions</h2>
                                <div className="mt-4 h-[calc(100vh-200px)] overflow-y-auto">
                                    {conversations.map(conversation => (
                                        <div
                                            key={conversation._id}
                                            onClick={() => fetchMessages(conversation._id)}
                                            className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${currentConversationId === conversation._id ? "bg-indigo-500" : ""}`}
                                        >
                                            <span className="h-[50px] w-[50px] rounded-[50%] overflow-hidden">
                                                <img src={conversation.participants
                                                    .filter(p => p.user.toString() !== idCandidat) // Filtrer pour garder uniquement le participant qui n'est pas idCandidat
                                                    .map(p => {
                                                        const participant = userConversation.find(user => user._id === p.user.toString());
                                                        return participant ? `${participant.logo || participant.coverPicture || ""}` : '';
                                                    })
                                                } className="bg-contain h-[50px] w-[50px]" />
                                            </span>
                                            <span className="font-medium mx-2">
                                                {conversation.participants
                                                    .filter(p => p.user.toString() !== idCandidat) // Filtrer pour garder uniquement le participant qui n'est pas idCandidat
                                                    .map(p => {
                                                        const participant = userConversation.find(user => user._id === p.user.toString());
                                                        return participant ? `${participant.firstname || ""} ${participant.lastname || ""} ${participant.full_name || ""}` : '';
                                                    })} {/* Joindre les noms avec une virgule si plusieurs participants */}
                                            </span>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Chat Section */}
                        <div className="flex-1 flex flex-col pt-20">
                            <div className="flex-1 p-4 overflow-auto max-h-[100vh]">
                                {messages.map((message, index) => (
                                    <div key={index} className={`my-2 ${message.sender.toString() === idCandidat ? 'text-right' : 'text-left'}`}>
                                        <div className={`inline-block rounded-lg p-2 ${message.sender.toString() === idCandidat ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                            <p className={`${message.sender.toString() === idCandidat ? ' text-white' : ' text-gray-900'}`} >{message.content}</p>
                                            {message.imageUrl && <img src={message.imageUrl} alt="Message" className="mt-2 max-w-xs rounded-lg" />} {/* Affichage de l'image */}
                                            <span className={`text-xs ${message.sender.toString() === idCandidat ? ' text-white' : ' text-gray-900'}`}>{new Date(message.timestamp).toLocaleString()}</span>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messageEndRef} />
                            </div>

                            {/* Message Input */}
                            <div className="flex p-4 border-t border-gray-200 bg-white shadow-md rounded-lg">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="flex-1 border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 indigo:ring-blue-500"
                                    placeholder="Type your message..."
                                />

                                <label className="ml-2 cursor-pointer">
                                    <FiPaperclip className="text-gray-500" size={24} />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>

                                <button
                                    onClick={handleSendMessage}
                                    className="ml-2 bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition duration-200"
                                >
                                    Envoyer
                                </button>
                            </div>

                        </div>
                    </div>

                    :
                    <ErrorPrincing
                        title="Vous n'êtes pas autorisé a des discussions "
                        message="Veillez souscrire à un abonnement pour y avoir accès"
                        route={`${routing.pricing}`}
                    />

        }
        </div>

    );
};

export default ChatPage;
