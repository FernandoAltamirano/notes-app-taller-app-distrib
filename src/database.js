const mongoose = require("mongoose");

const URL = "mongodb://localhost/notes-app";

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = mongoose;
