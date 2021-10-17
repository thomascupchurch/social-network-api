const { Schema, model, Types } = require("mongoose");
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
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    }
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true
    // }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      ReactionSchema
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: "Reaction"
      // },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
  // return this.reactions.reduce(
  //   (total, reaction) => total + thought.reactions.length + 1,
  //   0
  // )
});

const Thought = model("Thought", ThoughtSchema);
// const Reaction = model("Reaction", ReactionSchema);

module.exports = Thought;
// Array of nested documents created with the reactionSchema
