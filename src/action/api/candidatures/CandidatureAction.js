import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";


export const CandidaturesEntreprises = async (idEntreprise, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidature/get_candidature/entreprise/${idEntreprise}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data)
            setState2(response.data.data);
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}


export const CandidatureOfCandidat = async (idCandidat, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidature/get_candidature/candidat/${idCandidat}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data)
            setState2(response.data.data);
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}