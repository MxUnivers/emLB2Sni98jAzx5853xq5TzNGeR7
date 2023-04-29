import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";


export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";






export const AnnonceGetAll = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/annonce/get_annonces`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setState(response.data.data);
            setState2(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}