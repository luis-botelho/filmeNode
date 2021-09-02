const express = require("express");
const router = express.Router();
const movieRoutes = require("../controllers/control");

router.get("/movies", movieRoutes.getMovies);
router.post("/movie/new", movieRoutes.addMovie);
router.put("/movie/edit/:id", movieRoutes.updateMovie);
module.exports = router;
