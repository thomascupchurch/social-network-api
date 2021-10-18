const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// GET to get all thoughts
router.route("/").get(getAllThought);

// GET to get a single thought by its _id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.route("/").post(createThought);

// POST to create a reaction stored in a single thought's reactions array field
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route("/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
