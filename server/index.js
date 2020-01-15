const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("server running fine !!");
});

app.listen(4000, () => {
  console.log("server running at port no. 4000");
});
