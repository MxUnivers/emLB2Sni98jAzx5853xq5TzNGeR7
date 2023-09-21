const mongoose = require('mongoose');
const { statusPACKS } = require('../utils/FormatApi');


const PackCandidatSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    pack: { type: String, require: true, unique: true },
    solde: { type: Number, require: true, unique: true },
    sms_count: { type: Number, require: true, unique: true }
}, { timestamps: true });



const PackEntrepriseSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    pack: { type: String, require: true, unique: true },
    solde: { type: Number, require: true, unique: true },
    sms_count: { type: Number, require: true, unique: true }
}, { timestamps: true });



const PackCandidatModel = mongoose.model('pack_candidat', PackCandidatSchema);
const PackEntrepriseModel = mongoose.model('pack_entreprise', PackEntrepriseSchema);


// pack Candidat
const packTable = [
    {
        pack: statusPACKS[0],
        solde: 1000,
        sms_count: 20,
    },
    {
        pack: statusPACKS[1],
        solde: 2000,
        sms_count: 60,
    },
    {
        pack: statusPACKS[2],
        solde: 5000,
        sms_count: 100,
    }
];

const createPack = async (item) => {
    const newPack = new PackCandidatModel(item);
    await newPack.save()
        .then((savedAdmin) => {
            console.log('Pack Créer candidat');
        })
        .catch((error) => {
            console.log("Pack non valide");
        });
}



// create pack candidat
for (var item of packTable) {
    createPack(item);
}





// packentrperise entreprise


const createPackEntreprise = async (item) => {
    const newPack = new PackEntrepriseModel(item);
    await newPack.save()
        .then((savedAdmin) => {
            console.log('Pack Créer entreperise');
        })
        .catch((error) => {
            console.log("Pack e non valide");
        });
}

// create pack candidat
for (var item of packTable) {
    createPackEntreprise(item);
}






module.exports ={ PackCandidatModel,PackEntrepriseModel} ;
