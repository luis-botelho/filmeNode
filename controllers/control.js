const movieModel = require("../models/Movies");

const getMovies = async (req, res) => {
  await movieModel.find({}, (err, movies) => {
    if (err) {
      return res.status(400).send(`Movie not valid ${err}`);
    }
    if (!movies) {
      return res.status(404).send(`Movie not found`);
    }
    res.status(200).send(movies);
  });
};
const addMovie = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send(`Movie not valid `);
  }
  const movie = new movieModel(body);
  movie
    .save()
    .then(() => res.status(201).send(`Movie added successfully`))
    .catch(() => res.status(400).send("Movie not created successfully"));
};
const updateMovie = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send(`Movie not valid`);
  } else {
    await movieModel
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).send(`Movie updated successfully`))
      .catch(() => res.status(400).send("Movie not updated successfully"));
  }
};
const deleteMovie = async (req, res) => {
  await movieModel
    .findOneDelete({ _id: req.params.id }, req.params.id)
    .then(() => 
      res.status(200).send(`Movie deleted successfully`))
    .catch((err) => {
      res.status(400).send("Movie not deleted successfully");
      console.log(err);
    });
 };
module.exports = { getMovies, addMovie, updateMovie, deleteMovie};
