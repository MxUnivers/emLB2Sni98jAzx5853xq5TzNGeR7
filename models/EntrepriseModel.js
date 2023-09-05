const mongoose = require("mongoose");
const { secteursActivites } = require("../utils/FormatApi");

const EntrepriseSchema = new mongoose.Schema({
  username:{
    type:String,
    require:false,
    unique:true
  },
  full_name: {
    type: String,
    required: false
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  title_post: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
  },
  email_entreprise: {
    type: String,
    required: false,
    unique: true
  },
  
  employers_count:{
    type:String , require:false
  },
  dateNaissance:{
    type:String , require:false
  },
  dateNaissance_entreprise:{
    type:String , require:false
  },
  
  telephone: {
    type: String,
    required: true
  },
  telephone_entreprise: {
    type: String,
    required: false
  },
  adresse: {
    type: String,
    required: true
  },
  description_entreprise: {
    type: String
  },
  logo: {
    type: String
  },
  pays:{
    type:String,
  },
  addresse:{
    type:String
  },
  password: {
    type: String,
    required: false
  },
  token: {
    type: String, required: false
  },
  typeStatut:{type:String,default:"STARTER",enum: ["PREMIUM","NORMAL","STARTER"]},
  comptePaiement: {
    solde: {
      type: Number,
      default: 0
    },
    dateDernierPaiement: {
      type: Date,
      default: null
    },
    moyenPaiement: {
      type: String
    }
  },
  maps : {
    type:String  , default:false
  },
  maps_entreprise : {
    type:String  , default:false
  },
  offres: [
    {type:Object}
  ],
  secteur_activites: [{type:Object}],

  site_web:{
    type:String,default:"#"
  },
  facebook_url:{
    type:String,default:"#"
  },
  twitter_url:{
    type:String,default:"#"
  },
  linkedin_url:{
    type:String,default:"#"
  },
  instagram_url:{
    type:String,default:"#"
  },
  is_active: {
    type: Boolean,
    default: false
  },
  access: {
    type: Boolean,
    default: true
  },
});

const EntrepriseModel = mongoose.model("entreprise", EntrepriseSchema);

module.exports = EntrepriseModel;
