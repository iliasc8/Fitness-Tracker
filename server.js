const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 65000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route that calls the the home page
app.use(express.static("public"));

// connects to the workout database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

require("./routes/apiRouting")(app);
require("./routes/htmlRouting")(app);


// app.use(require("./routes/apiRouting"));
// app.use(require("./routes/htmlRouting"));

app.listen(PORT, () => {
  console.log("App running on port 65000!");
});