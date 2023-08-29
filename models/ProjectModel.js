const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    idPerson : {tyep:String,require:false},
    title: { type: String, required: false,},
    entreprise: { type: String, required: false,},
    dateNow:{type:String,default:Date.now},
    description:{type:String, require:false},
    coverPicture: { type: String, required: false,default:"https://img.freepik.com/vecteurs-libre/equipe-commerciale-discutant-idees-demarrage_74855-4380.jpg?w=996&t=st=1693337837~exp=1693338437~hmac=2de140a8fca133e72601bcf5669c6ddc9f366131b8cfda4a4ada23333912b7af"}
}, 
{ timestamps: true }
);

const ProjectModel = mongoose.model('project', ProjectSchema);

module.exports = ProjectModel;
