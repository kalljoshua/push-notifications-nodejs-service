const express = require("express");
const app = express();



app.use(express.json());

// initialize routes
app.use("/api", require("./routes/app.routes"));

// listen for requests
app.listen(process.env.port || 5000, function () {
  console.log("Ready to Go!");
});