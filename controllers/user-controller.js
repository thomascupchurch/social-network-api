const { User, Thought } = require("../models");

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        // if no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with that id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createUser({ params, body }, res) {
    User.create(body)
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "cannot create user." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
    },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate(body)
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "cannot find a user with this id." });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => res.json(err));
  },

  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then((dbUserData) => {
      if(!dbUserData) {
        res.status(404).json({ message: "cannot find a user with this id."});
        return;
      }
      res.json(dbUserData);
    })
    .catch((err))
  }
  }
  // update user by id

module.exports = userController;

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

// /api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value
