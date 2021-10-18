const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
<<<<<<< HEAD
  removeFriend,
=======
  removeFriend
>>>>>>> 8da717ffed5398d1bca5e81a5285e0137e19f34c
} = require("../../controllers/user-controller");

// create a user and get all users
router.route("/").get(getAllUser).post(createUser);

// get a single user by id or update a user by id or delete user by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

<<<<<<< HEAD
// add or remove a friend associated with user
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
=======
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
>>>>>>> 8da717ffed5398d1bca5e81a5285e0137e19f34c

module.exports = router;
