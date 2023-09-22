const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    idPerson: { type: String, require: false },
    title: { type: String, required: false, },
    entreprise: { type: String, required: false, },
    coverPicture: { type: String, default: "https://img.freepik.com/vecteurs-libre/chapeau-graduation-diplome-icone-3d-sceau-chapeau-pompon-rouleau-papier-badge-illustration-vectorielle-3d-fond-blanc-education-remise-diplomes-concept-reussite_74855-26002.jpg?w=740&t=st=1693338027~exp=1693338627~hmac=e6bd9370bd7dcccb1c204c70cd8fb9d103d8f9a4a5fe48192af0279372ae7bd9" },
    description: { type: String, required: false, },
    access: { type: Boolean, required: false, default: true }
},
    { timestamps: true }
);

const EducationModel = mongoose.model('education_candidat', EducationSchema);

module.exports = EducationModel;
