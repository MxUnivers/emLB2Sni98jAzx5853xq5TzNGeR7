import axios from "axios";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../employeur/EmployeurAction";
import { baseurl } from "../../../utlis/url/baseurl";
import { useEffect, useState } from "react";






export const ProjectCandidatPost = (
    idCandidat, title, entreprise, description, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/project/post/${idCandidat}`,
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
                toast.success(" Project ajouté ")
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Project non prise en charge !")
            });
    };
}




export default function useFetchProject(idCandidat) {
    const [candidatProject, setCandidatProject] = useState([]);
    const [errorProject, setErrorProject] = useState(null);
    const [isLoadingProject, setIsLoadingProject] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoadingProject(true);
            console.log(idCandidat);
            await axios.get(`${baseurl.url}/api/v1/project/get_educations/candidat/${idCandidat}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setCandidatProject(response.data.data);
                setErrorProject(null);
                console.log(response.data.data)
            })
                .catch((error) => {
                    console.log(error);
                    setErrorProject(error);
                });

            setIsLoadingProject(false);
        }

        if (idCandidat) {
            fetchData();
        }
    }, [idCandidat]);

    return { isLoadingProject, errorProject, candidatProject };
}