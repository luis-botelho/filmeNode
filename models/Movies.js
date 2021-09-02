const mongoose = require("mongoose");

const moviesModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    synopsis: { type: String, required: true },
    genre: { type: String, required: true },
    duration: { type: Number, required: true },
    cover: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", moviesModel);
