import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';



export const submitContactForm = async (
    FormData,
    toast
) => {
    await axios
        .post(`${baseurl.url}/api/v1/contact`,
            FormData, {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
        .then((response) => {
            toast.success(" Formulaire soumis avec succès")
            window.location.reload();
                   })
        .catch((error) => {

            toast.error("Formulaire non soumis ")
        });

}