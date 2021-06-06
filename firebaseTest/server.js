const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
// view engine setup
//app.set("views", path.join(__dirname, "static", "views"));
//app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
app.use(compression());
app.use("/public", express.static(path.join(__dirname, "static", "public")));

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://voizy-chat-default-rtdb.europe-west1.firebasedatabase.app",
});

let db = admin.firestore();

app.post("/signup", async (req, res) => {
  await db.collection("users").add({
    username: req.body.user.username,
    email: req.body.user.email,
    password:req.body.user.password
  });
  res.send("done");
});

app.get("/users", async (req, res) => {
  let userArray = [];
  class User {
    constructor(id, username, email) {
      this.id = id;
      this.username = username;
      this.email = email;
    }
  };
  await db.collection("users")
    .get()
    .then((query) => {
      query.forEach((doc) => {
        userArray.push(new User(doc.id,doc.data().username,doc.data().email));
      });
    });
  res.json(userArray);
});

app.listen(port, (req, res) => {
  console.info(`Running on ${port}`);
});