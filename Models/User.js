const { Schema, model, Types } = require("mongoose");
const Thought = require("./Thought");
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9])+@([a-z0-9])+.(com)|(org)|(gov)|(edu)|(net)/.test(
            v
          );
        },
      },
    },
    thoughts: [Thought._id],
    friends: [User.friend],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
