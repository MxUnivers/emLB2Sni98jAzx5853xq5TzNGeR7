import axios from "axios";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../employeur/EmployeurAction";
import { baseurl } from "../../../utlis/url/baseurl";
import { useEffect, useState } from "react";






export const EducationCandidatPost = (
    idCandidat, title, entreprise, description, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/education/post/${idCandidat}`,
                {
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
                toast.success(" Education ")
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Photo non modifié !")
            });
    };
}




export default function useFetchEducation(idCandidat) {
    const [candidatEducation, setCandidatEducation] = useState([]);
    const [errorEducation, setErrorEducation] = useState(null);
    const [isLoadingEducation, setIsLoadingEducation] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoadingEducation(true);
            console.log(idCandidat);
            await axios.get(`${baseurl.url}/api/v1/education/get_educations/candidat/${idCandidat}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setCandidatEducation(response.data.data);
                setErrorEducation(null);
                console.log(response.data.data)
            })
                .catch((error) => {
                    console.log(error);
                    setErrorEducation(error);
                });

            setIsLoadingEducation(false);
        }

        if (idCandidat) {
            fetchData();
        }
    }, [idCandidat]);

    return { isLoadingEducation, errorEducation, candidatEducation };
}