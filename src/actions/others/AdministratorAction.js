// actions.js

import axios from "axios";
import { baseurl } from "../../config/routing";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des administrateurs à l'application
export const AdministratorAddRequest = (data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/admimistrator/`, data, {
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
export const AdministratorEditRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/admimistrator/edit/${id}`, data, {
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
export const AdministratorPasswordRequest = (id,data) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/admimistrator/password/edit/${id}`, data, {
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
export const AdministratorBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/admimistrator/blocked/${id}`,
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                },
              };
              await axios.request(config)
              .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });

              })
              .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
              });
    };
}

// Fonction pour Bloquer un admindmaintrateur
export const AdministratorUnBlockedRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseurl.url}/api/v1/admimistrator/unblocked/${id}`,
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                },
              };
              await axios.request(config)
              .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });

              })
              .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
              });
    };
}


// recupérer les données des administrateurs
export const AdministratorListRequest = async(setState) => {
    
        await axios
            .get(`${baseurl.url}/api/v1/admimistrator/get_admininstrator`,{
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                setState(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });

}



