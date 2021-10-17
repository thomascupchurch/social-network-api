const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes/api"));
// app.use("/", routes);
// app.use(app.router);
// routes.initialize(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network-api", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed
mongoose.set("debug", true);
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
