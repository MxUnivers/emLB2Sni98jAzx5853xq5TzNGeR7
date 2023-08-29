const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    idPerson : {tyep:String,require:false},
    title: { type: String, required: false,},
    entreprise: { type: String, required: false,},
    dateNow:{type:String,default:Date.now},
    coverPicture:{type:String,default:"https://img.freepik.com/vecteurs-libre/concept-strategie-entreprise-design-plat-dessine-main_23-2149140767.jpg?w=900&t=st=1693337976~exp=1693338576~hmac=3637db2068a255821588209acb3828fd78962a77abc8adcc40841b218b5fda24"},
    description: { type: String, required: false,}
}, 
{ timestamps: true }
);

const ExprerienceModel = mongoose.model('experience_candidat', experienceSchema);

module.exports = ExprerienceModel;
