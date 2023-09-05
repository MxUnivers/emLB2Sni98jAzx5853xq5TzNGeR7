

import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { localvalue } from "../../../utlis/storage/localvalue";
import { routing } from "../../../utlis/routing";
import { handleClearLocalStorage } from "../../../utlis/storage/localvalueFunction";



export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";





// Fonction pour ajouter des administrateurs à l'application
export const EntrepriseSignUp = (

    username,
    full_name,
    firstname,
    lastname,
    employers_count,
    description_entreprise,
    dateNaissance,
    dateNaissance_entreprise,
    email,
    title_post,
    logo,
    salaire_capital,
    telephone,
    telephone_entreprise,
    addresse_entreprise,
    pays_entreprise,
    maps_entreprise,
    secteur_activites,
    site_web,
    langues,
    facebook_url,
    linkedin_url,
    twitter_url, instagram_url, password
    , toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/entreprise/`,
                {
                    "username": username,
                    "full_name": full_name,

                    "firstname": firstname,
                    "lastname": lastname,

                    "description_entreprise": description_entreprise,
                    "dateNaissance": dateNaissance,
                    "dateNaissance_entreprise": dateNaissance_entreprise,
                    "email": email,
                    "telephone": telephone,
                    "telephone_entreprise": telephone_entreprise,
                    "logo": logo,
                    "employers_count":employers_count,

                    "title_post": title_post,
                    "salaire_capital": salaire_capital,
                    "addresse_entreprise": addresse_entreprise,
                    "pays_entreprise": pays_entreprise,
                    "maps_entreprise":maps_entreprise,
                    "site_web": site_web,
                    "secteur_activites": secteur_activites,
                    "langues": langues,
                    "facebook_url": facebook_url,
                    "linkedin_url": linkedin_url,
                    "twitter_url": twitter_url,
                    "instagram_url": instagram_url,
                    "password": password
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
                toast.success(`${response.message}`);
                setTimeout(() => {
                    window.location.href=`/${routing.connexion_recuteur}`;
                }, 2500);
                
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error(`${error.message}`)
            });
    };
}



export const EntrepriseConnexion = (email,password, redirect, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/entreprise/login`, {
                "email":email,
                "password":password
            }, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                handleClearLocalStorage();
                // redirect(`/${routing.candidatDashboard.path}`);
                toast.success("Connexion Réussi ! ");
                setTimeout(() => {
                    redirect("/");
                }, 3000);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("email ou mot de passe incorrecte ! ")

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








export const EntrepriseEditProfile = (id,

    // const [username, setusername] = useState("")
    // const [entreprise, setentreprise] = useState("");
    // const [email, setemail] = useState("");
    // const [telephone, settelephone] = useState("");
    // const [secteurActivites, setsecteurActivites] = useState("");
    // const [address, setaddress] = useState();
    // const [pays, setpays] = useState();
    // const [facebook, setfacebook] = useState();
    // const [instagram, setinstagram] = useState();
    // const [twitter, settwitter] = useState();
    // const [linkdine, setlinkdine] = useState();
    // const [description, setdescription] = useState();


    data, toast) => {
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
export const EntrepriseEditAnnonce = (
    id,
    titre, entreprise, description, typeAnnonce,
    telephone, email, salaire, lieu, pays,
    secteurs_activites, dateDebut, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/annonce/edit/${id}`,
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
                toast.success("Annonce modifier avec succès");
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Annonce nom modifier");
            });
    };
}





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
                },
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Offre Créer avec succès");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.success("Offre Non posté");
            });
    };
}


//modifier offre de l'entreprise
export const EntrepriseEditOffre = (id,
    titre, entreprise, description, typeOffre, typeContrat,
    telephone, email, salaire, lieu, pays,
    secteurs_activites, dateDebut, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/offre/edit/${id}`,
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
                },
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Offre Créer avec succès");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.success("Offre Non posté");
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

