import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';
import { handleSubmitPaymentAuthorized } from "../QWBw8T76ht2P8tAm8ccum7FAWE55w93y/TX2uXh99585i3ft2ACwV4ASisan5MBm4";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue } from "../../../utlis/storage/localvalue";





// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const VerificationPackPaiement = (
    setLoading, transaction_id, toast) => {

    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        setLoading(true);
        await axios
            .post(`${baseurl.url}/api/v1/packs/check-cinepay-transaction`,
                {
                    "transaction_id": transaction_id
                }
            )
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                if (response.data.code === "00") {
                    setLoading(false);
                    confetti();
                    toast.success("Paiement valide avec succès")
                    console.log(response.data)
                } else if (response.data.code === "627") {
                    setLoading(false);
                    toast.error("Paiement non effectués")
                    console.log(response.data)
                }
            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                setLoading(false);
                toast.error("Paiement immposible !")
            });
    };
}



export const SubscriblePackCandidat = (
    idPack, idCandidat, toast) => {

    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/packs/${getAndCheckLocalStorage(localvalue.TYPEACCESS)}/${idCandidat}/subscribe/${idPack}`
            )
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });

                confetti();
                toast.success("Souscription pack validé!");
                setTimeout(() => {
                    window.location.href = `/`;
                }, 2500);


            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Soucription pack échoué !")
            });
    };
}



// pack entreprise

export const SubscriblePackEntreprise = (
    idPack, idCandidat, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios
            .post(`${baseurl.url}/api/v1/packs/recruteur/${idPack}/subscribe/${idCandidat}`,
                {
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
            .then((response) => {
                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
                confetti();
                toast.success("Souscription pack validé !");
                setTimeout(() => {
                    window.location.href = `/`;
                }, 2500);

            })
            .catch((error) => {
                dispatch({ type: REQUEST_FAILURE, payload: error.message });
                toast.error("Inscription échouée !")
            });
    };
}




// recuperer pack candidats
// spécialement pour les entreprises
export const PackAllEntreprise = async (setState, setState2) => {

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



// recuperer pack candidats
// spécialement pour les entreprises
export const PackAllCandidat = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/packs/candidat`, {
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

