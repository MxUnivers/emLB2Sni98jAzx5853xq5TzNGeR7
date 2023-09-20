import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';





// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const SubscriblePackCandidat = (
    idPack,idCandidat,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidat/${idPack}/subscribe/${idCandidat}`,
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                confetti();
                toast.success("Souscription pack validé!");
                setTimeout(() => {
                    window.location.href=`/`;
                }, 2500);
                
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Inscription échouée !")
            });
    };
}



// pack entreprise

export const SubscriblePackEntreprise = (
    idPack,idCandidat,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/recruteur/${idPack}/subscribe/${idCandidat}`,
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                confetti();
                toast.success("Souscription pack validé !");
                setTimeout(() => {
                    window.location.href=`/`;
                }, 2500);
                
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Inscription échouée !")
            });
    };
}




// recuperer pack candidats
// spécialement pour les entreprises
export const PackAllEntreprise = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/pack/entreprises`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}



// recuperer pack candidats
// spécialement pour les entreprises
export const PackAllCandidat = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/pack/candidat`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}

