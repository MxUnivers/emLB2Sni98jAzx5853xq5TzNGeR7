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
  email: {
    type: String,
    required: true,
    unique: true
  },
  telephone: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  description: {
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
  type:{type:String,default:"MANAGER"},
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
  offres: [
    {type:Object}
  ],
  secteur_activites: {
    type: String,
    required: false,
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
