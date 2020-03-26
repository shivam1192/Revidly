const mongoose = require("mongoose");

const mediamongooseSchema = mongoose.Schema({
     author_id:{
         type:String,
         required:true,
     },
     media_url:{
         type:String,

     }
})

const mediamongooseModal = mongoose.model("media",mediamongooseSchema)

module.exports = mediamongooseModal;