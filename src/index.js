const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
require("./database");
const cors = require("cors");

//SETTINGS
app.set("port", process.env.PORT || 5000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/tasks", require("./routes/task"));

//STATIC FILES
// app.use(express.static(path.join(__dirname, "public")));
//

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}`);
});
