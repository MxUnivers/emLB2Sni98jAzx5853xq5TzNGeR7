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
            console.log(response.data.data)
            setState(response.data.data);
            setState2(response.data.data);
        } else {
            console.log('La structure de la réponse est incorrecte');
            alert("la Structure des données est incorrecte")
        }
    } catch (error) {
        console.log(error);
    }
};



// Recupérer tout les annonces par categories
export const AnnonceGetAllByCategories = async (id, setState) => {
    try {
        const response = await axios.get(`${baseurl.url}/api/v1/annonce/get_categories/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        });

        if (response.data && response.data.data && Array.isArray(response.data.data)) {
            console.log(response.data.data);
            setState(response.data.data);
        } else {
            console.log('La structure de la réponse est incorrecte');
            alert("la Structure des données est incorrecte")
        }
    } catch (error) {
        console.log(error);
    }
};




// recupérer les catagerorie des annonces uniquement
export const CategorieGetAllAnnonces = async (setState) => {
    try {
        const response = await axios.get(`${baseurl.url}/api/v1/annonce/get_annonces`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        });

        if (response.data && response.data.data && Array.isArray(response.data.data)) {
            console.log(response.data.data)
            // j'ai juste besoin d'une lisete qui peut filtrer les elemnts
            let liste = response.data.data;
            let obj = {};
            let result = [];
            for (let i = 0; i < liste.length; i++) {
                let element = liste[i];
                let key = element.secteur_activites;
                if (!obj[key]) {
                    obj[key] = true;
                    result.push(key);
                }
            }
            console.log(result); // Output: ["ok", "Supr"]
            setState(result);
        } else {
            console.log('La structure de la réponse est incorrecte');
            alert("la Structure des données est incorrecte")
        }
    } catch (error) {
        console.log(error);
    }
};



