const mongoose = require('mongoose');

// Définir le schéma pour les administrateurs
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    telephone:{
        type: String,
        required: true,
        unique:true
    },
    full_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['super_admin', 'admin',"operateur"],
        required: true
    },
    last_login: {
        type: Date,
        default: null
    },
    is_active: {
        type: Boolean,
        default: false
    },
    blocked:{
        type: Boolean,
        default: false
    },
    deleted:{
        type: Boolean,
        default: false
    }
});

// Créer un modèle pour les administrateurs basé sur le schéma défini
const AdminModel = mongoose.model('Administrator', AdminSchema);



// Fonction pour créer un nouvel administrateur par default
async function createAdmin(newAdmin) {
    try {
        const admin = new Admin(newAdmin);
        await admin.save();
        console.log('Nouvel administrateur créé avec succès !');
    } catch (error) {
        console.error('Erreur lors de la création d\'un nouvel administrateur :', error);
    }
}
// Exemple d'utilisation de la fonction createAdmin pour créer un nouvel administrateur
const newAdmin = {
    "username": "admin3",
    "password": "7JhHyE4P669YUb47vnt46NWvKuK9rgk5",
    "email": "admin3@example.com",
    "full_name": "Admin Three",
    "role": "admin",
    "last_login": null,
    "is_active": true
};



// createAdmin(newAdmin);

module.exports = AdminModel;

