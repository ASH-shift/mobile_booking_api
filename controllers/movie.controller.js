const Movie=require('../models/movie.models')

const createMovie= async (req,res)=>{
try{
    const movie=await Movie.create(req.body);
    return res.status(201).json({
        success:true,
        data:movie,
        error:{},
        message:"successfully created a new movie"
    })



    }catch(err){
        console.log(err);
        res.status(500).json({
        success:true,
        data:{},
        error:err,
        message:"something went wrong"

        })




    }
   

}
 module.exports={
        createMovie
    }