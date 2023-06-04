
import React, {  useState,useEffect } from 'react'
import moment from 'moment';
import { MessageAllCandidatById } from '../../../action/api/messages/MessageAction';
import { localvalue } from '../../../utlis/storage/localvalue';

const MessageListPage = () => {
    var idAdmin =  localStorage.getItem(localvalue.candidat.idCandidat);
    // Exemple de données de messages
    // const messages = [
    //     {
    //         id: 1,
    //         sender: 'john@example.com',
    //         subject: 'Réunion',
    //         preview: 'Bonjour, nous devons nous réunir demain...',
    //         timestamp: '2023-05-26T09:30:00',
    //         read: false,
    //     },
    //     {
    //         id: 2,
    //         sender: 'jane@example.com',
    //         subject: 'Projet en cours',
    //         preview: 'Salut, comment avance le projet ?...',
    //         timestamp: '2023-05-25T14:15:00',
    //         read: true,
    //     },
    //     // Ajoutez d'autres messages ici
    // ];
    const [messages, setmessages] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        MessageAllCandidatById(idAdmin ,setmessages);
    }, [])
    
    return (
        <div className="p-4">
            <div class="flex flex-wrap justify-between">
                <h1 className="text-2xl font-bold mb-4">Boîte de réception (0)</h1>
                <form onSubmit={handleSubmit} className="flex items-center">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white font-semibold rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
                    >
                        Rechercher
                    </button>
                </form>

            </div>
            <div className="divide-y divide-gray-200">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={"flex items-center  py-4 bg-white hover:bg-gray-300 "}
                    >
                        <div className="flex items-center mr-4">
                            <div className="w-8 h-8 rounded-full "></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold">{message.subject}</h2>
                                <span className="text-sm text-gray-500">{moment(message.timestamp).format("DD/MM/YYYY")}</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <h3 className="font-medium">{message.content}</h3>
                                {!message.read && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{message.preview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MessageListPage;