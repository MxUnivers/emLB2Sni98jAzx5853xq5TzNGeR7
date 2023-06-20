

import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { localvalue } from "../../../utlis/storage/localvalue";
import { routing } from "../../../utlis/routing";
import { handleClearLocalStorage } from "../../../utlis/storage/localvalueFunction";



export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";



// Fonction pour ajouter des administrateurs à l'application
export const EntrepriseSignUp = (data, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Inscription résussi avec succès . Velliez vous connecter maintenant !");
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Inscription échoué !");
            });
    };
}



export const EntrepriseConnexion = (data, redirect, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/entreprise/login/`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                handleClearLocalStorage();
                // ReRecupérer les données de connexion 
                localStorage.setItem(localvalue.emloyeur.idEmployeur, response.data.data._id);
                localStorage.setItem(localvalue.emloyeur.coverPictureEmployeur, response.data.data.logo);
                localStorage.setItem(localvalue.emloyeur.tokenEmployeur, response.data.data.token);
                localStorage.setItem(localvalue.typeAdmin, response.data.data.type);

                toast.success("Connexion réussi !");
                setTimeout(() => {
                    redirect(`/`);
                }, 4000);
                // redirect(`/${routing.employeurDashboard.path}`);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Impossible de se connecter !");

            });
    };
}






export const EntrepriseDisConnect = (id) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/entreprise/disconnect/${id}/`, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });

                // // ReRecupérer les données de connexion 
                // localStorage.removeItem(localvalue.emloyeur.idEmployeur);
                // localStorage.removeItem(localvalue.emloyeur.coverPictureEmployeur);
                // localStorage.removeItem(localvalue.emloyeur.tokenEmployeur);
                // localStorage.removeItem(localvalue.typeAdmin);

                // // Deconnexion du candidat
                // localStorage.removeItem(localvalue.candidat.tokenCandidat);
                // localStorage.removeItem(localvalue.candidat.idCandidat);
                // localStorage.removeItem(localvalue.candidat.emailCandidat);
                // localStorage.removeItem(localvalue.candidat.coverPictureCandidat);
                alert("deconnexion réussi")
                handleClearLocalStorage();
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                alert("Error la deconnéxion")
            });
    };
}








export const EntrepriseEditProfile = (id, data, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/edit/${id}`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Profile modifier avec succès");
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Impossible de modifier le profile");
            });
    };
}



// Une entreprise qui poste une annonce
export const EntreprisePostAnnonce = (
    id,
    titre, entreprise, description, typeAnnonce,
    telephone, email, salaire, lieu, pays,
    secteurs_activites, dateDebut, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/post_entreprise/${id}/annonces`,
                {
                    "titre": titre,
                    "entreprise": entreprise,
                    "description": description,
                    "typeAnnonce": typeAnnonce,
                    "telephone": telephone,
                    "email": email,
                    "lieu": lieu,
                    "pays": pays,
                    "salaire": salaire,
                    "secteurs_activites": secteurs_activites,
                    "dateDebut": dateDebut
                }, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Annonce Créer avec succès");
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Impossible de Créer un annonce");
            });
    };
}





//Modifier cette annonce




// Une entreprise qui poste une anonnce
export const EntreprisePostOffre = (id,
    titre, entreprise, description, typeOffre, typeContrat,
    telephone, email, salaire, lieu, pays,
    secteurs_activites, dateDebut, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/post_entreprise/${id}/offres`,
                {
                    "titre": titre,
                    "entreprise": entreprise,
                    "description": description,
                    "typeOffre": typeOffre,
                    "typeContrat": typeContrat,
                    "telephone": telephone,
                    "email": email,
                    "lieu": lieu,
                    "pays": pays,
                    "salaire": salaire,
                    "secteurs_activites": secteurs_activites,
                    "dateDebut": dateDebut
                }
                , {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Impossible de poster cette offre");
                setTimeout(() => {
                    window.location.reload()
                }, 2000);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.success("Offre Non posté");
            });
    };
}



export const EntrepriseEditAnnonce = (id, data, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/edit/${id}`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Annonce Modifier")
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Impossible de Modifier l'annonce")
            });
    };
}











export const EntrepriseEditPassword = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/password/edit/${id}`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
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




export const EntrepriseGetAll = async (setState, setState2) => {
    await axios
        .get(`${baseurl.url}/api/v1/auth/entreprise/login/`, {
            headers:
            {
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




export const EntrepriseGetById = async (id, setState) => {
    await axios
        .get(`${baseurl.url}/api/v1/entreprise/get_entreprise/${id}`, {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
        .then((response) => {
            setState(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}




// Listes de tous les annonces l'entreprise
export const EntrepriseGetAllAnnonces = async (id, setState, setState2) => {
    await axios
        .get(`${baseurl.url}/api/v1/entreprise/get_entreprise/${id}/annonces`, {
            headers:
            {
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


export const EntrepriseGetAllOffres = async (id, setState, setState2) => {
    await axios
        .get(`${baseurl.url}/api/v1/entreprise/get_entreprise/${id}/offres`, {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
            console.log(JSON.stringify(response.data.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

