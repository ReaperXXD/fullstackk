const { addToLikedMovies } = require("../controllers/UserController");
const router = require("express").Router();

//routes
router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);

module.exports = router;
