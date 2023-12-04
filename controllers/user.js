const User = require("../models/user");
const sequelize = require("sequelize");

exports.signup = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log("Name: " + name, "Email: " + email, "Password: " + password);

  if (!(name && email && password)) {
    return res.status(400).json({ err: "Fill all the details required" });
  }

  User.create({
    name: name,
    email: email,
    password: password,
  })
    .then(() => {
      return res.status(201).json({ message: "Successfully created new user" });
    })
    .catch((err) => {
      res.send(500).json(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // User.findAll({ where: { email: email, password: password } })
  //   .then(() => {
  //     if (email && password) {
  //       res.status(200).json({ message: "Login Successfully" });
  //     } else {
  //       res.json({ message: "Failed login" });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(404).json({ err: "User Not Found" });
  //   });
  //
  //
  User.findAll({ where: { email: email } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json({ err: "User Not Found" });
    });
};
