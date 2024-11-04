

import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { dureeDeVie, localvalue, localvalueStorage, typePersonConnected } from "../../../utlis/storage/localvalue";
import { routing } from "../../../utlis/routing";
import { handleClearLocalStorage, setWithExpiration } from "../../../utlis/storage/localvalueFunction";
import { useState } from "react";
import { useEffect } from "react";
import { getDataFromFile, saveDataToFile } from "../../storage/DataLocal";



export const SEND_REQUEST = "SEND_REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";





//  *************************************** Authentification ************************************
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
    twitter_url, instagram_url
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
                    "employers_count": employers_count,

                    "title_post": title_post,
                    "salaire_capital": salaire_capital,
                    "addresse_entreprise": addresse_entreprise,
                    "pays_entreprise": pays_entreprise,
                    "maps_entreprise": maps_entreprise,
                    "site_web": site_web,
                    "secteur_activites": secteur_activites,
                    "langues": langues,
                    "facebook_url": facebook_url,
                    "linkedin_url": linkedin_url,
                    "twitter_url": twitter_url,
                    "instagram_url": instagram_url,
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
                toast.success(`${response.data.message}`);
                toast.success(`Votre mot de passe vous à été envoyer par email`);
                setTimeout(() => {
                    window.location.href = `/${routing.connexion_recuteur}`;
                }, 2500);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error(`${error.message}`)
            });
    };
}


export const EntrepriseConnexion = (email, password, redirect, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/entreprise/login`, {
                "email": email,
                "password": password
            }, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });

                // efface tous les données du localStorage de l'application .
                handleClearLocalStorage();
                // redirect(`/${routing.candidatDashboard.path}`);
                toast.success("Connexion Réussi ! ");

                // Assignation de données 
                setWithExpiration(
                    localvalue.recruteurID,
                    response.data.data._id,
                    dureeDeVie
                );
                setWithExpiration(
                    localvalue.TYPEACCESS,
                    typePersonConnected[0],
                    dureeDeVie
                );

                setTimeout(() => {
                    redirect(`/${routing.company_details}`);
                }, 3000);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("email ou mot de passe incorrecte ! ")

            });
    };
}







// ********************************   Modification du  Profile *****************************



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






//   **************************************    Offre de l'employeurs *******************


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



//                                   Modification du profile de l'employeur


export const EntrepriseEditCompetence = (
    id,
    salaire_capital,
    employers_count,
    pays_entreprise,
    title_post, secteur_activites, langues,
    description_entreprise
    , toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/edit/${id}`,
                {

                    "salaire_capital": salaire_capital,
                    "employers_count": employers_count,
                    "pays_entreprise": pays_entreprise,
                    "title_post": title_post,
                    "secteur_activites": secteur_activites,
                    "langues": langues,
                    "description_entreprise": description_entreprise
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Mis à jour réussi")
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Misa a jour  impossible !")
            });
    };
}




// Edit Competence
export const EntrepriseEditSocial = (
    id,
    facebook_url,
    linkedin_url,
    twitter_url,
    instagram_url,
    site_web
    , toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/edit/${id}`,
                {

                    "facebook_url": facebook_url,
                    "linkedin_url": linkedin_url,
                    "twitter_url": twitter_url,
                    "instagram_url": instagram_url,
                    "site_web": site_web,
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Mis à jour réussi")
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Misa à jour impossible !")
            });
    };
}




export const EntrepriseEditPhoto = (
    id, coverPicture, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/edit/${id}`,
                {
                    "logo": coverPicture
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Photo modifer")
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Photo non modifié !")
            });
    };
}




// candidat edit password
export const EntrepriseEditPassword = (id, password, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/password/edit/${id}`,
                {
                    "password": password
                }, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Mise a jour mot passe effectuer");
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Mot passe non modifier");
            });
    };
}



export const EntrepriseEditGenerale = (
    id,
    full_name,
    username,
    firstname,
    lastname,
    dateNaissance,
    email,
    title_post,
    telephone,
    toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/entreprise/edit/${id}`,
                {
                    "username": username,
                    "full_name": full_name,
                    "firstname": firstname,
                    "lastname": lastname,
                    "dateNaissance": dateNaissance,
                    "email": email,
                    "title_post": title_post,
                    "telephone": telephone,
                }, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Profile mis à jour")
                setTimeout(() => {
                    window.location.reload();
                }, 2500);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Mis à jour impossible !")
            });
    };
}
















export const EntrepriseGetAll = async (setState, setState2) => {
    const getData = getDataFromFile(localvalueStorage.RECRUTEURS) || []
    setState(getData)
    setState2(getData)
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
            saveDataToFile( response.data.data,localvalueStorage.RECRUTEURS)
        })
        .catch((error) => {
            // console.log(error.body);
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
            // console.log(error.body);
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
            // console.log(error.body);
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
            // // console.log(JSON.stringify(response.data.data));
        })
        .catch((error) => {
            // console.log(error);
        });

}


export function useFetchEntreprise(idEntreprise) {
    const [entreprise, setCompany] = useState({
        logo: "",
        username: "",
        full_name: "",
        email: "",
        telephone: "",
        employers_count: "",
        dateNaissance: "",
        firstname: "",
        lastname: "",
        title_post: "",
        addresse_entreprise: "",
        pays_entreprise: "",
        adresse: "",
        salaire_capital: "",
        description_entreprise: "",
        dateNaissance: "",
        secteur_activites: [],
        site_web: "",
        dateNaissance_entreprise: "",
        facebook_url: "",
        linkedin_url: "",
        twitter_url: "",
        instagram_url: "",
        bookmarks: [],
        offres: [
            {
                _id: ""
            }
        ]
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            // // console.log(idEntreprise);
            await axios.get(`${baseurl.url}/api/v1/entreprise/get_entreprise/${idEntreprise}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setCompany(response.data.data);
                setError(null);
                // // console.log(response.data.data)
            })
                .catch((error) => {
                    // // console.log(error);
                    setError(error);
                });

            setIsLoading(false);
        }

        if (idEntreprise) {
            fetchData();
        }
    }, [idEntreprise]);

    return { isLoading, error, entreprise };
}