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
    coverPicture: {
        type: String, default: "https://img.freepik.com/vecteurs-premium/gens-economiser-argent_24908-51568.jpg?size=626&ext=jpg&ga=GA1.2.846079211.1692004311&semt=ais"
    },
    dateNaissance: {
        type: String,
    },
    email: {
        type: String, required: false, unique: true
    },
    title_post:{
        type:String ,require:false
    },
    
    salaire: {
        type: String, required: false
    },

    telephone: {
        type: String, required: false, unique:true
    },
    adresse: {
        type: String, required: false
    },
    pays: {
        type: String, required: false
    },
    level_school: {
        type: String, required: false
    },
    site_web: {
        type: String, required: false
    },
    years_experience: {
        type: String, required: false,require:"0-0"
    },
    competences: [{type:Object}],
    langues: {
        type: [{type:Object}], required: false
    },
    cv: {
        type: String
    },
    
    is_active: {
        type: Boolean,
        default: false
    },
    facebook_url: {
        type: String
    },
    linkedin_url: {
        type: String
    },
    twitter_url: {
        type: String
    },
    instagram_url: {
        type: String
    },
    offres: [{type:String}],
    bookmarks:[{type:Object}],
    likes:{
        type:Number ,
        required:false,
        default:5,
    },
    password: {
        type: String, required: false
    },
    is_active:{
        type:Boolean , default:false
    },
    access:{
        type:Boolean , default:true
    },
    token: {
        type: String, required: false
    },
}, {
    timestamps: true
})

const CandidatModel = mongoose.model('candidat', CandidatSchema)

module.exports = CandidatModel;
