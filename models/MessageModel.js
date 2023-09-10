const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
      },
    idSender: { type: String, required: false },
    idRecipient: { type: String, required: false },
    idAdministrateur: { type: String, required: false },
    coverPicture:{type:String,required:false,
        default:"https://img.freepik.com/vecteurs-libre/caractere-couple-tenant-nouvelle-illustration-message_53876-26822.jpg?w=740&t=st=1694366817~exp=1694367417~hmac=b6b118a22c685adad59d1f18d81747fe2e21062cc21c48c6a0520f4b3250d39e"
    },
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
