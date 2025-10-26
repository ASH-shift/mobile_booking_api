const mongoose=require("mongoose");



const movieschema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    casts:{
        type:[String],
        required:true
    },
    trailerurl:{
        type: String,
        requird:true
    },
    language:{
        type:[String],
        requird:true,
        default:"English"
    },
   releasedate:{
        type:String,
        requird:true,
        
    },
    director:{
        type:String,
        requird:true,
       
    },
    releasestats:{
        type:String,
        requird:true,
        default:"RELEASED"
    },


},{timestamps:true})

const Movie=mongoose.model("Movie",movieschema)

module.exports=Movie;