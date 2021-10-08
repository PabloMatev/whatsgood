const router = require("express").Router();
const { populate, collection } = require("../models/user.model");
let User = require("../models/user.model");
const bcrypt = require("bcrypt");

// router.route("/users").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("error: " + err));
// });

// // // add user
router.route("/users").post(async (req, res) => {
  // const saltPassword = await bcrypt.genSalt(2);
  // const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new User({
    username,
    password,
    email,
  });
  var _id = newUser._id;

  // collection("users")
  //   .insertOne(newUser)

  newUser
    .save()
    .then(() => {
      res.json(newUser);
    })
    .catch((err) => res.status(400).json("error: " + err));
});
// login check
router.route("/users").get((req, res) => {
  User.find({ email: req.body.email })
    .then((user) => {
      if (req.body.password === user[0].password) {
        res.json("Valid user");
      }
    })
    .catch((err) => res.status(400).json("error" + err));
  // if (user) {
  //   bcrypt.compare(
  //     req.params.password,
  //     user.password,
  //     function (err, result) {
  //       if (err) {
  //         res.json(err);
  //       }
  //       if (result) {
  //         res.json("login success", result);
  //       } else {
  //         res.json("password does not match");
  //       }
  //     }
  //   );
  // }
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
