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
    required: false
  },
  telephone_entreprise: {//ok
    type: String,
    required: false
  },
  adresse: {
    type: String,
    required: false
  },
  description_entreprise: {//ok
    type: String
  },
  logo: { //ok
    type: String
  },
  pays_entreprise:{//ok
    type:String,
  },
  addresse_entreprise:{
    type:String
  },
  salaire_capital: {//of
    type: String,
    required: false
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
    type:String  , default:false,default:"#"
  },
  offres: [
    {type:Object}
  ],
  secteur_activites: [{type:Object}],
  langues: [{type:Object}],
  site_web:{
    type:String,default:"#",require:false
  },
  facebook_url:{
    type:String,default:"#",require:false
  },
  twitter_url:{
    type:String,default:"#",require:false
  },
  linkedin_url:{
    type:String,default:"#",require:false
  },
  instagram_url:{
    type:String,default:"#",require:false
  },
  password: {
    type: String,
    required: false
  },
  token: {
    type: String, required: false
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
