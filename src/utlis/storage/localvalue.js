export const localvalue = {

    TYPEACCESS:"TYPEPERSON",
    

    candidatID :"candidatID",
    candidatTYPE:"candidatTYPE",
    candidatDetailID:"candidatDetailId",

    recruteurID:"recuteurID",
    recruteurTYPE:"recuteurTYPE",
    recruteurDetailID:"recuteurDetailID",

    //formation
    formationId :"formationId",

    //
    tokenAUTH:"tokenAUTH",

    JobID:"JobID",
    JobTITLE:"JobTITLE",


    BlogID :"BlogId",

    MessageID:"MESSAGEID",

    CANDIDATURE:"CandidatureId",

    token:"token_authentification_de_connexion_encours",



    // Payment

    customer_id:"customer_id",
    customer_name:"customer_name",
    customer_surname:"customer_surname",
    customer_email:"customer_email",
    customer_phone_number:"customer_phone_number",
    customer_pack:"customer_pack",
    customer_pack_id:"customer_pack_id",
    customer_transaction_id :"customer_transaction_id"


}




export const localvalueStorage = {

    PROFILE:"CANDIDAT",
    COMPANY:"COMPANY",
    CANDIDAT:"CANDIDAT",
    BLOGLIST:"BLOGLIST",
    FORMATIONLIST:"FORMATIONLIST",
    EMPLOISLIST:"EMPLOISLIST",
    EMPLOISLISTGET:"EMPLOISLISTGET",
    EMPLOISRECRUTEUR:"EMPLOISRECRUTEUR",
    CANIDATURESLIST:"CANIDATURESLIST",
    MESSAGE:"MESSAGE",
}





export const dureeDeVie = 30 * 24 * 60 * 60 * 1000; // 30 jours * 24 heures * 60 minutes * 60 secondes * 1000 millisecondes

export  const typePersonConnected  = [
    "RECRUTEUR".toLocaleUpperCase(),
    "CANDIDAT".toLocaleUpperCase()
];  



export const valueLocal = {
    api_key_cine_pay : process.env.REACT_APP_API_KEY_CN,
    site_web_id_cinetpay: process.env.REACT_APP_SITE_WEB_CN
}