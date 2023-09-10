import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";



// Envois de message de l'entreprise vers un candidat
export const Entreprise_Send_Message = (idEntreprise,idCandidat,subject,content,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/message/send/${idEntreprise}/receip/${idCandidat}`,
            {
                "subject":subject,
                "content":content
            }
            , {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Message envoyé avec succès ");
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Message non envoyée ! ");
            });
    };
}




// Recuprer tout les message du candidats

export const MessageAllCandidatById = async (id, setState,setState2) => {
    try {
        const response = await axios.get(`${baseurl.url}/api/v1/message/get_message/candidat/${id}/messages`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        });
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
            console.log(response.data.data)
            setState(response.data.data);
            setState2(response.data.data);
        } else {
            console.log('La structure de la réponse est incorrecte');
            alert("la La tsructure de donnée est increect")
        }
    } catch (error) {
        console.log(error);
    }
};




export const MessageAllEntrepriseById = async (id, setState,setState2) => {
    try {
        const response = await axios.get(`${baseurl.url}/api/v1/message/get_message/entreprise/${id}/messages`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        });
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
            console.log(response.data.data)
            setState(response.data.data);
            setState2(response.data.data);
        } else {
            console.log('La structure de la réponse est incorrecte');
            alert("la La tsructure de donnée est increect")
        }
    } catch (error) {
        console.log(error);
    }
};



