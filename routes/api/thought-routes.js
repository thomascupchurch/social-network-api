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
// /api/thoughts

// GET to get all thoughts
router.route("/").get(getAllThought);
// GET to get a single thought by its _id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.route("/").post(createThought);
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id
// router.route("/:id").put(updateThought);
// DELETE to remove a thought by its _id
// router.route("/:id").delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/reactions/:reactionId").delete(removeReaction);
// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value



module.exports = router;