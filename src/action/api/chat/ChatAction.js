import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';

export const sendMessage = async (currentConversationId, idCandidat, newMessage, image, toast) => {
    try {
        const response = await axios.post(
            `${baseurl.url}/api/v1/chat/send/${currentConversationId}/messages`,
            {
                sender: idCandidat,
                content: newMessage,
                imageUrl:image
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}` // Assurez-vous d'inclure votre token d'autorisation
                }
            }
        );
        toast.success("Message envoyé avec succès");
        return response.data.data; // Renvoie le message envoyé
    } catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
        toast.error("Erreur lors de l'envoi du message");
        throw error; // Rejeter l'erreur pour gestion ultérieure
    }
};
