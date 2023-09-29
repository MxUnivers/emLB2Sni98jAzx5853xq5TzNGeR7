export const localvalue = {

    TYPEACCESS:"TYPEPERSON",

    candidatID :"candidatID",
    candidatTYPE:"candidatTYPE",
    candidatDetailID:"candidatDetailId",

    recruteurID:"recuteurID",
    recruteurTYPE:"recuteurTYPE",
    recruteurDetailID:"recuteurDetailID",


    tokenAUTH:"tokenAUTH",

    JobID:"JobID",
    JobTITLE:"JobTITLE",


    BlogID :"BlogId",

    MessageID:"MESSAGEID",

    CANDIDATURE:"CandidatureId",

    token:"token_authentification_de_connexion_encours"

}





export const dureeDeVie = 30 * 24 * 60 * 60 * 1000; // 30 jours * 24 heures * 60 minutes * 60 secondes * 1000 millisecondes

export  const typePersonConnected  = [
    "Recruteur".toLocaleUpperCase(),
    "candidat".toLocaleUpperCase()
];  



export const valueLocal = {
    api_key_cine_pay : process.env.REACT_APP_API_KEY_CN,
    site_web_id_cinetpay: process.env.REACT_APP_SITE_WEB_CN
}