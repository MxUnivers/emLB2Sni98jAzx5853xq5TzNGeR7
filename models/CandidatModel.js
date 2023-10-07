const mongoose = require('mongoose');
const { statusPACKS } = require('../utils/FormatApi');

const CandidatSchema = new mongoose.Schema({
    username: {
        type: String, required: false,unique:true
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
        type: String, required: false, default:"#"
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
        type: String, default:"#"
    },
    linkedin_url: {
        type: String, default:"#"
    },
    twitter_url: {
        type: String, default:"#"
    },
    instagram_url: {
        type: String, default:"#"
    },
    offres: [{type:String}],
    bourses: [{type:String}],
    bookmarks:[{type:String}],
    likes:{
        type:Number ,
        required:false,
        default:5,
    },
    // account candidat
    account:{
        solde:{type:Number,default:0},
        pack:{type:String,default:statusPACKS[0]},
        dateNow:{type:String, default:Date.now},
        dateEnd:{type:String},
        count_sms:{type:Number,default:0}
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
