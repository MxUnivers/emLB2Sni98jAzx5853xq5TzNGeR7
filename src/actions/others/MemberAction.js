// actions.js

import axios from "axios";
import { baseurl } from "../../config/routing";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des candidats à l'application
export const MemberAddRequest = (data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidat/`, data, {
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




// Fonction pour Modifier des candidats à l'application
export const MemberEditRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/candidat/edit/${id}`, data, {
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
export const MemberPasswordRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .get(`${baseurl.url}/api/v1/candidat/password/edit/${id}`, data, {
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
export const MemberBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/candidat/blocked/${id}`,
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
export const MemberUnBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/candidat/unblocked/${id}`,
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


// recupérer les données des candidats
export const MemberListRequest = async(setState,setState2) => {
    
        await axios
            .get(`${baseurl.url}/api/v1/candidat/get_candidats`,{
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                setState(response.data.data);
                setState2(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error)
            });

}



