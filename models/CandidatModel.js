const mongoose = require('mongoose')

const CandidatSchema = new mongoose.Schema({
    username: {
        type: String, required: false
    },
    firstname: {
        type: String, required: false
    },
    lastname: {
        type: String, required: false
    },
    description: {
        type: String, required: false
    },
    coverPicture:{
        type:String, default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH6TfTtq91hzmeIvm_4JOdb5y1UWjTlYZdA&usqp=CAU"
    },
    dateNaissance:{
        type:String,
    },
    email: {
        type: String, required: false, unique: true
    },
    password: {
        type: String, required: false
    },
    telephone: {
        type: String, required: false
    },
    adresse: {
        type: String, required: false
    },
    ville: {
        type: String, required: false
    },
    pays: {
        type: String, required: false
    },
    level_school: {
        type: String, required: false
    },
    years_experience: {
        type: Number, required: false
    },
    competences: {
        type: [String], required: false
    },
    langues: {
        type: [String], required: false
    },
    cv: {
        type: String
    },
    lettre_motivation: {
        type: String
    },
    token: {
        type: String, required: false
    },
    blocked: {
        type: Boolean,
        default: false
    },
    is_active:{
        type:Boolean,
        default:false
    },
    date_mise_a_jour: {
        type: Date, default: Date.now
    },
    facebook: {
        type: String
    },
    youtube: {
        type: String
    },
    instagram: {
        type: String
    },
    


}, {
    timestamps: true
})

const CandidatModel = mongoose.model('Candidat', CandidatSchema)

module.exports = CandidatModel;
