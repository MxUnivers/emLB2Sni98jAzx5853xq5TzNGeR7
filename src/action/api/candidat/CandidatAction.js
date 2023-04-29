import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";



// recupérer  tous les candidats

export const CandidatGetAll = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidat/get_candidats`, {
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