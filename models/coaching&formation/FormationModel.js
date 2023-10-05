
const mongoose = require('mongoose');

// Schéma de données pour une leçon
const leconSchema = new mongoose.Schema(
    {
        leconTitle: {
            type: String,
            required: true,
            trim: true,
        },
        coverPicture:{
            type:String,default:false
        },
        video:{
            type:String,
            required:false
        },
        leconContent: {
            type: String,
            required: true,
        },
        access: {
            type: Boolean, default: true, required: false
        }
    }
);

// Schéma de données pour un module
const moduleSchema = new mongoose.Schema(
    {
        moduleLabel: {
            type: String,
            required: true,
            trim: true,
        },
        lecons: [leconSchema], // Tableau de leçons
        access: { type: Boolean, required: false, default: true }
    }
);

// Schéma de données pour une formation
const formationSchema = new mongoose.Schema(
    {
        idEntreprise: { type: String, required: false },
        urlVideo: { type: String, required: false },
        formationTitle: {
            type: String,
            required: false,
            trim: true,
        },
        logo: { type: String, required: false },
        areaFormation: [{ type: String, required: false }],
        description: {
            type: String,
            required: false,
        },
        modules: [moduleSchema], // Tableau de modules
        duree: {
            type: Number, // Durée en heures, en heure
            required: false,
        },
        dateBegin: {
            type: Date,
            required: false,
            default: Date.now
        },
        dateEnd: {
            type: Date,
            required: false,
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
            },
            // etablissemenent
            coachSchool: {
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
        description :{
            type:String,required:false
        },
        capaciteMax: {
            type: Number,
            required: false,
            default: 1000000000000000000
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
    },
    {
        timestamps: true
    }
);



// Création du modèle de formation
const FormationModel = mongoose.model('Formation', formationSchema);

module.exports = { FormationModel };
