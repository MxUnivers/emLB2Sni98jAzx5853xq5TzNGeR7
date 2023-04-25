// actions.js

import axios from "axios";
import { baseurl } from "../../config/routing";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des administrateurs à l'application
export const OffreActionAddRequest = (data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/offre/`, data, {
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
export const OffreActionEditRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/offre/edit/${id}`, data, {
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
export const OffreActionPasswordRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/offre/password/edit/${id}`, data, {
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
export const OffreActionBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/offre/blocked/${id}`,
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
export const OffreActionUnBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/offre/unblocked/${id}`,
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
export const OffreActionListRequest = async(setState,setState2) => {
        await axios
            .get(`${baseurl.url}/api/v1/offre/get_offres`,{
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                setState(response.data);
                setState2(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

}



