import { localvalue } from "./storage/localvalue";

export const routing = {
    // Application web
    home: {
        path: "",
    },
    contact: {
        path: "contact"
    },
    categoriesAnnonces:{
        path:`categories-annonces`
    },
    searchAnnonce: {
        path: "rechercher-des-annonces"
    },
    detailAnnonce: {
        path: "details-sur-post"
    },
    historique:{
        path:"historique-des-postes"
    },
    stephistoriqueInscription:{
        path:"etapes-d'inscription-sur-la-plateforme"
    },
    detailOffre:{
        path:"detail-offre"
    },
     //Inscription
    inscription:{
        path:"option-inscription"
    },
    inscriptionCandidat: {
        path: "inscription-candidat"
    },
    inscriptionEmployer: {
        path: "inscription-pour-employeur"
    },
    //Connexion
    connexion:{
        path:"option-de-connexion"
    },
    connexionCandidat:{
        path:"connexion-candidat"
    },
    connexionEmployeur:{
        path:"connexion-employeur"
    },







    // Pour les administrateur de l'application telque les candidats et emloyeur



    // candidats
    candidatDashboard:{
        path:"tableau-de-board-candidat"
    },
    candidatAllParticipant:{
        path:"Tous-les-candidats-de-plateforme"
    },
    candidatProfile:{
        path:"profile-candidat"
    },
    candidatResume:{
        path:"information-vu-par-les-employeur"
    },
    candidatOffres:{
        path:"Listes-des-offres-pour-le-candidat"
    },
    candidatOffresPostuler:{
        path:"offres-postuler-chez-le-candidat"
    },
    candidatCv:{
        path:"information-sur-le-cv-du-cadidat"
    },
    candidatChat:{
        path:"forum-de-discution-entre-les-candidats"
    },
    candidatAlertlist:{
        path:"liste-des-alertes-pour-le-candidat"
    },
    candidatChangePassord:{
        path:"modification-du-mot-passe-du-candidat"
    },
    dashbordDetailOffreEmplois:{
        path:"details-de-l'-offre"
    },
    dashbordDetailAnnonce:{
        path:"details-de-l'annonce"
    },
    candidatDetailProfileView:{
        path:`candidat-profile-detail`
    },



    // Employeur
    employeurDashboard:{
        path:"tableau-de-bord-employeur"
    },
    employeurProfile:{
        path:"profile-employeur"
    },
    employeurPostAnnonce:{
        path:"poster-une-annonce"
    },
    employeurAnnonces:{
        path:"vos-publications-sur-la-plateforme"
    },
    employeurDetailOffre:{
        path:"details-offre"
    },
    employeurDetailAnnonce:{
        path:"details-offre"
    },
    employeurListCandidatsAnnonce:{
        path:"candidats-ayant-postuler-a-vos-annonces"
    },
    employeurListCandidatsOffre:{
        path:"candidats-ayant-postuler-a-vos-offres"
    }


    


}