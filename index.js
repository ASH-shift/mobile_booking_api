const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const bodyParser=require('body-parser');


const MovieRoutes=require('./routes/movie.route')

env.config(); // 


const app = express();
app.use(express.json())
const PORT = process.env.PORT 
const DB_URL = process.env.DB_URL;

 MovieRoutes(app)


app.get('/home', (req, res) => {
  console.log("hitting home");
  return res.json({
    success: true,
    message: "fetched home"
  });
});

mongoose.connect(DB_URL)
  .then(() => {
    console.log(" Mongoose connected");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);

      //  Movie.create({
      //   name:"demon slayer",
      //   casts:["tanjiro","giyu","akaza"],
      //   description:"a anime action movie",
      //   language:["hindi","japanese"],
      //   releasestats:"RELESED",

      //  })


    });
  })
  .catch((err) => {
    console.error(" Failed to connect to MongoDB", err);
  });
