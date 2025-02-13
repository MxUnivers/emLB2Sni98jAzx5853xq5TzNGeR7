import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseurl } from "../../utlis/url/baseurl";
import { localvalue, localvalueStorage } from "../../utlis/storage/localvalue";
import { getDataFromFile, saveDataToFile } from "../../action/storage/DataLocal";
import moment from "moment";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { routing } from "../../utlis/routing";
import { useNavigate } from "react-router-dom";

const ContactAdminPage = () => {


    const adminId = sessionStorage.getItem(localvalue.ADMIN_CONNECTED_ID);
    const adminType = sessionStorage.getItem(localvalue.ADMIN_CONNECTED_TYPE);
    const adminToken = sessionStorage.getItem(localvalue.ADMIN_CONNECTED);


    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [showMessagesModal, setShowMessagesModal] = useState(false);
    const [showMessageDetailModal, setShowMessageDetailModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [subject, setSubject] = useState("");
    const [sentMessages, setSentMessages] = useState([]);
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowMessageDetailModal(false);
                setShowMessagesModal(false);
                setShowReplyModal(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])


    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        // const contactList = getDataFromFile(localvalueStorage.CONTACTS) || [];
        //     contactList(contactList);
        //     setFilteredContacts(contactList);
        try {

            const response = await axios.get(`${baseurl.url}/api/v1/contact/get_contacts`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${baseurl.TypeToken} ${baseurl.url}`
                    }
                });
            setContacts(response.data.data);
            setFilteredContacts(response.data.data);
            saveDataToFile(response.data.data, localvalueStorage.CONTACTS)
        } catch (error) {
            console.error("Erreur lors de la récupération des messages de contact:", error);
        }
    };

    const handleSearch = () => {
        let filtered = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm) ||
            contact.company.toLowerCase().includes(searchTerm) ||
            contact.message.toLowerCase().includes(searchTerm)
        );

        if (startDate && endDate) {
            const start = moment(startDate, "YYYY-MM-DD").startOf('day');
            const end = moment(endDate, "YYYY-MM-DD").endOf('day');
            filtered = filtered.filter(contact => {
                const contactDate = moment(contact.createdAt);
                return contactDate.isBetween(start, end, undefined, '[]');
            });
        }

        setFilteredContacts(filtered);
    };



    // useEffect(() => {
    //     if (quill) {
    //         quill.on('text-change', () => {
    //             const htmlContent = quill.root.innerHTML;
    //         });
    //     }
    // }, [quill, onChange]);

    // // Mettre à jour l'éditeur lorsqu'on charge une nouvelle valeur
    // useEffect(() => {
    //     if (quill && value !== quill.root.innerHTML) {
    //         quill.root.innerHTML = quill.root.innerHTML || ''; // Évite d'afficher "undefined"
    //     }
    // }, [ quill]);

    const sendReply = async () => {
        if (!selectedContact || !quill) return;
        const replyContent = quill.root.innerHTML;


        if (!adminId) {
            toast.error("Veuillez vous connecter avant d'envoyer un message.");
            navigate(`/${routing.admin_login}`);
            return;
        }

        if (!selectedContact._id || !subject.trim() || !replyContent.trim()) {
            toast.error("Veuillez renseigner tous les champs du message.");
            return;
        }

        try {
            const response = await axios.post(
                `${baseurl.url}/api/v1/contact/reply`,
                {
                    contactId: selectedContact._id,
                    subject: subject,
                    message: replyContent,
                    admin: adminId
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${baseurl.TypeToken} ${baseurl.url}`
                    }
                }
            );

            toast.success(response?.data?.message || "Réponse envoyée avec succès !");
            setShowReplyModal(false);
            setSelectedContact(null);
            setSubject("");
            if (quill) quill.setText("");

        } catch (error) {
            console.error("Erreur lors de l'envoi de la réponse:", error);
            toast.error("Erreur lors de l'envoi de la réponse.");
        }
    };


    const fetchSentMessages = async (contactId) => {
        try {
            const response = await axios.get(`${baseurl.url}/api/v1/contact/sent_messages/${contactId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${baseurl.TypeToken} ${baseurl.url}`
                }
            });
            setSentMessages(response.data.data);
            setShowMessagesModal(true);
        } catch (error) {
            console.error("Erreur lors de la récupération des messages envoyés:", error);
            toast.error("Erreur lors de la récupération des messages envoyés.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-full mx-0 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages envoyés à la plateforme  </h1>



                <div className="mb-6 flex gap-2 flex-wrap">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Rechercher un message..."
                        className="w-full md:w-1/3 border border-gray-300 rounded-lg p-2"
                    />
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full md:w-1/4 border border-gray-300 rounded-lg p-2"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full md:w-1/4 border border-gray-300 rounded-lg p-2"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Rechercher
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-3 px-6 text-left">Nom</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Sujet</th>
                                <th className="py-3 px-6 text-left">Entreprise</th>
                                <th className="py-3 px-6 text-left">Message</th>
                                <th className="py-3 px-6 text-left">Envoyeés</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredContacts.map((contact) => (
                                <tr key={contact._id} className="border-b">
                                    <td className="py-3 px-6">{contact?.name}</td>
                                    <td className="py-3 px-6">{contact?.email}</td>
                                    <td className="py-3 px-6">{contact?.subject}</td>
                                    <td className="py-3 px-6">{contact?.company}</td>
                                    <td className="py-3 px-6">{contact?.message}</td>
                                    <td className="py-3 px-6">{contact?.messages_sent?.length}</td>
                                    <td className="py-3 px-6 flex gap-2">
                                        <div>
                                            <button
                                                onClick={() => { setSelectedContact(contact); setShowReplyModal(true); }}
                                                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                                            >
                                                Répondre
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => { setSelectedContact(contact); fetchSentMessages(contact._id) }}
                                                className="bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
                                            >
                                                Envoyés
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal de réponse */}
            {showReplyModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Répondre à {selectedContact.name}</h2>
                        <input
                            type="text"
                            placeholder="Sujet du message"
                            className="border w-full p-2 mb-4 rounded"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <div ref={quillRef} className="mb-4" />
                        <button onClick={sendReply} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Envoyer</button>
                        <button onClick={() => setShowReplyModal(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 ml-2">Annuler</button>
                    </div>
                </div>
            )}



            {showMessagesModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Messages envoyés à {""}{selectedContact?.name}{""}</h2>
                        <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="py-3 px-6 text-left">Sujet</th>
                                    <th className="py-3 px-6 text-left">Date</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sentMessages.map((message) => (
                                    <tr key={message._id} className="border-b">
                                        <td className="py-3 px-6">{message.subject}</td>
                                        <td className="py-3 px-6">{moment(message.createdAt).format("DD-MM-YYYY HH:mm")}</td>
                                        <td className="py-3 px-6">
                                            <button
                                                onClick={() => { setSelectedMessage(message); setShowMessageDetailModal(true); }}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                            >
                                                Voir Détails
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={() => setShowMessagesModal(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mt-4">Fermer</button>
                    </div>
                </div>
            )}

            {showMessageDetailModal && selectedMessage && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Détails du Message</h2>
                        <p><strong>Autheur:</strong> {selectedMessage?.admin?.username || ""}</p>
                        <p><strong>Destinataire :</strong> {selectedMessage?.contactId?.email || ""}</p>
                        <p><strong>Sujet:</strong> {selectedMessage.subject || ""}</p>
                        <div className="border p-4 mt-2" dangerouslySetInnerHTML={{ __html: selectedMessage.message }} />
                        <button onClick={() => setShowMessageDetailModal(false)} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mt-4">Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactAdminPage;
