import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { routing } from "../../../utlis/routing";
import { localvalue } from "../../../utlis/storage/localvalue";
import { SEND_REQUEST } from "../annonces/AnnoncesAction";
import { REQUEST_SUCCESS } from "../annonces/AnnoncesAction";
import { REQUEST_FAILURE } from "../annonces/AnnoncesAction";




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


export const CandidatEditProfile = (id,data) => {
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



export const CandidatEditCv = (id,data) => {
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




export const CandidatEditPassword = (id,data) => {
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
                localStorage.setItem(localvalue.candidat.tokenCandidat,response.data.data.token);
                localStorage.setItem(localvalue.candidat.idCandidat,response.data.data._id);
                localStorage.setItem(localvalue.candidat.emailCandidat,response.data.data.email);
                localStorage.setItem(localvalue.typeAdmin,response.data.data.type);
                localStorage.setItem(localvalue.candidat.coverPictureCandidat,response.data.data.coverPicture);
                redirect(`/${routing.candidatDashboard.path}`);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
            });
    };
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
export const CandidatGetCvById = async (id ,setState) => {

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
export const CandidatGetCandidatpostulesByOffre = async (id ,setState) => {
    await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
    .then((response) => { setState(response.data.data.candidatPostulees); })
    .catch((error) => { console.log(error); });
}


export const CandidatGetById = async (id,setState) => {

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
export const CandidatGetAllOffrePostulees = async (candidatId,setState, setState2) => {

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