
import axios from "axios";
import { valueLocal } from "../../../utlis/storage/localvalue";
import { redirect } from "react-router-dom";

export const handleSubmitPaymentAuthorized = ()=>{
    var data = JSON.stringify({
      "apikey": valueLocal.api_key_cine_pay,
      "site_id": valueLocal.site_web_id_cinetpay,
      "transaction_id":  Math.floor(Math.random() * 100000000).toString(), //
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

    var config = {
      method: 'post',
      url: 'https://api-checkout.cinetpay.com/v2/payment',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setTimeout(() => {
        window.open(`${response.data.data.payment_url}`, '_blank');
      }, 1500);
    })
    .catch(function (error) {
      console.log(error);
      alert("echoué")
    });

}