const mongoose = require('mongoose');
const { statusPACKS } = require('../utils/FormatApi');


const PackCandidatSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    title: { type: String, require: true, unique: true },
    solde: { type: Number, require: true, unique: true },
    sms_count: { type: Number, require: true, unique: true }
}, { timestamps: true });


const PackCandidatModel = mongoose.model('pack_candidat', PackCandidatSchema);


const packTable = [
    {
        title: statusPACKS[0],
        solde: 1000,
        sms_count: 20,
    },
    {
        type: statusPACKS[1],
        solde: 2000,
        sms_count: 60,
    },
    {
        title: statusPACKS[2],
        solde: 5000,
        sms_count: 100,
    }
]


const createPack = async (item) => {
    const newPack = new PackCandidatModel(item);
    await newPack.save()
        .then((savedAdmin) => {
            console.log('Pack Créer.');
        })
        .catch((error) => {
            console.log("Pack non valide");
        });
}

// create pack candidat
for (var item of packTable) {
    createPack(item);
  }

module.exports = PackCandidatModel;
