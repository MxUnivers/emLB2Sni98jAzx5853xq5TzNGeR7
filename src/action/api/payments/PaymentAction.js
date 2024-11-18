import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';



export const fetchPaymentAll = async (
    setPayments
) => {
    await axios
        .get(`${baseurl.url}/api/v1/payments/get_payments`,
            FormData, {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
        .then((response) => {
            setPayments(response.data.data)
            // window.location.reload();
                   })
        .catch((error) => {
            // toast.error("Formulaire non soumis ")
        });
}



export const fetchPaymentById = async (
    idPayment,setPayment
) => {
    await axios
        .get(`${baseurl.url}/api/v1/payments/get_payment/${idPayment}`,
            FormData, {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
        .then((response) => {
            setPayment(response.data.data)
            // window.location.reload();
                   })
        .catch((error) => {
            // toast.error("Formulaire non soumis ")
        });

}