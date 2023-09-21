
// state pour les requetes
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import { routing } from "../../../utlis/routing";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue } from "../../../utlis/storage/localvalue";


const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

export const CandidaturesALLOfEntreprises = async (idEntreprise, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidature/get_candidatures/entreprise/${idEntreprise}`, {
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


export const CandidatureAllOfCandidat = async (idCandidat, setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/candidature/get_candidatures/candidat/${idCandidat}`, {
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



export const CandidatureById = async (idCandidature, setState) => {

    await axios.get(`${baseurl.url}/api/v1/candidature/get_candidature/${idCandidature}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data)
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}




// Accepter pour les premium
export const CandidatureAuthorizedAndMessage = (idCandidature, idSend, idReceip, title, content, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidature/authorized/entreprise/${idCandidature}`, {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then(async(response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Candidature accepté avec succèes !");

                
                // une fois la candidature Accepter on peut lui envoyeé un message ...
                await axios.post(`${baseurl.url}/api/v1/message/send/${idSend}/receip/${idReceip}`,
                    {
                        "subject": title,
                        "content": content
                    },
                    {
                        headers:
                        {
                            "Content-Type": "application/json",
                            "Authorization": `${baseurl.TypeToken} ${baseurl.token}`
                        }
                    }
                )
                    .then((res) => {
                        dispatch({ type: REQUEST_SUCCESS, payload: res.data });

                        toast.success("Message envoyée avec succès");
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);

                    }).catch((err) => {
                        dispatch({ type: REQUEST_FAILURE, payload: err.message });
                        toast.error("Message non envoyé au candidat");
                    })
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Candidature non accepter !");
            });
    };
}








// Rejeté un candidature
export const CandidatureAuthorizedOnly = (id, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidature/unauthorized/${id}`, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Candidature réjeté avec succèes !")
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("La candidature n'a pas pu être rejetée !")
            });
    };
}




// Rejeté un candidature
export const CandidatureUnAuthorizedOnly = (id, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/candidature/unauthorized/${id}`, {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Candidature réjeté avec succèes !")
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("La candidature n'a pas pu être rejetée !")
            });
    };
}




// candidat postlue là l'offre
// Rejeté un candidature
export const CandidaturePost = (
    idCandidat, idEntreprise, idOffre,
    firstname, lastname, email, telephone, cv, description, redirect, toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        try {
            const response = await axios.post(
                `${baseurl.url}/api/v1/candidature/add/${idCandidat}/entreprise/${idEntreprise}/offre/${idOffre}`,
                {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    telephone: telephone,
                    cv: cv,
                    description: description
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            );
            dispatch({ type: REQUEST_SUCCESS, payload: response.data });
            toast.success("Votre candidature a été postée avec succès!");
            setTimeout(() => {
                redirect(`/${routing.candidature_list}`);
            }, 3000);
        } catch (error) {
            dispatch({ type: REQUEST_FAILURE, payload: error.message });
            toast.error("Candidature non envoyée !");
        }
    }
};



