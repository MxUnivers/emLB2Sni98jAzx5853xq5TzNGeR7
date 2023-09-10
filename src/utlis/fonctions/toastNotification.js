import React from 'react';
import { toast } from 'react-toastify';

const toastNotification = ({message}) => {
    return function showErrorToast(message){
        toast.error(message, {
            position: "top-right",
            autoClose: 3000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
}
export default toastNotification;
