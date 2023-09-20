import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { routing } from "../../../utlis/routing";
import { dureeDeVie, localvalue, typePersonConnected } from "../../../utlis/storage/localvalue";
import { handleClearLocalStorage, setWithExpiration } from "../../../utlis/storage/localvalueFunction";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';





// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const SubcribPackCandidat = (
    idPack,idCandidat,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/candidat/${idPack}/subscribe/${idCandidat}`,
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

export const SubcribPackEntreprise = (
    idPack,idCandidat,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/recruteur/${idPack}/subscribe/${idCandidat}`,
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
