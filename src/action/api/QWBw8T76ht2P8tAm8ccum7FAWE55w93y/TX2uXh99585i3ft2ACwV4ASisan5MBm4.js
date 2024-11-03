
import axios from "axios";
import { localvalue, valueLocal } from "../../../utlis/storage/localvalue";
import { redirect } from "react-router-dom";
import { getAndCheckLocalStorage } from "../../../utlis/storage/localvalueFunction";
import { baseurl } from "../../../utlis/url/baseurl";

export const handleSubmitPaymentAuthorized = (toast) => {
  var transation_idC = Math.floor(Math.random() * 100000000).toString()
  var data = JSON.stringify({
    "apikey": valueLocal.api_key_cine_pay,
    "site_id": valueLocal.site_web_id_cinetpay,
    "transaction_id": transation_idC, //
    "amount": 100,
    "currency": "XOF",
    "alternative_currency": "",
    "description": " TEST INTEGRATION ",
    "customer_id": "172",
    "customer_name": "Bly ",
    "customer_surname": "Bi GOHI AYMAR",
    "customer_email": "aymarbly559@gmail.com",
    "customer_phone_number": "+2250595387052",
    "customer_address": "Antananarivo",
    "customer_city": "Antananarivo",
    "customer_country": "CM",
    "customer_state": "CM",
    "customer_zip_code": "00225",
    "notify_url": "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
    "return_url": "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
    "channels": "ALL",
    "metadata": "user1",
    "lang": "FR",
    "invoice_data": {
      "Donnee1": "",
      "Donnee2": "",
      "Donnee3": ""
    }
  });
  // console.log(data)

  var config = {
    method: 'post',
    url: 'https://api-checkout.cinetpay.com/v2/payment',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(async function (response) {
      // console.log(JSON.stringify(response.data));
      toast.info("Veillez payer votre pack via ce lien dans le naigateur")
      setTimeout(() => {
        window.open(`${response.data.data.payment_url}`, '_blank');
      }, 500);
      // console.log(transation_idC);

      // Créez un objet JSON avec les informations requises
      const requestData = {
        "apikey": valueLocal.api_key_cine_pay,
        "site_id": valueLocal.site_web_id_cinetpay,
        "transaction_id": response.data.data.payment_token

        // "currency": "XOF",
        // "amount": 50,
        // "description": " TEST INTEGRATION "

      };

      // console.log(requestData);

      // Effectuez la requête Axios dans la fonction useEffect
      setTimeout(async () => {
        await axios
          .post('https://api-checkout.cinetpay.com/v2/payment/check', requestData)
          .then(function (response) {
            // Traitez la réponse ici
            const status = response.data.code;
            // console.log(status); // Vous pouvez ajuster cela en fonction de la structure de la réponse
            // console.log(response.data.data); // Vous pouvez ajuster cela en fonction de la structure de la réponse
            toast.success("Paiement Réussi");
          })
          .catch(function (error) {
            // Gérez les erreurs ici
            console.error('Erreur lors de la vérification de la transaction :', error);
            toast.error("Paiement Echoué");
          });
      }, 60000);

    })
    .catch(function (error) {
      // console.log(error);
      alert("echoué")
    });

}





export const fetchProcessData = async (userId) => {
  // console.log(userId);
  // console.log(localStorage.getItem(localvalue.customer_transaction_id));

  let data = JSON.stringify({
    "apikey": `${valueLocal.api_key_cine_pay}`,
    "site_id": valueLocal.site_web_id_cinetpay,
    "transaction_id": String(localStorage.getItem(localvalue.customer_transaction_id))
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-checkout.cinetpay.com/v2/payment/check',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  await axios.request(config)
    .then(async (response) => {
      if (response.data.code == "00") {
        await axios
          .post(`${baseurl.url}/api/v1/packs/${getAndCheckLocalStorage(localvalue.TYPEACCESS)}/${userId}/subscribe/${getAndCheckLocalStorage(localvalue.customer_pack_id)}`,
          )
          .then((response) => {
            // confetti();
            // // console.log("");
          })
          .catch((error) => {
            // toast.error("Soucription pack échoué !");
            // // console.log("");
          });

      } else if (response.data.code == "627") {
        // setIsLoginpaymentUrl(false);
        // // console.log("");
      }
    })
    .catch((error) => {
      // // console.log("");
    });






}