// actions.js

import axios from "axios";
import { baseurl } from "../../config/routing";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des administrateurs à l'application
export const ComponanyActionAddRequest = (data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/`, data, {
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




// Fonction pour Modifier des administrateurs à l'application
export const ComponanyActionEditRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/edit/${id}`, data, {
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


// Fonction pour Modifier les mot de passe de l"admindmaintrateur
export const ComponanyActionPasswordRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/password/edit/${id}`, data, {
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

            const axios = require('axios');
    }
}



// Fonction pour Bloquer un admindmaintrateur
export const ComponanyActionBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/entreprise/blocked/${id}`,
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

// Fonction pour Bloquer un admindmaintrateur
export const ComponanyActionUnBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/entreprise/unblocked/${id}`,
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
export const ComponanyActionListRequest = async(setState) => {
        await axios
            .get(`${baseurl.url}/api/v1/entreprise/get_entreprises`,{
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                setState(response.data.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });

}



