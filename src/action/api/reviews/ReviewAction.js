import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';
import { handleSubmitPaymentAuthorized } from "../QWBw8T76ht2P8tAm8ccum7FAWE55w93y/TX2uXh99585i3ft2ACwV4ASisan5MBm4";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { localvalue } from "../../../utlis/storage/localvalue";
import { toast } from "react-toastify";





export const ReviewCreateCandidat = (
    idPack, idCandidat) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        await axios.post(`${baseurl.url}/api/v1/packs/${getAndCheckLocalStorage(localvalue.TYPEACCESS)}/${idCandidat}/subscribe/${idPack}`
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


// spécialement pour les entreprises
export const ReviewsAllCandidat = async (setReviews) => {

    await axios.get(`${baseurl.url}/api/v1/reviews/get_reviews_profiles`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
    })
        .then((response) => {
            console.log(response.data.data);
            setReviews(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}



