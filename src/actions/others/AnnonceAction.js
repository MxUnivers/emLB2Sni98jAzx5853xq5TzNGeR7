// actions.js

import axios from "axios";
import { baseurl } from "../../config/routing";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des administrateurs à l'application
export const AnnonceActionAddRequest = (data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/annonce/`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}




// Fonction pour Modifier des annonce de l'application
export const AnnonceActionEditRequest = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/annonce/edit/${id}`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}





// Fonction pour Bloquer une annonce
export const AnnonceActionBlockedRequest = (id) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${baseurl.url}/api/v1/annonce/blocked/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
            },
        };
        await axios.request(config)
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}





// Fonction pour Débloquer une annonce
export const AnnonceActionUnBlockedRequest = (id) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${baseurl.url}/api/v1/annonce/unblocked/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
            },
        };
        await axios.request(config)
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}





// recupérer les données des administrateurs
// recupérer les données des administrateurs
export const AnnonceActionnGetListRequest = async(setState,setState2) => {
    
    await axios
        .get(`${baseurl.url}/api/v1/annonce/get_annonces`,{
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
            }
        })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
            console.log(response.data.data)
        })
        .catch((error) => {
            console.log(error)
        });

}


