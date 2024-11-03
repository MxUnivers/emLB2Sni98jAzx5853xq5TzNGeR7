import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue, localvalueStorage } from "../../../utlis/storage/localvalue";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../employeur/EmployeurAction";
import { routing } from "../../../utlis/routing";
import { useEffect, useState } from "react";
import { getDataFromFile, saveDataToFile } from "../../storage/DataLocal";




// Poster une offre 
export const OffreCreate = (
    company,
    title,
    email,
    telephone,
    salaire,
    coverPicture,
    title_post,
    areaOffre,
    expireDispobility,
    typeContrat,
    description,
    addresse,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        if (getAndCheckLocalStorage(localvalue.recruteurID) !== null) {
            await axios
                .post(`${baseurl.url}/api/v1/offre/post/${getAndCheckLocalStorage(localvalue.recruteurID)}`,
                    {
                        //"idEntreprise": getAndCheckLocalStorage(localvalue.recruteurID),
                        "company": company,
                        "title": title,
                        "email": email,
                        "telephone": telephone,
                        "salaire": salaire,
                        "coverPicture": coverPicture,
                        //"title_post": title_post,
                        "areaOffre": areaOffre,
                        //"expireDispobility": expireDispobility,
                        "typeContrat": typeContrat,
                        "description": description,
                        "addresse": addresse
                    }, {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
                .then((response) => {
                    dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                    toast.success(" Offre poster avec succès !")
                    setTimeout(() => {
                        window.location.href = `/`;
                    }, 2500);
                })
                .catch((error) => {
                    dispatch({ type: REQUEST_FAILURE, payload: error.message });
                    toast.error("Offre non poster !")
                });
        } else {
            toast.success(" Session expirée , Veillez vous connecter !")
            setTimeout(() => {
                window.location.href = `/${routing.connexion_recuteur}`;
            }, 2500);
        }
    };
}




export const OffreEditById = (
    id,
    company,
    title,
    email,
    telephone,
    salaire,
    coverPicture,
    title_post,
    areaOffre,
    expireDispobility,
    typeContrat,
    description,
    addresse,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        if (getAndCheckLocalStorage(localvalue.recruteurID)) {
            await axios
                .put(`${baseurl.url}/api/v1/offre/edit/${id}`,
                    {
                        "idEntreprise": getAndCheckLocalStorage(localvalue.recruteurID),
                        "company": company,
                        "title": title,
                        "email": email,
                        "telephone": telephone,
                        "salaire": salaire,
                        "coverPicture": coverPicture,
                        "title_post": title_post,
                        "areaOffre": areaOffre,
                        "expireDispobility": expireDispobility,
                        "typeContrat": typeContrat,
                        "description": description,
                        "addresse": addresse
                    }, {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
                .then((response) => {
                    dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                    toast.success(" Offre modifier avec succès , Merci !")
                    setTimeout(() => {
                        window.location.href = `/${routing.company_details}`;
                    }, 2500);
                })
                .catch((error) => {
                    dispatch({ type: REQUEST_FAILURE, payload: error.message });
                    toast.error("Offre non poster !")
                });
        } else {
            toast.success(" Session expirée , Veillez vous connecter !")
            setTimeout(() => {
                window.location.href = `/${routing.connexion_recuteur}`;
            }, 2500);
        }
    };
}









// spécialement pour les entreprises
export const OffreGetAllById = async (id, setState, setState2) => {

    const offresget = getDataFromFile(localvalueStorage.EMPLOISRECRUTEUR)
    setState(offresget)
    setState2(offresget);

    await axios.get(`${baseurl.url}/api/v1/offre/get_offres/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
            saveDataToFile(response.data.data, localvalueStorage.EMPLOISRECRUTEUR)
        })
        .catch((error) => {
            // console.log(error);
        });

}


export const OffreGetAllOffre = async (setState, setState2) => {

    const offresget = getDataFromFile(localvalueStorage.EMPLOISLIST) || [];
    setState(offresget)
    setState2(offresget)
    await axios.get(`${baseurl.url}/api/v1/offre/get_offres`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
            saveDataToFile(response.data.data, localvalueStorage.EMPLOISLIST)
        })
        .catch((error) => {
            // console.log(error);
        });

}


// 
export const OffreGetById = async (id, setState, setisLoading, setentreprise) => {
    setisLoading(true);
    await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }
    )
        .then((response) => {
            setisLoading(false);
            setState(response.data.data);
            setentreprise(response.data.entreprise)
        })
        .catch((error) => {
            setisLoading(false);
            // console.log(error);
        });
}


//  Par catégory
export const OffreGetByCategory = async (setcategory, setcategory2) => {
    await axios.get(`${baseurl.url}/api/v1/offre/get_offres`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }
    )
        .then((response) => {
            let liste = response.data.data;
            let obj = {};
            let result = [];
            for (let i = 0; i < liste.length; i++) {
                let element = liste[i];
                let key = element.areaOffre;
                if (!obj[key]) {
                    obj[key] = true;
                    result.push(key);
                }
            }
            // console.log(result); // Output: ["ok", "Supr"]
            setcategory(result);
            setcategory2(result);
        })
        .catch((error) => {
            // // console.log(error);
            var a = error;
            // console.log(a)
        });
}



// par contrat
export const OffreGetByTypeContrat = async (setcategory, setcategory2) => {
    await axios.get(`${baseurl.url}/api/v1/offre/get_offres`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }
    )
        .then((response) => {
            let liste = response.data.data;
            let obj = {};
            let result = [];
            for (let i = 0; i < liste.length; i++) {
                let element = liste[i];
                let key = element.typeContrat;
                if (!obj[key]) {
                    obj[key] = true;
                    result.push(key);
                }
            }
            // console.log(result); // Output: ["ok", "Supr"]
            setcategory(result);
            setcategory2(result);
        })
        .catch((error) => {
            // // console.log(error);
            var a = error;

        });
}




export function OffreGetAllCategory() {
    const [category, setcategory] = useState([]);
    const [category2, setcategory2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const response = await axios.get(`${baseurl.url}/api/v1/offre/get_offres`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                });

                if (response.data && response.data.data && Array.isArray(response.data.data)) {
                    // console.log(response.data.data)
                    // j'ai juste besoin d'une lisete qui peut filtrer les elemnts
                    let liste = response.data.data;
                    let obj = {};
                    let result = [];
                    for (let i = 0; i < liste.length; i++) {
                        let element = liste[i];
                        let key = element.areaOffre;
                        if (!obj[key]) {
                            obj[key] = true;
                            result.push(key);
                        }
                    }
                    // console.log(result); // Output: ["ok", "Supr"]
                    setcategory(result);
                    setcategory2(result);
                } else {
                    // console.log('La structure de la réponse est incorrecte');
                    alert("la Structure des données est incorrecte")
                }
            } catch (error) {
                // console.log(error);
                setError(error);
            }

            setIsLoading(false);
        }
        fetchData();

    }, []);

    return { isLoading, error, category, category2 };
}


//typeContrat

export function OffreGetAllContrat() {
    const [category, setcategory] = useState([]);
    const [category2, setcategory2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const response = await axios.get(`${baseurl.url}/api/v1/offre/get_offres`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                });

                if (response.data && response.data.data && Array.isArray(response.data.data)) {
                    // console.log(response.data.data)
                    // j'ai juste besoin d'une lisete qui peut filtrer les elemnts
                    let liste = response.data.data;
                    let obj = {};
                    let result = [];
                    for (let i = 0; i < liste.length; i++) {
                        let element = liste[i];
                        let key = element.typeContrat;
                        if (!obj[key]) {
                            obj[key] = true;
                            result.push(key);
                        }
                    }
                    // console.log(result); // Output: ["ok", "Supr"]
                    setcategory(result);
                    setcategory2(result);
                } else {
                    // console.log('La structure de la réponse est incorrecte');
                    alert("la Structure des données est incorrecte")
                }
            } catch (error) {
                // console.log(error);
                setError(error);
            }

            setIsLoading(false);
        }
        fetchData();

    }, []);

    return { isLoading, error, category, category2 };
}



export default function OffreGetAll() {
    const [offres, setoffres] = useState([]);
    const [offres2, setoffres2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchData() {
            const offresget = getDataFromFile(localvalueStorage.EMPLOISLIST) || []
            setoffres(offresget)
            setoffres2(offresget)
            setIsLoading(true);
            await axios.get(`${baseurl.url}/api/v1/offre/get_offres`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setoffres(response.data.data);
                setoffres2(response.data.data);
                saveDataToFile(response.data.data, localvalueStorage.EMPLOISLIST)
                setError(null);
                // console.log(response.data.data)
            })
                .catch((error) => {
                    // console.log(error);
                    setError(error);
                });

            setIsLoading(false);
        }
        fetchData();

    }, []);

    return { isLoading, error, offres, offres2 };
}