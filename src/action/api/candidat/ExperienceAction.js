import axios from "axios";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../employeur/EmployeurAction";
import { baseurl } from "../../../utlis/url/baseurl";
import { useEffect, useState } from "react";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue } from "../../../utlis/storage/localvalue";






export const ExperienceCandidatPost = (
    idCandidat, title, entreprise, description, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/experience/post/${idCandidat}`,
                {
                    "idPerson":idCandidat,
                    "title": title,
                    "entreprise": entreprise,
                    "description": description,
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success(" Ellement ajouté ")
                // useFetchExperience(getAndCheckLocalStorage(localvalue.candidatID));
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Experience non ajouter")
            });
    };
}





export const ExperienceCandidatDelete = (
    idExperience, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/experience/hide_education/${idExperience}`, 
                {}, // Empty object since no data is being sent
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                }
            )
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Element supprimé avec succès");
                window.location.reload();
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Element non supprimé");
            });
    };
};




export default function useFetchExperience(idCandidat) {
    const [candidatExperience, setCandidatExperience] = useState([]);
    const [errorExperience, setErrorExperience] = useState(null);
    const [isLoadingExperience, setIsLoadingExperience] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoadingExperience(true);
            // console.log(idCandidat);
            await axios.get(`${baseurl.url}/api/v1/experience/get_educations/candidat/${idCandidat}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setCandidatExperience(response.data.data);
                setErrorExperience(null);
                
                // console.log(response.data.data)
            })
                .catch((error) => {
                    // console.log(error);
                    setErrorExperience(error);
                });

            setIsLoadingExperience(false);
        }

        if (idCandidat) {
            fetchData();
        }
    }, [idCandidat]);

    return { isLoadingExperience, errorExperience, candidatExperience };
}

