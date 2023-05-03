const mongoose = require("mongoose");

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
  password: {
    type: String,
    required: false
  },
  token: {
    type: String, required: false
  },
  type:{type:String,default:"employeur"},
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
  annonces: [
    {type:Object}
  ],
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
  blocked: {
    type: Boolean,
    default: false
  },
});

const EntrepriseModel = mongoose.model("Entreprise", EntrepriseSchema);

module.exports = EntrepriseModel;
