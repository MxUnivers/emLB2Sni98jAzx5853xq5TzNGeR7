import React, { useEffect, useState } from 'react';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';

const ChatPage = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);

    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [currentConversationId, setCurrentConversationId] = useState(null); // Variable d'état pour l'ID de la conversation actuelle

    // Fonction pour récupérer les conversations
    const fetchConversations = async () => {
        const response = await fetch('/api/v1/conversations'); // Assurez-vous d'utiliser l'URL correcte
        const data = await response.json();
        setConversations(data.data);
    };

    // Fonction pour récupérer les messages d'une conversation
    const fetchMessages = async (conversationId) => {
        const response = await fetch(`/api/v1/conversations/${conversationId}`);
        const data = await response.json();
        setMessages(data.data.messages);
        setCurrentConversationId(conversationId); // Mettre à jour l'ID de la conversation actuelle
    };

    // Envoi d'un nouveau message
    const handleSendMessage = async () => {
        if (newMessage.trim() && currentConversationId) {
            const response = await fetch(`/api/v1/conversations/${currentConversationId}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sender: idCandidat, content: newMessage })
            });
            const data = await response.json();
            setMessages([...messages, data.data]); // Ajouter le nouveau message à la liste
            setNewMessage(''); // Réinitialiser le champ de saisie
        }
    };

    useEffect(() => {
        fetchConversations();
    }, []);

    return (
        <div className="flex h-screen mt-20 bg-gray-50">
            {/* Sidebar */}
            <div className="w-1/4 bg-white border-r border-gray-200">
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Chats</h2>
                    <div className="mt-4 h-[calc(100vh-200px)] overflow-y-auto"> {/* Hauteur fixe pour permettre le défilement */}
                        {conversations.map(conversation => (
                            <div
                                key={conversation._id}
                                onClick={() => fetchMessages(conversation._id)}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <span className="bg-blue-500 h-2 w-2 rounded-full mr-2"></span>
                                <span className="font-medium">{conversation.participants.map(p => p.user.firstname).join(', ')}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat Section */}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 p-4 overflow-auto h-[calc(100vh-200px)]"> {/* Hauteur fixe pour permettre le défilement */}
                    {messages.map((message, index) => (
                        <div key={index} className={`my-2 ${message.sender === idCandidat ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block rounded-lg p-2 ${message.sender === idCandidat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                <p>{message.content}</p>
                                <span className="text-xs text-gray-500">{new Date(message.timestamp).toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="flex p-4 border-t border-gray-200">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
