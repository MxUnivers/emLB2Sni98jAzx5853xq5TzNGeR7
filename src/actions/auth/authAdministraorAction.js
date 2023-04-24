// actions.js

import axios from "axios";
import { baseurl, routing } from "../../config/routing";
import { localvalue } from "../../config/localvalue";

export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";




// Fonction pour ajouter des administrateurs à l'application
export const AdministratorLoginRequest = (data,redirect) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/admimistrator/auth_adminstrator`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                sessionStorage.setItem(localvalue.idAdmin,response.data.data._id);
                sessionStorage.setItem(localvalue.full_namAdmin,response.data.data.full_name);
                sessionStorage.setItem(localvalue.usernameAdmin,response.data.data.username);
                sessionStorage.setItem(localvalue.emailAdmin,response.data.data.email);
                sessionStorage.setItem(localvalue.roleAdmin,response.data.data.role);
                sessionStorage.setItem(localvalue.tokenAdmin,response.data.token);
                redirect(`/${routing.home}`)
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}



export const AdministratorDisconnectRequest = (id) => {
    return async(dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/admimistrator/disconnect_adminstrator/${id}`, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.typeToken} ${baseurl.Token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                window.location.reload();
                sessionStorage.removeItem(localvalue.idAdmin,response.data.data._id);
                sessionStorage.removeItem(localvalue.tokenAdmin,response.data.token);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}



