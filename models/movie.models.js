const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    casts: {
      type: [String],
      required: true,
    },
    trailerUrl: {
      type: String,
    },
    language: {
      type: [String],
      required: true,
      default: ["English"],
    },
    releaseDate: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    releaseStatus: {
      type: String,
      required: true,
      enum: ["RELEASED", "UNRELEASED"], 
      default: "RELEASED",
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
