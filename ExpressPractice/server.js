var express = require("express");
var app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded());
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage

app.get("/:userId", function (req, res) {
  res.send(req.params);
});




app.listen(port, (req, res) => {
  console.info(`Running on ${port}`);
});