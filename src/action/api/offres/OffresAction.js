import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";








export const OffreGetAll = async (setState, setState2) => {

    await axios.get(`${baseurl.url}/api/v1/offre/get_offres`, {
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
export const OffreGetById = async (id, setState) => {

    await axios.get(`${baseurl.url}/api/v1/offre/get_offre/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        }
    )
        .then((response) => {
            setState(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}







