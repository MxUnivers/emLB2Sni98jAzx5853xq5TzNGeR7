import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue, localvalueStorage, typePersonConnected } from "../../../utlis/storage/localvalue";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../employeur/EmployeurAction";
import { routing } from "../../../utlis/routing";
import { useEffect, useState } from "react";
import { getDataFromFile, saveDataToFile } from "../../storage/DataLocal";




// Poster une offre 
export const FormationCreate = (
    FormData,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        if (getAndCheckLocalStorage(localvalue.recruteurID) && getAndCheckLocalStorage(localvalue.TYPEACCESS) === typePersonConnected[0]) {
            await axios
                .post(`${baseurl.url}/api/v1/formation/post/${getAndCheckLocalStorage(localvalue.recruteurID)}`,
                    FormData, {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
                .then((response) => {
                    dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                    toast.success(" Formation poster avec succès !")
                    setTimeout(() => {
                        window.location.href = `/`;
                    }, 2500);
                })
                .catch((error) => {
                    dispatch({ type: REQUEST_FAILURE, payload: error.message });
                    toast.error("Formation non poster !")
                });
        } else {
            toast.success(" Accès non autorisé")
            // setTimeout(() => {
            //     window.location.href = `/${routing.connexion_recuteur}`;
            // }, 2500);
        }
    };
}




export const FormationEditById = (
    id,
    data,
    toast
) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        
            await axios
                .put(`${baseurl.url}/api/v1/formation/edit/${id}`,
                    data, {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
                .then((response) => {
                    dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                    toast.success(" Formation modifier avec succès , Merci !")
                    setTimeout(() => {
                        window.location.href = `/${routing.admin_dashboard}`;
                    }, 2500);
                })
                .catch((error) => {
                    dispatch({ type: REQUEST_FAILURE, payload: error.message });
                    toast.error("Formation non poster !")
                });
        
    };
}









// spécialement pour les entreprises
export const FormationGetAllById = async (id, setState, setState2) => {

    const formationList   =  getDataFromFile(localvalueStorage.FORMATIONLISTGET)||[];
    setState(formationList);
    setState2(formationList);
    await axios.get(`${baseurl.url}/api/v1/offre/get_offres/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            setState(response.data.data);
            setState2(response.data.data);
            saveDataToFile(response.data.data, localvalueStorage.FORMATIONLISTGET)
        })
        .catch((error) => {
            // console.log(error);
        });

}


// 





export function FormationGetAllCategory() {
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
                        let key = element.areaFormation;
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

export function FormationGetAllContrat() {
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



export function FormationGetAllEntrepriseById(idEntreprise) {
    const [formations, setformations] = useState([]);
    const [formations2, setformations2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

   

    setformations()
    useEffect(() => {
        const  formationList =  getDataFromFile(localvalueStorage.FORMATIONLISTGET)||[];

        setformations(formationList);
        setformations2(formationList);
        async function fetchData() {
            setIsLoading(true);
            await axios.get(`${baseurl.url}/api/v1/formation/get_formations/${idEntreprise}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setformations(response.data.data);
                setformations2(response.data.data);
                saveDataToFile(response.data.data, localvalueStorage.FORMATIONLISTGET)
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

    return { isLoading, error, formations, formations2 };
}




export default function FormationGetAll() {
    const [formations, setformations] = useState([]);
    const [formations2, setformations2] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

   

    useEffect(() => {
        const  formationList  =  getDataFromFile(localvalueStorage.FORMATIONLIST)||[];
        setformations(formationList)
        setformations2(formationList)
        async function fetchData() {
            setIsLoading(true);
            await axios.get(`${baseurl.url}/api/v1/formation/get_formations`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setformations(response.data.data);
                setformations2(response.data.data);
                saveDataToFile(response.data.data,localvalueStorage.FORMATIONLIST)
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

    return { isLoading, error, formations, formations2 };
}


export async function fetchFormationAll(setformations, setformations2) {
        const formationList  =  getDataFromFile(localvalueStorage.FORMATIONLIST)||[];
        setformations(formationList)
        setformations2(formationList)
            await axios.get(`${baseurl.url}/api/v1/formation/get_formations`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setformations(response.data.data);
                setformations2(response.data.data);
                saveDataToFile(response.data.data,localvalueStorage.FORMATIONLIST)
                // setError(null);
                // console.log(response.data.data)
            })
                .catch((error) => {
                    // console.log(error);
                    // setError(error);
                });
}






export function FormationGetById(idFormation) {
    const [formation, setformation] = useState(
        {
            idEntreprise: '',
            urlVideo: '',
            formationTitle: '',
            logo: '',
            areaFormation: '',
            description: '',
            modules: [{ moduleLabel: '', lecons: [{ leconTitle: '', coverPicture: '', video: '', leconContent: '' }] }],
            duree: '',
            dateBegin: '',
            dateEnd: '',
            coach: {
                coachWork: '',
                coachNaissance: '',
                coachName: '',
                coachCoverPicture: '',
                coachSchool: '',
            },
            lieu: '',
            price: '',
            capaciteMax: '',
            candidats: [],
            inscriptionOuverte: false,
        }

    );
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            
            await axios.get(`${baseurl.url}/api/v1/formation/get_formation/${idFormation}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                }
            }).then((response) => {
                setformation(response.data.data);
                    console.log(response.data.data);

                setError(null);
            })
                .catch((error) => {
                    // console.log(error);
                    setError(error);
                });

            setIsLoading(false);
        }
        fetchData();

    }, []);

    return { isLoading, error, formation };
}