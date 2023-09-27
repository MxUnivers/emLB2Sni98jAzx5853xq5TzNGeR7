const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    idcustomerId : {type:String,require:false},
    idPostId : {type:String,require:false},
    customerPhoto : {type:String,require:false},
    customerName : {type:String,require:false},
    title: { type: String, required: false,},
    dateNow:{type:String,default:Date.now()},
    areaPost:{type:String, require:false},
    content:{type:String, require:false},
    access:{type:Boolean, require:true},
    visible:{type:Boolean, require:true},
    position:{type:Number, require:false,default:1},
    coverPicture: { type: String, required: false}
}, 
{ timestamps: true }
);

const CommentModel = mongoose.model('comment_blog', CommentSchema);

module.exports = CommentModel;
