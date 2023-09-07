import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { routing } from "../../../utlis/routing";
import { dureeDeVie, localvalue, typePersonConnected } from "../../../utlis/storage/localvalue";
import { handleClearLocalStorage, setWithExpiration } from "../../../utlis/storage/localvalueFunction";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";





// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const CandidatSignUp = (

    username,
    firstname,
    lastname,
    description,
    dateNaissance,
    email,
    title_post,
    salaire,
    telephone,
    addresse,
    pays,
    level_school,
    site_web,
    years_experience,
    selectedOptions,
    selectedOptionsLangues,
    facebook_url,
    linkedin_url,
    twitter_url, instagram_url, password
    , toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidat/`,
                {
                    "username": username,
                    "firstname": firstname,
                    "lastname": lastname,
                    "description": description,
                    "dateNaissance": dateNaissance,
                    "email": email,
                    "title_post": title_post,
                    "salaire": salaire,
                    "telephone": telephone,
                    "adresse": addresse,
                    "pays": pays,
                    "level_school": level_school,
                    "site_web": site_web,
                    "years_experience": years_experience,
                    "competences": selectedOptions,
                    "langues": selectedOptionsLangues,
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
                toast.success(" Vous êtes inscrit , Profiter d'opportunité !")
                setTimeout(() => {
                    window.location.href=`/${routing.inscription}`;
                }, 2500);
                
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Inscription échouée !")
            });
    };
}


export const CandidatEditProfile = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/candidat/edit/${id}`, data, {
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



export const CandidatEditCv = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/candidat/edit/${id}`, data, {
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



export const CandidatPostuleOneOffre = (idcandidat, idOffre, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidat/get_candidat/${idcandidat}/postuler/${idOffre}/offres`, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Votre candidature à été posté avec succès 😉");
                // setTimeout(() => {
                //     window.location.reload();
                // }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Imoossible de poster votre candidature  😭!")
            });
    };
}


export const CandidatEditPassword = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/candidat/password/edit/${id}`, data, {
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




// Authenfication du candidate

export const CandidatConnexion = (email,password, redirect, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/candidat/login`, {
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
                // efface tous les données en localStorage de l'application
                handleClearLocalStorage();

                // assignation des dnnées du localStorage de du candycat
                setWithExpiration(
                    localvalue.candidatID,
                    response.data.data._id,
                    dureeDeVie
                );
                setWithExpiration(
                    localvalue.TYPEACCESS,
                    typePersonConnected[1],
                    dureeDeVie
                );
                // redirect(`/${routing.candidatDashboard.path}`);
                toast.success("Connexion Réussi ! ");
                setTimeout(() => {
                    redirect(`/${routing.candidat_details}`);
                }, 4000);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Impossible de se connecter ! ")

            });
    };
}


export const CandidatDeconnexion = async (id) => {

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseurl.url}/api/v1/auth/candidat/disconnect_candidat/${id}`,
        headers: {
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    };

    await axios(config)
        .then((response) => {
            // localStorage.removeItem(localvalue.candidat.tokenCandidat, response.data.data.token);
            // localStorage.removeItem(localvalue.candidat.idCandidat, response.data.data._id);
            // localStorage.removeItem(localvalue.candidat.emailCandidat, response.data.data.email);
            // localStorage.removeItem(localvalue.typeAdmin, response.data.data.type);
            // localStorage.removeItem(localvalue.candidat.coverPictureCandidat, response.data.data.coverPicture);

            // localStorage.removeItem(localvalue.emloyeur.tokenEmployeur, response.data.data.token);
            // localStorage.removeItem(localvalue.emloyeur.idEmployeur, response.data.data._id);
            // localStorage.removeItem(localvalue.emloyeur.emailEmployeur, response.data.data.email);
            handleClearLocalStorage();
            // redirect(`${routing.historique.path}`);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });

}



// recupérer  tous les candidats

export const CandidatGetAll = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidat/get_candidats`, {
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




// Recupérer mes information du cv
export const CandidatGetCvById = async (id, setState) => {

    await axios.get(`${baseurl.url}/api/v1/candidat/get_candidat/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data.cv);
        })
        .catch((error) => {
            console.log(error);
        });

}






// Recupérer tout les candiats qui ont postulés à l'offre
export const CandidatGetCandidatpostulesByOffre = async (id, setState) => {
    await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => { setState(response.data.data.candidatPostulees); })
        .catch((error) => { console.log(error); });
}


// Recupérer tout les candiats qui ont postulés à l'offre
export const CandidatGetCandidatpostulesByAnnonce = async (id, setState) => {
    await axios.get(`${baseurl.url}/api/v1/annonce/get_annonce/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => { setState(response.data.data.candidats); })
        .catch((error) => { console.log(error); });
}



export const CandidatGetById = async (id, setState) => {

    await axios.get(`${baseurl.url}/api/v1/candidat/get_candidat/${id}`, {
        headers: {
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



// Offres postuler par le candidat
export const CandidatGetAllOffrePostulees = async (candidatId, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidat/get_candidat/${candidatId}/offres`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data)
            setState2(response.data.data)
        })
        .catch((error) => {
            console.log(error);
        });

}


// recuprer les annonces d'un candidat 
export const CandidatGetAllAnnoncesPostulees = async (candidatId, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidat/get_candidat/${candidatId}/annonces`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data)
            setState2(response.data.data)
        })
        .catch((error) => {
            console.log(error);
        });

}