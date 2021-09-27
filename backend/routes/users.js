const router = require("express").Router();
const { populate, collection } = require("../models/user.model");
let User = require("../models/user.model");
// var Db = require("mongodb").Db,
//   MongoClient = require("mongodb").MongoClient,
//   Server = require("mongodb").Server,
//   ReplSetServers = require("mongodb").ReplSetServers,
//   ObjectID = require("mongodb").ObjectID,
//   Binary = require("mongodb").Binary,
//   GridStore = require("mongodb").GridStore,
//   Grid = require("mongodb").Grid,
//   Code = require("mongodb").Code,
//   BSON = require("mongodb").pure().BSON,
//   assert = require("assert");

// var db = new Db("myFirstDatabase");

router.route("/users").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("error: " + err));
});
// // add user
router.route("/users").post((req, res) => {
  const name = req.body.name;
  // const _id = req.body._id;
  const position = req.body.position;
  const post = req.body.post;
  const salary = req.body.salary;
  const startingday = req.body.startingday;
  const newUser = new User({
    // _id,
    name,
    position,
    post,
    salary,
    startingday,
  });
  var _id = newUser._id;

  // collection("users")
  //   .insertOne(newUser)

  newUser
    .save()
    .then(() => {
      res.json(_id);
    })
    .catch((err) => res.status(400).json("error: " + err));
});
//delete user
router.route("/users/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return req.status(404).send("user not found with id:" + req.params.id);
      }
      res.send("user deleted successfully");
    })
    .catch((err) => {
      return res.status(404).send("err" + err);
    });
});
// update user
router.route("/users/:id").patch((req, res) => {
  const name = req.body.name;
  // const id = req.body._id;
  const position = req.body.position;
  const post = req.body.post;
  const salary = req.body.salary;
  const startingday = req.body.startingday;

  User.findById(req.params.id)
    .then((user) => {
      user.name = name;
      // user._id = id;
      user.position = position;
      user.post = post;
      user.salary = salary;
      user.startingday = startingday;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
//
