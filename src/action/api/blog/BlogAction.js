import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { FETCH_FAILED_POSTS, FETCH_SEND_POSTS, FETCH_SUCCESS_POSTS, REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';
import { useEffect, useState } from "react";
import { routing } from "../../../utlis/routing";
import { localvalueStorage } from "../../../utlis/storage/localvalue";
import { getDataFromFile, saveDataToFile } from "../../storage/DataLocal";




// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const BlogAdd = (
    idCandidat, title, coverPicture, areaPost, content, toast) => {
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
                    "title": title,
                    "coverPicture": coverPicture,
                    "areaPost": areaPost,
                    "content": content
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                confetti();
                toast.success("Votre publication est en ligne");
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Publication validé !")
            });
    };
}



export const BlogEditById = (
    idCandidat, title, coverPicture, areaPost, content, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .put(`${baseurl.url}/api/v1/blog/edit/${idCandidat}`,

                // {
                //     headers:
                //     {
                //         'Content-Type': 'application/json',
                //         'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                //     }
                // }
                {
                    "title": title,
                    "coverPicture": coverPicture,
                    "areaPost": areaPost,
                    "content": content
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                toast.success("Mis à jour effectué");
                setTimeout(() => {
                    window.location.href = `/`;
                }, 2500);
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Mis à jour impossible !")
            });
    };
}




export const fetchDataPostsAll = () => {
    return async (dispatch) => {

        const blogList = getDataFromFile(localvalueStorage.BLOGLIST) || [];
        dispatch({ type: FETCH_SUCCESS_POSTS, payload: blogList });

        dispatch({ type: FETCH_SEND_POSTS })
        await axios.get(`${baseurl.url}/api/v1/blog/get_posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }).then((response) => {
            console.log(response.data.data)
            dispatch({ type: FETCH_SUCCESS_POSTS, payload: response.data.data })
            saveDataToFile(response.data.data, localvalueStorage.BLOGLIST)
        })
            .catch((error) => {
                console.log(error);

            });

    }
}



export default function BlogAll() {
    const [blogs, setblogs] = useState([]);
    const [blogs2, setblogs2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        const blogList = getDataFromFile(localvalueStorage.BLOGLIST) || [];
        setblogs(blogList);
        setblogs2(blogList);

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
                saveDataToFile(response.data.data,localvalueStorage.BLOGLIST)
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

    return { isLoading, error, blogs, blogs2 };
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




// 
export function BlogGetAllCategoryCandidat(idCandidat) {
    const [category, setcategory] = useState([]);
    const [category2, setcategory2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const response = await axios.get(`${baseurl.url}/api/v1/blog/posts_candidat/${idCandidat}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                });

                if (response.data && response.data.data && Array.isArray(response.data.data)) {
                    console.log(response.data.data)
                    // j'ai juste besoin d'une lisete qui peut filtrer les elemnts
                    let liste = response.data.data;
                    let obj = {};
                    let result = [];
                    for (let i = 0; i < liste.length; i++) {
                        let element = liste[i];
                        let key = element.areaPost;
                        if (!obj[key]) {
                            obj[key] = true;
                            result.push(key);
                        }
                    }
                    console.log(result); // Output: ["ok", "Supr"]
                    setcategory(result);
                    setcategory2(result);
                } else {
                    console.log('La structure de la réponse est incorrecte');
                    alert("la Structure des données est incorrecte")
                }
            } catch (error) {
                console.log(error);
                setError(error);
            }

            setIsLoading(false);
        }
        fetchData();

    }, []);

    return { isLoading, error, category, category2 };
}

