import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { routing } from "../../../utlis/routing";
import { localvalue } from "../../../utlis/storage/localvalue";
import { SEND_REQUEST } from "../annonces/AnnoncesAction";
import { REQUEST_SUCCESS } from "../annonces/AnnoncesAction";
import { REQUEST_FAILURE } from "../annonces/AnnoncesAction";
import { redirect } from "react-router-dom";




// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const CandidatSignUp = (data) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidat/`, data, {
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



export const CandidatPostuleOneOffre = (idcandidat, idOffre) => {
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
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
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

export const CandidatConnexion = (data, redirect) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/auth/candidat/login`, data, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                localStorage.setItem(localvalue.candidat.tokenCandidat, response.data.data.token);
                localStorage.setItem(localvalue.candidat.idCandidat, response.data.data._id);
                localStorage.setItem(localvalue.candidat.emailCandidat, response.data.data.email);
                localStorage.setItem(localvalue.typeAdmin, response.data.data.type);
                localStorage.setItem(localvalue.candidat.coverPictureCandidat, response.data.data.coverPicture);

                //Effacer tout les données les données de l'employeur
                localStorage.removeItem(localvalue.emloyeur.idEmployeur);
                localStorage.removeItem(localvalue.emloyeur.tokenEmployeur);
                localStorage.removeItem(localvalue.emloyeur.emailEmployeur);
                alert(response.data.data.type);
                alert(response.data.data._id);

                redirect(`/${routing.candidatDashboard.path}`);


            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
}
export const CandidatDeconnexion = async (id,redirect) => {

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
            localStorage.removeItem(localvalue.candidat.tokenCandidat, response.data.data.token);
            localStorage.removeItem(localvalue.candidat.idCandidat, response.data.data._id);
            localStorage.removeItem(localvalue.candidat.emailCandidat, response.data.data.email);
            localStorage.removeItem(localvalue.typeAdmin, response.data.data.type);
            localStorage.removeItem(localvalue.candidat.coverPictureCandidat, response.data.data.coverPicture);

            localStorage.removeItem(localvalue.emloyeur.tokenEmployeur, response.data.data.token);
            localStorage.removeItem(localvalue.emloyeur.idEmployeur, response.data.data._id);
            localStorage.removeItem(localvalue.emloyeur.emailEmployeur, response.data.data.email);
            
            redirect(`${routing.historique.path}`);
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