const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
      },
    idSender: { type: String, required: false },
    idRecipient: { type: String, required: false },
    idAdministrateur: { type: String, required: false },
    sender: {
        type: String,
        required: false,
    },
    recipient: {
        type: String,
        required: false,
    },
    subject: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
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
