import React, { useEffect, useState } from 'react'
import NabbarHidden from '../components/NabbarHidden'
import NavbarWeb from '../components/NavbarWeb'
import { Outlet } from 'react-router-dom'
import DarkCompo from '../components/DarkCompo'
import FooterWeb from '../components/FooterWeb'
import axios from 'axios'
import { getAndCheckLocalStorage } from '../utlis/storage/localvalueFunction'
import { localvalue, valueLocal } from '../utlis/storage/localvalue'
import confetti from 'canvas-confetti'
import { baseurl } from '../utlis/url/baseurl'

const Layout = () => {
  const [userId, setUserId] = useState();


  useEffect(async () => {
    const candidatId = getAndCheckLocalStorage(localvalue.candidatID);
    const recruteurId = getAndCheckLocalStorage(localvalue.recruteurID);
    if (candidatId !== null) {
      setUserId(candidatId);
      let data = JSON.stringify({
        "apikey": `${valueLocal.api_key_cine_pay}`,
        "site_id": valueLocal.site_web_id_cinetpay,
        "transaction_id": String(getAndCheckLocalStorage(localvalue.customer_transaction_id))
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
                console.log("");
              })
              .catch((error) => {
                // toast.error("Soucription pack échoué !");
                console.log("");
              });

          } else if (response.data.code == "627") {
            // setIsLoginpaymentUrl(false);
            console.log("");
          }
        })
        .catch((error) => {
          console.log("");
        });



    } else if (recruteurId !== null) {
      setUserId(candidatId);
      let data = JSON.stringify({
        "apikey": `${valueLocal.api_key_cine_pay}`,
        "site_id": valueLocal.site_web_id_cinetpay,
        "transaction_id": String(getAndCheckLocalStorage(localvalue.customer_transaction_id))
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
                console.log("");
              })
              .catch((error) => {
                // toast.error("Soucription pack échoué !");
                console.log("");
              });

          } else if (response.data.code == "627") {
            // setIsLoginpaymentUrl(false);
            console.log("");
          }
        })
        .catch((error) => {
          console.log("");
        });
    } else {
      // Gérer le cas où les deux valeurs sont nulles (ou autre logique selon vos besoins)
      setUserId(null);
    }



  }, []);



  return (
    <>
      {/*<NabbarHidden/> */}
      <header>
        <NavbarWeb />
      </header>

      {/*<DarkCompo/> */}
      <Outlet />
      <FooterWeb />
    </>
  )
}

export default Layout