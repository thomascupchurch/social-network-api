const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// create a user and get all users
router.route("/").get(getAllUser).post(createUser);

// get a single user by id or update a user by id or delete user by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// add or remove a friend associated with user
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
