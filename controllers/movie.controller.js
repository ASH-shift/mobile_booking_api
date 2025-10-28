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


const deleteMovie=async(req,res)=>{
try {
    const response=await Movie.deleteOne({
        id:req.params.MovieId

    })
    return res.status(200).json({
        success:true,
        err:{},
        message:"succesfully deleted the movie",
        data:response,
    })
    
} catch (err) {
    console.log(err)
    return res.response(500).json({
           success:false,
        err:err,
        message:"something went wrong",
        data:{},
    })
    
}


}
 module.exports={
        createMovie,
        deleteMovie
    }