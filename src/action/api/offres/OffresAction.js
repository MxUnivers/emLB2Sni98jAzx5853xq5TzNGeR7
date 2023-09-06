import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue } from "../../../utlis/storage/localvalue";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../employeur/EmployeurAction";
import { routing } from "../../../utlis/routing";




// Poster une offre 
export const OffreCreate = (
    company,
    title,
    email,
    telephone,
    salaire,
    coverPicture,
    title_post,
    areaOffre,
    expireDispobility,
    typeContrat,
    description,
    addresse,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        if(getAndCheckLocalStorage(localvalue.recruteurID)){
            await axios
            .post(`${baseurl.url}/api/v1/offre/`,
                {
                    "idEntreprise": getAndCheckLocalStorage(localvalue.recruteurID),
                    "company": company,
                    "title": title,
                    "email": email,
                    "telephone": telephone,
                    "salaire": salaire,
                    "coverPicture": coverPicture,
                    "title_post": title_post,
                    "areaOffre": areaOffre,
                    "expireDispobility": expireDispobility,
                    "typeContrat": typeContrat,
                    "description": description,
                    "addresse": addresse
                },{
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Offre poster avec succès !")
                setTimeout(() => {
                    window.location.href = `/`;
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Offre non poster !")
            });
        }else{
            toast.success(" Session expirée , Veillez vous connecter !")
                setTimeout(() => {
                    window.location.href = `/${routing.connexion_recuteur}`;
                }, 2500);
        }
    };
}




export const OffreEditById = (
    id,
    company,
    title,
    email,
    telephone,
    salaire,
    coverPicture,
    title_post,
    areaOffre,
    expireDispobility,
    typeContrat,
    description,
    addresse,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        if(getAndCheckLocalStorage(localvalue.recruteurID)){
            await axios
            .post(`${baseurl.url}/api/v1/offre/edit/${id}`,
                {
                    "idEntreprise": getAndCheckLocalStorage(localvalue.recruteurID),
                    "company": company,
                    "title": title,
                    "email": email,
                    "telephone": telephone,
                    "salaire": salaire,
                    "coverPicture": coverPicture,
                    "title_post": title_post,
                    "areaOffre": areaOffre,
                    "expireDispobility": expireDispobility,
                    "typeContrat": typeContrat,
                    "description": description,
                    "addresse": addresse
                },{
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Offre modifier avec succès , Merci !")
                setTimeout(() => {
                    window.location.href = `/`;
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Offre non poster !")
            });
        }else{
            toast.success(" Session expirée , Veillez vous connecter !")
                setTimeout(() => {
                    window.location.href = `/${routing.connexion_recuteur}`;
                }, 2500);
        }
    };
}






export const OffreGetAll = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/offre/get_offres`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}

// spécialement pour les entreprises
export const OffreGetAllById = async (id, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/offre/get_offres/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}




// 
export const OffreGetById = async (id, setState) => {

    await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }
    )
        .then((response) => {
            setState(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}







