const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    idSender: { type: String, required: false },
    idRecipient: { type: String, required: false },
    idAdministrateur: { type: String, required: false },
    sender: {
        type: String,
        required: true,
    },
    recipient: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    read: {
        type: Boolean,
        default: false,
    },
}, {timestamps:true});


const MessageModel = mongoose.model('Message', messageSchema);

module.exports = MessageModel;
