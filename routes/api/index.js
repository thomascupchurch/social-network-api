const router = require("express").Router();
const thoughtRoutes = require("./thought-routes");
const userRoutes = require("./user-routes");
// const reactionRoutes = require("./thought-routes");

router.use("/thoughts", thoughtRoutes);

router.use("/users", userRoutes);

// router.use("thoughts/reactions", reactionRoutes);

module.exports = router;
