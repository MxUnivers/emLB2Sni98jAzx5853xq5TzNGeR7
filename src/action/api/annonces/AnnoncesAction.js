import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";


export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";






export const AnnonceGetAll = async (setState, setState2) => {
    try {
      const response = await axios.get(`${baseurl.url}/api/v1/annonce/get_annonces`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
      });
  
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setState(response.data.data);
      } else {
        console.log('La structure de la réponse est incorrecte');
      }
    } catch (error) {
      console.log(error);
    }
  };
  