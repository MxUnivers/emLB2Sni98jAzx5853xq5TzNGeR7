const mongoose = require('mongoose');

// Schéma de données pour une leçon
const leconSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        trim: true,
    },
    contenu: {
        type: String,
        required: true,
    },
});

// Schéma de données pour un module
const moduleSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        trim: true,
    },
    lecons: [leconSchema], // Tableau de leçons
});

// Schéma de données pour une formation
const formationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    modules: [moduleSchema], // Tableau de modules
    duree: {
        type: Number, // Durée en heures, par exemple
        required: true,
    },
    dateBegin: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateEnd: {
        type: Date,
        required: true,
        default: Date.now
    },
    // information sur le formateur
    coach: {
        coachWork: {
            type: String, // Vous pouvez également utiliser un schéma de données séparé pour les formateurs
            required: false,
        },
        coachNaissance: {
            type: String, // Vous pouvez également utiliser un schéma de données séparé pour les formateurs
            required: false,
        },
        coachName: {
            type: String, // Vous pouvez également utiliser un schéma de données séparé pour les formateurs
            required: false,
        },
        coachCoverPicture: {
            type: String, // Vous pouvez également utiliser un schéma de données séparé pour les formateurs
            required: false,
        }
    },
    lieu: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    capaciteMax: {
        type: Number,
        required: false,
        default: 1000000000
    },
    candidats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidat', // Référence à un modèle d'utilisateur si vous avez un modèle d'utilisateur
    }],
    inscriptionOuverte: {
        type: Boolean,
        default: false,
    },
    dateCreation: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps:true
});

// Création du modèle de formation
const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;
