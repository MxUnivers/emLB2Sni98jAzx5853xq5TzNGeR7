// actions.js

import axios from "axios";
import { baseurl } from "../../config/routing";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des administrateurs à l'application
export const AdministratorAddRequest = (data) => {
    return (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        axios
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
    return (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        axios
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
    return (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        axios
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



