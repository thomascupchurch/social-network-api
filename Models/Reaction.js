const { Schema, model, Types } = require("mongoose");
const User = require("./User");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const Reaction = model("Reaction", ReactionSchema);
module.exports = Reaction;