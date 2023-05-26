export const localvalue = {

    // Annonces du sites web 
    annonceDetail :{
        id:"AnnonceIdWeb",
        coverPicture:"coverPictureAnnonceWeb",
        entreprise:"coverPictureAnnonceWeb",
        description:"descriptionAnnonceWeb",
        salaire:"salaireAnnonceWeb",
        lieu:"salaireAnnonceWeb",
        secteur_activites:"secteur_activites-annonces"
    },

    offreDetail :{
        id:"OffreIdWeb",
        coverPicture:"coverPictureOffreWeb",
        entreprise:"coverPictureOffreWeb",
        description:"descriptionOffreWeb",
        salaire:"salaireOffreWeb",
        lieu:"salaireOffreWeb",
        secteur_activites:"secteur_activites-annonces"
    },

    



    //information sur les candidat
    candidat: {
        idCandidat: "idCandidat",
        tokenCandidat: "tokenCandidat",
        emailCandidat: "emailCandidat",
        coverPictureCandidat:"photoCandidat",
        idCandidatDetail:"idCandidatDetailProfile"
    },
    // Administration des candidat et epmployeur
    typeAdmin:"typeAdmin",
    offreAdmin:{
        id:"idOffreAdmin",
        coverPicture:"coverPictureOffreAdmin",
        titre:"titreOffreAdmin"
    },
    annonceAdmin:{
        id:"idAnnonceAdmin",
        coverPicture:"coverPictureAnnonceAdmin",
        titre:"titreAnnonceAdmin"
    },
    emloyeur:{
        idEmployeur: "idEmployeur",
        tokenEmployeur: "tokenEmployeur",
        emailEmployeur: "emailEmployeur",
        coverPictureEmployeur:"photoEmployeur",
        idEmployeurDetail:"idEmployeurDetailProfile"
    }
    

}



export var localvalueGet = {
    typeAdmin: localStorage.getItem(localvalue.typeAdmin)
}




export var localvalueGetCandidat = {
    idCandidat: localStorage.getItem(localvalue.candidat.idCandidat),
    tokenCandidat: localStorage.getItem(localvalue.candidat.tokenCandidat),
    emailCandidat: localStorage.getItem(localvalue.candidat.emailCandidat),
    coverPictureCandidat: localStorage.getItem(localvalue.candidat.coverPictureCandidat),
    // offre du candidat
    offreId:localStorage.getItem(localvalue.offreAdmin.id),
    annonceId:localStorage.getItem(localvalue.annonceAdmin.id)
}


export var localvalueGetEmployeur = {
    idEmployeur: localStorage.getItem(localvalue.emloyeur.idEmployeur),
    tokenEmployeur: localStorage.getItem(localvalue.emloyeur.tokenEmployeur),
    emailEmployeur: localStorage.getItem(localvalue.emloyeur.emailEmployeur),
    coverPictureEmployeur: localStorage.getItem(localvalue.emloyeur.coverPictureEmployeur),
    // offre du candidat
    offreId:localStorage.getItem(localvalue.offreAdmin.id),
    annonceId:localStorage.getItem(localvalue.annonceAdmin.id)
}
