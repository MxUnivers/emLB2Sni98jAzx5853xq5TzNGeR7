const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    deadline: {
        type: Date,
        required: false,
    },
    eligibilityCriteria: [
        {
            type: Object,
            required: false,
        }
    ],
    amount: {
        type: Number,
        required: false,
        default: 0
    },
    applicationlink: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    telephone: {
        type: String,
        required: false,
    },
    logo: {
        type: String,
        required: false,
    },
    candidats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidat',
    }],
    access:{
        type:Boolean, require:false , default:true
    }
}, {
    timestamps: true,
    timeseries: true
});

const ScholarshipModel = mongoose.model('scholarship', scholarshipSchema);

module.exports = ScholarshipModel;
