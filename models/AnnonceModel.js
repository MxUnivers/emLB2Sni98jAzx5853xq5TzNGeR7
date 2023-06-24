const mongoose = require('mongoose');
const { secteursActivites } = require('../utils/FormatApi');
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    titre: {
        type: String,
        required: false,
        default: "Annonce pour un travail"
    },
    idAdministrateur: {
        type: String
    },
    idEntreprise: {
        type: String,
    },
    description: {
        type: String,
        required: false
    },
    entreprise: {
        type: String,
        required: false
    },
    logo: {
        type: String,
        required: false,
        default:"https://img.freepik.com/vecteurs-libre/illustrationn-megaphone-style-monochrome-isole-fond-blanc_1284-38767.jpg?w=740&t=st=1687538491~exp=1687539091~hmac=3b1a2979e84a530d1d65941f6cf761b1da9d6ca10f9ffb054a456e5649113f44"
    },
    email: {
        type: String, required: false
    },
    telephone: {
        type: String, required: false
    },
    typeAnnonce: {
        type: String, required: false
    },
    lieu: {
        type: String,
        required: false,
        default: "Abidjan"
    },
    salaire: {
        type: Number,
        required: false,
        default: 0
    },
    dateDebut: {
        type: Date,
        default: Date.now,
    },
    dateFin: {
        type: Date,
        default: Date.now,
    },
    candidats: [
        { type: Object }
    ],
    secteur_activites: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        default: "annonce"
    },
    blocked: {
        type: Boolean,
        required: false,
        default: false
    },
    candidatAdmis: [
        { type: Object }
    ]
});

const AnnonceModel = mongoose.model('Annonce', annonceSchema);

module.exports = AnnonceModel;
