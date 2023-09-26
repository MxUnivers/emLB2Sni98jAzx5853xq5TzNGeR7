import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';
import {useEffect , useState} from  "react";




// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const BlogAdd = (
    idCandidat,title,coverPicture,areaPost,content,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/blog/post/${idCandidat}`,
                // {
                //     headers:
                //     {
                //         'Content-Type': 'application/json',
                //         'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                //     }
                // },
                {
                    "title":title,
                    "coverPicture":coverPicture,
                    "areaPost":areaPost,
                    "content":content
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                confetti();
                toast.success("Votre publication est en ligne");
                setTimeout(() => {
                    window.location.href=`/`;
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Publication validé !")
            });
    };
}



export const BlogEditById = (
    idCandidat,title,coverPicture,areaPost,content,toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/blog/post/${idCandidat}`,
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                },{
                    "title":title,
                    "coverPicture":coverPicture,
                    "areaPost":areaPost,
                    "content":content
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                confetti();
                toast.success("Votre publication est en ligne");
                setTimeout(() => {
                    window.location.href=`/`;
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Publication validé !")
            });
    };
}






export default function BlogAll() {
    const [blogs, setblogs] = useState([]);
    const [blogs2, setblogs2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await axios.get(`${baseurl.url}/api/v1/blog/get_posts`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setblogs(response.data.data);
                setblogs2(response.data.data);
                setError(null);
                console.log(response.data.data)
            })
                .catch((error) => {
                    console.log(error);
                    setError(error);
                });

            setIsLoading(false);
        }
        fetchData();
       
    }, []);

    return { isLoading, error, blogs,blogs2 };
}




export const BlogAllById = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/packs/entreprises`, {
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


